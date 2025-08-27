<script lang="ts">
	import RecipeList from '$lib/components/RecipeList.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { fade, fly } from 'svelte/transition';
	import { syrups } from '$lib/data/syrups';
	import { infusions } from '$lib/data/infusions';
</script>

<svelte:head>
	<title>Recipes - The Krauss Haus</title>
	<meta
		name="description"
		content="Homemade syrups and spirit infusions used in cocktails at The Krauss Haus"
	/>
	<meta property="og:image" content="https://thekrausshaus.com/images/open-graph/og-root.jpg" />
</svelte:head>

<main
	class="min-h-screen p-6 bg-[#f8f9fa] overflow-y-auto"
	in:fly={{ y: 20, duration: 400, delay: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="max-w-6xl mx-auto pb-8">
		<Breadcrumbs />

		<header class="text-center mb-16" in:fly={{ y: 20, duration: 400, delay: 400 }}>
			<h1 class="text-4xl font-bold text-gray-800 mb-4">Recipes</h1>
			<p class="text-gray-600">Homemade syrups and spirit infusions for better cocktails</p>
		</header>

		<!-- Syrups Section -->
		<section class="mb-16" in:fly={{ y: 20, duration: 400, delay: 600 }}>
			<div class="bg-white rounded-lg shadow-sm overflow-hidden">
				<div
					class="bg-gradient-to-r from-amber-50 to-yellow-50 px-8 py-6 border-b border-amber-100"
				>
					<div class="flex items-center gap-3 mb-2">
						<div class="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
							<svg
								class="w-5 h-5 text-amber-700"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z"
								/>
							</svg>
						</div>
						<div>
							<h2 class="text-2xl font-bold text-gray-800">Homemade Syrups</h2>
							<p class="text-sm text-gray-600">
								{syrups.length} recipe{syrups.length === 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<p class="text-gray-700">
						Sweet, aromatic, and flavorful syrups that elevate any cocktail. All syrups last about a
						month in the refrigerator, unless otherwise noted.
					</p>
				</div>
				<div class="p-8">
					<RecipeList recipes={syrups} />
				</div>
			</div>
		</section>

		<!-- Infusions Section -->
		<section class="mb-8" in:fly={{ y: 20, duration: 400, delay: 800 }}>
			<div class="bg-white rounded-lg shadow-sm overflow-hidden">
				<div
					class="bg-gradient-to-r from-purple-50 to-indigo-50 px-8 py-6 border-b border-purple-100"
				>
					<div class="flex items-center gap-3 mb-2">
						<div class="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
							<svg
								class="w-5 h-5 text-purple-700"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 3h6v2c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1V3z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z"
								/>
							</svg>
						</div>
						<div>
							<h2 class="text-2xl font-bold text-gray-800">Spirit Infusions</h2>
							<p class="text-sm text-gray-600">
								{infusions.length} recipe{infusions.length === 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<p class="text-gray-700">
						Custom-flavored spirits and liqueurs made from scratch. Why buy a flavored spirit when
						you can make your own?
					</p>
				</div>
				<div class="p-8">
					<RecipeList recipes={infusions} />
				</div>
			</div>
		</section>
	</div>

	<ScrollToTop />
</main>
