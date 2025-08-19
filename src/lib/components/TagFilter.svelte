<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import { fly, slide } from 'svelte/transition';
	import type { Tag, TagCategory } from '$lib/types/tags';
	import type { Cocktail } from '$lib/types/cocktails';
	import { allTagCategories } from '$lib/data/all-tags';

	export let cocktails: Cocktail[] = [];
	export let selectedTags: Tag[] = [];
	export let filteredCocktails: Cocktail[] = [];
	export let isOpen: boolean = false;

	// Force reactivity when selectedTags change
	$: selectedTagsKey = selectedTags.map((t) => t.label).join(',');

	const dispatch = createEventDispatcher<{
		tagsChanged: { tags: Tag[] };
		toggleSidebar: void;
	}>();

	// Track which categories are expanded
	let expandedCategories = new SvelteSet<string>(allTagCategories.map((cat) => cat.label));

	// Get tags for a category, sorted by order
	function getTagsForCategory(category: TagCategory): Tag[] {
		const allTags = cocktails.flatMap((cocktail) => cocktail.tags || []);
		const categoryTags = allTags.filter((tag) => tag.category.label === category.label);

		// Remove duplicates and sort by order
		const uniqueTags = Array.from(new Map(categoryTags.map((tag) => [tag.label, tag])).values());
		return uniqueTags.sort((a, b) => a.order - b.order);
	}

	// Calculate cocktail count for a tag given current filter state
	function getTagCount(tag: Tag): number {
		// If this tag is already selected, show current filtered count
		if (selectedTags.find((t) => t.label === tag.label)) {
			return filteredCocktails.length;
		}

		// If not selected, show what the count would be if we added this tag
		const hypotheticalTags = [...selectedTags, tag];

		// Filter cocktails based on hypothetical selection
		return cocktails.filter((cocktail) => {
			const cocktailTags = cocktail.tags || [];
			return hypotheticalTags.every((selectedTag) =>
				cocktailTags.some((cocktailTag) => cocktailTag.label === selectedTag.label)
			);
		}).length;
	}

	// Check if a tag is selected
	function isTagSelected(tag: Tag): boolean {
		return selectedTags.some((selectedTag) => selectedTag.label === tag.label);
	}

	// Check if a tag should be disabled (no cocktails would remain if selected)
	function isTagDisabled(tag: Tag): boolean {
		// If this tag is already selected, it should never be disabled
		if (isTagSelected(tag)) {
			return false;
		}

		// Check what would happen if we added this tag to the current selection
		const hypotheticalTags = [...selectedTags, tag];

		// Count cocktails that would match all hypothetical tags
		const matchingCocktails = cocktails.filter((cocktail) => {
			const cocktailTags = cocktail.tags || [];
			return hypotheticalTags.every((selectedTag) =>
				cocktailTags.some((cocktailTag) => cocktailTag.label === selectedTag.label)
			);
		});

		// Disable if no cocktails would match
		return matchingCocktails.length === 0;
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
		dispatch('tagsChanged', { tags: selectedTags });
	}

	// Clear all filters
	function clearAllFilters(): void {
		selectedTags = [];
		dispatch('tagsChanged', { tags: selectedTags });
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
				background: '#f3f4f6', // gray-100
				border: '#e5e7eb', // gray-200
				color: '#9ca3af' // gray-400
			};
		}

		// Default state with subtle category color tint
		return {
			background: hexToRgba(categoryColor, 0.08),
			border: hexToRgba(categoryColor, 0.2),
			color: '#374151', // gray-700
			hoverBackground: hexToRgba(categoryColor, 0.12),
			hoverBorder: hexToRgba(categoryColor, 0.3)
		};
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Backdrop overlay -->
{#if isOpen}
	<div
		class="fixed inset-0 bg-black/50 z-40"
		on:click={closeSidebar}
		transition:fly={{ opacity: 0, duration: 200 }}
	></div>
{/if}

<!-- Sidebar -->
<div
	class="fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 overflow-y-auto"
	class:translate-x-0={isOpen}
	class:translate-x-full={!isOpen}
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
		{#if selectedTags.length > 0}
			<button
				on:click={clearAllFilters}
				class="mt-3 w-full px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors font-medium cursor-pointer"
			>
				Clear all filters ({selectedTags.length})
			</button>
		{/if}
	</div>

	<!-- Selected Tags Summary -->
	{#if selectedTags.length > 0}
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
			</div>
		</div>
	{/if}

	<!-- Filter Categories -->
	<div class="px-6 py-4 space-y-6">
		{#each allTagCategories as category (`${category.label}-${selectedTagsKey}`)}
			{@const categoryTags = getTagsForCategory(category)}
			{@const isExpanded = expandedCategories.has(category.label)}
			{@const selectedCount = getSelectedTagsCount(category)}

			{#if categoryTags.length > 0}
				<div class="space-y-3">
					<!-- Category Header -->
					<button
						class="w-full flex items-center justify-between text-left cursor-pointer"
						on:click={() => toggleCategory(category.label)}
					>
						<div class="flex items-center gap-3">
							<div class="w-3 h-3 rounded-full" style="background-color: {category.color};"></div>
							<span class="font-medium text-gray-800">{category.label}</span>
							{#if selectedCount > 0}
								<span class="px-2 py-1 text-xs font-medium bg-gray-100 rounded-full text-gray-600">
									{selectedCount}
								</span>
							{/if}
						</div>
						<svg
							class="w-4 h-4 text-gray-500 transition-transform duration-200"
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

					<!-- Category Tags -->
					{#if isExpanded}
						<div class="space-y-3 pl-6" transition:slide>
							{#each categoryTags as tag (`${tag.label}-${selectedTagsKey}`)}
								{@const count = getTagCount(tag)}
								{@const selected = isTagSelected(tag)}
								{@const disabled = isTagDisabled(tag)}
								{@const styling = getTagStyling(tag, selected, disabled)}

								<button
									class="w-full flex items-center justify-between rounded-xl border-2 transition-all duration-300 transform group relative overflow-hidden py-2.5 px-3 text-sm"
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

									<div class="flex items-center gap-2 relative z-10">
										<span class="font-medium">{tag.label}</span>
									</div>

									<div class="flex items-center gap-1 relative z-10">
										<span
											class="text-xs px-2 py-1 rounded-full font-semibold"
											class:bg-white={selected}
											class:text-black={selected}
											class:bg-gray-100={!selected && !disabled}
											class:text-gray-600={!selected && !disabled}
											class:bg-gray-200={disabled}
											class:text-gray-500={disabled}
										>
											{count}
										</span>
									</div>
								</button>
							{/each}
						</div>
					{/if}
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	@media (min-width: 768px) {
		.md\:cursor-default {
			cursor: default;
		}
	}
</style>
