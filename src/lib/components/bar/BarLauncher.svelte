<script lang="ts">
	import { bar } from '$lib/bar/bar.svelte';
	import Sparkle from './Sparkle.svelte';
</script>

<!--
	The bar sits in the top-right utility cluster beside search rather than in a floating badge
	over the menu. Unlike search, it is warm and filled: the gradient and the sparkle are the
	convention guests already read as "this one writes you an answer", so the button says what
	it is before it is opened. Same glyph as the cocktail-page on-ramp.
-->
<button
	type="button"
	onclick={() => bar.openPanel()}
	aria-haspopup="dialog"
	aria-expanded={bar.open}
	aria-label="Ask the bartender"
	title="Ask the bartender"
	class="group cursor-pointer rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-2 text-white shadow-sm shadow-amber-600/30 border border-amber-300/60 transition-all hover:-translate-y-0.5 hover:from-amber-300 hover:to-orange-400 hover:shadow-md hover:shadow-amber-600/40"
>
	<Sparkle
		class="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
	/>
</button>
