<script lang="ts">
	import type { PageData } from './$types';
	import BackButton from '$lib/components/BackButton.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import { fade, fly } from 'svelte/transition';
	import { methodColors } from '$lib/enums/methods';
	import { goto } from '$app/navigation';

	export let data: PageData;
	const { cocktails } = data;

	let searchTerm = '';

	// Filter cocktails based on search term
	$: filteredCocktails = cocktails.filter((cocktail) =>
		cocktail.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	function navigateToCocktail(slug: string): void {
		goto(`/cocktails/${slug}`);
	}

	function handleKeydown(event: KeyboardEvent, slug: string): void {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			navigateToCocktail(slug);
		}
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
		<BackButton />

		<header class="text-center mb-8" in:fly={{ y: 20, duration: 400, delay: 400 }}>
			<h1 class="text-4xl font-bold text-gray-800 mb-4">All Cocktails</h1>
			<p class="text-gray-600">Browse our complete collection of cocktail recipes</p>
		</header>

		<!-- Search Bar -->
		<div class="mb-8" in:fly={{ y: 20, duration: 400, delay: 600 }}>
			<div class="max-w-md mx-auto">
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
		</div>

		<!-- Results Count -->
		<div class="mb-6 text-center text-gray-600" in:fly={{ y: 20, duration: 400, delay: 700 }}>
			{#if searchTerm}
				Showing {filteredCocktails.length} of {cocktails.length} cocktails
			{:else}
				{cocktails.length} cocktails total
			{/if}
		</div>

		<!-- Cocktails Table -->
		<div
			class="bg-white rounded-lg shadow-lg overflow-hidden"
			in:fly={{ y: 20, duration: 400, delay: 800 }}
		>
			{#if filteredCocktails.length === 0}
				<div class="p-12 text-center">
					<p class="text-gray-500 text-lg">No cocktails found matching "{searchTerm}"</p>
				</div>
			{:else}
				<!-- Table Header -->
				<div class="border-b border-gray-200 bg-gray-50 px-6 py-4">
					<div class="grid grid-cols-12 gap-4 items-center font-semibold text-gray-700">
						<div class="col-span-2">Image</div>
						<div class="col-span-3">Name</div>
						<div class="col-span-5">Description</div>
						<div class="col-span-2">Method</div>
					</div>
				</div>

				<!-- Table Body -->
				<div class="divide-y divide-gray-200">
					{#each filteredCocktails as cocktail, i (cocktail.slug)}
						<div
							class="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200 focus-within:bg-gray-50"
							role="button"
							tabindex="0"
							on:click={() => navigateToCocktail(cocktail.slug)}
							on:keydown={(e) => handleKeydown(e, cocktail.slug)}
							in:fly={{ y: 20, duration: 300, delay: 900 + i * 50 }}
						>
							<div class="grid grid-cols-12 gap-4 items-center">
								<!-- Image -->
								<div class="col-span-2">
									<div
										class="w-16 h-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg overflow-hidden shadow-sm"
									>
										<img
											src={cocktail.imagePath}
											alt={cocktail.title}
											class="w-full h-full object-contain p-2"
										/>
									</div>
								</div>

								<!-- Name -->
								<div class="col-span-3">
									<h3 class="font-semibold text-gray-800 text-lg">{cocktail.title}</h3>
									{#if cocktail.subtitle}
										<p class="text-gray-500 text-sm italic">{cocktail.subtitle}</p>
									{/if}
								</div>

								<!-- Description -->
								<div class="col-span-5">
									<p class="text-gray-600 text-sm leading-relaxed line-clamp-2">
										{cocktail.description}
									</p>
								</div>

								<!-- Method -->
								<div class="col-span-2">
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
