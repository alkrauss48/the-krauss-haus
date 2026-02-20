<script lang="ts">
	import CocktailCard from '$lib/components/CocktailCard.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import FeaturedDrink from '$lib/components/FeaturedDrink.svelte';
	import { fade, fly } from 'svelte/transition';
	import { featuredDrinks, categories } from '$lib/data/winter-menu';
</script>

<svelte:head>
	<title>Winter Menu - The Krauss Haus</title>
	<meta name="description" content="Winter cocktail menu at The Krauss Haus" />
	<meta property="og:image" content="https://thekrausshaus.com/images/open-graph/og-root.jpg" />
</svelte:head>

<main
	class="min-h-screen p-6 bg-[#f8f9fa] overflow-y-auto"
	in:fly={{ y: 20, duration: 400, delay: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="max-w-7xl mx-auto pb-8">
		<Breadcrumbs />

		<header class="text-center mb-16" in:fly={{ y: 20, duration: 400, delay: 400 }}>
			<h1 class="text-4xl font-bold text-gray-800 mb-4">Winter Menu</h1>
			<p class="text-gray-600">Warming cocktails for the cold season</p>
		</header>

		<div class="space-y-24">
			<FeaturedDrink {featuredDrinks} />

			{#each categories as category, i (category.title)}
				<section class="relative" in:fly={{ y: 20, duration: 400, delay: 600 + i * 100 }}>
					<!-- Category Header with decorative line -->
					<div class="flex items-center mb-12">
						<div class="flex-1 h-px bg-gray-200"></div>
						<h2 class="text-3xl font-bold text-gray-800 px-8">{category.title}</h2>
						<div class="flex-1 h-px bg-gray-200"></div>
					</div>

					<!-- Cocktail Grid -->
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{#each category.cocktails as cocktail, j (cocktail.title)}
							<div in:fly={{ y: 20, duration: 400, delay: 700 + i * 100 + j * 50 }}>
								<CocktailCard {cocktail} bgColors={category.bgColors} />
							</div>
						{/each}
					</div>
				</section>
			{/each}
		</div>
	</div>

	<ScrollToTop />
</main>
