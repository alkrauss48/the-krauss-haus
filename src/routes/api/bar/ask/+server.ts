/**
 * The API key buys model inference and costs real money, so it never reaches the browser.
 * This route is the only thing that knows it: the browser posts here same-origin, and the
 * upstream stream is piped straight back, unbuffered.
 *
 * The proxy also earns its keep three other ways: a per-visitor rate limit in front of a
 * shared upstream allowance, one place to log failures, and the freedom to move the API's
 * address without touching the client.
 */

import { env } from '$env/dynamic/private';
import { json, type RequestHandler } from '@sveltejs/kit';

const MAX_QUESTION = 2000;

/**
 * Upstream throttles on the `X-Bar-Key` header, and we send the same key for every visitor —
 * so without this, one guest could eat the whole site's per-minute allowance. In-memory is
 * fine for a single node process, which is what this deploys as.
 */
const buckets = new Map<string, number[]>();

function allowed(ip: string, perMinute: number): boolean {
	const now = Date.now();
	const recent = (buckets.get(ip) ?? []).filter((t) => now - t < 60_000);
	recent.push(now);
	buckets.set(ip, recent);
	if (buckets.size > 5_000) buckets.clear(); // crude, but this is a home bar
	return recent.length <= perMinute;
}

/**
 * Bounds the wait for response headers, then hands off to an idle timer. A wall-clock cap on
 * the whole exchange would cut a stream that is still producing text — punishing exactly the
 * long consult answers this feature exists to show off.
 *
 * The idle window must stay comfortably longer than the API's own per-provider-call timeout
 * (`BAR_ANSWER_TIMEOUT`, 60s). A provider that hangs goes quiet for that full 60s before the
 * API gives up and writes an `error` frame; if we cut at the same moment we win the race and
 * the guest gets our generic failure instead of the sentence the API wrote for them.
 */
function idleGuard(stream: ReadableStream<Uint8Array>, idleMs: number): ReadableStream<Uint8Array> {
	let timer: ReturnType<typeof setTimeout> | undefined;
	let arm: () => void = () => {};

	const transform = new TransformStream<Uint8Array, Uint8Array>({
		start(controller) {
			arm = () => {
				clearTimeout(timer);
				timer = setTimeout(() => {
					console.error('[bar] upstream went quiet, closing');
					controller.error(new Error('upstream idle'));
				}, idleMs);
			};
			arm();
		},
		transform(chunk, controller) {
			arm();
			controller.enqueue(chunk);
		},
		flush() {
			clearTimeout(timer);
		}
	});

	return stream.pipeThrough(transform);
}

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	if (!env.BAR_API_URL || !env.BAR_API_KEY) {
		console.error('[bar] BAR_API_URL / BAR_API_KEY are not configured');
		return json({ message: 'closed' }, { status: 503 });
	}

	const perMinute = Number(env.BAR_CLIENT_RATE_PER_MIN ?? 8);
	if (!allowed(getClientAddress(), perMinute)) {
		return json({ message: 'slow down' }, { status: 429, headers: { 'Retry-After': '20' } });
	}

	const body = await request.json().catch(() => null);
	const question = typeof body?.question === 'string' ? body.question.trim() : '';
	const bartender = body?.bartender === 'eddie' ? 'eddie' : 'sasha';
	const conversationId = typeof body?.conversation_id === 'string' ? body.conversation_id : null;

	// Validating here rather than upstream matters: a 422 still consumes the shared throttle
	// bucket over there, so catching it locally protects everyone else's allowance.
	if (question === '' || question.length > MAX_QUESTION) {
		return json({ message: 'bad question' }, { status: 422 });
	}

	// The signal handed to fetch stays attached to the response body, so a plain
	// `AbortSignal.timeout` here would cut a perfectly healthy stream the moment it expired —
	// which is exactly what happens to a long answer with a consult in it. Bound the wait for
	// headers only, then disarm and let `idleGuard` watch the body.
	const connect = new AbortController();
	const connectTimer = setTimeout(
		() => connect.abort(),
		Number(env.BAR_CONNECT_TIMEOUT_MS ?? 30_000)
	);

	const upstream = await fetch(`${env.BAR_API_URL}/api/ask`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'text/event-stream',
			'X-Bar-Key': env.BAR_API_KEY
		},
		body: JSON.stringify({ question, bartender, conversation_id: conversationId }),
		signal: connect.signal
	})
		.catch((error: unknown) => {
			console.error('[bar] upstream unreachable', error);
			return null;
		})
		.finally(() => clearTimeout(connectTimer));

	if (!upstream) return json({ message: 'no answer' }, { status: 502 });

	if (!upstream.ok || !upstream.body) {
		// A 401 here means OUR key is wrong — never something a guest did. Log it loudly, and
		// hand the browser a shape it can render without leaking the upstream sentence.
		console.error('[bar] upstream refused', upstream.status);
		const status = upstream.status === 429 ? 429 : 502;
		const retryAfter = upstream.headers.get('retry-after');
		return json(
			{ message: status === 429 ? 'slow down' : 'no answer' },
			{ status, headers: retryAfter ? { 'Retry-After': retryAfter } : {} }
		);
	}

	// Returned as-is. Awaiting `.text()` anywhere in this path would buffer the whole answer
	// and turn a live stream into a thirty-second blank screen.
	return new Response(idleGuard(upstream.body, Number(env.BAR_IDLE_TIMEOUT_MS ?? 75_000)), {
		headers: {
			'Content-Type': 'text/event-stream',
			'Cache-Control': 'no-cache, no-transform',
			Connection: 'keep-alive',
			// Belt and braces if any ingress ever sits in front of the node server.
			'X-Accel-Buffering': 'no'
		}
	});
};
