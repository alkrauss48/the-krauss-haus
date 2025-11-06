<script lang="ts">
	import { SvelteSet } from 'svelte/reactivity';
	import { slide } from 'svelte/transition';
	import { fade, fly } from 'svelte/transition';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import { allIngredientCategories } from '$lib/data/all-ingredients';
	import { IngredientType } from '$lib/enums/ingredientType';
	import type { IngredientCategory, IngredientSubcategory } from '$lib/types/ingredients';
	import { resolve } from '$app/paths';

	let selectedType: IngredientType | 'homemade' | null = null;
	let searchTerm = '';

	// Track which categories are expanded
	let expandedCategories = new SvelteSet<string>();

	function toggleCategory(categoryLabel: string): void {
		if (expandedCategories.has(categoryLabel)) {
			expandedCategories.delete(categoryLabel);
		} else {
			expandedCategories.add(categoryLabel);
		}
		// Reassign to trigger reactivity
		expandedCategories = new SvelteSet(expandedCategories);
	}

	function expandAll(): void {
		// Add filtered categories to existing expanded set (don't remove non-visible ones)
		const newSet = new SvelteSet(expandedCategories);
		filteredCategories.forEach((cat) => newSet.add(cat.label));
		expandedCategories = newSet;
	}

	function collapseAll(): void {
		// Only collapse filtered categories (preserve expanded state of non-visible ones)
		const newSet = new SvelteSet(expandedCategories);
		filteredCategories.forEach((cat) => newSet.delete(cat.label));
		expandedCategories = newSet;
	}

	function getTotalIngredientCount(category: IngredientCategory): number {
		return category.subcategories.reduce(
			(total, subcategory) => total + subcategory.ingredients.length,
			0
		);
	}

	// Check if a string contains the search term (case-insensitive)
	function matchesSearch(text: string, term: string): boolean {
		if (!term) return true;
		return text.toLowerCase().includes(term.toLowerCase());
	}

	// Filter categories based on search term
	function filterCategoriesBySearch(
		categories: IngredientCategory[],
		search: string
	): IngredientCategory[] {
		if (!search.trim()) {
			return categories;
		}

		return categories
			.map((category) => {
				const filteredSubcategories: IngredientSubcategory[] = [];

				for (const subcategory of category.subcategories) {
					// Skip "Default" subcategory when matching subcategory name
					const subcategoryMatches =
						subcategory.label.toLowerCase() !== 'default' &&
						matchesSearch(subcategory.label, search);
					const filteredIngredients = subcategory.ingredients.filter((ingredient) => {
						const titleMatches = matchesSearch(ingredient.title, search);
						const groupMatches = ingredient.group ? matchesSearch(ingredient.group, search) : false;
						return titleMatches || groupMatches;
					});

					// Include subcategory if:
					// - Subcategory name matches (show all its ingredients)
					// - Any ingredient in subcategory matches
					if (subcategoryMatches || filteredIngredients.length > 0) {
						filteredSubcategories.push({
							...subcategory,
							ingredients: subcategoryMatches ? subcategory.ingredients : filteredIngredients
						});
					}
				}

				// Only include category if it has matching subcategories
				if (filteredSubcategories.length > 0) {
					return {
						...category,
						subcategories: filteredSubcategories
					};
				}

				return null;
			})
			.filter((category): category is IngredientCategory => category !== null);
	}

	// Filter categories by selected type or homemade filter
	$: typeFilteredCategories = (() => {
		if (selectedType === 'homemade') {
			// Filter for categories that have ingredients with recipes
			return allIngredientCategories
				.map((category) => {
					const filteredSubcategories = category.subcategories
						.map((subcategory) => ({
							...subcategory,
							ingredients: subcategory.ingredients.filter((ingredient) => ingredient.recipe !== undefined)
						}))
						.filter((subcategory) => subcategory.ingredients.length > 0);

					if (filteredSubcategories.length > 0) {
						return {
							...category,
							subcategories: filteredSubcategories
						};
					}
					return null;
				})
				.filter((category): category is IngredientCategory => category !== null);
		} else if (selectedType) {
			return allIngredientCategories.filter((category) => category.type === selectedType);
		}
		return allIngredientCategories;
	})();

	// Then filter by search term
	$: filteredCategories = filterCategoriesBySearch(typeFilteredCategories, searchTerm);

	// Track previous search term to detect when search is cleared
	let previousSearchTerm = '';

	// Auto-expand/collapse based on search state (only when search changes, not when tabs change)
	$: {
		const currentSearch = searchTerm.trim();
		const previousSearch = previousSearchTerm.trim();

		if (currentSearch && !previousSearch) {
			// Starting a search - expand all filtered categories
			expandedCategories = new SvelteSet(filteredCategories.map((cat) => cat.label));
		} else if (!currentSearch && previousSearch) {
			// Clearing search - collapse all
			expandedCategories = new SvelteSet<string>();
		} else if (currentSearch && currentSearch !== previousSearch) {
			// Search term changed - update expanded categories to match filtered results
			expandedCategories = new SvelteSet(filteredCategories.map((cat) => cat.label));
		}
		// If tabs change but search hasn't changed, don't modify expandedCategories

		previousSearchTerm = searchTerm;
	}
</script>

<svelte:head>
	<title>Ingredients - The Krauss Haus</title>
	<meta name="description" content="Browse all ingredients used in cocktails at The Krauss Haus" />
	<meta property="og:image" content="https://thekrausshaus.com/images/open-graph/og-root.jpg" />
</svelte:head>

<main
	class="min-h-screen p-6 bg-[#f8f9fa] overflow-y-auto"
	in:fly={{ y: 20, duration: 400, delay: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="max-w-6xl mx-auto pb-8">
		<Breadcrumbs />

		<header class="text-center mb-12" in:fly={{ y: 20, duration: 400, delay: 400 }}>
			<h1 class="text-4xl font-bold text-gray-800 mb-4">Ingredients</h1>
			<p class="text-gray-600">Explore all ingredients used in our cocktails</p>
		</header>

		<!-- Search Bar -->
		<div class="mb-8 max-w-2xl mx-auto" in:fly={{ y: 20, duration: 400, delay: 500 }}>
			<div class="relative">
				<input
					type="text"
					bind:value={searchTerm}
					placeholder="Search ingredients..."
					class="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-700"
				/>
				<svg
					class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
				{#if searchTerm}
					<button
						class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
						on:click={() => (searchTerm = '')}
						aria-label="Clear search"
					>
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				{/if}
			</div>
		</div>

		<!-- Type Filter Tabs -->
		<div
			class="mb-12 flex justify-center gap-2 sm:gap-4"
			in:fly={{ y: 20, duration: 400, delay: 600 }}
		>
			<button
				class="px-3 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer {selectedType ===
				null
					? 'bg-gray-800 text-white shadow-md'
					: 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'}"
				on:click={() => (selectedType = null)}
			>
				All
			</button>
			<button
				class="px-3 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer {selectedType ===
				IngredientType.Alcoholic
					? 'bg-gray-800 text-white shadow-md'
					: 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'}"
				on:click={() => (selectedType = IngredientType.Alcoholic)}
			>
				{IngredientType.Alcoholic}
			</button>
			<button
				class="px-3 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer {selectedType ===
				IngredientType.NonAlcoholic
					? 'bg-gray-800 text-white shadow-md'
					: 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'}"
				on:click={() => (selectedType = IngredientType.NonAlcoholic)}
			>
				{IngredientType.NonAlcoholic}
			</button>
			<button
				class="px-3 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer {selectedType ===
				'homemade'
					? 'bg-gray-800 text-white shadow-md'
					: 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'}"
				on:click={() => (selectedType = 'homemade')}
			>
				Homemade
			</button>
		</div>

		<!-- Expand/Collapse Controls -->
		{#if filteredCategories.length > 0}
			<div class="mb-6 flex justify-end gap-2">
				<button
					class="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer underline decoration-dotted underline-offset-2"
					on:click={expandAll}
				>
					Expand all
				</button>
				<span class="text-gray-400">|</span>
				<button
					class="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer underline decoration-dotted underline-offset-2"
					on:click={collapseAll}
				>
					Collapse all
				</button>
			</div>
		{/if}

		<!-- Ingredient Categories -->
		<div class="space-y-4">
			{#each filteredCategories as category (category.label)}
				{@const isExpanded = expandedCategories.has(category.label)}
				{@const totalCount = getTotalIngredientCount(category)}
				<div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
					<!-- Category Header -->
					<button
						class="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
						on:click={() => toggleCategory(category.label)}
					>
						<h2 class="text-xl font-semibold text-gray-800">{category.label}</h2>
						<div class="flex items-center gap-3">
							<span class="text-xs sm:text-sm text-gray-500 font-medium text-right">
								{totalCount}
								{totalCount === 1 ? 'ingredient' : 'ingredients'}
							</span>
							<svg
								class="w-5 h-5 text-gray-400 transition-transform duration-200"
								class:rotate-180={isExpanded}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</div>
					</button>

					<!-- Category Content (Subcategories and Ingredients) -->
					{#if isExpanded}
						<div class="px-6 pb-6 pt-2 border-t border-gray-100" transition:slide>
							<div class="space-y-8 mt-4">
								{#each category.subcategories as subcategory (subcategory.label)}
									<div>
										{#if subcategory.label.toLowerCase() !== 'default'}
											<h3 class="text-lg font-medium text-gray-700 mb-4">{subcategory.label}</h3>
										{/if}
										<div class="flex flex-wrap gap-2">
											{#each subcategory.ingredients as ingredient (ingredient.slug)}
												<span
													class="inline-block px-3 py-1.5 rounded-md text-sm flex flex-col sm:inline-flex sm:flex-row items-start sm:items-center bg-gray-50 text-gray-700"
												>
													<div class="flex items-center flex-wrap gap-x-1.5">
														<span>{ingredient.title}</span>
														{#if ingredient.recipe}
															<a
																href={resolve(`/recipes/${ingredient.recipe.slug}`)}
																class="text-xs text-blue-600 hover:text-blue-800 underline decoration-dotted underline-offset-2 font-normal transition-colors"
															>
																See recipe
															</a>
														{/if}
														{#if ingredient.group}
															<span class="text-xs text-gray-400 font-normal hidden sm:inline">
																<span class="mx-1.5">·</span>{ingredient.group}
															</span>
														{/if}
													</div>
													{#if ingredient.group}
														<span class="text-xs text-gray-400 font-normal sm:hidden mt-0.5">
															{ingredient.group}
														</span>
													{/if}
												</span>
											{/each}
										</div>
									</div>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		{#if filteredCategories.length === 0}
			<div class="text-center py-12">
				<p class="text-gray-500">No ingredients found for the selected filter.</p>
			</div>
		{/if}
	</div>

	<ScrollToTop />
</main>
