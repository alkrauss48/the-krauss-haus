<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { SvelteSet, SvelteMap } from 'svelte/reactivity';
	import { slide } from 'svelte/transition';
	import type {
		Ingredient,
		IngredientCategory,
		IngredientSubcategory
	} from '$lib/types/ingredients';
	import type { Cocktail } from '$lib/types/cocktails';
	import type { LogicMode } from '$lib/types/filters';
	import { allIngredientCategories } from '$lib/data/all-ingredients';
	import { matchesIngredientsLogic } from '$lib/utils/filterLogic';
	import { getCocktailIngredientSlugs } from '$lib/utils/ingredients';

	export let cocktails: Cocktail[] = [];
	export let selectedIngredients: Ingredient[] = [];
	export let filteredCocktails: Cocktail[] = [];
	export let isOpen: boolean = false;
	export let logicMode: LogicMode = 'AND';

	// Force reactivity when selections or logic mode change
	$: selectedIngredientsKey = `${selectedIngredients.map((i) => i.slug).join(',')}-${logicMode}`;

	const dispatch = createEventDispatcher<{
		filtersChanged: { ingredients: Ingredient[] };
		toggleSidebar: void;
	}>();

	// Track which categories are manually expanded by user
	let manuallyExpandedCategories = new SvelteSet<string>([]);

	// Pre-compute selected ingredient slugs Set for O(1) lookups
	$: selectedIngredientSlugs = new SvelteSet(selectedIngredients.map((i) => i.slug));

	// Pre-compute all ingredient slugs used in cocktails (including variants)
	// Computed once when cocktails change
	$: allIngredientSlugs = (() => {
		const slugs = new SvelteSet<string>();
		for (const cocktail of cocktails) {
			// Get all ingredient slugs from this cocktail (including variants)
			const cocktailSlugs = getCocktailIngredientSlugs(cocktail);
			cocktailSlugs.forEach((slug) => slugs.add(slug));
		}
		return slugs;
	})();

	// Pre-compute ingredients per subcategory (computed once when cocktails change)
	$: ingredientsBySubcategory = (() => {
		const map = new SvelteMap<string, Ingredient[]>();
		for (const category of allIngredientCategories) {
			for (const subcategory of category.subcategories) {
				const key = `${category.label}-${subcategory.label}`;
				const ingredients = subcategory.ingredients.filter((ingredient) =>
					allIngredientSlugs.has(ingredient.slug)
				);
				map.set(key, ingredients);
			}
		}
		return map;
	})();

	// Get all ingredients used in cocktails for a subcategory (uses cached data)
	function getIngredientsForSubcategory(
		category: IngredientCategory,
		subcategory: IngredientSubcategory
	): Ingredient[] {
		const key = `${category.label}-${subcategory.label}`;
		return ingredientsBySubcategory.get(key) || [];
	}

	// Compute which categories should be expanded (selected ingredients + manual)
	$: expandedCategories = (() => {
		const result = new SvelteSet<string>(manuallyExpandedCategories);

		// Add categories that have selected ingredients
		for (const category of allIngredientCategories) {
			for (const subcategory of category.subcategories) {
				const ingredients = getIngredientsForSubcategory(category, subcategory);
				const hasSelected = ingredients.some((ingredient) =>
					selectedIngredientSlugs.has(ingredient.slug)
				);

				if (hasSelected) {
					result.add(category.label);
					break;
				}
			}
		}

		return result;
	})();

	// Calculate cocktail count for an ingredient given current filter state
	function getIngredientCount(ingredient: Ingredient): number {
		// If this ingredient is already selected, calculate count with current logic mode
		if (selectedIngredientSlugs.has(ingredient.slug)) {
			// Recalculate filtered cocktails with current logic mode to ensure reactivity
			return cocktails.filter((cocktail) => {
				return matchesIngredientsLogic(cocktail, selectedIngredients, logicMode);
			}).length;
		}

		// If not selected, show what the count would be if we added this ingredient
		const hypotheticalIngredients = [...selectedIngredients, ingredient];

		return cocktails.filter((cocktail) => {
			return matchesIngredientsLogic(cocktail, hypotheticalIngredients, logicMode);
		}).length;
	}

	// Check if an ingredient is selected (uses pre-computed Set for O(1) lookup)
	function isIngredientSelected(ingredient: Ingredient): boolean {
		return selectedIngredientSlugs.has(ingredient.slug);
	}

	// Check if an ingredient should be disabled (no cocktails would remain if selected)
	function isIngredientDisabled(ingredient: Ingredient): boolean {
		// If this ingredient is already selected, it should never be disabled
		if (isIngredientSelected(ingredient)) {
			return false;
		}

		// Check what would happen if we added this ingredient to the current selection
		return getIngredientCount(ingredient) === 0;
	}

	// Toggle ingredient selection
	function toggleIngredient(ingredient: Ingredient, event?: MouseEvent): void {
		// Don't allow toggling disabled ingredients
		if (isIngredientDisabled(ingredient)) {
			return;
		}

		// Handle Shift+Click for NOT logic (future-proofing)
		if (event?.shiftKey) {
			// For now, just toggle normally - can be enhanced later
		}

		if (isIngredientSelected(ingredient)) {
			selectedIngredients = selectedIngredients.filter(
				(selectedIngredient) => selectedIngredient.slug !== ingredient.slug
			);
		} else {
			selectedIngredients = [...selectedIngredients, ingredient];
		}
		dispatch('filtersChanged', { ingredients: selectedIngredients });
	}

	// Toggle category expansion
	function toggleCategory(categoryLabel: string): void {
		if (manuallyExpandedCategories.has(categoryLabel)) {
			manuallyExpandedCategories.delete(categoryLabel);
		} else {
			manuallyExpandedCategories.add(categoryLabel);
		}
		manuallyExpandedCategories = new SvelteSet(manuallyExpandedCategories);
	}

	// Get count of selected ingredients in category
	function getSelectedIngredientsCount(category: IngredientCategory): number {
		let count = 0;
		for (const subcategory of category.subcategories) {
			const ingredients = getIngredientsForSubcategory(category, subcategory);
			count += ingredients.filter((ingredient) => isIngredientSelected(ingredient)).length;
		}
		return count;
	}

	// Expand/Collapse All functionality
	function expandAllCategories(): void {
		const newSet = new SvelteSet<string>();
		allIngredientCategories.forEach((category) => {
			const hasIngredients = category.subcategories.some(
				(sub) => getIngredientsForSubcategory(category, sub).length > 0
			);
			if (hasIngredients) {
				newSet.add(category.label);
			}
		});
		manuallyExpandedCategories = newSet;
	}

	function collapseAllCategories(): void {
		// Keep only categories with selected ingredients
		const newSet = new SvelteSet<string>();
		for (const category of allIngredientCategories) {
			for (const subcategory of category.subcategories) {
				const ingredients = getIngredientsForSubcategory(category, subcategory);
				const hasSelected = ingredients.some((ingredient) =>
					selectedIngredientSlugs.has(ingredient.slug)
				);
				if (hasSelected) {
					newSet.add(category.label);
					break;
				}
			}
		}
		manuallyExpandedCategories = newSet;
	}

	// Helper function to convert hex color to rgba (matching TagFilter)
	function hexToRgba(hex: string, alpha: number): string {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}

	// Get ingredient badge styling (matching TagFilter)
	function getIngredientStyling(
		categoryColor: string,
		ingredient: Ingredient,
		selected: boolean,
		disabled: boolean
	) {
		if (selected) {
			return {
				background: categoryColor,
				border: categoryColor,
				color: 'white'
			};
		}

		if (disabled) {
			return {
				background: '#f3f4f6',
				border: '#d1d5db',
				color: '#9ca3af'
			};
		}

		return {
			background: hexToRgba(categoryColor, 0.1),
			border: hexToRgba(categoryColor, 0.3),
			color: categoryColor,
			hoverBackground: hexToRgba(categoryColor, 0.2),
			hoverBorder: hexToRgba(categoryColor, 0.5)
		};
	}
</script>

<!-- Expand/Collapse All Controls -->
<div class="px-6 pt-4 pb-2 border-b border-gray-100 flex justify-end gap-2">
	<button
		class="text-xs text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer underline decoration-dotted underline-offset-2"
		on:click={expandAllCategories}
	>
		Expand all
	</button>
	<span class="text-gray-400">|</span>
	<button
		class="text-xs text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer underline decoration-dotted underline-offset-2"
		on:click={collapseAllCategories}
	>
		Collapse all
	</button>
</div>

<!-- Filter Categories -->
<div class="px-6 py-4 space-y-6">
	{#each allIngredientCategories as category (`${category.label}-${selectedIngredientsKey}`)}
		{@const isCategoryExpanded = expandedCategories.has(category.label)}
		{@const selectedCount = getSelectedIngredientsCount(category)}
		{@const hasIngredients = category.subcategories.some(
			(sub) => getIngredientsForSubcategory(category, sub).length > 0
		)}

		{#if hasIngredients}
			<div class="space-y-3">
				<!-- Category Header -->
				<div class="flex items-center justify-between">
					<button
						class="flex items-center gap-2 text-left group cursor-pointer"
						on:click={() => toggleCategory(category.label)}
					>
						<div
							class="w-4 h-4 rounded-sm border-2 flex items-center justify-center transition-all duration-200"
							style="border-color: {category.color}; background-color: {selectedCount > 0
								? category.color
								: 'transparent'};"
						>
							{#if selectedCount > 0}
								<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							{/if}
						</div>
						<h3 class="text-sm font-semibold text-gray-800 group-hover:text-gray-600">
							{category.label}
							{#if selectedCount > 0}
								<span class="text-xs text-gray-500">({selectedCount})</span>
							{/if}
						</h3>
						<svg
							class="w-4 h-4 text-gray-400 transition-transform duration-200"
							class:rotate-180={isCategoryExpanded}
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
					</button>
				</div>

				<!-- Grouped Flat Layout: Subcategories as Headers, Ingredients Below -->
				{#if isCategoryExpanded}
					<div class="pl-6 space-y-4" transition:slide>
						{#each category.subcategories as subcategory (`${category.label}-${subcategory.label}-${selectedIngredientsKey}`)}
							{@const subcategoryIngredients = getIngredientsForSubcategory(category, subcategory)}

							{#if subcategoryIngredients.length > 0}
								<div class="space-y-2">
									<!-- Subcategory Header (sticky when scrolling) -->
									{#if subcategory.label.toLowerCase() !== 'default'}
										<h4
											class="text-xs font-medium text-gray-700 mb-2 sticky top-0 bg-white py-1.5 z-20 border-b border-gray-100 -mx-6 px-6"
										>
											{subcategory.label}
										</h4>
									{/if}

									<!-- Ingredients (indented under subcategory) -->
									<div class="flex flex-wrap gap-2 pl-0">
										{#each subcategoryIngredients as ingredient (`${ingredient.slug}-${selectedIngredientsKey}`)}
											{@const count = getIngredientCount(ingredient)}
											{@const selected = isIngredientSelected(ingredient)}
											{@const disabled = isIngredientDisabled(ingredient)}
											{@const styling = getIngredientStyling(
												category.color,
												ingredient,
												selected,
												disabled
											)}

											<button
												class="inline-flex items-center gap-1.5 rounded-lg border-2 transition-all duration-300 transform group relative overflow-hidden py-1.5 px-2.5 text-xs"
												class:cursor-pointer={!disabled}
												class:cursor-not-allowed={disabled}
												class:hover:scale-[1.02]={!disabled && !selected}
												class:hover:shadow-lg={!disabled}
												class:shadow-md={selected}
												class:scale-[0.98]={disabled}
												class:opacity-50={disabled}
												style="
													background-color: {styling.background};
													border-color: {styling.border};
													color: {styling.color};
												"
												{disabled}
												on:click={(e) => toggleIngredient(ingredient, e)}
												on:mouseenter={!disabled && !selected
													? (e) => {
															e.currentTarget.style.backgroundColor =
																styling.hoverBackground || styling.background;
															e.currentTarget.style.borderColor =
																styling.hoverBorder || styling.border;
														}
													: undefined}
												on:mouseleave={!disabled && !selected
													? (e) => {
															e.currentTarget.style.backgroundColor = styling.background;
															e.currentTarget.style.borderColor = styling.border;
														}
													: undefined}
											>
												<!-- Background gradient overlay for selected state -->
												{#if selected}
													<div
														class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
													></div>
												{/if}

												<span class="font-medium relative z-10">{ingredient.title}</span>
												<span
													class="text-xs px-1.5 py-0.5 rounded-full font-semibold relative z-10"
													style="background-color: rgba(255, 255, 255, 0.2); color: inherit;"
												>
													{count}
												</span>
											</button>
										{/each}
									</div>
								</div>
							{/if}
						{/each}
					</div>
				{/if}
			</div>
		{/if}
	{/each}
</div>
