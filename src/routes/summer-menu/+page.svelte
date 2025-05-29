<script lang="ts">
	import CocktailCard from '$lib/components/CocktailCard.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import BackButton from '$lib/components/BackButton.svelte';
	import { fade, fly } from 'svelte/transition';
	import { featuredDrink, categories } from '$lib/data/summer-menu';
	import type { Cocktail, Category } from '$lib/types/cocktails';
	import { sectionColors } from '$lib/types/colors';
</script>

<svelte:head>
	<title>Summer Menu - The Krauss Haus</title>
	<meta name="description" content="Summer cocktail menu at The Krauss Haus" />
</svelte:head>

<main
	class="min-h-screen p-6 bg-[#f8f9fa] overflow-y-auto"
	in:fly={{ y: 20, duration: 400, delay: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="max-w-7xl mx-auto pb-8">
		<BackButton />

		<header class="text-center mb-16" in:fly={{ y: 20, duration: 400, delay: 400 }}>
			<h1 class="text-4xl font-bold text-gray-800 mb-4">Summer Menu</h1>
			<p class="text-gray-600">Refreshing cocktails for the warm season</p>
		</header>

		<div class="space-y-24">
			<!-- Featured Welcome Drink -->
			<section
				class="bg-white rounded-lg shadow-lg p-8 border border-amber-100 relative overflow-hidden"
				in:fly={{ y: 20, duration: 400, delay: 500 }}
			>
				<div class="max-w-xl mx-auto">
					<div class="text-center mb-8">
						<h2 class="text-3xl font-medium text-gray-800 mb-2 tracking-wide">Welcome Drink</h2>
						<p class="text-lg text-gray-600 font-light leading-relaxed">
							Because you shouldn't have to worry about what to order the moment you walk in the
							door.
						</p>
					</div>
					<div class="max-w-md mx-auto">
						<CocktailCard
							title={featuredDrink.title}
							description={featuredDrink.description}
							imagePath={featuredDrink.imagePath}
							bgColors={sectionColors.featured}
							ingredients={featuredDrink.ingredients}
						/>
					</div>
				</div>
			</section>

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
								<CocktailCard
									title={cocktail.title}
									description={cocktail.description}
									imagePath={cocktail.imagePath}
									bgColors={category.bgColors}
									variations={cocktail.variations}
									ingredients={cocktail.ingredients}
								/>
							</div>
						{/each}
					</div>
				</section>
			{/each}
		</div>
	</div>

	<ScrollToTop />
</main>
