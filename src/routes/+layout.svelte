<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { page } from '$app/stores';
	import { toggleCostMode, toastMessage } from '$lib/stores/costMode';
	import SearchModal from '$lib/components/SearchModal.svelte';
	import SiteNav from '$lib/components/SiteNav.svelte';
	import BarPanel from '$lib/components/bar/BarPanel.svelte';
	import { bar } from '$lib/bar/bar.svelte';

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

			// Cmd/Ctrl+J to pull up a stool
			if ((event.metaKey || event.ctrlKey) && !event.shiftKey && event.code === 'KeyJ') {
				event.preventDefault();
				bar.openPanel();
			}

			// "/" to open search, "b" for the bar — neither while typing in a field
			if (!event.metaKey && !event.ctrlKey && !event.altKey) {
				const target = event.target as HTMLElement | null;
				const tag = target?.tagName;
				const isEditable =
					tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target?.isContentEditable;

				if (event.key === '/' && !isEditable && !showSearch) {
					event.preventDefault();
					showSearch = true;
				}

				if (event.key === 'b' && !isEditable && !showSearch && !bar.open) {
					event.preventDefault();
					bar.openPanel();
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

<div class="flex min-h-dvh flex-col">
	<SiteNav onSearch={openSearch} searchOpen={showSearch} />

	{@render children()}
</div>

<SearchModal bind:isOpen={showSearch} onClose={closeSearch} />

<BarPanel />

{#if $toastMessage}
	<div
		class="fixed bottom-4 left-4 z-50 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-lg"
	>
		{$toastMessage}
	</div>
{/if}
