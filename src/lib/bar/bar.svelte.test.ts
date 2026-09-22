/**
 * Named `.svelte.test.ts` deliberately: `vite.config.ts` routes that pattern to the jsdom
 * project. A store test named `bar-store.test.ts` would land in the node project instead,
 * where `browser` is false and `fetch` is absent — it would pass while asserting nothing.
 */
import { describe, it, expect, vi } from 'vitest';
import { BarChat, isTurn, type Turn } from './bar.svelte';

function memoryStorage() {
	const map = new Map<string, string>();
	return {
		getItem: (k: string) => map.get(k) ?? null,
		setItem: (k: string, v: string): void => void map.set(k, v),
		removeItem: (k: string): void => void map.delete(k),
		map
	};
}

/** Builds an SSE body from frames, optionally chunked one character at a time. */
function sse(frames: string[], omitTrailingBlank = false): ReadableStream<Uint8Array> {
	let body = frames.join('');
	if (omitTrailingBlank) body = body.replace(/\n\n$/, '');
	const encoder = new TextEncoder();
	return new ReadableStream({
		start(controller) {
			controller.enqueue(encoder.encode(body));
			controller.close();
		}
	});
}

const META = (id: string) => `event: meta\ndata: {"conversation_id":"${id}"}\n\n`;
const TEXT = (s: string) => `event: text\ndata: ${JSON.stringify({ delta: s })}\n\n`;
const TOOL = (s: string) => `event: tool\ndata: ${JSON.stringify({ label: s })}\n\n`;
const CONSULT = (who: string, a: string) =>
	`event: consult\ndata: ${JSON.stringify({ bartender: who, answer: a })}\n\n`;
const ERROR = (m: string) => `event: error\ndata: ${JSON.stringify({ message: m })}\n\n`;
const DONE = 'event: done\ndata: {}\n\n';

function respond(frames: string[], init: ResponseInit = {}, omitTrailingBlank = false) {
	return vi.fn(
		async () =>
			new Response(sse(frames, omitTrailingBlank), {
				status: 200,
				headers: { 'Content-Type': 'text/event-stream' },
				...init
			})
	);
}

let counter = 0;
function make(fetchImpl: typeof globalThis.fetch, storage = memoryStorage()) {
	counter = 0;
	return new BarChat({
		fetch: fetchImpl,
		storage,
		uuid: () => `id-${++counter}`
	});
}

function answerOf(chat: BarChat): Turn {
	const turns = chat.items.filter(isTurn).filter((t) => t.role === 'bartender');
	return turns[turns.length - 1];
}

function textOf(turn: Turn): string {
	return turn.parts
		.filter((p) => p.kind === 'text')
		.map((p) => (p as { text: string }).text)
		.join('');
}

describe('BarChat.send', () => {
	it('shows the question and an empty answer bubble in the same frame', async () => {
		const chat = make(respond([META('a'), TEXT('Bright'), DONE]) as unknown as typeof fetch);
		await chat.send('something gin-forward');

		expect(chat.items.filter(isTurn).map((t) => t.role)).toEqual(['guest', 'bartender']);
		expect(textOf(answerOf(chat))).toBe('Bright');
	});

	it('accumulates deltas onto the proxy, not a detached copy', async () => {
		// The doc's sketch mutates a local object, which `$state` would silently discard.
		const chat = make(
			respond([META('a'), TEXT('a'), TEXT('b'), TEXT('c'), DONE]) as unknown as typeof fetch
		);
		await chat.send('q');
		expect(textOf(answerOf(chat))).toBe('abc');
	});

	it('always comes back to a resting state', async () => {
		const chat = make(respond([META('a'), TEXT('hi'), DONE]) as unknown as typeof fetch);
		await chat.send('q');
		expect(chat.activity.kind).toBe('idle');
		expect(chat.busy).toBe(false);
	});

	// The "never stuck thinking" test. `done` is always last, so its absence is abnormal.
	it('marks a turn failed when the stream ends without done, and never stays busy', async () => {
		const chat = make(
			respond([META('a'), TEXT('half a sen')], {}, true) as unknown as typeof fetch
		);
		await chat.send('q');

		expect(chat.activity.kind).toBe('idle');
		expect(answerOf(chat).note).toBe('failed');
		expect(textOf(answerOf(chat))).toBe('half a sen');
	});

	it('renders an error frame as its own sentence and still finishes cleanly', async () => {
		const chat = make(
			respond([
				META('a'),
				ERROR('Eddie could not answer that one, friend.'),
				DONE
			]) as unknown as typeof fetch
		);
		await chat.send('q');

		expect(textOf(answerOf(chat))).toBe('Eddie could not answer that one, friend.');
		expect(answerOf(chat).note).toBe('failed');
		expect(chat.activity.kind).toBe('idle');
	});

	it('counts down from Retry-After on a 429 instead of guessing', async () => {
		const chat = make(
			vi.fn(
				async () =>
					new Response('{"message":"slow down"}', {
						status: 429,
						headers: { 'Retry-After': '17' }
					})
			) as unknown as typeof fetch
		);
		await chat.send('q');

		expect(chat.retryAfter).toBe(17);
		expect(chat.failure).toBe('rate-limited');
		expect(chat.activity.kind).toBe('idle');
	});

	it('refuses to send while an answer is already streaming', async () => {
		const fetchImpl = respond([META('a'), TEXT('x'), DONE]) as unknown as typeof fetch;
		const chat = make(fetchImpl);
		const first = chat.send('one');
		await chat.send('two'); // dropped: busy
		await first;
		expect(chat.items.filter(isTurn).filter((t) => t.role === 'guest')).toHaveLength(1);
	});
});

describe('BarChat — consults', () => {
	it('keeps a consult that arrives before any text at the front of the answer', async () => {
		// Verified against the live API: meta → tool → consult → text × n → done.
		const chat = make(
			respond([
				META('a'),
				TOOL('calling Eddie over'),
				CONSULT('Eddie', "That's out of the Savoy, 1930."),
				TEXT('So: the house pours it differently.'),
				DONE
			]) as unknown as typeof fetch
		);
		await chat.send('q');

		expect(answerOf(chat).parts.map((p) => p.kind)).toEqual(['consult', 'text']);
	});

	it('keeps two consults in the order they landed, inline', async () => {
		const chat = make(
			respond([
				META('a'),
				TEXT('Let me ask. '),
				CONSULT('Eddie', 'first'),
				TEXT(' And again. '),
				CONSULT('Eddie', 'second'),
				TEXT(' Right.'),
				DONE
			]) as unknown as typeof fetch
		);
		await chat.send('q');

		const parts = answerOf(chat).parts;
		expect(parts.map((p) => p.kind)).toEqual(['text', 'consult', 'text', 'consult', 'text']);
		expect(
			parts.filter((p) => p.kind === 'consult').map((p) => (p as { answer: string }).answer)
		).toEqual(['first', 'second']);
	});

	it('enters the consulting state while the phone is off the hook', async () => {
		// Held open mid-stream so the intermediate state can actually be observed, rather than
		// only the resting state it collapses to.
		let release!: () => void;
		const gate = new Promise<void>((resolve) => (release = resolve));
		const encoder = new TextEncoder();

		const chat = make(
			vi.fn(
				async () =>
					new Response(
						new ReadableStream({
							async start(controller) {
								controller.enqueue(encoder.encode(META('a') + TOOL('calling Eddie over')));
								await gate;
								controller.enqueue(encoder.encode(TEXT('Right.') + DONE));
								controller.close();
							}
						}),
						{ status: 200 }
					)
			) as unknown as typeof fetch
		);

		const pending = chat.send('q');
		await vi.waitFor(() => expect(chat.activity.kind).toBe('consulting'));
		expect(chat.activity).toMatchObject({ other: 'eddie', label: 'calling Eddie over' });

		release();
		await pending;
		expect(chat.activity.kind).toBe('idle');
	});
});

describe('BarChat — conversation tabs', () => {
	it('stores the id from meta and replays it on the next question', async () => {
		const fetchImpl = respond([META('conv-1'), TEXT('x'), DONE]) as unknown as typeof fetch;
		const chat = make(fetchImpl);

		await chat.send('one');
		await chat.send('two');

		const second = JSON.parse(
			(fetchImpl as unknown as ReturnType<typeof vi.fn>).mock.calls[1][1].body
		);
		expect(second.conversation_id).toBe('conv-1');
	});

	// Tabs are per bartender and never shared; the server would silently start a new
	// conversation rather than error, so the client has to keep them apart itself.
	it("never sends Eddie's id while asking Sasha", async () => {
		const fetchImpl = respond([META('eddie-conv'), TEXT('x'), DONE]) as unknown as typeof fetch;
		const chat = make(fetchImpl);

		chat.switchTo('eddie');
		await chat.send('one');
		chat.switchTo('sasha');
		await chat.send('two');

		const calls = (fetchImpl as unknown as ReturnType<typeof vi.fn>).mock.calls;
		expect(JSON.parse(calls[0][1].body).bartender).toBe('eddie');
		expect(JSON.parse(calls[1][1].body)).toMatchObject({
			bartender: 'sasha',
			conversation_id: null
		});
	});

	it('marks a fresh tab when the server hands back a different id than the one sent', async () => {
		const fetchImpl = vi
			.fn()
			.mockResolvedValueOnce(new Response(sse([META('conv-1'), TEXT('x'), DONE]), { status: 200 }))
			.mockResolvedValueOnce(new Response(sse([META('conv-2'), TEXT('y'), DONE]), { status: 200 }));
		const chat = make(fetchImpl as unknown as typeof fetch);

		await chat.send('one');
		await chat.send('two');

		expect(chat.items.some((i) => i.role === 'divider' && i.label.includes('fresh tab'))).toBe(
			true
		);
	});

	it('drops an id older than the server tab window rather than sending it', async () => {
		let now = 0;
		const fetchImpl = respond([META('conv-1'), TEXT('x'), DONE]) as unknown as typeof fetch;
		const chat = new BarChat({
			fetch: fetchImpl,
			storage: memoryStorage(),
			uuid: () => `id-${++counter}`,
			now: () => now
		});

		await chat.send('one');
		now = 121 * 60 * 1000;
		await chat.send('two');

		const second = JSON.parse(
			(fetchImpl as unknown as ReturnType<typeof vi.fn>).mock.calls[1][1].body
		);
		expect(second.conversation_id).toBeNull();
	});
});

describe('BarChat — switching and dividers', () => {
	it('keeps the transcript and marks the handover', async () => {
		const chat = make(respond([META('a'), TEXT('x'), DONE]) as unknown as typeof fetch);
		await chat.send('one');
		chat.switchTo('eddie');

		expect(chat.bartender).toBe('eddie');
		expect(chat.items.filter(isTurn)).toHaveLength(2);
		expect(chat.items.some((i) => i.role === 'divider' && i.label.includes('takes over'))).toBe(
			true
		);
	});

	it('refuses to switch mid-answer', async () => {
		const chat = make(respond([META('a'), TEXT('x'), DONE]) as unknown as typeof fetch);
		const pending = chat.send('one');
		chat.switchTo('eddie');
		expect(chat.bartender).toBe('sasha');
		await pending;
	});
});

describe('BarChat — persistence', () => {
	it('restores the transcript and the ids on construction', async () => {
		const storage = memoryStorage();
		const first = make(
			respond([META('conv-1'), TEXT('hello'), DONE]) as unknown as typeof fetch,
			storage
		);
		await first.send('one');

		const fetchImpl = respond([META('conv-1'), TEXT('y'), DONE]) as unknown as typeof fetch;
		const second = new BarChat({ fetch: fetchImpl, storage, uuid: () => 'x' });

		expect(second.items.filter(isTurn)).toHaveLength(2);
		await second.send('two');
		expect(
			JSON.parse((fetchImpl as unknown as ReturnType<typeof vi.fn>).mock.calls[0][1].body)
				.conversation_id
		).toBe('conv-1');
	});

	it('discards a session older than the tab window rather than resurrecting it', async () => {
		let now = 0;
		const storage = memoryStorage();
		const first = new BarChat({
			fetch: respond([META('conv-1'), TEXT('hello'), DONE]) as unknown as typeof fetch,
			storage,
			uuid: () => `id-${++counter}`,
			now: () => now
		});
		await first.send('one');

		now = 121 * 60 * 1000;
		const second = new BarChat({ storage, now: () => now, uuid: () => 'x' });
		expect(second.items).toHaveLength(0);
	});

	it('keeps working when storage refuses to write', async () => {
		const chat = make(respond([META('a'), TEXT('hi'), DONE]) as unknown as typeof fetch, {
			getItem: () => null,
			setItem: (): void => {
				throw new Error('QuotaExceededError');
			},
			removeItem: (): void => {},
			map: new Map()
		});

		await chat.send('q');
		expect(textOf(answerOf(chat))).toBe('hi');
		expect(chat.activity.kind).toBe('idle');
	});

	it('never persists mid-stream — only at turn boundaries', async () => {
		const storage = memoryStorage();
		const writes: number[] = [];
		const spy = {
			...storage,
			setItem: (k: string, v: string): void => {
				if (k === 'tkh-bar-log-v1') writes.push(v.length);
				storage.setItem(k, v);
			}
		};
		const chat = make(
			respond([
				META('a'),
				TEXT('a'),
				TEXT('b'),
				TEXT('c'),
				TEXT('d'),
				DONE
			]) as unknown as typeof fetch,
			spy
		);
		await chat.send('q');

		// One write for the completed turn, regardless of how many deltas arrived.
		expect(writes).toHaveLength(1);
	});
});
