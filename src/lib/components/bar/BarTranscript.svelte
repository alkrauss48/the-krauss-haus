<script lang="ts">
	import { slide } from 'svelte/transition';
	import { BARTENDER_KEYS, bartenders, type BartenderKey } from '$lib/bar/bartenders';
	import { isTurn, type Activity, type TranscriptItem } from '$lib/bar/bar.svelte';
	import BarMessage from './BarMessage.svelte';

	let {
		items,
		bartender,
		streaming,
		activity,
		waiting,
		onRetry,
		onStop,
		onNavigate
	}: {
		items: TranscriptItem[];
		bartender: BartenderKey;
		streaming: boolean;
		activity: Activity;
		waiting: number;
		onRetry: (id: string) => void;
		onStop: () => void;
		onNavigate: () => void;
	} = $props();

	let scroller = $state<HTMLDivElement | null>(null);
	let pinned = $state(true);
	let frame = 0;
	/** The introductions stay folded away until a guest asks who they are talking to. */
	let meeting = $state(false);

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
		// The status line grows and shrinks inside the last bubble, so it moves the bottom too.
		void activity.kind;
		if (!pinned || !scroller) return;
		cancelAnimationFrame(frame);
		frame = requestAnimationFrame(() => {
			if (scroller) scroller.scrollTop = scroller.scrollHeight;
		});
	});
</script>

<div class="relative min-h-0 flex-1">
	<div
		bind:this={scroller}
		onscroll={onScroll}
		class="h-full space-y-3 overflow-y-auto overscroll-contain px-3 py-4"
	>
		{#if items.length === 0}
			<!--
				The only place the two of them get introduced. A guest who does not know the
				difference will pick wrong and blame the answer, so the one line each — and, for
				Eddie, the one thing he cannot do — is always on show. It used to sit in two
				bordered cards, which read as two more buttons in a panel that already has plenty;
				now it is prose, and the longer version waits behind a plainly-worded link.
			-->
			<div class="flex min-h-full flex-col justify-center px-2">
				<p class="text-center text-sm font-semibold {who.nameText}">
					{who.name} is behind the bar.
				</p>
				<p class="mt-1 text-center text-xs text-gray-500">
					Ask for something by mood, by spirit, or by what you have on the shelf.
				</p>

				<div class="mt-5 space-y-3.5">
					{#each BARTENDER_KEYS as key (key)}
						{@const them = bartenders[key]}
						<div class="border-l-2 border-gray-200 pl-3">
							<p class="flex items-center gap-1.5">
								<span class="h-1.5 w-1.5 rounded-full {them.accentDot}" aria-hidden="true"></span>
								<span class="text-xs font-bold tracking-wide {them.nameText}">
									{them.name.toUpperCase()}
								</span>
								<span class="text-[0.7rem] text-gray-400">{them.role}</span>
							</p>
							<p class="mt-1 text-xs leading-relaxed text-gray-600">{them.bestAt}</p>
							{#if meeting}
								<div id="bar-about-{key}" transition:slide={{ duration: 180 }}>
									<p class="mt-1.5 text-xs leading-relaxed text-gray-600">{them.about}</p>
									<p class="mt-1.5 text-[0.7rem] leading-relaxed text-gray-400">
										Works from {them.groundedIn}.
									</p>
								</div>
							{/if}
							{#if them.caveat}
								<p class="mt-1 text-[0.7rem] leading-relaxed text-gray-400">{them.caveat}</p>
							{/if}
						</div>
					{/each}
				</div>

				<p class="mt-3.5 text-center">
					<button
						type="button"
						onclick={() => (meeting = !meeting)}
						aria-expanded={meeting}
						aria-controls={BARTENDER_KEYS.map((key) => `bar-about-${key}`).join(' ')}
						class="cursor-pointer rounded text-[0.7rem] text-gray-500 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-gray-800 hover:decoration-gray-500"
					>
						{meeting ? 'Show less' : 'Learn more about the bartenders'}
					</button>
				</p>

				<p class="mt-3 px-1 text-center text-[0.7rem] leading-relaxed text-gray-400">
					Tap a name up top to switch. Either one can call the other over mid-answer.
				</p>

				<p class="mt-5 flex items-center justify-center gap-1.5 text-[0.7rem] text-gray-400">
					<svg
						class="h-3 w-3 shrink-0"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
						/>
					</svg>
					Nothing you ask here is stored.
				</p>
			</div>
		{/if}

		{#each items as item (item.id)}
			{#if isTurn(item)}
				<BarMessage
					turn={item}
					streaming={streaming && item.id === lastId}
					activity={item.id === lastId ? activity : { kind: 'idle' }}
					{waiting}
					{onRetry}
					{onStop}
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
