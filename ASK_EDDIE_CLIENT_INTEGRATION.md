# The Bar, On The Website

**Integration guide for `the-krauss-haus` against the `ask-eddie` API.**

This document is written to be dropped into the `the-krauss-haus` repository and handed
to whoever (or whatever) builds the chat UI there. It is two things at once:

1. **A contract.** Exactly what the API accepts, exactly what it sends back, and the
   handful of behaviours that look like bugs but are deliberate.
2. **A UX specification.** What the chat should feel like — how a guest starts one, how
   they always know who they are talking to, how they are never left wondering whether
   anything is happening, and what happens on screen when Sasha picks up the phone and
   calls Eddie.

Everything in Part 1 is verified against the API source. Everything in Part 2 is a
proposal — opinionated, but yours to move around.

---

## Table of contents

- [Part 0 — The short version](#part-0--the-short-version)
- [Part 1 — The API contract](#part-1--the-api-contract)
  - [Prerequisites on the API side](#prerequisites-on-the-api-side)
  - [Environment variables](#environment-variables)
  - [Authentication](#authentication)
  - [`GET /api/bartenders`](#get-apibartenders)
  - [`POST /api/ask`](#post-apiask)
  - [The SSE event contract](#the-sse-event-contract)
  - [Conversations (tabs)](#conversations-tabs)
  - [Failure modes](#failure-modes)
  - [Rate limiting — read this one](#rate-limiting--read-this-one)
  - [`POST /api/search`](#post-apisearch-debug-only)
- [Part 2 — Client architecture](#part-2--client-architecture)
  - [Why there must be a server proxy](#why-there-must-be-a-server-proxy)
  - [The proxy route](#the-proxy-route)
  - [Reading SSE over `fetch`](#reading-sse-over-fetch)
  - [The conversation store](#the-conversation-store)
- [Part 3 — The experience](#part-3--the-experience)
  - [The way in](#the-way-in-subtle-on-purpose)
  - [The panel](#the-panel)
  - [Who's pouring](#whos-pouring)
  - [Never wonder: the status line](#never-wonder-the-status-line)
  - [Tool labels, and what to do with them](#tool-labels-and-what-to-do-with-them)
  - [The consult: the set piece](#the-consult-the-set-piece)
  - [Rendering an answer](#rendering-an-answer)
  - [Errors, limits and dead ends](#errors-limits-and-dead-ends)
  - [Persistence, privacy and fresh tabs](#persistence-privacy-and-fresh-tabs)
  - [Accessibility, motion and mobile](#accessibility-motion-and-mobile)
- [Part 4 — File plan, tests, runbook](#part-4--file-plan-tests-runbook)
- [Part 5 — Decisions left to you](#part-5--decisions-left-to-you)

---

## Part 0 — The short version

- The API is a Laravel app running locally at **`http://localhost:9000`**.
- Three endpoints, all behind a shared secret in an **`X-Bar-Key`** header:
  `GET /api/bartenders`, `POST /api/ask`, `POST /api/search` (debug only).
- `POST /api/ask` answers with **Server-Sent Events**. Six event types, listed below.
  There are no other event types, ever.
- There are two bartenders: **`sasha`** (the house bartender, grounded in the Krauss
  Haus's own menus — **this is the default**) and **`eddie`** (a 1930s uptown bartender,
  grounded in a shelf of public-domain manuals).
- They can **call each other over** mid-answer. When they do, you get a `tool` frame
  (`"calling Eddie over"`) and then, once the other one replies, a `consult` frame
  carrying their name and their prose. This is the thing worth building a small
  animation for.
- **The API key must never reach the browser.** It buys model inference and costs real
  money. It lives on the SvelteKit Node server; the browser talks to a same-origin proxy
  route that adds the header.

---

## Part 1 — The API contract

### Prerequisites on the API side

Before anything below works, the `ask-eddie` `.env` needs a key list. **It is currently
unset, which means the door is closed to everybody** — `VerifyBarKey` fails closed on an
empty list, by design, so a deployment that forgot the variable is a door nobody can open
rather than one standing wide.

```dotenv
# ask-eddie/.env
BAR_API_KEYS=some-long-random-string
BAR_API_RATE_LIMIT=60      # see "Rate limiting" below — the default of 12 is too low
                           # for a shared proxy key
PHP_CLI_SERVER_WORKERS=4   # see the warning below — do not skip this locally
```

> **Local concurrency warning.** The dev container runs `php artisan serve`, which is
> **single-threaded by default**. A streamed answer holds that one worker for its entire
> duration — thirty seconds or more with a consult — and every other request to the API
> queues behind it, including your own second browser tab. Set
> `PHP_CLI_SERVER_WORKERS=4` (it is commented out in `.env.example`) and restart, or you
> will spend an afternoon debugging "streaming is broken" that is really "the server is
> busy". Production behind php-fpm or Octane does not have this problem.

`BAR_API_KEYS` is comma-separated and is a **list** so a key can be rotated without
downtime: add the new one, move the site over, remove the old one.

```bash
# generate one
php -r 'echo bin2hex(random_bytes(24)), PHP_EOL;'
```

Bring the API up with `./vendor/bin/sail up -d` (or `composer run dev`) in the `ask-eddie`
checkout, and confirm with:

```bash
curl -s http://localhost:9000/up            # health, no key needed
curl -s http://localhost:9000/api/bartenders -H 'X-Bar-Key: some-long-random-string'
```

### Environment variables

Add to `the-krauss-haus`:

```dotenv
# .env  (server-side only — no PUBLIC_ prefix, ever)
BAR_API_URL=http://localhost:9000
BAR_API_KEY=some-long-random-string

# optional, with the defaults the client should assume
BAR_REQUEST_TIMEOUT_MS=120000   # an answer with two tool calls and a consult is slow
BAR_CLIENT_RATE_PER_MIN=8       # per-visitor cap enforced in the proxy (see below)
```

Read them with `$env/dynamic/private` rather than `$env/static/private`: the production
image is built once and configured at runtime, and dynamic env avoids baking a key into
the bundle at build time.

**Never** prefix these `PUBLIC_`. If `BAR_API_KEY` reaches a browser bundle it is public,
and anyone who reads it can spend the AI budget.

In production the same two variables point at wherever the API is deployed. Nothing else
about the client changes.

### Authentication

Every `/api/*` route requires:

```
X-Bar-Key: <one of the keys in BAR_API_KEYS>
```

A missing key, a wrong key, an empty key and "the server has no keys configured" all
produce the **identical** response, deliberately — a caller learns nothing about which
failure they hit:

```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json

{"message":"Sorry, friend — the door's locked, and that's not the key."}
```

A 401 from the upstream API is a **configuration problem on your side**, never something
a guest did. Do not surface that sentence to a guest; log it and show the generic "the
bar's not answering" state from Part 3.

### `GET /api/bartenders`

The roster. Free, no throttle, asks no model. Call it to build the bartender picker
rather than hard-coding names, so a third bartender hired in `config/bar.php` shows up
without a deploy here.

```http
GET /api/bartenders
X-Bar-Key: …
```

```json
{
  "bartenders": [
    {
      "key": "eddie",
      "name": "Eddie",
      "blurb": "a 1930s uptown bartender, grounded in a shelf of public-domain manuals"
    },
    {
      "key": "sasha",
      "name": "Sasha",
      "blurb": "the house bartender, grounded in the Krauss Haus's own menus"
    }
  ]
}
```

Three fields, and only three — the underlying registry also holds agent classes,
retriever classes, providers and model names, and those are deliberately not published.

**Order is registry order (`eddie` first) and is not a UI ordering.** Sasha is the
default and should be presented first; sort client-side.

Cache this in a `+layout.server.ts` load or a module-level memo with a short TTL. If the
call fails, fall back to a hard-coded pair rather than showing an empty picker — the
roster is a convenience, not a dependency.

### `POST /api/ask`

```http
POST /api/ask
X-Bar-Key: …
Content-Type: application/json
Accept: text/event-stream

{
  "question": "what's bright and gin-forward, but not a Martini?",
  "bartender": "sasha",
  "conversation_id": "0199a3…"      // optional; omit or null to start fresh
}
```

| field | rules |
| --- | --- |
| `question` | required, string, **max 2000 characters**, must not be blank/whitespace |
| `bartender` | required, must be `"sasha"` or `"eddie"` (validated against the live roster) |
| `conversation_id` | optional, nullable string. Anything the server does not recognise is silently treated as "no id" |

A request that fails validation is answered as **ordinary JSON with a 422**, not as a
stream — the stream starts only once there is an answer coming, and nothing is billed:

```http
HTTP/1.1 422 Unprocessable Content
Content-Type: application/json

{"message":"The question field is required.","errors":{"question":["The question field is required."]}}
```

A successful call answers **200** with `Content-Type: text/event-stream` and
`Cache-Control: no-cache`, and streams frames until `done`.

> **Enforce the 2000-character limit in the UI** with a `maxlength` and a counter that
> appears in the last 200 characters. A 422 for a too-long question is a bad guest
> experience for something the textarea could have prevented.

### The SSE event contract

Six event types. **This list is the whole protocol** — the API source states plainly that
a seventh invented anywhere would be a frame the site was never told to expect. Parse
unknown events defensively (ignore them) but do not design for them.

Wire format is standard SSE, one event per frame, `data` always a single-line JSON
object, frames separated by a blank line:

```
event: meta
data: {"conversation_id":"0199a3c0-1f2e-7a4b-9c6d-2b1f8e0a5d33"}

event: text
data: {"delta":"That one's "}

```

| event | payload | when |
| --- | --- | --- |
| `meta` | `{"conversation_id": string}` | **always the first frame.** The id to send back on a follow-up |
| `text` | `{"delta": string}` | one piece of the answer, as the model produces it |
| `tool` | `{"label": string}` | an in-character note that a tool has *started* |
| `consult` | `{"bartender": string, "answer": string}` | the other bartender's reply, attributed |
| `error` | `{"message": string}` | the answer failed; a sentence naming the bartender |
| `done` | `{}` | **always the last frame**, whether the answer succeeded or failed |

Guarantees you can build on:

- **`meta` is first, always** — including when the answer fails half a sentence in. Store
  the conversation id the moment it arrives, not at the end.
- **`done` is last, always, unconditionally.** You have exactly one thing to wait for; a
  closed socket without `done` is an abnormal termination, not a normal ending.
- **Text deltas are already trimmed at the front** and multi-step answers are separated
  by a literal `"\n\n"` delta. Concatenate deltas verbatim; do not trim or collapse
  whitespace as you go.
- **A `tool` frame has no matching "tool finished" frame.** The tool is done when the
  *next* frame of any kind arrives. Your status line should be replaced, not cleared by a
  timer.
- **`error` is the only status code a stream has.** A 200 is already on the wire by the
  time anything can fail, so a provider failure arrives as an `error` frame on a
  successful response, followed by `done`.
- **The `error` message is guest-safe copy** ("Eddie could not answer that one, friend.")
  and never the provider's exception, host, model or key. The real exception goes to the
  API's log. You may render this message as-is.
- **Retrieval payloads never reach the wire.** The API filters tool *results* out of the
  stream on purpose; the consult is the single, deliberate exception, because it is prose
  written for a human. Do not go looking for citations as structured data — Eddie speaks
  his citations inside the text ("that's out of the Savoy, 1930, page 42").

Expected frame sequences:

```
happy path, no tools:
  meta → text × n → done

Eddie looking something up:
  meta → tool("reaching for the books") → text × n → done

Sasha calling Eddie, mid-answer:
  meta
  → tool("checking the house pages")
  → text × n            ("Let me see what Eddie's books say…")
  → tool("calling Eddie over")
  → consult(bartender: "Eddie", answer: "…")
  → text × n            (Sasha picking it back up, attributing him)
  → done

a failure:
  meta → error → done
```

Up to **two consults per answer** (`BAR_CONSULT_LIMIT`, default 2), and a consult can
never nest — the guard is server-side and absolute.

### Conversations (tabs)

- The server issues the id. **A caller cannot name their own conversation.** The id is an
  opaque UUID and is the *only* thing that gets a caller back into their conversation —
  there is no other lock on it.
- Send it back in `conversation_id` on the next question to continue. Memory is about
  12 stored messages (six exchanges), and the tab goes cold after **120 minutes** of
  quiet (`BAR_TAB_IDLE`).
- **Tabs are per bartender and never shared.** An id issued while talking to Eddie cannot
  be replayed against Sasha. Keep two ids client-side, one per bartender key.
- **Reuse never errors.** An id that does not exist, one issued for the other bartender,
  and one that has gone cold all produce exactly the same thing: a brand-new conversation
  with a fresh id in the `meta` frame, and no error frame anywhere. This is deliberate —
  an error would confirm that somebody else's conversation exists.

  **The practical consequence for the UI:** always overwrite your stored id with whatever
  the latest `meta` frame said. If the id changes when you did not expect it to, the
  server has quietly started a new conversation and the bartender no longer remembers the
  earlier exchange. You may (see Part 3) mark that in the transcript with a quiet divider
  — *"fresh tab"* — rather than letting a guest wonder why they were forgotten.

### Failure modes

| what happened | how it arrives | what the guest should see |
| --- | --- | --- |
| Bad/missing key | `401` JSON, before the stream | Generic "the bar's not answering right now" + retry. Log loudly; this is a config bug |
| Question empty, too long, bad bartender | `422` JSON, before the stream | Inline form validation. Prevent it in the textarea instead |
| Over the per-minute cap | `429` JSON with `Retry-After` | "One at a time, friend" copy + a countdown from `Retry-After` |
| Provider/model failed or timed out mid-answer | `error` frame then `done`, on a 200 — possibly **after** some `text` frames | Keep any partial text; put the frame's own sentence under it in the bartender's bubble, with a "try again" affordance |
| Answer hit the output-token cap | a normal `done`, no `error` — the text simply stops | Nothing to do: indistinguishable from a finished answer by design. The cap is a backstop the API logs, not a state the UI has |
| Upstream API down / connection refused | `fetch` rejects in the proxy | Same generic "not answering" state |
| Guest navigated away / hit stop | you abort the reader | Stop cleanly; keep the partial text, mark it "cut short" |
| Stream ended without `done` | reader closes, no `done` seen | Treat as an error. Never leave the UI in a "thinking" state |

### Rate limiting — read this one

`POST /api/ask` and `POST /api/search` share one throttle bucket, and **the bucket is
keyed on the `X-Bar-Key` header**. Your proxy sends the same key for every visitor, which
means:

> **Every visitor to thekrausshaus.com shares a single per-minute allowance.**

With the default `BAR_API_RATE_LIMIT=12`, thirteen questions in a minute across the whole
site returns 429 to the thirteenth guest. Two things to do about it, and do both:

1. **Raise it on the API.** `BAR_API_RATE_LIMIT=60` or higher, sized to what you are
   willing to spend per minute at the provider. This is a frequency cap, not a budget.
2. **Add a per-visitor cap in the proxy**, keyed on `getClientAddress()`, so one visitor
   cannot eat the shared allowance. A small in-memory token bucket is enough for a
   single-instance Node deployment; there is a sketch below.

A 429 from upstream carries `Retry-After` (seconds) and `X-RateLimit-Limit` /
`X-RateLimit-Remaining`. Pass `Retry-After` through to the browser so the UI can count
down instead of guessing.

### `POST /api/search` (debug only)

Same auth, same throttle bucket, same 2000-character cap. Returns the raw retrieval
passages with no model involved.

```json
{ "passages": [ { /* eight-key passage payloads */ } ] }
```

**It answers `404` whenever `APP_DEBUG` is false**, so it does not exist in production.
Useful for tuning retrieval from a terminal; **do not build UI on it.**

---

## Part 2 — Client architecture

```
browser                      SvelteKit node server              ask-eddie (Laravel)
───────                      ─────────────────────              ───────────────────
BarPanel.svelte
  fetch POST /api/bar/ask ──▶ +server.ts
  (same origin, no key)         • per-IP token bucket
                                • adds X-Bar-Key            ──▶ POST /api/ask
                                • streams body straight          (SSE, 200)
  ◀── text/event-stream ──────    through, unbuffered       ◀──
  parse frames → store
```

### Why there must be a server proxy

The key spends money. Anything the browser can read, a visitor can read. `the-krauss-haus`
already runs on `@sveltejs/adapter-node`, so it has a real server to keep the secret in —
this costs one route file.

The proxy also gives you three things worth having: a per-visitor rate limit, one place
to log failures, and the freedom to move the API's address without touching the client.

### The proxy route

`src/routes/api/bar/ask/+server.ts`:

```ts
import { env } from '$env/dynamic/private';
import { json, type RequestHandler } from '@sveltejs/kit';

const MAX_QUESTION = 2000;

/** Per-visitor cap. In-memory is fine for a single node process. */
const buckets = new Map<string, number[]>();
const PER_MIN = Number(env.BAR_CLIENT_RATE_PER_MIN ?? 8);

function allowed(ip: string): boolean {
	const now = Date.now();
	const recent = (buckets.get(ip) ?? []).filter((t) => now - t < 60_000);
	recent.push(now);
	buckets.set(ip, recent);
	if (buckets.size > 5_000) buckets.clear(); // crude, but this is a home bar
	return recent.length <= PER_MIN;
}

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	if (!env.BAR_API_URL || !env.BAR_API_KEY) {
		console.error('[bar] BAR_API_URL / BAR_API_KEY are not configured');
		return json({ message: 'closed' }, { status: 503 });
	}

	if (!allowed(getClientAddress())) {
		return json({ message: 'slow down' }, { status: 429, headers: { 'Retry-After': '20' } });
	}

	const body = await request.json().catch(() => null);
	const question = typeof body?.question === 'string' ? body.question.trim() : '';
	const bartender = body?.bartender === 'eddie' ? 'eddie' : 'sasha';
	const conversationId = typeof body?.conversation_id === 'string' ? body.conversation_id : null;

	if (question === '' || question.length > MAX_QUESTION) {
		return json({ message: 'bad question' }, { status: 422 });
	}

	const upstream = await fetch(`${env.BAR_API_URL}/api/ask`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'text/event-stream',
			'X-Bar-Key': env.BAR_API_KEY
		},
		body: JSON.stringify({ question, bartender, conversation_id: conversationId }),
		signal: AbortSignal.timeout(Number(env.BAR_REQUEST_TIMEOUT_MS ?? 120_000))
	}).catch((error: unknown) => {
		console.error('[bar] upstream unreachable', error);
		return null;
	});

	if (!upstream) return json({ message: 'no answer' }, { status: 502 });

	if (!upstream.ok || !upstream.body) {
		// 401 here means OUR key is wrong — never a guest's fault. Log it, and hand the
		// browser a shape it can render without leaking the upstream sentence.
		console.error('[bar] upstream refused', upstream.status);
		const status = upstream.status === 429 ? 429 : 502;
		return json({ message: status === 429 ? 'slow down' : 'no answer' }, {
			status,
			headers: upstream.headers.has('retry-after')
				? { 'Retry-After': upstream.headers.get('retry-after')! }
				: {}
		});
	}

	return new Response(upstream.body, {
		headers: {
			'Content-Type': 'text/event-stream',
			'Cache-Control': 'no-cache, no-transform',
			Connection: 'keep-alive',
			// Belt and braces if nginx or any proxy ever sits in front of the node server.
			'X-Accel-Buffering': 'no'
		}
	});
};
```

**Streaming gotchas, all of them real:**

- Return `upstream.body` directly. Do not `await upstream.text()` anywhere in the path —
  that buffers the whole answer and turns a live stream into a thirty-second blank screen.
- If a reverse proxy fronts the Node server in production, it must have
  `proxy_buffering off;` and a read timeout above your longest answer
  (`proxy_read_timeout 300s;`). The `X-Accel-Buffering: no` header above handles nginx
  specifically. *(The `docker/nginx.conf` in this repo serves a static root and appears
  to predate `adapter-node` — worth confirming what actually fronts production before
  shipping.)*
- Do not add compression to this route. Gzip with buffering defeats streaming.
- `AbortSignal.timeout()` above bounds the **whole** exchange, not just the time to first
  byte — it will cut a stream that is still producing text at the deadline. 120 seconds is
  generous for an answer with two tool calls and a consult, but if you ever see answers
  truncating at exactly the timeout, that is why.
- The API's own timeout (`BAR_ANSWER_TIMEOUT`, 60s) is **per provider call**, not per
  answer — one answer is several calls, so the server will happily run past 120 seconds
  in the worst case. Your `AbortSignal.timeout()` is therefore the real wall clock on
  what a guest waits for; when it fires, the stream ends without `done`, which the
  failure table already treats as an error. Raising the API's timeout does not change
  what a guest sees — raising this one does.

### Reading SSE over `fetch`

`EventSource` cannot be used: it is GET-only and cannot set headers. Parse the stream by
hand — the format is simple and the API never sends multi-line `data`, but the parser
below is tolerant anyway.

`src/lib/bar/stream.ts`:

```ts
export type BarEvent =
	| { type: 'meta'; conversationId: string }
	| { type: 'text'; delta: string }
	| { type: 'tool'; label: string }
	| { type: 'consult'; bartender: string; answer: string }
	| { type: 'error'; message: string }
	| { type: 'done' };

/** Yields one BarEvent per SSE frame, in order, as they arrive. */
export async function* readBarStream(body: ReadableStream<Uint8Array>): AsyncGenerator<BarEvent> {
	const reader = body.pipeThrough(new TextDecoderStream()).getReader();
	let buffer = '';

	try {
		for (;;) {
			const { value, done } = await reader.read();
			if (done) break;

			buffer += value;

			let split: number;
			while ((split = buffer.indexOf('\n\n')) !== -1) {
				const frame = buffer.slice(0, split);
				buffer = buffer.slice(split + 2);

				const parsed = parseFrame(frame);
				if (parsed) yield parsed;
			}
		}
	} finally {
		reader.releaseLock();
	}
}

function parseFrame(frame: string): BarEvent | null {
	let event = '';
	const data: string[] = [];

	for (const line of frame.split('\n')) {
		if (line.startsWith('event:')) event = line.slice(6).trim();
		else if (line.startsWith('data:')) data.push(line.slice(5).trimStart());
	}

	if (event === '') return null;

	let payload: Record<string, unknown> = {};
	try {
		payload = data.length > 0 ? JSON.parse(data.join('\n')) : {};
	} catch {
		return null;
	}

	switch (event) {
		case 'meta':
			return { type: 'meta', conversationId: String(payload.conversation_id ?? '') };
		case 'text':
			return { type: 'text', delta: String(payload.delta ?? '') };
		case 'tool':
			return { type: 'tool', label: String(payload.label ?? '') };
		case 'consult':
			return {
				type: 'consult',
				bartender: String(payload.bartender ?? ''),
				answer: String(payload.answer ?? '')
			};
		case 'error':
			return { type: 'error', message: String(payload.message ?? '') };
		case 'done':
			return { type: 'done' };
		default:
			return null; // a frame type we were never told to expect
	}
}
```

### The conversation store

Svelte 5 runes, in a `.svelte.ts` module so the state is reactive outside a component.
This is a working sketch, not gospel — the shape matters more than the lines.

`src/lib/bar/bar.svelte.ts`:

```ts
import { browser } from '$app/environment';
import { readBarStream, type BarEvent } from './stream';

export type BartenderKey = 'sasha' | 'eddie';

export type Consult = { id: string; bartender: string; answer: string };

export type Turn = {
	id: string;
	role: 'guest' | 'bartender';
	bartender: BartenderKey;
	text: string;
	consults: Consult[];
	/** set when the answer was cut short or failed */
	note?: 'failed' | 'stopped';
};

export type Activity =
	| { kind: 'idle' }
	| { kind: 'thinking' }
	| { kind: 'tool'; label: string }
	| { kind: 'consulting'; label: string; other: BartenderKey }
	| { kind: 'answering' }
	| { kind: 'error' };

const IDLE_MS = 120 * 60 * 1000; // the server's own tab window
const STORAGE = 'tkh-bar-tabs';

export class BarChat {
	open = $state(false);
	bartender = $state<BartenderKey>('sasha'); // Sasha is the default. Everywhere.
	draft = $state('');
	turns = $state<Turn[]>([]);
	activity = $state<Activity>({ kind: 'idle' });
	/** milliseconds since the current activity started; drives the escalation copy */
	waiting = $state(0);
	retryAfter = $state<number | null>(null);

	#ids: Record<BartenderKey, { id: string; at: number } | null> = { sasha: null, eddie: null };
	#abort: AbortController | null = null;
	#tick: ReturnType<typeof setInterval> | null = null;

	constructor() {
		if (browser) this.#restore();
	}

	get busy(): boolean {
		return this.activity.kind !== 'idle' && this.activity.kind !== 'error';
	}

	switchTo(next: BartenderKey) {
		if (this.busy || next === this.bartender) return;
		this.bartender = next;
		// Keep the transcript. A divider marks the handover — see Part 3.
		this.turns = [...this.turns];
	}

	async send(question: string) {
		const trimmed = question.trim();
		if (trimmed === '' || this.busy) return;

		const bartender = this.bartender;
		const answer: Turn = { id: crypto.randomUUID(), role: 'bartender', bartender, text: '', consults: [] };

		this.turns = [
			...this.turns,
			{ id: crypto.randomUUID(), role: 'guest', bartender, text: trimmed, consults: [] },
			answer
		];
		this.draft = '';
		this.#enter({ kind: 'thinking' });

		this.#abort = new AbortController();

		try {
			const response = await fetch('/api/bar/ask', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					question: trimmed,
					bartender,
					conversation_id: this.#liveId(bartender)
				}),
				signal: this.#abort.signal
			});

			if (response.status === 429) {
				this.retryAfter = Number(response.headers.get('Retry-After') ?? 20);
				answer.note = 'failed';
				answer.text = '';
				this.#enter({ kind: 'error' });
				return;
			}

			if (!response.ok || !response.body) {
				answer.note = 'failed';
				this.#enter({ kind: 'error' });
				return;
			}

			let sawDone = false;

			for await (const event of readBarStream(response.body)) {
				this.#apply(event, answer, bartender);
				if (event.type === 'done') sawDone = true;
			}

			// A closed socket with no `done` is abnormal. Never leave the UI thinking.
			if (!sawDone && answer.note === undefined) answer.note = 'failed';
		} catch (error) {
			if ((error as Error)?.name === 'AbortError') answer.note = 'stopped';
			else answer.note = 'failed';
		} finally {
			this.#abort = null;
			this.#enter({ kind: 'idle' });
		}
	}

	stop() {
		this.#abort?.abort();
	}

	freshTab() {
		this.#ids = { sasha: null, eddie: null };
		this.turns = [];
		this.#persist();
	}

	#apply(event: BarEvent, answer: Turn, bartender: BartenderKey) {
		switch (event.type) {
			case 'meta':
				this.#remember(bartender, event.conversationId);
				break;
			case 'tool': {
				const other = otherBartenderFrom(event.label);
				this.#enter(other ? { kind: 'consulting', label: event.label, other } : { kind: 'tool', label: event.label });
				break;
			}
			case 'consult':
				answer.consults = [...answer.consults, { id: crypto.randomUUID(), ...event }];
				// Mark where the quote belongs in the flowing text.
				answer.text += `\u0000consult:${answer.consults.length - 1}\u0000`;
				this.#enter({ kind: 'answering' });
				break;
			case 'text':
				answer.text += event.delta;
				this.#enter({ kind: 'answering' });
				break;
			case 'error':
				answer.text = event.message; // already guest-safe copy
				answer.note = 'failed';
				break;
			case 'done':
				break;
		}
		this.turns = [...this.turns];
	}

	#enter(next: Activity) {
		this.activity = next;
		this.waiting = 0;
		if (this.#tick) clearInterval(this.#tick);
		if (next.kind === 'idle' || next.kind === 'error') return;
		const started = Date.now();
		this.#tick = setInterval(() => (this.waiting = Date.now() - started), 500);
	}

	#liveId(bartender: BartenderKey): string | null {
		const tab = this.#ids[bartender];
		if (!tab) return null;
		return Date.now() - tab.at < IDLE_MS ? tab.id : null;
	}

	#remember(bartender: BartenderKey, id: string) {
		if (id === '') return;
		this.#ids[bartender] = { id, at: Date.now() };
		this.#persist();
	}

	#persist() {
		if (!browser) return;
		try {
			sessionStorage.setItem(STORAGE, JSON.stringify(this.#ids));
		} catch {
			/* private mode, quota — the chat still works, memory just won't survive a reload */
		}
	}

	#restore() {
		try {
			const raw = sessionStorage.getItem(STORAGE);
			if (raw) this.#ids = JSON.parse(raw);
		} catch {
			/* ignore */
		}
	}
}

/** The two consult labels, matched loosely so a copy change upstream degrades gracefully. */
function otherBartenderFrom(label: string): BartenderKey | null {
	const lower = label.toLowerCase();
	if (!lower.includes('calling')) return null;
	if (lower.includes('sasha')) return 'sasha';
	if (lower.includes('eddie')) return 'eddie';
	return null;
}

export const bar = new BarChat();
```

Three notes on that sketch:

- **The `\u0000consult:n\u0000` marker** is one way to keep a consult quote positioned
  correctly inside the flowing answer. The alternative — rendering all consults in a
  footer — loses the "he said, then she picked it back up" rhythm that makes the set
  piece work. Use whatever mechanism you prefer; just keep the quote *inline and in
  order*.
- **`waiting`** exists purely to drive the escalation copy in Part 3. It is the mechanism
  behind "never let a guest wonder".
- **A new answer's `Turn` is pushed empty, immediately.** The guest's message and the
  bartender's (still blank) bubble appear in the same frame, so there is never a moment
  where the guest's question is on screen alone.

---

## Part 3 — The experience

Three rules govern everything below.

> **1. It is always obvious who is behind the bar.**
> **2. It is never unclear whether something is happening.**
> **3. When the two of them talk to each other, you can see it happen.**

### The way in (subtle, on purpose)

The site already has a top-right search button. The bar gets a **matching affordance in
the bottom-right**: a small circular button, same glass/backdrop treatment, holding a
coupe-glass or service-bell icon.

```
                                          ┌──────────────────────┐
                                          │ (page)               │
                                          │                      │
                                          │                      │
                                          │            ╭───────╮ │
                                          │            │  🍸   │ │  ← 44px, bottom-right
                                          │            ╰───────╯ │
                                          └──────────────────────┘
```

- Resting state is quiet: `opacity-70`, no badge, no pulse, no auto-open, no "Hi! 👋"
  bubble. It brightens on hover/focus.
- `aria-label="Ask the bartender"`, tooltip on hover: **"Pull up a stool"**.
- Keyboard: **`b`** when not typing in a field (matches the existing `/` convention), plus
  `Cmd/Ctrl+J`. Escape closes.
- **One gentle tell, once per session**: two seconds after first paint, a single line
  fades in beside the button — *"Sasha's behind the bar."* — and fades out after four
  seconds. Never again that session, and never at all for `prefers-reduced-motion`.
- On a cocktail detail page, the tooltip can be contextual: *"Ask Sasha about this one"*,
  and opening from there pre-fills the draft with the drink's name. Cheap, and it makes
  the feature discoverable where it is most useful.

### The panel

Desktop: a right-hand **drawer**, ~420px, full height, backdrop blur over the page.
Mobile: a **bottom sheet** at ~85vh with a drag handle.

```
┌────────────────────────────────────────────┐
│  THE BAR                              ✕    │
│  ┌──────────────┐  ┌──────────────┐        │  ← nameplates / coasters
│  │ ● SASHA      │  │   EDDIE      │        │    active one is lit
│  │ the house    │  │ uptown, 1936 │        │
│  └──────────────┘  └──────────────┘        │
├────────────────────────────────────────────┤
│                                            │
│                    ┌──────────────────────┐│
│                    │ something bright, gin ││  ← guest, right-aligned
│                    └──────────────────────┘│
│  ┌──────────────────────────────────────┐  │
│  │ SASHA                                │  │  ← bartender, left-aligned,
│  │ Bright and gin-forward — the Bees…   │  │    their accent colour
│  └──────────────────────────────────────┘  │
│                                            │
│  ┌────────────────────────────────────────┐│
│  │ 📖  reaching for the books             ││  ← the status line: ALWAYS present
│  └────────────────────────────────────────┘│    while anything is happening
├────────────────────────────────────────────┤
│  ┌──────────────────────────────┐  ┌────┐  │
│  │ Ask Sasha…                   │  │ ▲  │  │
│  └──────────────────────────────┘  └────┘  │
│  Sasha's listening.              1847/2000 │
└────────────────────────────────────────────┘
```

- The header is a **bar top**: warm wood/brass texture, low contrast, not a chrome
  toolbar.
- The composer's placeholder always names the current bartender: `Ask Sasha…` /
  `Ask Eddie…`. It is one more place the answer to "who am I talking to" is free.
- Enter sends, Shift+Enter newlines. While busy, the send button becomes a **stop**
  square — a guest can always get out.
- Autoscroll to the bottom as text streams, **unless** the guest has scrolled up; then
  show a "new answer ↓" pill instead of yanking them back.

### Who's pouring

**Sasha is the default. Always.** First open, after a fresh tab, after a reload — the
panel opens on Sasha.

Give each bartender a full identity kit and apply it in at least four places at once, so
the answer is never a single small label:

| | **Sasha** | **Eddie** |
| --- | --- | --- |
| role line | *the house bartender* | *uptown, 1936* |
| accent | warm amber / copper (`amber-600`) | deep green + brass (`emerald-900` / `amber-400`) |
| type | the site's Montserrat | a deco display face for his name only |
| bubble | light, rounded, modern | slightly warmer paper tone, squarer corners, thin gold rule |
| grounded in | the Krauss Haus's own menus | a shelf of public-domain manuals |
| avatar | coaster with a house mark | coaster with a deco monogram |

Applied to: the lit nameplate, the bubble styling, the name above every answer, the
composer placeholder, and the status line's voice. A guest who glances at any one of them
knows.

**Switching.** Tapping the other nameplate switches, and it is not silent. A divider drops
into the transcript:

> ─── *Sasha wipes down the bar and steps away. Eddie takes over the well.* ───

Rules:
- Switching is disabled while an answer is streaming (the nameplate dims; a tooltip says
  *"one at a time"*).
- The transcript is **kept**, not cleared — the guest can still read what Sasha said.
- Conversation memory is **not** shared. The new bartender genuinely has not heard the
  earlier exchange; the divider is what makes that legible rather than surprising. If a
  guest asks a follow-up that plainly refers to the other's answer, that is fine — the
  bartenders can call each other.

### Never wonder: the status line

One persistent element, directly beneath the last message, that is **always in exactly one
known state**. It is the single most important piece of this UI.

| state | copy (Sasha) | copy (Eddie) | visual |
| --- | --- | --- | --- |
| idle, empty chat | "Sasha's behind the bar." | "Eddie's polishing a glass." | static, muted |
| idle, after an answer | "Sasha's listening." | "Eddie's all ears, friend." | static, muted |
| question sent | "Sasha's thinking it over…" | "Eddie's thinking it over…" | three dots rising like bubbles |
| tool running | *the label from the frame, verbatim* | *ditto* | per-label icon + animation |
| consulting | "Sasha's calling Eddie over…" | "Eddie's calling Sasha over…" | **the set piece — see below** |
| answering | *hidden;* a soft caret trails the text | *ditto* | — |
| stopped | "Cut short. Ask again whenever." | "Said no more of it." | static |
| failed | the `error` frame's own sentence | ditto | muted red rule |

**The escalation ladder.** A tool call can take fifteen seconds. Silence for fifteen
seconds reads as broken, so the line keeps talking — same state, evolving copy, driven by
`waiting`:

| elapsed | thinking | reaching for the books | checking the house pages |
| --- | --- | --- | --- |
| 0s | "Sasha's thinking it over…" | "reaching for the books" | "checking the house pages" |
| 8s | "…still thinking." | "…it's on the high shelf." | "…she's got the binder open." |
| 16s | "…this one's worth getting right." | "…he's got the ladder out." | "…flipping past the syrups." |
| 25s | "…a good answer takes a minute." | "…dust everywhere back here." | "…nearly there." |
| 45s | "…still going. Nobody's forgotten you." | ditto | ditto |

Write one ladder per label, in that bartender's voice, and rotate **forward only** — never
loop back to step one, which reads as a stuck spinner. The copy is the product here;
spend the twenty minutes on it.

Beyond 90 seconds with no frame at all, offer an out: *"This one's gone long. Keep
waiting, or start over?"* with a **Stop** button. Do not auto-cancel.

### Tool labels, and what to do with them

The `label` string is **server-side copy** (`config('bar.labels')` in the API). Render it
verbatim — it is already in character and already lowercase — and decorate it client-side
by matching the known strings. The current set:

| label (exact) | who runs it | icon | suggested animation |
| --- | --- | --- | --- |
| `reaching for the books` | Eddie | 📖 book | a spine slides out of a shelf and opens |
| `counting what's on the shelf` | Eddie | tally marks | four strokes and a diagonal, drawn |
| `checking the house pages` | Sasha | index card | cards shuffle, one lifts |
| `running an eye down the menus` | Sasha | menu | a scan line sweeps a menu card |
| `calling Sasha over` | Eddie → Sasha | rotary phone | **the set piece** |
| `calling Eddie over` | Sasha → Eddie | rotary phone | **the set piece** |

**Match defensively.** Keep a lookup keyed on the exact strings, and fall back to a
generic shaker icon plus the label rendered as-is for anything unrecognised. A tool added
to the API next year will arrive here as an unknown label, and the right behaviour is to
show it, not to swallow it. Detect a consult by `label.includes('calling')` plus a name,
not by exact equality.

The same label can arrive twice in one answer (Eddie searching twice). Do not queue them —
replace the line, and let the animation restart.

### The consult: the set piece

This is the moment worth over-building. Sasha, mid-answer, picks up the phone and calls a
bartender in 1936.

**The sequence you will receive:**

```
tool     { label: "calling Eddie over" }      ← the phone comes off the hook
   … several seconds of nothing at all …      ← the other bartender is thinking
consult  { bartender: "Eddie", answer: "…" }  ← he answers
text     …                                    ← Sasha picks it back up
```

**What it should look like:**

1. **The line opens.** The *other* bartender's nameplate in the header wakes from dim to
   lit, and an animated dotted line draws itself between the two coasters. A small rotary
   dial spins in the status line. The status reads *"Sasha's calling Eddie over…"*, and
   escalates: 6s *"…it's ringing."* · 14s *"…the line's crackly — it's 1936 over
   there."* · 24s *"…he's putting a glass down."*

   ```
   ┌────────────────────────────────────────────┐
   │  ┌──────────────┐ ·  ·  ·  ┌─────────────┐ │
   │  │ ● SASHA      │ ☎ ringing│ ○ EDDIE     │ │   both plates lit,
   │  └──────────────┘ ·  ·  ·  └─────────────┘ │   a dotted line between
   ```

2. **He answers.** The dotted line goes solid for a beat, then the consult lands as a
   **note passed across the bar** — an inset card *nested inside Sasha's answer*, indented
   with a left rule in Eddie's accent colour, not a separate message in the transcript:

   ```
   │  ┌──────────────────────────────────────┐  │
   │  │ SASHA                                │  │
   │  │ Let me get Eddie on the phone.       │  │
   │  │                                      │  │
   │  │  ┃ ☎ EDDIE SAYS — from uptown, 1936  │  │  ← Eddie's colours,
   │  │  ┃ "That one's out of the Savoy,     │  │    deco type, quoted
   │  │  ┃  1930, page 42 — gin, apricot…"   │  │
   │  │                                      │  │
   │  │ So: the house doesn't pour that one, │  │  ← Sasha, picking it
   │  │ but here's what I'd build…           │  │    back up
   │  └──────────────────────────────────────┘  │
   ```

   The card types itself in fast (~15ms/char, or instantly under reduced motion) rather
   than appearing whole — it reads as someone speaking on the other end of a line.

3. **The line closes.** The dotted line fades, the other nameplate dims back down, and the
   status returns to *"Sasha's taking it from here…"* while her remaining text streams.

**Details that matter:**

- The consult card must be **visibly a quotation, not the answer.** The whole architecture
  on the API side exists to keep one bartender from passing off the other's drinks as
  their own; the UI should say the same thing visually. Indentation, their colour, their
  name, quote marks.
- **A refusal arrives as a consult frame too.** If the other bartender is busy or the line
  is dead, the `answer` is prose like *"The line to the house bar is dead tonight and
  Sasha cannot be raised."* — in character, already written for a guest. You cannot
  distinguish it from a real answer, and you should not try. Render it in the same card;
  it lands beautifully as-is.
- **Two consults maximum per answer.** Two cards in one bubble is the ceiling.
- **Sound is opt-in only.** A single soft phone-ring at 20% volume is a lovely touch and
  an instant annoyance if it is on by default. Ship it muted behind a small speaker toggle
  in the panel header, remembered in `localStorage`.

### Rendering an answer

- **Plain text, escaped.** Use `{turn.text}` with `white-space: pre-wrap`. Never `@html` —
  the text comes from a language model and is the last thing that should reach `innerHTML`.
- **Double newlines are real** and mark step boundaries in a multi-step answer. `pre-wrap`
  handles them; do not collapse them.
- **Linkify URLs.** Sasha is instructed to hand guests links to the house's own pages, and
  they arrive as absolute `https://thekrausshaus.com/...` URLs. Detect them, and turn
  anything on this origin into an **internal SvelteKit navigation** (`goto(resolve(path))`)
  that also closes the panel — a guest following Sasha's recommendation should land on the
  cocktail page, not reload the site. Off-site URLs get `target="_blank" rel="noopener"`.
  Do this with a small tokenizer over the text, not a regex `@html` replacement.
- **Eddie's citations are prose**, not metadata — "that's out of the Savoy, 1930, page 42".
  There is nothing structured to style. If you want to make them shine, match a
  conservative pattern and set the book title in italics; if it does not match, leave it
  alone.
- **A streaming caret** (a thin blinking rule after the last character) is the cheapest
  possible answer to "is this still going?" while text is arriving. Keep it.

### Errors, limits and dead ends

| situation | copy | affordance |
| --- | --- | --- |
| `error` frame | the frame's own sentence, in the bartender's bubble — **under** any partial text already streamed, never replacing it | "Ask again" button that resends the same question |
| 429 from the proxy (per-visitor) | "Easy, friend — one at a time. Back in {n}s." | send disabled, live countdown from `Retry-After` |
| 429 from upstream (shared key) | same copy | same; and it should be rare once the API limit is raised |
| 502/503 (API down or unconfigured) | "The bar's not answering right now. Try again in a minute." | "Try again" |
| aborted by the guest | "Cut short." under the partial text | partial text **stays** |
| stream died without `done` | treat as `error` | "Ask again" |
| empty answer (no text frames at all) | "…Sasha's gone quiet. Ask again?" | "Ask again" |

Never show a raw status code, a stack trace, or the word "fetch". And never leave the
status line in a busy state after a failure — the `finally` in `send()` is what guarantees
that.

### Persistence, privacy and fresh tabs

- **Conversation ids belong in `sessionStorage`,** keyed per bartender. The id is the only
  lock on a conversation — anyone holding it can read that conversation's memory — so it
  should not go in the URL, or in a query string, or anywhere shareable.
- **The transcript may live in memory only.** Reopening the panel in the same page session
  keeps it; a reload starting clean is acceptable and arguably correct for a bar. If you
  do persist it, `sessionStorage` again, never `localStorage`.
- **Offer "start a fresh tab"** in the panel's overflow menu: clears the transcript and
  both ids. One click, no confirmation dialog.
- **Expire client-side at 120 minutes** to match the server's own idle window, so a stale
  id is dropped before it is sent rather than silently replaced.
- If a `meta` frame returns an id that differs from the one you sent, the server started a
  new conversation. Drop a quiet divider — *"─ fresh tab ─"* — so a guest understands why
  the bartender no longer remembers.

### Accessibility, motion and mobile

- The panel is `role="dialog" aria-modal="true" aria-label="Ask the bartender"`, with a
  focus trap and focus returned to the launcher on close — the same pattern
  `SearchModal.svelte` already implements. Reuse it.
- The transcript is an `aria-live="polite"` region. **Announce the whole answer once, when
  it completes** — do not announce every delta, which turns a screen reader into a stutter.
  The status line is its own `aria-live="polite"` region and *should* announce each state
  change; that is exactly the information a sighted guest is getting from the animation.
- The bartender picker is a radio group (`role="radiogroup"`), not two buttons — it is one
  choice with two states, and Sasha is checked by default.
- **`prefers-reduced-motion`**: no typing animation, no dotted-line draw, no bubbling dots.
  The consult card appears whole, the status line still changes text, and the escalation
  ladder still runs. **The information survives; only the movement stops.**
- Every animation is decoration over a text state. If CSS fails to load, the chat is still
  fully legible.
- Mobile: bottom sheet, composer pinned above the keyboard (`dvh` units, not `vh`),
  nameplates shrink to a two-chip row, consult cards indent by 12px rather than 24.
- Touch targets ≥ 44px. The stop button included — it is the one a frustrated guest reaches
  for.

---

## Part 4 — File plan, tests, runbook

### Suggested files

```
src/routes/api/bar/ask/+server.ts        proxy: adds the key, streams through
src/lib/bar/stream.ts                    SSE-over-fetch parser + BarEvent types
src/lib/bar/bar.svelte.ts                the BarChat runes store
src/lib/bar/bartenders.ts                identity kit: names, roles, colours, copy ladders
src/lib/bar/copy.ts                      status lines, escalation ladders, label decorations
src/lib/components/bar/BarLauncher.svelte    the bottom-right button + keyboard shortcut
src/lib/components/bar/BarPanel.svelte       drawer/sheet shell, focus trap, header
src/lib/components/bar/BartenderPlates.svelte  the two coasters + the calling animation
src/lib/components/bar/BarTranscript.svelte    turns, autoscroll, dividers
src/lib/components/bar/BarMessage.svelte       one turn: text, linkify, consult slots
src/lib/components/bar/ConsultCard.svelte      the note passed across the bar
src/lib/components/bar/BarStatusLine.svelte    the "never wonder" line + escalation
src/lib/components/bar/BarComposer.svelte      textarea, counter, send/stop
```

Mount `BarLauncher` + `BarPanel` once in `src/routes/+layout.svelte`, beside the existing
`SearchModal`.

### Tests worth writing (vitest + @testing-library/svelte, both already installed)

**Parser (`stream.ts`)** — pure, fast, and the highest-value tests here:
- frames split correctly when a chunk boundary lands **mid-frame** and **mid-JSON**
- a delta containing `\n` survives (the API escapes it inside the JSON, so it arrives as
  one frame — assert it)
- unicode passes through intact (`Curaçao`)
- an unknown event type is ignored, not thrown
- `done` with `{}` parses

**Store (`bar.svelte.ts`)** with a stubbed `fetch` returning a canned `ReadableStream`:
- `meta` → the id is stored per bartender and sent on the next question
- an id belonging to Eddie is never sent while asking Sasha
- a stream that ends without `done` leaves `activity.kind === 'idle'` and marks the turn
  failed — **the "never stuck thinking" test**
- an `error` frame renders its sentence and still finishes cleanly
- abort keeps the partial text and marks it stopped
- two consults in one answer land in order, inline

**Components:**
- the panel opens on Sasha every time
- the bartender name is on screen in at least two places while a bartender is active
- the status line is never empty while `busy`
- switching bartenders is blocked mid-answer

### Local runbook

```bash
# terminal 1 — the API
cd ask-eddie && ./vendor/bin/sail up -d       # http://localhost:9000
curl -s localhost:9000/up

# terminal 2 — the site
cd the-krauss-haus && npm run dev             # http://localhost:5173
```

Watch the raw stream while you build, so you can see exactly what the UI has to handle:

```bash
curl -N -s http://localhost:9000/api/ask \
  -H 'X-Bar-Key: some-long-random-string' \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/event-stream' \
  -d '{"question":"what did they call a Gin Fizz before this?","bartender":"sasha"}'
```

`-N` disables curl's buffering; without it you will see the whole answer arrive at once
and conclude, wrongly, that streaming is broken.

To force a consult (the set piece), ask one bartender something squarely in the other's
territory:

- to **Sasha**: *"where did the Aviation come from, and how did the old books build it?"*
- to **Eddie**: *"what would a bar pour today for someone who doesn't drink whiskey?"*

To force an error while building the failure states, point `BAR_API_URL` at a dead port.

---

## Part 5 — Decisions left to you

1. **Sound.** A soft phone-ring on a consult is the single biggest smile-per-byte in this
   document. Muted by default, or off entirely?
2. **Where the launcher lives.** Bottom-right (proposed, matches the chat convention
   guests already know) or beside the existing top-right search button (tidier, less
   discoverable).
3. **Does the transcript survive a reload?** In-memory only is simpler and reads as "a
   conversation at a bar". Persisting reads as "a chat app".
4. **Contextual entry on cocktail pages.** Pre-filling *"Tell me about the Bee's Knees"*
   from a drink page is a small amount of work and probably the feature's best on-ramp.
5. **Eddie's display face.** A deco display font for his name only is a strong, cheap
   identity cue — but it is another webfont. Worth the bytes?
6. **`BAR_API_RATE_LIMIT`.** Pick a number you are happy to pay for. 12/min (the default)
   is too low for a shared key; 60 is a reasonable start for a home bar's traffic.

---

## Appendix — everything in one place

**Endpoints** (base `http://localhost:9000`, header `X-Bar-Key`):

| method | path | returns |
| --- | --- | --- |
| `GET` | `/up` | health, no key required |
| `GET` | `/api/bartenders` | `{"bartenders":[{key,name,blurb}]}` |
| `POST` | `/api/ask` | `text/event-stream` — the six frames |
| `POST` | `/api/search` | raw passages; **404 unless `APP_DEBUG`** |

**Request body for `/api/ask`:** `{ question: string (≤2000, non-blank), bartender:
"sasha" | "eddie", conversation_id?: string | null }`

**Frames:** `meta{conversation_id}` → (`text{delta}` | `tool{label}` |
`consult{bartender,answer}` | `error{message}`)* → `done{}`

**Bartender keys:** `sasha` (default), `eddie`.

**Tool labels:** `reaching for the books`, `counting what's on the shelf`, `checking the
house pages`, `running an eye down the menus`, `calling Sasha over`, `calling Eddie over`.

**Server-side limits:** 2000 chars/question · 12 requests/min/key (raise it) · 120 min tab
idle · 12 remembered messages · 2 consults per answer · 1500 output tokens per model call
(`BAR_ANSWER_MAX_TOKENS`, silent — logged, never framed) · 60s per provider call
(`BAR_ANSWER_TIMEOUT`, surfaces as an `error` frame).

**Client env:** `BAR_API_URL=http://localhost:9000`, `BAR_API_KEY=…` — **private, never
`PUBLIC_`**.
