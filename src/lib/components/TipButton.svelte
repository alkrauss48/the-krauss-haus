<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('open');
	}
</script>

<button
	on:click={handleClick}
	class="text-sm text-gray-400 hover:text-gray-600 transition-colors cursor-pointer underline decoration-dotted underline-offset-2"
	aria-label="Leave a tip"
>
	Leave a Tip
</button>
