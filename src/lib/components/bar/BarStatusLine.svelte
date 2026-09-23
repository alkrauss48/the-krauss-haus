<script lang="ts">
	import { bartenders, type BartenderKey } from '$lib/bar/bartenders';
	import {
		consultLine,
		idleLine,
		iconForLabel,
		stoppedLine,
		thinkingLine,
		toolLine
	} from '$lib/bar/copy';
	import type { Activity } from '$lib/bar/bar.svelte';

	let {
		activity,
		waiting,
		bartender,
		hasAnswered,
		stopped = false,
		inline = false,
		onStop
	}: {
		activity: Activity;
		waiting: number;
		bartender: BartenderKey;
		hasAnswered: boolean;
		stopped?: boolean;
		/** Rendered inside the answer bubble, where it stands in for the caret. */
		inline?: boolean;
		onStop?: () => void;
	} = $props();

	const who = $derived(bartenders[bartender]);

	const line = $derived.by(() => {
		switch (activity.kind) {
			case 'thinking':
				return thinkingLine(bartender, waiting);
			case 'tool':
				return toolLine(activity.label, waiting);
			case 'consulting':
				return consultLine(bartender, waiting);
			case 'answering':
				// Hidden while text streams: the caret already answers "is this still going?".
				return '';
			default:
				return stopped ? stoppedLine(bartender) : idleLine(bartender, hasAnswered);
		}
	});

	const icon = $derived(
		activity.kind === 'tool' || activity.kind === 'consulting' ? iconForLabel(activity.label) : null
	);

	// Past ninety seconds, offer a way out — but never cancel on the guest's behalf.
	const longHaul = $derived(
		waiting > 90_000 && activity.kind !== 'idle' && activity.kind !== 'answering'
	);
</script>

{#if line !== ''}
	<div
		class="flex flex-wrap items-center gap-2 text-[0.8rem] text-gray-500 {inline
			? 'py-0.5'
			: 'px-1 py-2'}"
		aria-live="polite"
		aria-atomic="true"
	>
		{#if icon === 'phone'}
			<span class="relative flex h-4 w-4 shrink-0 items-center justify-center">
				<span
					class="absolute inset-0 rounded-full border border-current opacity-40 motion-safe:animate-ping"
				></span>
				<svg
					class="h-3.5 w-3.5 {who.accentText}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
					/>
				</svg>
			</span>
		{:else if icon !== null}
			<svg
				class="h-4 w-4 shrink-0 {who.accentText}"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				{#if icon === 'book'}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
					/>
				{:else if icon === 'cards'}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/>
				{:else if icon === 'menu'}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
					/>
				{:else if icon === 'tally'}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 4v16M11 4v16M16 4v16M3 19l18-14"
					/>
				{:else}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 3h8l-1 4H9L8 3zm1 4h6l1.5 12a2 2 0 01-2 2.2h-5A2 2 0 017.5 19L9 7z"
					/>
				{/if}
			</svg>
		{:else if activity.kind === 'thinking'}
			<span class="flex shrink-0 items-end gap-0.5" aria-hidden="true">
				{#each [0, 1, 2] as dot (dot)}
					<span
						class="h-1 w-1 rounded-full {who.accentDot} motion-safe:animate-bounce"
						style="animation-delay: {dot * 140}ms"
					></span>
				{/each}
			</span>
		{/if}

		<span>{line}</span>

		{#if longHaul}
			<span class="flex items-center gap-2 {inline ? '' : 'ml-auto'}">
				<span class="hidden text-gray-400 sm:inline">This one's gone long.</span>
				<button
					type="button"
					class="cursor-pointer rounded-full border border-gray-300 px-2 py-0.5 font-medium text-gray-600 hover:border-gray-400 hover:text-gray-900"
					onclick={() => onStop?.()}
				>
					Stop
				</button>
			</span>
		{/if}
	</div>
{/if}
