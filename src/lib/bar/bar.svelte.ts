/**
 * The conversation store. Runes in a `.svelte.ts` module so the state is reactive outside a
 * component — the panel, the launcher and the cocktail-page button all talk to one instance.
 *
 * Two rules drive the shape of this file:
 *
 *  - The UI is never left "thinking". `done` is always the last frame, so a stream that ends
 *    without one is an abnormal termination; the `finally` in `send()` is what guarantees the
 *    status line always comes back to a resting state.
 *  - Conversations are per bartender and never shared. An id issued while talking to Eddie
 *    cannot be replayed against Sasha — the server would silently start a new conversation
 *    rather than error, so the client keeps the two apart itself.
 */

import { browser } from '$app/environment';
import { readBarStream, type BarEvent } from './stream';
import { consultTargetFrom, handoverLine } from './copy';
import { DEFAULT_BARTENDER, isBartenderKey, type BartenderKey } from './bartenders';

export type { BartenderKey };

export type AnswerPart =
	| { kind: 'text'; text: string }
	| { kind: 'consult'; id: string; bartender: string; answer: string };

export type TurnNote = 'failed' | 'stopped';

export type Turn = {
	id: string;
	role: 'guest' | 'bartender';
	bartender: BartenderKey;
	/**
	 * Ordered, because a consult can arrive before any text at all — verified against the
	 * live API — and the quote has to stay where it landed in the answer.
	 */
	parts: AnswerPart[];
	/** On a bartender turn: the question that produced it, so "Ask again" can resend it. */
	question?: string;
	note?: TurnNote;
	at: number;
};

export type Divider = { id: string; role: 'divider'; label: string; at: number };

export type TranscriptItem = Turn | Divider;

export type Activity =
	| { kind: 'idle' }
	| { kind: 'thinking' }
	| { kind: 'tool'; label: string }
	| { kind: 'consulting'; label: string; other: BartenderKey }
	| { kind: 'answering' }
	| { kind: 'error' };

export type BarError = 'rate-limited' | 'unavailable' | null;

export type BarChatOptions = {
	storage?: Pick<Storage, 'getItem' | 'setItem' | 'removeItem'> | null;
	fetch?: typeof globalThis.fetch;
	now?: () => number;
	uuid?: () => string;
};

export const MAX_QUESTION = 2000;

/** The server's own tab window (`BAR_TAB_IDLE`). Expire client-side to match. */
const IDLE_MS = 120 * 60 * 1000;
const KEY_TABS = 'tkh-bar-tabs';
const KEY_LOG = 'tkh-bar-log-v1';
const MAX_ITEMS = 40;
const MAX_CHARS = 256 * 1024;

type Tabs = Record<BartenderKey, { id: string; at: number } | null>;

export function isTurn(item: TranscriptItem): item is Turn {
	return item.role !== 'divider';
}

/** A bartender turn with no prose in it — the "…gone quiet" case. */
export function isEmptyAnswer(turn: Turn): boolean {
	return !turn.parts.some((part) => part.kind === 'text' && part.text.trim() !== '');
}

export class BarChat {
	open = $state(false);
	/** Sasha is the default. First open, after a fresh tab, after a reload. */
	bartender = $state<BartenderKey>(DEFAULT_BARTENDER);
	draft = $state('');
	items = $state<TranscriptItem[]>([]);
	activity = $state<Activity>({ kind: 'idle' });
	/** Milliseconds in the current activity. Drives the escalation copy. */
	waiting = $state(0);
	retryAfter = $state<number | null>(null);
	failure = $state<BarError>(null);

	#ids: Tabs = { sasha: null, eddie: null };
	#abort: AbortController | null = null;
	#tick: ReturnType<typeof setInterval> | null = null;
	#logDisabled = false;
	#lastSentId: string | null = null;

	#storage: Pick<Storage, 'getItem' | 'setItem' | 'removeItem'> | null;
	#fetch: typeof globalThis.fetch;
	#now: () => number;
	#uuid: () => string;

	constructor(options: BarChatOptions = {}) {
		this.#storage = options.storage !== undefined ? options.storage : defaultStorage();
		this.#fetch = options.fetch ?? ((...args) => globalThis.fetch(...args));
		this.#now = options.now ?? (() => Date.now());
		this.#uuid = options.uuid ?? (() => crypto.randomUUID());
		this.#restore();
	}

	get busy(): boolean {
		return this.activity.kind !== 'idle' && this.activity.kind !== 'error';
	}

	get canSend(): boolean {
		const trimmed = this.draft.trim();
		return !this.busy && trimmed !== '' && this.draft.length <= MAX_QUESTION;
	}

	get hasAnswered(): boolean {
		return this.items.some((item) => isTurn(item) && item.role === 'bartender');
	}

	openPanel(): void {
		this.open = true;
	}

	closePanel(): void {
		this.open = false;
	}

	/**
	 * The cocktail-page on-ramp: open with the drink's name already in the box. `who` is the
	 * bartender the button promised — the on-ramp always names Sasha, because she is the only
	 * one who can see this site's drinks, so landing on Eddie would break that promise.
	 */
	prefill(text: string, who?: BartenderKey): void {
		if (!this.busy) this.draft = text;
		if (who) this.switchTo(who);
		this.open = true;
	}

	switchTo(next: BartenderKey): void {
		if (this.busy || next === this.bartender) return;
		const from = this.bartender;
		this.bartender = next;
		// The transcript is kept — the guest can still read what the other one said — but the
		// handover is marked, because memory genuinely is not shared and a silent swap would
		// read as the bartender forgetting.
		if (this.items.length > 0) {
			this.items.push({
				id: this.#uuid(),
				role: 'divider',
				label: handoverLine(from, next),
				at: this.#now()
			});
		}
		this.#persistAll();
	}

	freshTab(): void {
		this.#ids = { sasha: null, eddie: null };
		this.items = [];
		this.failure = null;
		this.retryAfter = null;
		this.bartender = DEFAULT_BARTENDER;
		this.#persistAll();
	}

	stop(): void {
		this.#abort?.abort();
	}

	retry(turnId: string): Promise<void> {
		const turn = this.items.find((item) => item.id === turnId);
		if (!turn || !isTurn(turn) || !turn.question) return Promise.resolve();
		return this.send(turn.question);
	}

	async send(question: string): Promise<void> {
		const trimmed = question.trim();
		if (trimmed === '' || this.busy) return;

		const bartender = this.bartender;
		const at = this.#now();
		this.failure = null;
		this.retryAfter = null;

		// Both bubbles appear in the same frame, so the guest's question is never on screen
		// alone waiting for something to happen.
		this.items.push(
			{ id: this.#uuid(), role: 'guest', bartender, parts: [{ kind: 'text', text: trimmed }], at },
			{ id: this.#uuid(), role: 'bartender', bartender, parts: [], question: trimmed, at }
		);

		// Read the answer back out of the array: `$state` hands out a proxy, and mutating the
		// object we pushed in would update nothing. Holding the proxy lets a delta touch one
		// signal instead of re-assigning the whole transcript on every character.
		const answer = this.items[this.items.length - 1] as Turn;

		this.draft = '';
		this.#enter({ kind: 'thinking' });
		this.#abort = new AbortController();
		this.#lastSentId = this.#liveId(bartender);

		try {
			const response = await this.#fetch('/api/bar/ask', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					question: trimmed,
					bartender,
					conversation_id: this.#lastSentId
				}),
				signal: this.#abort.signal
			});

			if (response.status === 429) {
				this.retryAfter = Number(response.headers.get('Retry-After') ?? 20);
				this.failure = 'rate-limited';
				answer.note = 'failed';
				return;
			}

			if (!response.ok || !response.body) {
				this.failure = 'unavailable';
				answer.note = 'failed';
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
			answer.note = (error as Error)?.name === 'AbortError' ? 'stopped' : 'failed';
			if (answer.note === 'failed') this.failure = 'unavailable';
		} finally {
			this.#abort = null;
			this.#lastSentId = null;
			this.#enter({ kind: 'idle' });
			this.#persistAll();
		}
	}

	#apply(event: BarEvent, answer: Turn, bartender: BartenderKey): void {
		switch (event.type) {
			case 'meta': {
				const sent = this.#lastSentId;
				this.#remember(bartender, event.conversationId);
				// A different id back means the server quietly started a new conversation, so the
				// bartender no longer remembers the earlier exchange. Say so rather than letting
				// the guest wonder why they were forgotten.
				if (sent !== null && event.conversationId !== '' && event.conversationId !== sent) {
					this.#insertBefore(answer.id, '─ fresh tab ─');
				}
				break;
			}

			case 'text': {
				const last = answer.parts[answer.parts.length - 1];
				if (last?.kind === 'text') last.text += event.delta;
				else answer.parts.push({ kind: 'text', text: event.delta });
				if (this.activity.kind !== 'answering') this.#enter({ kind: 'answering' });
				break;
			}

			case 'consult':
				answer.parts.push({
					kind: 'consult',
					id: this.#uuid(),
					bartender: event.bartender,
					answer: event.answer
				});
				this.#enter({ kind: 'answering' });
				break;

			case 'tool': {
				const other = consultTargetFrom(event.label);
				this.#enter(
					other
						? { kind: 'consulting', label: event.label, other }
						: { kind: 'tool', label: event.label }
				);
				break;
			}

			case 'error':
				// Already guest-safe copy, written for a human. Render it as-is.
				answer.parts = [{ kind: 'text', text: event.message }];
				answer.note = 'failed';
				break;

			case 'done':
				break;
		}
	}

	#insertBefore(turnId: string, label: string): void {
		const index = this.items.findIndex((item) => item.id === turnId);
		if (index < 1) return;
		this.items.splice(index - 1, 0, {
			id: this.#uuid(),
			role: 'divider',
			label,
			at: this.#now()
		});
	}

	#enter(next: Activity): void {
		this.activity = next;
		this.waiting = 0;
		if (this.#tick) {
			clearInterval(this.#tick);
			this.#tick = null;
		}
		if (next.kind === 'idle' || next.kind === 'error') return;
		const started = this.#now();
		this.#tick = setInterval(() => {
			this.waiting = this.#now() - started;
		}, 500);
	}

	#liveId(bartender: BartenderKey): string | null {
		const tab = this.#ids[bartender];
		if (!tab) return null;
		// Drop a stale id before it goes on the wire rather than letting the server silently
		// replace it.
		return this.#now() - tab.at < IDLE_MS ? tab.id : null;
	}

	#remember(bartender: BartenderKey, id: string): void {
		if (id === '') return;
		this.#ids[bartender] = { id, at: this.#now() };
		this.#persistTabs();
	}

	/* ------------------------------------------------------------- persistence */

	#persistAll(): void {
		this.#persistTabs();
		this.#persistLog();
	}

	#persistTabs(): void {
		this.#write(KEY_TABS, JSON.stringify({ v: 1, bartender: this.bartender, ids: this.#ids }));
	}

	#persistLog(): void {
		if (this.#logDisabled) return;
		// Only ever called at turn boundaries. Serialising on every delta would be O(n²)
		// main-thread work and would visibly stall the caret.
		if (!this.#write(KEY_LOG, this.#serialiseLog(MAX_CHARS))) {
			this.#storage?.removeItem(KEY_LOG);
			if (!this.#write(KEY_LOG, this.#serialiseLog(MAX_CHARS / 4))) this.#logDisabled = true;
		}
	}

	#serialiseLog(budget: number): string {
		let items = this.items.slice(-MAX_ITEMS);
		let json = JSON.stringify({ v: 1, savedAt: this.#now(), items });

		while (json.length > budget && items.length > 1) {
			items = items.slice(1);
			// An answer must never outlive the question it belongs to.
			if (items[0] && isTurn(items[0]) && items[0].role === 'bartender') items = items.slice(1);
			json = JSON.stringify({ v: 1, savedAt: this.#now(), items });
		}
		return json;
	}

	#write(key: string, value: string): boolean {
		if (!this.#storage) return false;
		try {
			this.#storage.setItem(key, value);
			return true;
		} catch {
			// Private mode, or a full origin. The chat still works; memory just will not survive
			// a reload, and the guest should never hear about it.
			return false;
		}
	}

	#read(key: string): unknown {
		if (!this.#storage) return null;
		try {
			const raw = this.#storage.getItem(key);
			return raw ? JSON.parse(raw) : null;
		} catch {
			return null;
		}
	}

	#restore(): void {
		const log = this.#read(KEY_LOG) as { savedAt?: number; items?: TranscriptItem[] } | null;
		const fresh = log?.savedAt !== undefined && this.#now() - log.savedAt < IDLE_MS;

		// A tab left open overnight should not resurrect eight-hour-old prose beside two dead
		// ids, so the whole session goes at once.
		if (!fresh) {
			this.#storage?.removeItem(KEY_LOG);
			this.#storage?.removeItem(KEY_TABS);
			return;
		}

		if (Array.isArray(log?.items)) this.items = log.items;

		const tabs = this.#read(KEY_TABS) as { bartender?: unknown; ids?: Tabs } | null;
		if (tabs?.ids) this.#ids = { sasha: tabs.ids.sasha ?? null, eddie: tabs.ids.eddie ?? null };
		if (isBartenderKey(tabs?.bartender)) this.bartender = tabs.bartender;
	}
}

function defaultStorage(): Pick<Storage, 'getItem' | 'setItem' | 'removeItem'> | null {
	if (!browser) return null;
	try {
		// Reading the property itself throws on an opaque origin, so this has to be guarded.
		return globalThis.sessionStorage ?? null;
	} catch {
		return null;
	}
}

export const bar = new BarChat();
