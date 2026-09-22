/**
 * The telephone on the back bar. When Sasha calls Eddie over — the one moment in this UI where
 * two characters talk to each other — the line rings.
 *
 * Off until the guest asks for it. Audio that starts on its own is an ambush, so the panel
 * carries a toggle and the choice is remembered. The bell is synthesised rather than shipped
 * as an asset: it is four oscillators and an envelope, which is cheaper than any mp3 and can
 * be cut off mid-burst the instant the call connects.
 */

import { browser } from '$app/environment';

const KEY = 'tkh-bar-ring';

/** A 1930s double ring: two short bursts, then a long wait. */
const BURST = 0.4;
const GAP = 0.2;
const REST = 2.2;

/** Quiet enough to sit under a conversation, not announce itself to the room. */
const LEVEL = 0.05;

class Ringer {
	enabled = $state(false);

	#ctx: AudioContext | null = null;
	#timer: ReturnType<typeof setTimeout> | null = null;
	#ringing = false;

	constructor() {
		if (!browser) return;
		try {
			this.enabled = localStorage.getItem(KEY) === '1';
		} catch {
			/* private mode — stay silent */
		}
	}

	toggle(): void {
		this.enabled = !this.enabled;
		try {
			localStorage.setItem(KEY, this.enabled ? '1' : '0');
		} catch {
			/* ignore */
		}
		if (!this.enabled) this.stop();
	}

	start(): void {
		if (!this.enabled || this.#ringing) return;
		this.#ringing = true;
		this.#cycle();
	}

	stop(): void {
		this.#ringing = false;
		if (this.#timer) {
			clearTimeout(this.#timer);
			this.#timer = null;
		}
	}

	#cycle(): void {
		if (!this.#ringing) return;
		const ctx = this.#context();
		if (!ctx) {
			this.#ringing = false;
			return;
		}
		// Autoplay policy: the context is born suspended unless a gesture opened it. Both the
		// toggle and the send button are gestures, so this resolves in practice.
		void ctx.resume();

		const now = ctx.currentTime;
		this.#burst(ctx, now);
		this.#burst(ctx, now + BURST + GAP);

		this.#timer = setTimeout(() => this.#cycle(), (BURST * 2 + GAP + REST) * 1000);
	}

	/** One burst of the bell: two struck tones, trilled by an LFO on the way out. */
	#burst(ctx: AudioContext, at: number): void {
		const gain = ctx.createGain();
		gain.gain.setValueAtTime(0, at);
		gain.gain.linearRampToValueAtTime(LEVEL, at + 0.02);
		gain.gain.setValueAtTime(LEVEL, at + BURST - 0.04);
		gain.gain.linearRampToValueAtTime(0, at + BURST);
		gain.connect(ctx.destination);

		// The clapper. Without it this is a doorbell chime, not a telephone.
		const trill = ctx.createOscillator();
		const trillDepth = ctx.createGain();
		trill.frequency.value = 20;
		trillDepth.gain.value = 0.45;
		trill.connect(trillDepth).connect(gain.gain);
		trill.start(at);
		trill.stop(at + BURST);

		for (const hz of [700, 900]) {
			const osc = ctx.createOscillator();
			osc.type = 'sine';
			osc.frequency.value = hz;
			osc.connect(gain);
			osc.start(at);
			osc.stop(at + BURST);
		}
	}

	#context(): AudioContext | null {
		if (this.#ctx) return this.#ctx;
		if (!browser) return null;
		const Ctor =
			window.AudioContext ??
			(window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
		if (!Ctor) return null;
		this.#ctx = new Ctor();
		return this.#ctx;
	}
}

export const ringer = new Ringer();
