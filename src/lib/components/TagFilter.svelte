<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import { slide } from 'svelte/transition';
	import type { Tag, TagCategory } from '$lib/types/tags';
	import type { Cocktail } from '$lib/types/cocktails';
	import type { LogicMode } from '$lib/types/filters';
	import { allTagCategories } from '$lib/data/all-tags';
	import { matchesTagsLogic } from '$lib/utils/filterLogic';

	export let cocktails: Cocktail[] = [];
	export let selectedTags: Tag[] = [];
	export let filteredCocktails: Cocktail[] = [];
	export let isOpen: boolean = false;
	export let logicMode: LogicMode = 'AND';

	// Force reactivity when selections or logic mode change
	$: selectedTagsKey = `${selectedTags.map((t) => t.label).join(',')}-${logicMode}`;

	const dispatch = createEventDispatcher<{
		filtersChanged: { tags: Tag[] };
		toggleSidebar: void;
	}>();

	// Get all categories that should be displayed (tags only)
	const allDisplayCategories = allTagCategories;

	// Track which categories are expanded
	// Initialize with all categories expanded
	let expandedCategories = new SvelteSet<string>(
		allDisplayCategories.length > 0 ? allDisplayCategories.map((cat) => cat.label) : []
	);

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
		// If this tag is already selected, calculate count with current logic mode
		if (selectedTags.find((t) => t.label === tag.label)) {
			// Recalculate filtered cocktails with current logic mode to ensure reactivity
			return cocktails.filter((cocktail) => {
				return matchesTagsLogic(cocktail, selectedTags, logicMode);
			}).length;
		}

		// If not selected, show what the count would be if we added this tag
		const hypotheticalTags = [...selectedTags, tag];

		return cocktails.filter((cocktail) => {
			return matchesTagsLogic(cocktail, hypotheticalTags, logicMode);
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
		return getTagCount(tag) === 0;
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
		dispatch('filtersChanged', { tags: selectedTags });
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
</script>

<!-- Filter Categories -->
<div class="px-6 py-4 space-y-6">
	{#each allDisplayCategories as category (`${category.label}-${selectedTagsKey}`)}
		{@const isExpanded = expandedCategories.has(category.label)}
		{@const categoryTags = getTagsForCategory(category)}
		{@const selectedCount = getSelectedTagsCount(category)}

		{#if categoryTags.length > 0}
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

				<!-- Category Items (Tags) -->
				{#if isExpanded}
					<div class="flex flex-wrap gap-2 pl-6" transition:slide>
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
					</div>
				{/if}
			</div>
		{/if}
	{/each}
</div>
