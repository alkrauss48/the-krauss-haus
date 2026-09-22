<script lang="ts">
	import { bar } from '$lib/bar/bar.svelte';
	import { bartenders } from '$lib/bar/bartenders';
	import Sparkle from './Sparkle.svelte';

	let { title }: { title: string } = $props();

	// Always Sasha, whoever is behind the bar at the moment: she is the only one who can see
	// this site's cocktails, so she is the only one this button can honestly offer. Opening
	// the panel switches to her to match.
	const who = bartenders.sasha;
</script>

<!--
	Named and amber rather than a grey "Ask": the guest should know which bartender they are
	pulling aside, and the sparkle should say the answer gets written on the spot. On small
	screens the name drops and the sparkle carries it, so the header stays on one line.
-->
<button
	type="button"
	onclick={() => bar.prefill(`Tell me about the ${title}.`, who.key)}
	aria-label="Ask {who.name} about {title}"
	aria-haspopup="dialog"
	title="Ask {who.name} about this one"
	class="group flex cursor-pointer items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 py-1.5 pr-3 pl-2.5 text-sm font-medium whitespace-nowrap text-amber-700 transition-colors hover:border-amber-300 hover:bg-amber-100 hover:text-amber-800"
>
	<Sparkle
		class="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
	/>
	<span class="hidden sm:inline">Ask {who.name}</span>
	<span class="sm:hidden">Ask</span>
</button>
