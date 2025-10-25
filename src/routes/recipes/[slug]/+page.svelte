<script lang="ts">
	import type { PageData } from './$types';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import CopyLinkButton from '$lib/components/CopyLinkButton.svelte';
	import { resolve } from '$app/paths';
	import { fade, fly } from 'svelte/transition';
	import { allCocktails } from '$lib/data/all-cocktails';
	import { cocktailUsesRecipe } from '$lib/utils/recipe-cocktail';
	import { syrups, infusions, other } from '$lib/data/all-recipes';

	export let data: PageData;
	const { recipe } = data;

	// Generate URL for cocktails page with recipe filter
	function getRecipeFilterUrl(): string {
		// Determine which category this recipe belongs to
		const isSyrup = syrups.some((s) => s.slug === recipe.slug);
		const isInfusion = infusions.some((i) => i.slug === recipe.slug);
		const isOther = other.some((o) => o.slug === recipe.slug);

		if (isSyrup) {
			return `/cocktails?homemade-syrups=${encodeURIComponent(recipe.name)}`;
		} else if (isInfusion) {
			return `/cocktails?homemade-infusions=${encodeURIComponent(recipe.name)}`;
		} else if (isOther) {
			return `/cocktails?other=${encodeURIComponent(recipe.name)}`;
		}

		return '/cocktails';
	}

	// Count cocktails that use this recipe
	function getCocktailCount(): number {
		return allCocktails.filter((cocktail) => cocktailUsesRecipe(cocktail, recipe)).length;
	}

	const cocktailCount = getCocktailCount();
</script>

<svelte:head>
	<title>{recipe.name} Recipe - The Krauss Haus</title>
	<meta name="description" content={recipe.description || `Recipe for ${recipe.name}`} />
	<meta property="og:title" content="{recipe.name} Recipe - The Krauss Haus" />
	<meta property="og:description" content={recipe.description || `Recipe for ${recipe.name}`} />
</svelte:head>

<main
	class="min-h-screen p-6 bg-[#f8f9fa] overflow-y-auto"
	in:fly={{ y: 20, duration: 400, delay: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="max-w-4xl mx-auto pb-8">
		<Breadcrumbs />

		<div
			class="bg-white rounded-lg shadow-lg overflow-hidden"
			in:fly={{ y: 20, duration: 400, delay: 400 }}
		>
			<!-- Content Section -->
			<div class="p-8">
				<!-- Header -->
				<header class="mb-8">
					<div class="flex items-center gap-3 mb-2">
						<h1 class="text-4xl font-bold text-gray-800">{recipe.name}</h1>
						<CopyLinkButton
							url={typeof window !== 'undefined' ? window.location.href : ''}
							ariaLabel="Copy link to {recipe.name} recipe"
							size="md"
						/>
					</div>
					{#if recipe.description}
						<p class="text-lg text-gray-700 leading-relaxed">{recipe.description}</p>
					{/if}
				</header>

				<!-- Cocktails Section (Mobile - Above Ingredients) -->
				{#if cocktailCount > 0}
					<section class="mb-8 block lg:hidden">
						<div class="bg-amber-50 border border-amber-200 rounded-lg p-4">
							<p class="text-sm text-gray-600 mb-3">
								This recipe is used in {cocktailCount} cocktail{cocktailCount === 1 ? '' : 's'}.
							</p>
							<a
								href={resolve(getRecipeFilterUrl())}
								class="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm gap-2 w-full justify-center"
							>
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
								View Cocktails
							</a>
						</div>
					</section>
				{/if}

				<!-- Ingredients Section -->
				{#if recipe.ingredients && recipe.ingredients.length > 0}
					<section class="mb-8">
						<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
							<!-- Ingredients (Left/Main) -->
							<div class="lg:col-span-2">
								<h2 class="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
								<ul class="space-y-2">
									{#each recipe.ingredients as ingredient (ingredient)}
										<li class="flex items-start">
											<span class="text-amber-600 mr-2 mt-1">•</span>
											<span class="text-gray-700">{ingredient}</span>
										</li>
									{/each}
								</ul>
							</div>

							<!-- Cocktails Sidebar (Desktop - Right Side) -->
							<div class="lg:col-span-1 hidden lg:block">
								<!-- View Cocktails Button -->
								{#if cocktailCount > 0}
									<div class="bg-amber-50 border border-amber-200 rounded-lg p-4">
										<h3 class="text-sm font-semibold text-gray-800 mb-2">Used In Cocktails</h3>
										<p class="text-sm text-gray-600 mb-3">
											This recipe is used in {cocktailCount} cocktail{cocktailCount === 1
												? ''
												: 's'}.
										</p>
										<a
											href={resolve(getRecipeFilterUrl())}
											class="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm gap-2 w-full justify-center"
										>
											<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
												/>
											</svg>
											View Cocktails ({cocktailCount})
										</a>
									</div>
								{/if}
							</div>
						</div>
					</section>
				{/if}

				<!-- Instructions Section -->
				{#if recipe.instructions}
					<section class="mb-8">
						<h2 class="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
						<p class="text-gray-700 leading-relaxed">{recipe.instructions}</p>
					</section>
				{/if}

				<!-- Notes Section -->
				{#if recipe.notes}
					<section class="mb-8">
						<h2 class="text-2xl font-bold text-gray-800 mb-4">Notes</h2>
						<p class="text-gray-700 leading-relaxed">{recipe.notes}</p>
					</section>
				{/if}

				<!-- Back to Recipes Link -->
				<section class="pt-8 border-t border-gray-200">
					<div class="flex flex-wrap gap-3">
						<a
							href={resolve('/recipes')}
							class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
						>
							Back to Recipes
						</a>
					</div>
				</section>
			</div>
		</div>
	</div>

	<ScrollToTop />
</main>
