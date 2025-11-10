<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import TagFilter from './TagFilter.svelte';
	import IngredientFilter from './IngredientFilter.svelte';
	import type { Tag } from '$lib/types/tags';
	import type { Ingredient } from '$lib/types/ingredients';
	import type { Cocktail } from '$lib/types/cocktails';

	export let cocktails: Cocktail[] = [];
	export let selectedTags: Tag[] = [];
	export let selectedIngredients: Ingredient[] = [];
	export let filteredCocktails: Cocktail[] = [];
	export let isOpen: boolean = false;

	type FilterMode = 'tags' | 'ingredients';
	type LogicMode = 'AND' | 'OR' | 'NOT';
	let filterMode: FilterMode = 'tags';
	let logicMode: LogicMode = 'AND';
	let hasInitializedMode = false;
	let scrollPositions: Record<FilterMode, number> = { tags: 0, ingredients: 0 };
	let filterContentElement: HTMLDivElement | null = null;

	const dispatch = createEventDispatcher<{
		filtersChanged: { tags: Tag[]; ingredients: Ingredient[] };
		toggleSidebar: void;
	}>();

	// Set initial mode based on active filters when sidebar opens
	$: if (isOpen && !hasInitializedMode) {
		// If ingredients are selected, default to ingredients mode
		if (selectedIngredients.length > 0) {
			filterMode = 'ingredients';
		}
		// Otherwise default to tags mode
		else {
			filterMode = 'tags';
		}
		hasInitializedMode = true;
	}

	// Reset initialization flag when sidebar closes
	$: if (!isOpen) {
		hasInitializedMode = false;
	}

	// Handle mode change and clear the other filter type
	function setFilterMode(mode: FilterMode): void {
		if (mode === filterMode) return;

		// Save current scroll position
		if (filterContentElement) {
			scrollPositions[filterMode] = filterContentElement.scrollTop;
		}

		if (mode === 'tags') {
			// Switching to tags mode - clear ingredients
			if (selectedIngredients.length > 0) {
				selectedIngredients = [];
			}
		} else {
			// Switching to ingredients mode - clear tags
			if (selectedTags.length > 0) {
				selectedTags = [];
			}
		}

		filterMode = mode;

		// Restore scroll position for the new mode
		// Use setTimeout to ensure DOM has updated
		setTimeout(() => {
			if (filterContentElement) {
				filterContentElement.scrollTop = scrollPositions[mode];
			}
		}, 0);

		dispatch('filtersChanged', { tags: selectedTags, ingredients: selectedIngredients });
	}

	function handleTagsChanged(event: CustomEvent<{ tags: Tag[] }>): void {
		selectedTags = event.detail.tags;
		dispatch('filtersChanged', { tags: selectedTags, ingredients: selectedIngredients });
	}

	function handleIngredientsChanged(event: CustomEvent<{ ingredients: Ingredient[] }>): void {
		selectedIngredients = event.detail.ingredients;
		dispatch('filtersChanged', { tags: selectedTags, ingredients: selectedIngredients });
	}

	function closeSidebar(): void {
		dispatch('toggleSidebar');
	}

	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape' && isOpen) {
			closeSidebar();
		}
	}

	function clearAllFilters(): void {
		if (filterMode === 'tags') {
			selectedTags = [];
			dispatch('filtersChanged', { tags: [], ingredients: selectedIngredients });
		} else {
			selectedIngredients = [];
			dispatch('filtersChanged', { tags: selectedTags, ingredients: [] });
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Backdrop -->
{#if isOpen}
	<div
		class="fixed inset-0 bg-black/50 z-40 cursor-pointer"
		role="button"
		tabindex="-1"
		aria-label="Close filter sidebar"
		on:click={closeSidebar}
		on:keydown={(e) => (e.key === 'Enter' || e.key === ' ' ? closeSidebar() : null)}
		transition:fade={{ duration: 200 }}
	></div>
{/if}

<!-- Sidebar -->
<div
	class="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col"
	class:translate-x-0={isOpen}
	class:translate-x-full={!isOpen}
	inert={!isOpen}
>
	<!-- Sidebar Header -->
	<div class="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
		<div class="flex items-center justify-between mb-4">
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

		<!-- Filter Mode Selector -->
		<div class="mb-4">
			<div class="flex gap-2 mb-2">
				<button
					class="flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer"
					class:bg-amber-600={filterMode === 'tags'}
					class:text-white={filterMode === 'tags'}
					class:bg-gray-100={filterMode !== 'tags'}
					class:text-gray-700={filterMode !== 'tags'}
					class:hover:bg-amber-700={filterMode === 'tags'}
					class:hover:bg-gray-200={filterMode !== 'tags'}
					on:click={() => setFilterMode('tags')}
				>
					By Tags
				</button>
				<button
					class="flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer"
					class:bg-amber-600={filterMode === 'ingredients'}
					class:text-white={filterMode === 'ingredients'}
					class:bg-gray-100={filterMode !== 'ingredients'}
					class:text-gray-700={filterMode !== 'ingredients'}
					class:hover:bg-amber-700={filterMode === 'ingredients'}
					class:hover:bg-gray-200={filterMode !== 'ingredients'}
					on:click={() => setFilterMode('ingredients')}
				>
					By Ingredients
				</button>
			</div>
			<!-- Tab descriptions -->
			<div class="text-xs text-gray-600 px-1">
				{#if filterMode === 'tags'}
					Filter cocktails by style, flavor, or alcohol type.
				{:else}
					Find cocktails using specific spirits, syrups, or mixers.
				{/if}
			</div>
		</div>

		<!-- Results summary -->
		<div class="text-sm text-gray-600 mb-3">
			{filteredCocktails.length} of {cocktails.length} cocktails
		</div>

		<!-- Clear all button -->
		{#if (filterMode === 'tags' && selectedTags.length > 0) || (filterMode === 'ingredients' && selectedIngredients.length > 0)}
			<button
				on:click={clearAllFilters}
				class="w-full px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors font-medium cursor-pointer"
			>
				Clear all filters ({filterMode === 'tags'
					? selectedTags.length
					: selectedIngredients.length})
			</button>
		{/if}

		<!-- Logic Mode Selector (Future-proofing) -->
		<div class="mt-3 pt-3 border-t border-gray-200">
			<label class="block text-xs font-medium text-gray-700 mb-2">Filter Logic</label>
			<select
				bind:value={logicMode}
				class="w-full px-2 py-1.5 text-xs border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent cursor-pointer"
				disabled
				title="Coming soon: Choose how multiple filters combine"
			>
				<option value="AND">Match all selected filters (AND)</option>
				<option value="OR">Match any selected filters (OR)</option>
				<option value="NOT">Exclude selected filters (NOT)</option>
			</select>
			<p class="mt-1 text-xs text-gray-500 italic">Currently: AND logic only</p>
		</div>
	</div>

	<!-- Active Filters Summary -->
	{#if filterMode === 'tags' && selectedTags.length > 0}
		<div class="px-6 py-4 bg-amber-50 border-b border-amber-200 flex-shrink-0">
			<h3 class="text-sm font-medium text-gray-800 mb-2">Active Filters</h3>
			<div class="flex flex-wrap gap-2">
				{#each selectedTags as tag (tag.label)}
					<button
						class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full text-white hover:opacity-80 transition-opacity cursor-pointer"
						style="background-color: {tag.category.color};"
						on:click={() => {
							selectedTags = selectedTags.filter((t) => t.label !== tag.label);
							dispatch('filtersChanged', { tags: selectedTags, ingredients: selectedIngredients });
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
			</div>
		</div>
	{:else if filterMode === 'ingredients' && selectedIngredients.length > 0}
		<div class="px-6 py-4 bg-amber-50 border-b border-amber-200 flex-shrink-0">
			<h3 class="text-sm font-medium text-gray-800 mb-2">Active Filters</h3>
			<div class="flex flex-wrap gap-2">
				{#each selectedIngredients as ingredient (ingredient.slug)}
					<button
						class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-amber-600 text-white hover:opacity-80 transition-opacity cursor-pointer"
						on:click={() => {
							selectedIngredients = selectedIngredients.filter((i) => i.slug !== ingredient.slug);
							dispatch('filtersChanged', { tags: selectedTags, ingredients: selectedIngredients });
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
	{/if}

	<!-- Filter Content -->
	<div class="flex-1 overflow-y-auto" bind:this={filterContentElement}>
		{#if filterMode === 'tags'}
			<TagFilter
				{cocktails}
				{selectedTags}
				{filteredCocktails}
				{isOpen}
				on:filtersChanged={handleTagsChanged}
				on:toggleSidebar={() => {}}
			/>
		{:else}
			<IngredientFilter
				{cocktails}
				{selectedIngredients}
				{filteredCocktails}
				{isOpen}
				on:filtersChanged={handleIngredientsChanged}
				on:toggleSidebar={() => {}}
			/>
		{/if}
	</div>
</div>
