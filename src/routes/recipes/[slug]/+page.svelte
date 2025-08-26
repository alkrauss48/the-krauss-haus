<script lang="ts">
	import type { PageData } from './$types';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import CopyLinkButton from '$lib/components/CopyLinkButton.svelte';
	import { fade, fly } from 'svelte/transition';
	import { allCocktails } from '$lib/data/all-cocktails';

	export let data: PageData;
	const { recipe, backToPage } = data;

	// Helper function to convert hex color to rgba
	function hexToRgba(hex: string, alpha: number): string {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}

	// Helper function to convert category label to URL-friendly key
	function categoryToUrlKey(categoryLabel: string): string {
		return categoryLabel.toLowerCase().replace(/\s+/g, '-');
	}

	// Generate URL for cocktails page with specific tag filter
	function getTagFilterUrl(): string {
		if (!recipe.tag) return '/cocktails';
		const categoryKey = categoryToUrlKey(recipe.tag.category.label);
		return `/cocktails?${categoryKey}=${encodeURIComponent(recipe.tag.label)}`;
	}

	// Count cocktails that use this recipe
	function getCocktailCount(): number {
		if (!recipe.tag) return 0;
		return allCocktails.filter((cocktail) =>
			(cocktail.tags || []).some((cocktailTag) => cocktailTag.label === recipe.tag!.label)
		).length;
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

				<!-- Ingredients and Tag Section -->
				{#if (recipe.ingredients && recipe.ingredients.length > 0) || recipe.tag}
					<section class="mb-8">
						<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
							<!-- Ingredients (Left/Main) -->
							{#if recipe.ingredients && recipe.ingredients.length > 0}
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
							{/if}

							<!-- Tag Sidebar (Right) -->
							{#if recipe.tag}
								<div class="lg:col-span-1">
									<h3 class="text-lg font-semibold text-gray-600 mb-3">Category</h3>
									<div class="flex flex-wrap gap-2">
										<a
											href={getTagFilterUrl()}
											class="inline-block px-2 py-1 text-xs font-medium rounded-md transition-all duration-200 hover:scale-105 border border-opacity-20"
											style="
										background-color: {hexToRgba(recipe.tag!.category.color, 0.05)};
										border-color: {hexToRgba(recipe.tag!.category.color, 0.2)};
										color: {recipe.tag!.category.color};
									"
											on:mouseenter={(e) => {
												e.currentTarget.style.backgroundColor = hexToRgba(
													recipe.tag!.category.color,
													0.08
												);
												e.currentTarget.style.borderColor = hexToRgba(
													recipe.tag!.category.color,
													0.3
												);
											}}
											on:mouseleave={(e) => {
												e.currentTarget.style.backgroundColor = hexToRgba(
													recipe.tag!.category.color,
													0.05
												);
												e.currentTarget.style.borderColor = hexToRgba(
													recipe.tag!.category.color,
													0.2
												);
											}}
										>
											{recipe.tag!.label}
										</a>
									</div>

									<!-- View Cocktails Button -->
									{#if cocktailCount > 0}
										<div class="mt-4">
											<a
												href={getTagFilterUrl()}
												class="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm gap-2"
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
							{/if}
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

				<!-- Back to Page Link -->
				{#if backToPage}
					<section class="pt-8 border-t border-gray-200">
						<div class="flex flex-wrap gap-3">
							<a
								href="/{backToPage}"
								class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
							>
								Back to {backToPage === 'syrups' ? 'Homemade Syrups' : 'Liquor Infusions'}
							</a>
						</div>
					</section>
				{/if}
			</div>
		</div>
	</div>

	<ScrollToTop />
</main>
