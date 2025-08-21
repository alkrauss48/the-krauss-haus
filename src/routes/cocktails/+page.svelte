<script lang="ts">
	import type { PageData } from './$types';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import TagFilter from '$lib/components/TagFilter.svelte';
	import { fade, fly } from 'svelte/transition';
	import { methodColors } from '$lib/enums/methods';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { allTagCategories } from '$lib/data/all-tags';
	import type { Tag } from '$lib/types/tags';

	export let data: PageData;
	const { cocktails } = data;

	let searchTerm = '';
	let selectedTags: Tag[] = data.selectedTags || [];
	let isFilterSidebarOpen = false;

	// Filter cocktails based on search term and selected tags
	$: filteredCocktails = cocktails.filter((cocktail) => {
		// First filter by search term
		const matchesSearch = cocktail.title.toLowerCase().includes(searchTerm.toLowerCase());

		// Then filter by tags (intersection - all selected tags must be present)
		const matchesTags =
			selectedTags.length === 0 ||
			selectedTags.every((selectedTag) =>
				(cocktail.tags || []).some((cocktailTag) => cocktailTag.label === selectedTag.label)
			);

		return matchesSearch && matchesTags;
	});

	function navigateToCocktail(slug: string): void {
		goto(`/cocktails/${slug}`);
	}

	function handleKeydown(event: KeyboardEvent, slug: string): void {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			navigateToCocktail(slug);
		}
	}

	// Handle tag selection changes and update URL
	function handleTagsChanged(event: CustomEvent<{ tags: Tag[] }>): void {
		selectedTags = event.detail.tags;
		updateURL();
	}

	// Toggle filter sidebar
	function toggleFilterSidebar(): void {
		isFilterSidebarOpen = !isFilterSidebarOpen;
	}

	// Convert category label to URL-friendly key
	function categoryToUrlKey(categoryLabel: string): string {
		return categoryLabel.toLowerCase().replace(/\s+/g, '-');
	}

	// Update URL with current tag selection using category-based structure
	function updateURL(): void {
		const url = new URL($page.url);

		// Clear all existing tag-related params
		allTagCategories.forEach((category) => {
			const categoryKey = categoryToUrlKey(category.label);
			url.searchParams.delete(categoryKey);
		});

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

		goto(url, { replaceState: true, noScroll: true });
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
								placeholder="Search by cocktail name..."
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
						class:bg-amber-700={selectedTags.length > 0}
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
						{#if selectedTags.length > 0}
							<span
								class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
							>
								{selectedTags.length}
							</span>
						{/if}
					</button>
				</div>
			</div>
		</div>

		<!-- Active Filters Summary (visible when filters are applied) -->
		{#if selectedTags.length > 0}
			<div class="mb-6" in:fly={{ y: 20, duration: 400, delay: 700 }}>
				<div class="max-w-4xl mx-auto">
					<div class="bg-amber-50 border border-amber-200 rounded-lg p-4">
						<div class="flex items-center justify-between mb-2">
							<h4 class="text-sm font-medium text-gray-800">Active Filters</h4>
							<button
								on:click={() => {
									selectedTags = [];
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
						</div>
					</div>
				</div>
			</div>
		{/if}

		<!-- Tag Filter Sidebar -->
		<TagFilter
			{cocktails}
			{selectedTags}
			{filteredCocktails}
			isOpen={isFilterSidebarOpen}
			on:tagsChanged={handleTagsChanged}
			on:toggleSidebar={toggleFilterSidebar}
		/>

		<!-- Results Count -->
		<div class="mb-6 text-center text-gray-600" in:fly={{ y: 20, duration: 400, delay: 900 }}>
			{#if searchTerm || selectedTags.length > 0}
				Showing {filteredCocktails.length} of {cocktails.length} cocktails
				{#if searchTerm}
					matching "{searchTerm}"
				{/if}
				{#if selectedTags.length > 0}
					with selected tags
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
						{#if searchTerm && selectedTags.length > 0}
							matching "{searchTerm}" with selected tags
						{:else if searchTerm}
							matching "{searchTerm}"
						{:else if selectedTags.length > 0}
							with selected tags
						{/if}
					</p>
				</div>
			{:else}
				<!-- Table Header -->
				<div class="border-b border-gray-200 bg-gray-50 px-6 py-4">
					<div
						class="grid grid-cols-8 sm:grid-cols-11 md:grid-cols-12 gap-4 items-center font-semibold text-gray-700"
					>
						<div class="col-span-3 md:col-span-2">Image</div>
						<div class="col-span-5 md:col-span-3">Name</div>
						<div class="col-span-5 hidden md:block">Description</div>
						<div class="col-span-3 hidden sm:block md:col-span-2">Method</div>
					</div>
				</div>

				<!-- Table Body -->
				<div class="divide-y divide-gray-200">
					{#each filteredCocktails as cocktail (cocktail.slug)}
						<div
							class="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200 focus-within:bg-gray-50"
							role="button"
							tabindex="0"
							on:click={() => navigateToCocktail(cocktail.slug)}
							on:keydown={(e) => handleKeydown(e, cocktail.slug)}
						>
							<div class="grid grid-cols-8 sm:grid-cols-11 md:grid-cols-12 gap-4 items-center">
								<!-- Image -->
								<div class="col-span-3 md:col-span-2">
									<div
										class="w-16 h-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg overflow-hidden shadow-sm"
									>
										<img
											src={cocktail.thumbnailImagePath}
											alt={cocktail.title}
											class="w-full h-full object-contain p-2"
										/>
									</div>
								</div>

								<!-- Name -->
								<div class="col-span-5 md:col-span-3">
									<h3 class="font-semibold text-gray-800 text-lg">{cocktail.title}</h3>
								</div>

								<!-- Description -->
								<div class="col-span-5 hidden md:block">
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
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
