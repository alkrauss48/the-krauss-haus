<script lang="ts">
	import type { PageData } from './$types';
	import CocktailCard from '$lib/components/CocktailCard.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { fade, fly } from 'svelte/transition';
	import { getPathCost, formatCost } from '$lib/utils/cost';
	import { costMode } from '$lib/stores/costMode';

	export let data: PageData;
	const { path } = data;

	// Custom colors for the path theme
	const pathColors = {
		primary: '#e0e7ff',
		secondary: '#e9d5ff',
		tertiary: '#f3e8ff',
		variationText: '#581c87'
	};
</script>

<svelte:head>
	<title>Path of the {path.title} - The Krauss Haus</title>
	<meta name="description" content={path.description} />
	<meta property="og:image" content={path.imagePath} />
</svelte:head>

<main
	class="min-h-screen p-6 bg-[#f8f9fa] overflow-y-auto"
	in:fly={{ y: 20, duration: 400, delay: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="max-w-4xl mx-auto pb-8">
		<Breadcrumbs />

		<!-- Path Header -->
		<header class="text-center mb-16" in:fly={{ y: 20, duration: 400, delay: 400 }}>
			<div class="mb-8">
				<img
					src={path.imagePath}
					alt={path.title}
					class="w-full max-w-xs mx-auto object-contain rounded-xl"
				/>
			</div>
			<h1 class="text-5xl font-bold text-gray-800 mb-4">{path.title}</h1>
			<p class="text-2xl text-gray-600 font-medium mb-4">{path.subtitle}</p>
			<p class="text-lg text-gray-700 max-w-2xl mx-auto">{path.description}</p>
			{#if $costMode}
				{@const cost = getPathCost(path)}
				{#if cost !== null}
					<p class="text-sm text-green-700 mt-4">Est. path cost: {formatCost(cost)}</p>
				{/if}
			{/if}
		</header>

		<!-- Cocktails List -->
		<section class="mb-12">
			<h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Cocktails</h2>
			<div class="relative max-w-md mx-auto">
				<div class="space-y-8">
					{#each path.cocktails as cocktail, index (cocktail.slug)}
						<div class="relative" in:fly={{ y: 20, duration: 400, delay: 600 + index * 100 }}>
							<!-- Cocktail Card -->
							<CocktailCard {cocktail} bgColors={pathColors} />

							<!-- Arrow Connector (show between cards, not after last) -->
							{#if index < path.cocktails.length - 1}
								<div class="flex justify-center items-center my-6">
									<svg
										class="w-5 h-14 text-indigo-500/80"
										viewBox="0 0 20 56"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<!-- Tapered line that fades in and widens toward the arrow -->
										<path
											d="M10 0 Q10 28, 10 44"
											stroke="currentColor"
											stroke-width="1.5"
											stroke-linecap="round"
											opacity="0.5"
										/>
										<!-- Elegant swept arrowhead -->
										<path
											d="M3,40 Q7,46 10,52 Q13,46 17,40"
											stroke="currentColor"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
											fill="none"
											opacity="0.7"
										/>
									</svg>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</section>
	</div>

	<ScrollToTop />
</main>
