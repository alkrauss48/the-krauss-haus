<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import { slide, fade } from 'svelte/transition';
	import type { Tag, TagCategory } from '$lib/types/tags';
	import type { Cocktail } from '$lib/types/cocktails';
	import type { Recipe } from '$lib/types/recipes';
	import { allTagCategories } from '$lib/data/all-tags';
	import {
		RECIPE_CATEGORIES,
		getUsedRecipesByCategory,
		filterCocktailsByRecipes,
		type RecipeCategory
	} from '$lib/utils/recipe-cocktail';

	export let cocktails: Cocktail[] = [];
	export let selectedTags: Tag[] = [];
	export let selectedRecipes: Recipe[] = [];
	export let filteredCocktails: Cocktail[] = [];
	export let isOpen: boolean = false;

	// Force reactivity when selections change
	$: selectedTagsKey = selectedTags.map((t) => t.label).join(',');
	$: selectedRecipesKey = selectedRecipes.map((r) => r.slug).join(',');

	const dispatch = createEventDispatcher<{
		filtersChanged: { tags: Tag[]; recipes: Recipe[] };
		toggleSidebar: void;
	}>();

	// Get all categories that should be displayed (tags + recipes)
	$: usedRecipeCategories = getUsedRecipesByCategory(cocktails);
	$: allDisplayCategories = [
		...allTagCategories,
		...usedRecipeCategories.map(({ category }) => category)
	];

	// Track which categories are expanded
	let expandedCategories = new SvelteSet<string>();

	// Initialize with all categories expanded
	$: {
		if (allDisplayCategories.length > 0) {
			expandedCategories = new SvelteSet(allDisplayCategories.map((cat) => cat.label));
		}
	}

	// Get tags for a category, sorted by order
	function getTagsForCategory(category: TagCategory): Tag[] {
		const allTags = cocktails.flatMap((cocktail) => cocktail.tags || []);
		const categoryTags = allTags.filter((tag) => tag.category.label === category.label);

		// Remove duplicates and sort by order
		const uniqueTags = Array.from(new Map(categoryTags.map((tag) => [tag.label, tag])).values());
		return uniqueTags.sort((a, b) => a.order - b.order);
	}

	// Get recipes for a recipe category
	function getRecipesForCategory(categoryLabel: string): Recipe[] {
		const categoryData = usedRecipeCategories.find(
			({ category }) => category.label === categoryLabel
		);
		return categoryData ? categoryData.usedRecipes : [];
	}

	// Calculate cocktail count for a tag given current filter state
	function getTagCount(tag: Tag): number {
		// If this tag is already selected, show current filtered count
		if (selectedTags.find((t) => t.label === tag.label)) {
			return filteredCocktails.length;
		}

		// If not selected, show what the count would be if we added this tag
		const hypotheticalTags = [...selectedTags, tag];

		// Filter cocktails based on hypothetical selection (combining with recipes)
		let cocktailsToFilter = cocktails;
		if (selectedRecipes.length > 0) {
			cocktailsToFilter = filterCocktailsByRecipes(cocktails, selectedRecipes);
		}

		return cocktailsToFilter.filter((cocktail) => {
			const cocktailTags = cocktail.tags || [];
			return hypotheticalTags.every((selectedTag) =>
				cocktailTags.some((cocktailTag) => cocktailTag.label === selectedTag.label)
			);
		}).length;
	}

	// Calculate cocktail count for a recipe given current filter state
	function getRecipeCount(recipe: Recipe): number {
		// If this recipe is already selected, show current filtered count
		if (selectedRecipes.find((r) => r.slug === recipe.slug)) {
			return filteredCocktails.length;
		}

		// If not selected, show what the count would be if we added this recipe
		const hypotheticalRecipes = [...selectedRecipes, recipe];

		// Filter cocktails based on hypothetical selection (combining with tags)
		let cocktailsToFilter = cocktails;
		if (selectedTags.length > 0) {
			cocktailsToFilter = cocktails.filter((cocktail) => {
				const cocktailTags = cocktail.tags || [];
				return selectedTags.every((selectedTag) =>
					cocktailTags.some((cocktailTag) => cocktailTag.label === selectedTag.label)
				);
			});
		}

		return filterCocktailsByRecipes(cocktailsToFilter, hypotheticalRecipes).length;
	}

	// Check if a tag is selected
	function isTagSelected(tag: Tag): boolean {
		return selectedTags.some((selectedTag) => selectedTag.label === tag.label);
	}

	// Check if a recipe is selected
	function isRecipeSelected(recipe: Recipe): boolean {
		return selectedRecipes.some((selectedRecipe) => selectedRecipe.slug === recipe.slug);
	}

	// Check if a tag should be disabled (no cocktails would remain if selected)
	function isTagDisabled(tag: Tag): boolean {
		// If this tag is already selected, it should never be disabled
		if (isTagSelected(tag)) {
			return false;
		}

		// Check what would happen if we added this tag to the current selection
		return getTagCount(tag) === 0;
	}

	// Check if a recipe should be disabled (no cocktails would remain if selected)
	function isRecipeDisabled(recipe: Recipe): boolean {
		// If this recipe is already selected, it should never be disabled
		if (isRecipeSelected(recipe)) {
			return false;
		}

		// Check what would happen if we added this recipe to the current selection
		return getRecipeCount(recipe) === 0;
	}

	// Toggle tag selection
	function toggleTag(tag: Tag): void {
		// Don't allow toggling disabled tags
		if (isTagDisabled(tag)) {
			return;
		}

		if (isTagSelected(tag)) {
			selectedTags = selectedTags.filter((selectedTag) => selectedTag.label !== tag.label);
		} else {
			selectedTags = [...selectedTags, tag];
		}
		dispatch('filtersChanged', { tags: selectedTags, recipes: selectedRecipes });
	}

	// Toggle recipe selection
	function toggleRecipe(recipe: Recipe): void {
		// Don't allow toggling disabled recipes
		if (isRecipeDisabled(recipe)) {
			return;
		}

		if (isRecipeSelected(recipe)) {
			selectedRecipes = selectedRecipes.filter(
				(selectedRecipe) => selectedRecipe.slug !== recipe.slug
			);
		} else {
			selectedRecipes = [...selectedRecipes, recipe];
		}
		dispatch('filtersChanged', { tags: selectedTags, recipes: selectedRecipes });
	}

	// Clear all filters
	function clearAllFilters(): void {
		selectedTags = [];
		selectedRecipes = [];
		dispatch('filtersChanged', { tags: selectedTags, recipes: selectedRecipes });
	}

	// Toggle category expansion
	function toggleCategory(categoryLabel: string): void {
		if (expandedCategories.has(categoryLabel)) {
			expandedCategories.delete(categoryLabel);
		} else {
			expandedCategories.add(categoryLabel);
		}

		// Note: shouldn't have to reassign it here, but it doesn't work unless I do
		expandedCategories = new SvelteSet(expandedCategories);
	}

	// Get count of selected tags in category
	function getSelectedTagsCount(category: TagCategory): number {
		const categoryTags = getTagsForCategory(category);
		return categoryTags.filter((tag) => isTagSelected(tag)).length;
	}

	// Get count of selected recipes in category
	function getSelectedRecipesCount(categoryLabel: string): number {
		const categoryRecipes = getRecipesForCategory(categoryLabel);
		return categoryRecipes.filter((recipe) => isRecipeSelected(recipe)).length;
	}

	// Close sidebar
	function closeSidebar(): void {
		dispatch('toggleSidebar');
	}

	// Handle escape key
	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape' && isOpen) {
			closeSidebar();
		}
	}

	// Helper function to convert hex color to rgba
	function hexToRgba(hex: string, alpha: number): string {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}

	// Get category-based styling for tags
	function getTagStyling(tag: Tag, selected: boolean, disabled: boolean) {
		const categoryColor = tag.category.color;

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

	// Get category-based styling for recipes (similar to tags)
	function getRecipeStyling(
		recipe: Recipe,
		recipeCategory: RecipeCategory,
		selected: boolean,
		disabled: boolean
	) {
		const categoryColor = recipeCategory.color;

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

	// Check if a category is a recipe category
	function isRecipeCategory(categoryLabel: string): boolean {
		return RECIPE_CATEGORIES.some((cat) => cat.label === categoryLabel);
	}

	// Get recipe category by label
	function getRecipeCategory(categoryLabel: string): RecipeCategory | undefined {
		return RECIPE_CATEGORIES.find((cat) => cat.label === categoryLabel);
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Backdrop -->
{#if isOpen}
	<div
		class="fixed inset-0 bg-black/50 z-40"
		role="button"
		tabindex="-1"
		aria-label="Close filter sidebar"
		on:click={closeSidebar}
		on:keydown={(e) => e.key === 'Enter' || e.key === ' ' ? closeSidebar() : null}
		transition:fade={{ duration: 200 }}
	></div>
{/if}

<!-- Sidebar -->
<div
	class="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto"
	class:translate-x-0={isOpen}
	class:translate-x-full={!isOpen}
	inert={!isOpen}
>
	<!-- Sidebar Header -->
	<div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 z-20">
		<div class="flex items-center justify-between">
			<h2 class="text-lg font-semibold text-gray-800">Filter Cocktails</h2>
			<button
				on:click={closeSidebar}
				class="p-2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
				aria-label="Close filters"
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
		</div>

		<!-- Results summary -->
		<div class="mt-2 text-sm text-gray-600">
			{filteredCocktails.length} of {cocktails.length} cocktails
		</div>

		<!-- Clear all button -->
		{#if selectedTags.length > 0 || selectedRecipes.length > 0}
			<button
				on:click={clearAllFilters}
				class="mt-3 w-full px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors font-medium cursor-pointer"
			>
				Clear all filters ({selectedTags.length + selectedRecipes.length})
			</button>
		{/if}
	</div>

	<!-- Selected Tags and Recipes Summary -->
	{#if selectedTags.length > 0 || selectedRecipes.length > 0}
		<div class="px-6 py-4 bg-amber-50 border-b border-amber-200">
			<h3 class="text-sm font-medium text-gray-800 mb-2">Active Filters</h3>
			<div class="flex flex-wrap gap-2">
				{#each selectedTags as tag (tag.label)}
					<button
						class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full text-white hover:opacity-80 transition-opacity cursor-pointer"
						style="background-color: {tag.category.color};"
						on:click={() => toggleTag(tag)}
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
				{#each selectedRecipes as recipe (recipe.slug)}
					{@const recipeCategory = getRecipeCategory(
						usedRecipeCategories.find(({ usedRecipes }) =>
							usedRecipes.some((r) => r.slug === recipe.slug)
						)?.category.label || ''
					)}
					{#if recipeCategory}
						<button
							class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full text-white hover:opacity-80 transition-opacity cursor-pointer"
							style="background-color: {recipeCategory.color};"
							on:click={() => toggleRecipe(recipe)}
						>
							{recipe.name}
							<svg class="ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					{/if}
				{/each}
			</div>
		</div>
	{/if}

	<!-- Filter Categories -->
	<div class="px-6 py-4 space-y-6">
		{#each allDisplayCategories as category (`${category.label}-${selectedTagsKey}-${selectedRecipesKey}`)}
			{@const isExpanded = expandedCategories.has(category.label)}
			{@const isRecipeCat = isRecipeCategory(category.label)}
			{@const categoryTags = isRecipeCat ? [] : getTagsForCategory(category)}
			{@const categoryRecipes = isRecipeCat ? getRecipesForCategory(category.label) : []}
			{@const selectedCount = isRecipeCat
				? getSelectedRecipesCount(category.label)
				: getSelectedTagsCount(category)}

			{#if (isRecipeCat && categoryRecipes.length > 0) || (!isRecipeCat && categoryTags.length > 0)}
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
						</button>
					</div>

					<!-- Category Items (Tags or Recipes) -->
					{#if isExpanded}
						<div class="flex flex-wrap gap-2 pl-6" transition:slide>
							{#if isRecipeCat}
								{#each categoryRecipes as recipe (`${recipe.slug}-${selectedRecipesKey}`)}
									{@const count = getRecipeCount(recipe)}
									{@const selected = isRecipeSelected(recipe)}
									{@const disabled = isRecipeDisabled(recipe)}
									{@const recipeCategory = getRecipeCategory(category.label)}
									{@const styling = recipeCategory
										? getRecipeStyling(recipe, recipeCategory, selected, disabled)
										: {}}

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
										on:click={() => toggleRecipe(recipe)}
										on:mouseenter={!disabled && !selected
											? (e) => {
													e.currentTarget.style.backgroundColor =
														styling.hoverBackground || styling.background;
													e.currentTarget.style.borderColor = styling.hoverBorder || styling.border;
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

										<span class="font-medium relative z-10">{recipe.name}</span>
										<span
											class="text-xs px-1.5 py-0.5 rounded-full font-semibold relative z-10"
											style="background-color: rgba(255, 255, 255, 0.2); color: inherit;"
										>
											{count}
										</span>
									</button>
								{/each}
							{:else}
								{#each categoryTags as tag (`${tag.label}-${selectedTagsKey}`)}
									{@const count = getTagCount(tag)}
									{@const selected = isTagSelected(tag)}
									{@const disabled = isTagDisabled(tag)}
									{@const styling = getTagStyling(tag, selected, disabled)}

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
										on:click={() => toggleTag(tag)}
										on:mouseenter={!disabled && !selected
											? (e) => {
													e.currentTarget.style.backgroundColor =
														styling.hoverBackground || styling.background;
													e.currentTarget.style.borderColor = styling.hoverBorder || styling.border;
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

										<span class="font-medium relative z-10">{tag.label}</span>
										<span
											class="text-xs px-1.5 py-0.5 rounded-full font-semibold relative z-10"
											style="background-color: rgba(255, 255, 255, 0.2); color: inherit;"
										>
											{count}
										</span>
									</button>
								{/each}
							{/if}
						</div>
					{/if}
				</div>
			{/if}
		{/each}
	</div>
</div>
