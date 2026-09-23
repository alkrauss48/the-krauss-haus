<script lang="ts">
	import { parseMarkdown } from '$lib/bar/markdown';
	import { bartenders, isBartenderKey } from '$lib/bar/bartenders';
	import Markdown from './Markdown.svelte';

	let {
		bartender,
		answer,
		onNavigate
	}: { bartender: string; answer: string; onNavigate?: () => void } = $props();

	const key = $derived(isBartenderKey(bartender.toLowerCase()) ? bartender.toLowerCase() : 'eddie');
	const who = $derived(bartenders[key as 'sasha' | 'eddie']);

	const reduced =
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;

	// A consult lands whole while everything around it arrived a character at a time. Typing
	// it in keeps the pacing of the conversation — it reads as somebody speaking on the other
	// end of a line rather than a block of text appearing.
	const total = $derived(answer.length);
	let shown = $state(0);

	$effect(() => {
		// Under reduced motion the card simply appears whole — the information survives, only
		// the movement stops.
		if (reduced) {
			shown = total;
			return;
		}
		if (shown >= total) return;
		const timer = setInterval(() => {
			// Several characters per tick: 15ms/char one at a time would take a minute on a
			// 3,900-character reply, which is what Eddie actually sends.
			shown = Math.min(total, shown + 12);
			if (shown >= total) clearInterval(timer);
		}, 16);
		return () => clearInterval(timer);
	});

	const typing = $derived(shown < total);
	const blocks = $derived(parseMarkdown(answer.slice(0, shown), { partial: typing }));

	// Eddie's asides run long. Clamped until asked, or a supporting quote swamps the answer
	// it was supporting.
	let expanded = $state(false);
	const LONG = 600;
	const isLong = $derived(total > LONG);
</script>

<figure class="my-3 border-l-2 pl-3 sm:pl-4 {who.accentRule}">
	<figcaption
		class="mb-1 flex items-center gap-1.5 text-xs font-semibold tracking-wide {who.accentText}"
	>
		<svg
			class="h-3.5 w-3.5"
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
		<span>{who.name.toUpperCase()} SAYS</span>
		<span class="font-normal text-gray-400">— {who.role}</span>
	</figcaption>

	<blockquote
		class="overflow-hidden text-[0.94rem] leading-relaxed text-gray-700 italic {!expanded && isLong
			? 'max-h-48'
			: ''}"
	>
		<Markdown {blocks} compact {onNavigate} />
	</blockquote>

	{#if isLong}
		<button
			type="button"
			class="mt-1 cursor-pointer text-xs font-medium {who.accentText} hover:underline"
			onclick={() => (expanded = !expanded)}
		>
			{expanded ? 'Less' : 'Read the rest'}
		</button>
	{/if}
</figure>
