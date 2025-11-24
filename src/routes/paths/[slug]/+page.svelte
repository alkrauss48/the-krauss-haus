<script lang="ts">
	import type { PageData } from './$types';
	import CocktailCard from '$lib/components/CocktailCard.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { fade, fly } from 'svelte/transition';

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

							<!-- Path Dots Connector (show between cards, not after last) -->
							{#if index < path.cocktails.length - 1}
								<div class="flex justify-center items-center my-6">
									<div class="flex flex-col items-center gap-2">
										<!-- Trail of dots showing progression -->
										<svg
											class="w-6 h-16 text-indigo-400"
											viewBox="0 0 24 64"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<!-- Vertical line connecting dots -->
											<line
												x1="12"
												y1="4"
												x2="12"
												y2="60"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-dasharray="4 4"
												opacity="0.4"
											/>
											<!-- Dots along the path -->
											<circle cx="12" cy="8" r="3" fill="currentColor" opacity="0.6" />
											<circle cx="12" cy="20" r="3.5" fill="currentColor" opacity="0.7" />
											<circle cx="12" cy="32" r="4" fill="currentColor" opacity="0.8" />
											<circle cx="12" cy="44" r="3.5" fill="currentColor" opacity="0.7" />
											<circle cx="12" cy="56" r="3" fill="currentColor" opacity="0.6" />
										</svg>
									</div>
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
