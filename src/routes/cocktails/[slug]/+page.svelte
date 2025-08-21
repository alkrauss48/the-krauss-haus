<script lang="ts">
	import type { PageData } from './$types';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import CopyLinkButton from '$lib/components/CopyLinkButton.svelte';
	import { fade, fly } from 'svelte/transition';

	import type { Tag } from '$lib/types/tags';

	// Import menu data to check which menus contain this cocktail
	import {
		categories as summerCategories,
		featuredDrink as summerFeatured
	} from '$lib/data/summer-menu';
	import {
		categories as winterCategories,
		featuredDrink as winterFeatured
	} from '$lib/data/winter-menu';
	import { categories as tikiCategories } from '$lib/data/tiki-menu';

	export let data: PageData;
	const { cocktail } = data;

	// Check which menus contain this cocktail
	function isOnSummerMenu(): boolean {
		if (summerFeatured.slug === cocktail.slug) return true;
		return summerCategories.some((category) =>
			category.cocktails.some((c) => c.slug === cocktail.slug)
		);
	}

	function isOnWinterMenu(): boolean {
		if (winterFeatured.slug === cocktail.slug) return true;
		return winterCategories.some((category) =>
			category.cocktails.some((c) => c.slug === cocktail.slug)
		);
	}

	function isOnTikiMenu(): boolean {
		return tikiCategories.some((category) =>
			category.cocktails.some((c) => c.slug === cocktail.slug)
		);
	}

	const onSummer = isOnSummerMenu();
	const onWinter = isOnWinterMenu();
	const onTiki = isOnTikiMenu();
	const onAnyMenu = onSummer || onWinter || onTiki;

	// Helper function to convert category label to URL-friendly key
	function categoryToUrlKey(categoryLabel: string): string {
		return categoryLabel.toLowerCase().replace(/\s+/g, '-');
	}

	// Generate URL for cocktails page with specific tag filter
	function getTagFilterUrl(tag: Tag): string {
		const categoryKey = categoryToUrlKey(tag.category.label);
		return `/cocktails?${categoryKey}=${encodeURIComponent(tag.label)}`;
	}

	// Helper function to convert hex color to rgba
	function hexToRgba(hex: string, alpha: number): string {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}
</script>

<svelte:head>
	<title>{cocktail.title} - The Krauss Haus</title>
	<meta name="description" content={cocktail.description} />
	<meta property="og:image" content="https://thekrausshaus.com{cocktail.imagePath}" />
	<meta property="og:title" content="{cocktail.title} - The Krauss Haus" />
	<meta property="og:description" content={cocktail.description} />
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
			<!-- Hero Image Section -->
			<div class="relative h-96 bg-gradient-to-br from-amber-50 to-orange-50">
				<img
					src={cocktail.imagePath}
					alt={cocktail.title}
					class="w-full h-full object-contain p-8"
				/>
			</div>

			<!-- Content Section -->
			<div class="p-8">
				<!-- Header -->
				<header class="mb-8">
					<div class="flex items-center gap-3 mb-2">
						<h1 class="text-4xl font-bold text-gray-800">{cocktail.title}</h1>
						<CopyLinkButton
							url={typeof window !== 'undefined' ? window.location.href : ''}
							ariaLabel="Copy link to {cocktail.title}"
							size="md"
						/>
					</div>
					{#if cocktail.subtitle}
						<p class="text-xl text-gray-600 italic mb-4">{cocktail.subtitle}</p>
					{/if}
					<p class="text-lg text-gray-700 leading-relaxed">{cocktail.description}</p>
				</header>

				<!-- Ingredients and Tags Section -->
				{#if (cocktail.ingredients && cocktail.ingredients.length > 0) || (cocktail.tags && cocktail.tags.length > 0)}
					<section class="mb-8">
						<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
							<!-- Ingredients (Left/Main) -->
							{#if cocktail.ingredients && cocktail.ingredients.length > 0}
								<div class="lg:col-span-2">
									<h2 class="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
									{#if cocktail.method}
										<div class="mb-4">
											<span
												class="inline-block px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md border border-gray-200"
											>
												{cocktail.method}
											</span>
										</div>
									{/if}
									<ul class="space-y-2">
										{#each cocktail.ingredients as ingredient (ingredient)}
											<li class="flex items-start">
												<span class="text-amber-600 mr-2 mt-1">•</span>
												<span class="text-gray-700">{ingredient}</span>
											</li>
										{/each}
									</ul>
								</div>
							{/if}

							<!-- Tags Sidebar (Right) -->
							{#if cocktail.tags && cocktail.tags.length > 0}
								<div class="lg:col-span-1">
									<h3 class="text-lg font-semibold text-gray-600 mb-3">Tags</h3>
									<div class="flex flex-wrap gap-2">
										{#each cocktail.tags as tag (tag.label)}
											<a
												href={getTagFilterUrl(tag)}
												class="inline-block px-2 py-1 text-xs font-medium rounded-md transition-all duration-200 hover:scale-105 border border-opacity-20"
												style="
													background-color: {hexToRgba(tag.category.color, 0.05)};
													border-color: {hexToRgba(tag.category.color, 0.2)};
													color: {tag.category.color};
												"
												on:mouseenter={(e) => {
													e.currentTarget.style.backgroundColor = hexToRgba(
														tag.category.color,
														0.08
													);
													e.currentTarget.style.borderColor = hexToRgba(tag.category.color, 0.3);
												}}
												on:mouseleave={(e) => {
													e.currentTarget.style.backgroundColor = hexToRgba(
														tag.category.color,
														0.05
													);
													e.currentTarget.style.borderColor = hexToRgba(tag.category.color, 0.2);
												}}
											>
												{tag.label}
											</a>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					</section>
				{/if}

				<!-- Notes Section -->
				{#if cocktail.notes}
					<section class="mb-8">
						<h2 class="text-2xl font-bold text-gray-800 mb-4">Notes</h2>
						<p class="text-gray-700 leading-relaxed">{cocktail.notes}</p>
					</section>
				{/if}

				<!-- Variations Section -->
				{#if cocktail.variations && cocktail.variations.length > 0}
					<section class="mb-8">
						<h2 class="text-2xl font-bold text-gray-800 mb-4">Variations</h2>
						<div class="grid gap-4 md:grid-cols-2">
							{#each cocktail.variations as variation (variation.name)}
								<div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
									<h3 class="font-semibold text-gray-800 mb-2">{variation.name}</h3>
									<p class="text-gray-600 text-sm">{variation.description}</p>
									{#if variation.images && variation.images.length > 0}
										<div class="flex gap-2 mt-3">
											{#each variation.images as image (image)}
												<img
													src={image}
													alt="{variation.name} variation"
													class="w-8 h-8 rounded-full object-cover"
												/>
											{/each}
										</div>
									{/if}
								</div>
							{/each}
						</div>
					</section>
				{/if}

				<!-- Back to Menu Links -->
				{#if onAnyMenu}
					<section class="pt-8 border-t border-gray-200">
						<h2 class="text-xl font-semibold text-gray-800 mb-4">
							Find this cocktail on our menus:
						</h2>
						<div class="flex flex-wrap gap-3">
							{#if onSummer}
								<a
									href="/summer-menu"
									class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
								>
									Summer Menu
								</a>
							{/if}
							{#if onWinter}
								<a
									href="/winter-menu"
									class="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors"
								>
									Winter Menu
								</a>
							{/if}
							{#if onTiki}
								<a
									href="/tiki-menu"
									class="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
								>
									Tiki Menu
								</a>
							{/if}
						</div>
					</section>
				{/if}
			</div>
		</div>
	</div>

	<ScrollToTop />
</main>
