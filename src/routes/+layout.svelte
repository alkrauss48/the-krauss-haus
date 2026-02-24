<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { page } from '$app/stores';
	import { toggleCostMode, toastMessage } from '$lib/stores/costMode';

	let { children } = $props();

	onMount(() => {
		function handleKeydown(event: KeyboardEvent) {
			// Ctrl+Shift+4 — use event.code for layout-independence
			if (event.ctrlKey && event.shiftKey && event.code === 'Digit4') {
				event.preventDefault();
				toggleCostMode();
			}
		}

		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

<svelte:head>
	<meta property="og:url" content="https://thekrausshaus.com{$page.url.pathname}" />
</svelte:head>

{@render children()}

{#if $toastMessage}
	<div
		class="fixed bottom-4 right-4 z-50 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-lg"
	>
		{$toastMessage}
	</div>
{/if}
