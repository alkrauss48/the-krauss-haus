<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head>
	<meta property="og:url" content="https://thekrausshaus.com{$page.url.pathname}" />
</svelte:head>

{@render children()}
