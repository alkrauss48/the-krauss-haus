<script lang="ts">
	import { fly } from 'svelte/transition';

	function goBack(): void {
		window.history.back();
	}
</script>

<button
	on:click={goBack}
	class="cursor-pointer mb-8 flex items-center text-gray-600 hover:text-amber-600 transition-colors duration-200 group"
	in:fly={{ x: -20, duration: 400, delay: 300 }}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path
			fill-rule="evenodd"
			d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
			clip-rule="evenodd"
		/>
	</svg>
	Back
</button>
