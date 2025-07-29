<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { navigationStore } from '$lib/stores/navigation';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		navigationStore.init();
	});
</script>

<svelte:head>
	<meta property="og:url" content="https://thekrausshaus.com{$page.url.pathname}" />
</svelte:head>

{@render children()}
