<script lang="ts">
	import { onMount } from 'svelte';

	let showScrollTop = false;

	function handleScroll(): void {
		showScrollTop = window.scrollY > 300;
	}

	function scrollToTop(): void {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<button
	on:click={scrollToTop}
	class="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-110 cursor-pointer z-30 {showScrollTop
		? 'opacity-100 translate-y-0'
		: 'opacity-0 translate-y-4 pointer-events-none'}"
	aria-label="Scroll to top"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-6 w-6 text-gray-600"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M5 10l7-7m0 0l7 7m-7-7v18"
		/>
	</svg>
</button>
