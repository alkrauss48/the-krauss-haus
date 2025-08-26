<script lang="ts">
	import type { Recipe } from '$lib/types/recipes';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { allCocktails } from '$lib/data/all-cocktails';
	import CopyLinkButton from './CopyLinkButton.svelte';

	export let recipes: Recipe[];

	// Get the recipe slug URL
	function getRecipeUrl(recipe: Recipe): string {
		return `/recipes/${recipe.slug}`;
	}

	// Convert category label to URL-friendly key (same as cocktails page)
	function categoryToUrlKey(categoryLabel: string): string {
		return categoryLabel.toLowerCase().replace(/\s+/g, '-');
	}

	// Generate URL for cocktails page with recipe tag filter
	function getCocktailsUrlWithTag(recipe: Recipe): string {
		if (!recipe.tag) return '/cocktails';

		const categoryKey = categoryToUrlKey(recipe.tag.category.label);
		const tagLabel = recipe.tag.label;
		return `/cocktails?${categoryKey}=${encodeURIComponent(tagLabel)}`;
	}

	function navigateToCocktails(recipe: Recipe): void {
		const url = getCocktailsUrlWithTag(recipe);
		goto(url);
	}

	// Count cocktails that use this recipe's tag
	function getCocktailCountForRecipe(recipe: Recipe): number {
		if (!recipe.tag) return 0;

		return allCocktails.filter((cocktail) =>
			(cocktail.tags || []).some((cocktailTag) => cocktailTag.label === recipe.tag!.label)
		).length;
	}
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	{#each recipes as recipe, i (recipe.name)}
		<div
			class="bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
			in:fly={{ y: 20, duration: 400, delay: i * 50 }}
		>
			<a
				href={getRecipeUrl(recipe)}
				class="block p-4 hover:text-gray-900 transition-colors duration-200"
				data-sveltekit-prefetch
			>
				<div class="flex items-start justify-between">
					<div class="flex-1">
						<h3 class="font-semibold text-gray-800 mb-1">{recipe.name}</h3>
						{#if recipe.description}
							<p class="text-sm text-gray-600">{recipe.description}</p>
						{/if}
					</div>
				</div>
			</a>

			<!-- Copy Link Button -->
			<div class="px-4 pb-4 pt-2 border-t border-gray-100">
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-2">
						{#if recipe.tag && getCocktailCountForRecipe(recipe) > 0}
							{@const cocktailCount = getCocktailCountForRecipe(recipe)}
							<button
								class="inline-flex items-center px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded text-xs gap-1.5 cursor-pointer transition-colors duration-200"
								on:click={() => navigateToCocktails(recipe)}
								aria-label="View {cocktailCount} cocktail{cocktailCount === 1
									? ''
									: 's'} that use {recipe.name}"
							>
								<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
								{cocktailCount} cocktail{cocktailCount === 1 ? '' : 's'}
							</button>
						{/if}
					</div>
					<CopyLinkButton
						url={typeof window !== 'undefined'
							? `${window.location.origin}${getRecipeUrl(recipe)}`
							: ''}
						ariaLabel="Copy link to {recipe.name} recipe"
						size="sm"
					/>
				</div>
			</div>
		</div>
	{/each}
</div>
