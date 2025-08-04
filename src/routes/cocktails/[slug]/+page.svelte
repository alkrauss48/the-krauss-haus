<script lang="ts">
	import type { PageData } from './$types';
	import BackButton from '$lib/components/BackButton.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import CopyLinkButton from '$lib/components/CopyLinkButton.svelte';
	import { fade, fly } from 'svelte/transition';
	import { methodColors } from '$lib/enums/methods';
	import { handleAnchorClick } from '$lib/utils/navigation';

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
		<BackButton />

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

				<!-- Method Badge -->
				{#if cocktail.method}
					<div class="mb-8">
						<span class="text-sm text-gray-500 mb-2 font-light tracking-wide">Method:</span>
						<span
							class="inline-block px-4 py-2 text-sm font-medium rounded-full text-gray-800"
							style="background-color: {methodColors[cocktail.method]};"
						>
							{cocktail.method.charAt(0).toUpperCase() + cocktail.method.slice(1)}
						</span>
					</div>
				{/if}

				<!-- Ingredients Section -->
				{#if cocktail.ingredients && cocktail.ingredients.length > 0}
					<section class="mb-8">
						<h2 class="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
						<ul class="space-y-2">
							{#each cocktail.ingredients as ingredient (ingredient)}
								<li class="flex items-start">
									<span class="text-amber-600 mr-2 mt-1">•</span>
									<span class="text-gray-700">{ingredient}</span>
								</li>
							{/each}
						</ul>
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
									on:click={(e) => handleAnchorClick(e, '/summer-menu')}
									class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
								>
									Summer Menu
								</a>
							{/if}
							{#if onWinter}
								<a
									href="/winter-menu"
									on:click={(e) => handleAnchorClick(e, '/winter-menu')}
									class="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors"
								>
									Winter Menu
								</a>
							{/if}
							{#if onTiki}
								<a
									href="/tiki-menu"
									on:click={(e) => handleAnchorClick(e, '/tiki-menu')}
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
