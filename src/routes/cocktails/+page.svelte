<script lang="ts">
	import type { PageData } from './$types';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import CocktailsTable from '$lib/components/CocktailsTable.svelte';
	import { fade, fly } from 'svelte/transition';

	export let data: PageData;
</script>

<svelte:head>
	<title>All Cocktails - The Krauss Haus</title>
	<meta name="description" content="Browse all cocktails available at The Krauss Haus" />
	<meta property="og:image" content="https://thekrausshaus.com/images/open-graph/og-root.jpg" />
</svelte:head>

<main
	class="min-h-screen p-6 bg-[#f8f9fa] overflow-y-auto"
	in:fly={{ y: 20, duration: 400, delay: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="max-w-6xl mx-auto pb-8">
		<Breadcrumbs />

		<header class="text-center mb-8" in:fly={{ y: 20, duration: 400, delay: 400 }}>
			<h1 class="text-4xl font-bold text-gray-800 mb-4">All Cocktails</h1>
			<p class="text-gray-600">Browse our complete collection of cocktail recipes</p>
		</header>

		<CocktailsTable
			cocktails={data.cocktails}
			initialSearchTerm={data.searchTerm}
			initialSelectedTags={data.selectedTags}
			initialSelectedIngredients={data.selectedIngredients}
			initialLogicMode={data.logicMode}
		/>
	</div>

	<ScrollToTop />
</main>
