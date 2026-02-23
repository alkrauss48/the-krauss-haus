<script lang="ts">
	import type { PageData } from './$types';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import FilterSidebar from '$lib/components/FilterSidebar.svelte';
	import { fade, fly } from 'svelte/transition';
	import { methodColors } from '$lib/enums/methods';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { allTagCategories } from '$lib/data/all-tags';
	import { allIngredientCategories } from '$lib/data/all-ingredients';
	import type { Tag } from '$lib/types/tags';
	import type { Ingredient } from '$lib/types/ingredients';
	import type { LogicMode } from '$lib/types/filters';
	import { matchesTagsLogic, matchesIngredientsLogic } from '$lib/utils/filterLogic';
	import { formatVariantIngredients } from '$lib/utils/ingredients';
	import { getDisplayCost, formatCost } from '$lib/utils/cost';
	import { costMode } from '$lib/stores/costMode';

	export let data: PageData;
	const { cocktails } = data;

	let searchTerm = data.searchTerm || '';
	let selectedTags: Tag[] = data.selectedTags || [];
	let selectedIngredients: Ingredient[] = data.selectedIngredients || [];
	let logicMode: LogicMode = data.logicMode || 'AND';
	let isFilterSidebarOpen = false;
	let sortColumn: 'cost' | null = null;
	let sortDirection: 'asc' | 'desc' = 'asc';

	function toggleCostSort(): void {
		if (sortColumn === 'cost') {
			sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			sortColumn = 'cost';
			sortDirection = 'asc';
		}
	}

	const gridClass = 'grid grid-cols-8 sm:grid-cols-11 md:grid-cols-12 gap-4 items-center';
	$: nameColClass = `col-span-5 md:col-span-3${$costMode ? ' sm:col-span-3' : ''}`;
	$: descColClass = `hidden md:block${$costMode ? ' col-span-3' : ' col-span-5'}`;

	// Filter cocktails based on search term, selected tags, and selected ingredients
	$: filteredCocktails = cocktails.filter((cocktail) => {
		// First filter by search term (search title, description, variant names, and variant ingredients)
		const searchLower = searchTerm.toLowerCase();
		const matchesTitle = cocktail.title.toLowerCase().includes(searchLower);
		const matchesDescription = cocktail.description.toLowerCase().includes(searchLower);

		// Check variant names and ingredients
		let matchesVariants = false;
		if (cocktail.variations && cocktail.variations.length > 0) {
			matchesVariants = cocktail.variations.some((variant) => {
				const matchesVariantName = variant.name.toLowerCase().includes(searchLower);
				const variantIngredients = formatVariantIngredients(variant);
				const matchesVariantIngredients = variantIngredients.toLowerCase().includes(searchLower);
				return matchesVariantName || matchesVariantIngredients;
			});
		}

		const matchesSearch = matchesTitle || matchesDescription || matchesVariants;

		// Then filter by tags using the selected logic mode
		const matchesTags = matchesTagsLogic(cocktail, selectedTags, logicMode);

		// Then filter by ingredients using the selected logic mode
		const matchesIngredients = matchesIngredientsLogic(cocktail, selectedIngredients, logicMode);

		return matchesSearch && matchesTags && matchesIngredients;
	});

	$: sortedCocktails =
		sortColumn === 'cost'
			? [...filteredCocktails].sort((a, b) => {
					const costA = getDisplayCost(a) ?? -Infinity;
					const costB = getDisplayCost(b) ?? -Infinity;
					return sortDirection === 'asc' ? costA - costB : costB - costA;
				})
			: filteredCocktails;

	function navigateToCocktail(slug: string): void {
		goto(resolve(`/cocktails/${slug}`));
	}

	function handleKeydown(event: KeyboardEvent, slug: string): void {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			navigateToCocktail(slug);
		}
	}

	// Handle filter changes (tags and ingredients) and update URL
	function handleFiltersChanged(
		event: CustomEvent<{ tags: Tag[]; ingredients: Ingredient[] }>
	): void {
		selectedTags = event.detail.tags;
		selectedIngredients = event.detail.ingredients;
		updateURL();
	}

	// Handle logic mode changes and update URL
	function handleLogicModeChanged(event: CustomEvent<LogicMode>): void {
		logicMode = event.detail;
		updateURL();
	}

	// Toggle filter sidebar
	function toggleFilterSidebar(): void {
		isFilterSidebarOpen = !isFilterSidebarOpen;
	}

	// Find the category color for an ingredient
	function getIngredientCategoryColor(ingredient: Ingredient): string {
		for (const category of allIngredientCategories) {
			for (const subcategory of category.subcategories) {
				if (subcategory.ingredients.some((ing) => ing.slug === ingredient.slug)) {
					return category.color;
				}
			}
		}
		// Fallback to amber if category not found
		return '#d97706';
	}

	// Format logic mode for display (short version)
	function getLogicModeText(mode: LogicMode): string {
		switch (mode) {
			case 'AND':
				return '(Match All)';
			case 'OR':
				return '(Match Any)';
			case 'NOT AND':
				return '(Exclude All)';
			case 'NOT OR':
				return '(Exclude Any)';
			default:
				return '';
		}
	}

	// Convert category label to URL-friendly key
	// Handles special characters like & by converting to "and"
	function categoryToUrlKey(categoryLabel: string): string {
		return categoryLabel.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');
	}

	// Update URL with current tag and ingredient selection using category-based structure
	function updateURL(): void {
		const url = new URL($page.url);

		// Update search term param
		if (searchTerm.trim()) {
			url.searchParams.set('search', searchTerm.trim());
		} else {
			url.searchParams.delete('search');
		}

		// Clear all existing tag-related params
		allTagCategories.forEach((category) => {
			const categoryKey = categoryToUrlKey(category.label);
			url.searchParams.delete(categoryKey);
		});

		// Clear all existing ingredient-related params
		allIngredientCategories.forEach((category) => {
			const categoryKey = categoryToUrlKey(category.label);
			url.searchParams.delete(`ingredient-${categoryKey}`);
		});

		// Update logic mode param (encode spaces for URL)
		if (logicMode === 'AND') {
			url.searchParams.delete('logic');
		} else {
			url.searchParams.set('logic', encodeURIComponent(logicMode));
		}

		// Group selected tags by category
		const tagsByCategory: Record<string, Tag[]> = {};
		selectedTags.forEach((tag) => {
			const categoryLabel = tag.category.label;
			if (!tagsByCategory[categoryLabel]) {
				tagsByCategory[categoryLabel] = [];
			}
			tagsByCategory[categoryLabel].push(tag);
		});

		// Set URL params for each category with selected tags
		Object.entries(tagsByCategory).forEach(([categoryLabel, tags]) => {
			const categoryKey = categoryToUrlKey(categoryLabel);
			const tagLabels = tags.map((tag) => tag.label).join(',');
			url.searchParams.set(categoryKey, tagLabels);
		});

		// Group selected ingredients by category
		const ingredientsByCategory: Record<string, Ingredient[]> = {};
		selectedIngredients.forEach((ingredient) => {
			// Find which category this ingredient belongs to
			for (const category of allIngredientCategories) {
				for (const subcategory of category.subcategories) {
					if (subcategory.ingredients.some((i) => i.slug === ingredient.slug)) {
						const categoryLabel = category.label;
						if (!ingredientsByCategory[categoryLabel]) {
							ingredientsByCategory[categoryLabel] = [];
						}
						ingredientsByCategory[categoryLabel].push(ingredient);
						break;
					}
				}
			}
		});

		// Set URL params for each category with selected ingredients
		Object.entries(ingredientsByCategory).forEach(([categoryLabel, ingredients]) => {
			const categoryKey = categoryToUrlKey(categoryLabel);
			const ingredientSlugs = ingredients.map((ingredient) => ingredient.slug).join(',');
			url.searchParams.set(`ingredient-${categoryKey}`, ingredientSlugs);
		});

		goto(resolve(`${url.pathname}${url.search}`), { replaceState: true, noScroll: true });
	}

	// Update only the search URL param without triggering navigation
	function updateSearchURL(): void {
		if (!browser) return;

		const url = new URL($page.url);
		if (searchTerm.trim()) {
			url.searchParams.set('search', searchTerm.trim());
		} else {
			url.searchParams.delete('search');
		}

		// Use History API directly to avoid re-renders, but preserve the current state
		const newUrl = `${url.pathname}${url.search}`;
		const currentState = window.history.state || {};
		window.history.replaceState(currentState, '', newUrl);
	}

	// Handle search input changes
	function handleSearchInput(): void {
		updateSearchURL();
	}
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

		<!-- Search Bar and Filter Button -->
		<div class="mb-8" in:fly={{ y: 20, duration: 400, delay: 600 }}>
			<div class="max-w-4xl mx-auto">
				<div class="flex flex-col sm:flex-row gap-4 sm:items-end">
					<!-- Search Input -->
					<div class="flex-1">
						<label for="cocktail-search" class="block text-sm font-medium text-gray-700 mb-2">
							Search Cocktails
						</label>
						<div class="relative">
							<input
								id="cocktail-search"
								type="text"
								bind:value={searchTerm}
								on:input={handleSearchInput}
								placeholder="Search by name or description..."
								class="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white shadow-sm"
							/>
							<div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
								<svg
									class="h-5 w-5 text-gray-400"
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
							</div>
						</div>
					</div>

					<!-- Filter Button -->
					<button
						on:click={toggleFilterSidebar}
						class="cursor-pointer px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 relative sm:w-auto w-full"
						class:bg-amber-700={selectedTags.length > 0 || selectedIngredients.length > 0}
					>
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
							/>
						</svg>
						<span class="hidden sm:inline">Filters</span>
						<span class="sm:hidden">Filter Cocktails</span>
						{#if selectedTags.length > 0 || selectedIngredients.length > 0}
							<span
								class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
							>
								{selectedTags.length + selectedIngredients.length}
							</span>
						{/if}
					</button>
				</div>
			</div>
		</div>

		<!-- Active Filters Summary (visible when filters are applied) -->
		{#if selectedTags.length > 0 || selectedIngredients.length > 0}
			<div class="mb-6" in:fly={{ y: 20, duration: 400, delay: 700 }}>
				<div class="max-w-4xl mx-auto">
					<div class="bg-amber-50 border border-amber-200 rounded-lg p-4">
						<div class="flex items-center justify-between mb-2">
							<h4 class="text-sm font-medium text-gray-800">
								Active Filters
								<span class="text-xs text-gray-600 font-normal ml-1">
									{getLogicModeText(logicMode)}
								</span>
							</h4>
							<button
								on:click={() => {
									selectedTags = [];
									selectedIngredients = [];
									updateURL();
								}}
								class="text-xs text-red-600 hover:text-red-700 font-medium cursor-pointer"
							>
								Clear all
							</button>
						</div>
						<div class="flex flex-wrap gap-2">
							{#each selectedTags as tag (tag.label)}
								<button
									class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full text-white hover:opacity-80 transition-opacity cursor-pointer"
									style="background-color: {tag.category.color};"
									on:click={() => {
										selectedTags = selectedTags.filter((t) => t.label !== tag.label);
										updateURL();
									}}
								>
									{tag.label}
									<svg class="ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>
							{/each}
							{#each selectedIngredients as ingredient (ingredient.slug)}
								{@const categoryColor = getIngredientCategoryColor(ingredient)}
								<button
									class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full text-white hover:opacity-80 transition-opacity cursor-pointer"
									style="background-color: {categoryColor};"
									on:click={() => {
										selectedIngredients = selectedIngredients.filter(
											(i) => i.slug !== ingredient.slug
										);
										updateURL();
									}}
								>
									{ingredient.title}
									<svg class="ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/if}

		<!-- Filter Sidebar -->
		<FilterSidebar
			{cocktails}
			{selectedTags}
			{selectedIngredients}
			{filteredCocktails}
			{logicMode}
			isOpen={isFilterSidebarOpen}
			on:filtersChanged={handleFiltersChanged}
			on:logicModeChanged={handleLogicModeChanged}
			on:toggleSidebar={toggleFilterSidebar}
		/>

		<!-- Results Count -->
		<div class="mb-6 text-center text-gray-600" in:fly={{ y: 20, duration: 400, delay: 900 }}>
			{#if searchTerm || selectedTags.length > 0 || selectedIngredients.length > 0}
				Showing {filteredCocktails.length} of {cocktails.length} cocktails
				{#if searchTerm}
					matching "{searchTerm}"
				{/if}
				{#if selectedTags.length > 0 || selectedIngredients.length > 0}
					with selected filters
				{/if}
			{:else}
				{cocktails.length} cocktails total
			{/if}
		</div>

		<!-- Cocktails Table -->
		<div
			class="bg-white rounded-lg shadow-lg overflow-hidden"
			in:fly={{ y: 20, duration: 400, delay: 1000 }}
		>
			{#if filteredCocktails.length === 0}
				<div class="p-12 text-center">
					<p class="text-gray-500 text-lg">
						No cocktails found
						{#if searchTerm && (selectedTags.length > 0 || selectedIngredients.length > 0)}
							matching "{searchTerm}" with selected filters
						{:else if searchTerm}
							matching "{searchTerm}"
						{:else if selectedTags.length > 0 || selectedIngredients.length > 0}
							with selected filters
						{/if}
					</p>
				</div>
			{:else}
				<!-- Table Header -->
				<div class="border-b border-gray-200 bg-gray-50 px-6 py-4">
					<div class="{gridClass} font-semibold text-gray-700">
						<div class="col-span-3 md:col-span-2">Image</div>
						<div class={nameColClass}>Name</div>
						<div class={descColClass}>Description</div>
						<div class="col-span-3 hidden sm:block md:col-span-2">Method</div>
						{#if $costMode}
							<button
								class="col-span-2 hidden sm:block text-green-700 text-left cursor-pointer hover:text-green-900 transition-colors"
								on:click={toggleCostSort}
							>
								Cost
								{#if sortColumn === 'cost'}
									{sortDirection === 'asc' ? '↑' : '↓'}
								{:else}
									<span class="text-gray-400 font-normal">↕</span>
								{/if}
							</button>
						{/if}
					</div>
				</div>

				<!-- Table Body -->
				<div class="divide-y divide-gray-200">
					{#each sortedCocktails as cocktail (cocktail.slug)}
						<div
							class="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200 focus-within:bg-gray-50"
							class:pb-0={cocktail.variations && cocktail.variations.length > 0}
							role="button"
							tabindex="0"
							on:click={() => navigateToCocktail(cocktail.slug)}
							on:keydown={(e) => handleKeydown(e, cocktail.slug)}
						>
							<div>
								<div class={gridClass}>
									<!-- Image -->
									<div class="col-span-3 md:col-span-2">
										<div
											class="w-16 h-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg overflow-hidden shadow-sm"
										>
											<img
												src={cocktail.thumbnailImagePath}
												alt={cocktail.title}
												loading="lazy"
												class="w-full h-full object-contain p-2"
											/>
										</div>
									</div>

									<!-- Name -->
									<div class={nameColClass}>
										<h3 class="font-semibold text-gray-800 text-lg">{cocktail.title}</h3>
										<!-- Show description under name on mobile only -->
										<p
											class="text-gray-600 text-sm leading-relaxed mt-1 md:hidden mobile-line-clamp-2"
										>
											{cocktail.description}
										</p>
									</div>

									<!-- Description -->
									<div class={descColClass}>
										<p class="text-gray-600 text-sm leading-relaxed line-clamp-2">
											{cocktail.description}
										</p>
									</div>

									<!-- Method -->
									<div class="col-span-3 hidden sm:block md:col-span-2">
										{#if cocktail.method}
											<span
												class="inline-block px-3 py-1 text-xs font-medium rounded-full text-gray-800"
												style="background-color: {methodColors[cocktail.method]};"
											>
												{cocktail.method.charAt(0).toUpperCase() + cocktail.method.slice(1)}
											</span>
										{:else}
											<span class="text-gray-400 text-sm">—</span>
										{/if}
									</div>

									<!-- Cost -->
									{#if $costMode}
										{@const cost = getDisplayCost(cocktail)}
										<div class="col-span-2 hidden sm:block">
											<span class="text-sm text-green-700 font-medium">
												{cost !== null ? formatCost(cost) : '—'}
											</span>
											{#if cost !== null && cocktail.servings}
												<span class="text-xs text-gray-400">/serving</span>
											{/if}
										</div>
									{/if}
								</div>

								<!-- Variants Sub-section -->
								{#if cocktail.variations && cocktail.variations.length > 0}
									<div
										class="mt-3 pt-3 pb-4 border-t border-gray-100 bg-gray-50/50 -mx-6 px-6 py-2 border-l-2 border-l-amber-200"
									>
										<div class="space-y-2">
											{#each cocktail.variations as variant, index (variant.name)}
												<div class={gridClass}>
													<!-- Empty spacer for image column -->
													<div class="col-span-3 md:col-span-2">
														{#if index === 0}
															<span
																class="text-xs font-medium text-gray-400 uppercase tracking-wide"
																>Variants</span
															>
														{/if}
													</div>

													<!-- Variant Name (aligned with cocktail name) -->
													<div class={nameColClass}>
														<span class="text-sm font-medium text-gray-500">{variant.name}</span>
														<!-- Show variant ingredients under name on mobile only -->
														{#if formatVariantIngredients(variant)}
															<p
																class="text-gray-400 italic text-xs leading-relaxed mt-0.5 md:hidden"
															>
																{formatVariantIngredients(variant)}
															</p>
														{/if}
													</div>

													<!-- Variant Ingredients (aligned with cocktail description) -->
													<div class={descColClass}>
														{#if formatVariantIngredients(variant)}
															<p class="text-gray-400 italic text-xs leading-relaxed">
																{formatVariantIngredients(variant)}
															</p>
														{:else}
															<p class="text-gray-400 italic text-xs">No ingredients listed</p>
														{/if}
													</div>

													<!-- Empty spacer for method column -->
													<div class="col-span-3 hidden sm:block md:col-span-2"></div>
													<!-- Empty spacer for cost column -->
													{#if $costMode}
														<div class="col-span-2 hidden sm:block"></div>
													{/if}
												</div>
											{/each}
										</div>
									</div>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<ScrollToTop />
</main>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.mobile-line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	@media (min-width: 768px) {
		.mobile-line-clamp-2 {
			display: none !important;
		}
	}
</style>
