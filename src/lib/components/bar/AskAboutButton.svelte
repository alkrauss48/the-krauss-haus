<script lang="ts">
	import { bar } from '$lib/bar/bar.svelte';
	import { bartenders } from '$lib/bar/bartenders';

	let { title }: { title: string } = $props();

	const who = $derived(bartenders[bar.bartender]);
</script>

<button
	type="button"
	onclick={() => bar.prefill(`Tell me about the ${title}.`)}
	aria-label="Ask {who.name} about {title}"
	aria-haspopup="dialog"
	title="Ask {who.name} about this one"
	class="relative cursor-pointer rounded-md p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-amber-600"
>
	<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M5 4h14l-7 8v7m-3 0h6M9 19h6"
		/>
	</svg>
</button>
