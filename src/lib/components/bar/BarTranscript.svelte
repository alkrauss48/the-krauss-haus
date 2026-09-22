<script lang="ts">
	import { bartenders, type BartenderKey } from '$lib/bar/bartenders';
	import { isTurn, type TranscriptItem } from '$lib/bar/bar.svelte';
	import BarMessage from './BarMessage.svelte';

	let {
		items,
		bartender,
		streaming,
		onRetry,
		onNavigate
	}: {
		items: TranscriptItem[];
		bartender: BartenderKey;
		streaming: boolean;
		onRetry: (id: string) => void;
		onNavigate: () => void;
	} = $props();

	let scroller = $state<HTMLDivElement | null>(null);
	let pinned = $state(true);
	let frame = 0;

	const who = $derived(bartenders[bartender]);
	const lastId = $derived(items.length > 0 ? items[items.length - 1].id : null);

	function onScroll() {
		if (!scroller) return;
		// 48px of slack, so a guest who is essentially at the bottom stays pinned.
		pinned = scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight < 48;
	}

	function toBottom() {
		pinned = true;
		scroller?.scrollTo({ top: scroller.scrollHeight, behavior: 'smooth' });
	}

	// Coalesced into a frame: scrolling per delta would be hundreds of forced layouts.
	$effect(() => {
		void items.length;
		void streaming;
		if (!pinned || !scroller) return;
		cancelAnimationFrame(frame);
		frame = requestAnimationFrame(() => {
			if (scroller) scroller.scrollTop = scroller.scrollHeight;
		});
	});
</script>

<div class="relative min-h-0 flex-1">
	<div bind:this={scroller} onscroll={onScroll} class="h-full space-y-3 overflow-y-auto px-3 py-4">
		{#if items.length === 0}
			<div class="flex h-full flex-col items-center justify-center px-6 text-center">
				<p class="text-sm font-semibold {who.nameText}">{who.name} is behind the bar.</p>
				<p class="mt-1 text-xs text-gray-500">Grounded in {who.groundedIn}.</p>
				<p class="mt-4 text-xs text-gray-400">
					Ask for something by mood, by spirit, or by what you have on the shelf.
				</p>
			</div>
		{/if}

		{#each items as item (item.id)}
			{#if isTurn(item)}
				<BarMessage
					turn={item}
					streaming={streaming && item.id === lastId}
					{onRetry}
					{onNavigate}
				/>
			{:else}
				<div class="flex items-center gap-3 py-1 text-[0.7rem] text-gray-400 italic">
					<span class="h-px flex-1 bg-gray-200"></span>
					<span class="text-center">{item.label}</span>
					<span class="h-px flex-1 bg-gray-200"></span>
				</div>
			{/if}
		{/each}
	</div>

	{#if !pinned}
		<button
			type="button"
			onclick={toBottom}
			class="absolute bottom-3 left-1/2 flex -translate-x-1/2 cursor-pointer items-center gap-1 rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-xs text-gray-600 shadow-sm backdrop-blur-sm hover:text-gray-900"
		>
			New answer ↓
		</button>
	{/if}
</div>
