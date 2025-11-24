<script lang="ts">
	import type { PageData } from './$types';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import { fade, fly } from 'svelte/transition';
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';

	export let data: PageData;
	const { paths } = data;

	function navigateToPath(slug: string): void {
		goto(resolve(`/paths/${slug}`));
	}
</script>

<svelte:head>
	<title>Cocktail Paths - The Krauss Haus</title>
	<meta name="description" content="Discover your journey through the world of cocktails" />
	<meta
		property="og:image"
		content="https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/cocktail-paths-promo.jpeg"
	/>
</svelte:head>

<main
	class="min-h-screen p-6 bg-[#f8f9fa] overflow-y-auto"
	in:fly={{ y: 20, duration: 400, delay: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="max-w-7xl mx-auto pb-8">
		<Breadcrumbs />

		<header class="text-center mb-12" in:fly={{ y: 20, duration: 400, delay: 400 }}>
			<h1 class="text-4xl font-bold text-gray-800 mb-4">Cocktail Paths</h1>
			<p class="text-gray-600">Discover your journey through the world of cocktails</p>
		</header>

		<!-- Paths Grid: All 7 paths in flexbox -->
		<div
			class="flex flex-wrap justify-center gap-3 sm:gap-6"
			in:fly={{ y: 20, duration: 400, delay: 600 }}
		>
			{#each paths as path, index (path.slug)}
				<a
					href={resolve(`/paths/${path.slug}`)}
					on:click|preventDefault={() => navigateToPath(path.slug)}
					class="group rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white overflow-hidden w-[calc((100%-0.75rem)/2)] sm:w-[calc((100%-1.5rem)/2)] md:w-[calc((100%-2*1.5rem)/3)] lg:w-[calc((100%-3*1.5rem)/4)] cursor-pointer"
					in:fly={{ y: 20, duration: 400, delay: 700 + index * 100 }}
				>
					<img src={path.imagePath} alt={path.title} class="w-full h-auto" loading="lazy" />
					<!-- Title and Subtitle Below Image -->
					<div class="p-3 sm:p-6">
						<h2 class="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1">
							{path.title}
						</h2>
						<p class="text-gray-600 text-xs sm:text-sm">{path.subtitle}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<ScrollToTop />
</main>
