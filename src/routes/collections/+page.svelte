<script lang="ts">
	import type { PageData } from './$types';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import { fade, fly } from 'svelte/transition';
	import { resolve } from '$app/paths';
	import { collectionCocktails } from '$lib/utils/collections';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Cocktail Collections - The Krauss Haus</title>
	<meta name="description" content="Handpicked sets of cocktails from The Krauss Haus" />
	<meta property="og:image" content="https://thekrausshaus.com/images/open-graph/og-root.jpg" />
</svelte:head>

<main
	class="flex-1 p-6 bg-[#f8f9fa] overflow-y-auto"
	in:fly={{ y: 20, duration: 400, delay: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="max-w-7xl mx-auto pb-8">
		<Breadcrumbs />

		<div class="max-w-5xl mx-auto">
			<header class="text-center mb-12" in:fly={{ y: 20, duration: 400, delay: 400 }}>
				<h1 class="text-4xl font-bold text-gray-800 mb-4">Cocktail Collections</h1>
				<p class="text-gray-600">Handpicked sets of cocktails that belong together</p>
			</header>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each data.collections as collection, index (collection.slug)}
					{@const count = collectionCocktails(collection).length}
					<a
						href={resolve(`/collections/${collection.slug}`)}
						class="group block rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-white"
						in:fly={{ y: 20, duration: 400, delay: 600 + index * 100 }}
					>
						<div class="p-6">
							<div class="flex items-baseline justify-between gap-4 mb-2">
								<h2 class="text-2xl font-bold text-gray-800">{collection.title}</h2>
								<p class="shrink-0 text-sm text-gray-500">
									{count}
									{count === 1 ? 'cocktail' : 'cocktails'}
								</p>
							</div>
							<p class="text-gray-600 text-sm">{collection.description}</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>

	<ScrollToTop />
</main>
