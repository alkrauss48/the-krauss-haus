<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { page } from '$app/stores';
	import { toggleCostMode, toastMessage } from '$lib/stores/costMode';
	import SearchModal from '$lib/components/SearchModal.svelte';

	let { children } = $props();

	let showSearch = $state(false);

	function openSearch() {
		showSearch = true;
	}

	function closeSearch() {
		showSearch = false;
	}

	onMount(() => {
		function handleKeydown(event: KeyboardEvent) {
			// Ctrl+Shift+4 — use event.code for layout-independence
			if (event.ctrlKey && event.shiftKey && event.code === 'Digit4') {
				event.preventDefault();
				toggleCostMode();
			}

			// Cmd/Ctrl+K to open search
			if ((event.metaKey || event.ctrlKey) && !event.shiftKey && event.code === 'KeyK') {
				event.preventDefault();
				showSearch = true;
			}

			// "/" to open search when not typing in a field
			if (event.key === '/' && !event.metaKey && !event.ctrlKey && !event.altKey) {
				const target = event.target as HTMLElement | null;
				const tag = target?.tagName;
				const isEditable =
					tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target?.isContentEditable;
				if (!isEditable && !showSearch) {
					event.preventDefault();
					showSearch = true;
				}
			}
		}

		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

<svelte:head>
	<meta property="og:url" content="https://thekrausshaus.com{$page.url.pathname}" />
</svelte:head>

<div class="absolute top-3 right-3 sm:top-4 sm:right-4 z-30">
	<button
		type="button"
		class="cursor-pointer p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-500 hover:text-amber-600 hover:bg-white shadow-sm hover:shadow-md transition-all border border-gray-200/60"
		on:click={openSearch}
		aria-label="Open search"
		aria-haspopup="dialog"
		aria-expanded={showSearch}
	>
		<svg
			class="h-5 w-5"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			aria-hidden="true"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
			/>
		</svg>
	</button>
</div>

{@render children()}

<SearchModal bind:isOpen={showSearch} onClose={closeSearch} />

{#if $toastMessage}
	<div
		class="fixed bottom-4 right-4 z-50 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-lg"
	>
		{$toastMessage}
	</div>
{/if}
