<script lang="ts">
	import { browser } from '$app/environment';
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { bar } from '$lib/bar/bar.svelte';
	import type { BartenderKey } from '$lib/bar/bartenders';
	import BartenderPlates from './BartenderPlates.svelte';
	import BarTranscript from './BarTranscript.svelte';
	import BarStatusLine from './BarStatusLine.svelte';
	import BarComposer from './BarComposer.svelte';

	const ROOT_ID = 'bar-panel-root';

	let lastFocused: HTMLElement | null = null;
	let composer = $state<ReturnType<typeof BarComposer> | null>(null);
	let countdown = $state<ReturnType<typeof setInterval> | null>(null);

	const streaming = $derived(bar.busy);
	const calling = $derived(bar.activity.kind === 'consulting' ? bar.activity.other : null);
	const stopped = $derived.by(() => {
		const last = bar.items[bar.items.length - 1];
		return last !== undefined && last.role !== 'divider' && last.note === 'stopped';
	});

	function focusables(): HTMLElement[] {
		if (!browser) return [];
		const root = document.getElementById(ROOT_ID);
		if (!root) return [];
		return Array.from(
			root.querySelectorAll<HTMLElement>(
				'button:not([disabled]), [href], textarea:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
			)
		);
	}

	function onKeydown(event: KeyboardEvent) {
		if (!bar.open) return;

		if (event.key === 'Escape') {
			event.preventDefault();
			bar.closePanel();
			return;
		}

		// Same trap as SearchModal: wrap at both ends rather than letting focus escape to the
		// page behind the drawer.
		if (event.key === 'Tab') {
			const stops = focusables();
			if (stops.length === 0) return;
			const first = stops[0];
			const last = stops[stops.length - 1];
			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		}
	}

	$effect(() => {
		if (!browser) return;
		if (bar.open) {
			lastFocused = (document.activeElement as HTMLElement) ?? null;
			requestAnimationFrame(() => composer?.focus());
		} else {
			const el = lastFocused;
			setTimeout(() => el?.focus?.(), 200);
		}
	});

	// A live countdown, so a rate-limited guest sees the door reopening rather than a number
	// that never moves.
	$effect(() => {
		if (bar.retryAfter === null) return;
		countdown = setInterval(() => {
			if (bar.retryAfter === null || bar.retryAfter <= 1) bar.retryAfter = null;
			else bar.retryAfter -= 1;
		}, 1000);
		return () => {
			if (countdown) clearInterval(countdown);
		};
	});

	function send() {
		void bar.send(bar.draft);
	}

	function switchTo(key: BartenderKey) {
		bar.switchTo(key);
		requestAnimationFrame(() => composer?.focus());
	}
</script>

<svelte:window on:keydown={onKeydown} />

{#if bar.open}
	<div
		id={ROOT_ID}
		class="fixed inset-0 z-50 flex justify-end bg-gray-900/40 backdrop-blur-sm"
		role="presentation"
		onclick={(event) => event.target === event.currentTarget && bar.closePanel()}
		transition:fade={{ duration: 200 }}
	>
		<div
			class="flex h-[100dvh] w-full max-w-full flex-col bg-[#fbfaf8] shadow-2xl sm:max-w-[420px]"
			role="dialog"
			aria-modal="true"
			aria-label="Ask the bartender"
			transition:fly={{ x: 420, duration: 260, easing: quintOut }}
		>
			<!-- The header is a bar top, not a chrome toolbar. -->
			<header
				class="border-b border-amber-900/10 bg-gradient-to-b from-amber-100/70 to-amber-50/40 px-3 pt-3 pb-2.5"
			>
				<div class="mb-2.5 flex items-center justify-between">
					<h2 class="text-[0.7rem] font-bold tracking-[0.2em] text-amber-900/70">THE BAR</h2>
					<div class="flex items-center gap-1">
						<button
							type="button"
							onclick={() => bar.freshTab()}
							class="cursor-pointer rounded-md px-2 py-1 text-[0.7rem] text-gray-500 transition-colors hover:bg-white/60 hover:text-gray-800"
						>
							Fresh tab
						</button>
						<button
							type="button"
							onclick={() => bar.closePanel()}
							aria-label="Close"
							class="cursor-pointer rounded-md p-1.5 text-gray-500 transition-colors hover:bg-white/60 hover:text-gray-800"
						>
							<svg
								class="h-4 w-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>

				<BartenderPlates active={bar.bartender} busy={bar.busy} {calling} onSwitch={switchTo} />
			</header>

			<BarTranscript
				items={bar.items}
				bartender={bar.bartender}
				{streaming}
				onRetry={(id) => void bar.retry(id)}
				onNavigate={() => bar.closePanel()}
			/>

			<div class="px-3">
				<BarStatusLine
					activity={bar.activity}
					waiting={bar.waiting}
					bartender={bar.bartender}
					hasAnswered={bar.hasAnswered}
					{stopped}
					onStop={() => bar.stop()}
				/>

				{#if bar.failure === 'rate-limited'}
					<p class="pb-2 text-[0.8rem] text-amber-800">
						Easy, friend — one at a time.{bar.retryAfter ? ` Back in ${bar.retryAfter}s.` : ''}
					</p>
				{:else if bar.failure === 'unavailable'}
					<p class="pb-2 text-[0.8rem] text-gray-500">
						The bar's not answering right now. Try again in a minute.
					</p>
				{/if}
			</div>

			<BarComposer
				bind:this={composer}
				bind:value={bar.draft}
				bartender={bar.bartender}
				busy={bar.busy}
				canSend={bar.canSend}
				retryAfter={bar.retryAfter}
				onSend={send}
				onStop={() => bar.stop()}
			/>
		</div>
	</div>
{/if}
