<script lang="ts">
	import type { PageData } from './$types';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import { fade, fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	export let data: PageData;
	const { bartenders, cocktailCountBySlug } = data;

	function navigateToBartender(slug: string): void {
		goto(resolve(`/bartenders/${slug}`));
	}

	function handleKeydown(event: KeyboardEvent, slug: string): void {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			navigateToBartender(slug);
		}
	}
</script>

<svelte:head>
	<title>Bartenders - The Krauss Haus</title>
	<meta
		name="description"
		content="Browse the notable bartenders and bars behind the cocktails at The Krauss Haus"
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

		<header class="text-center mb-8" in:fly={{ y: 20, duration: 400, delay: 400 }}>
			<h1 class="text-4xl font-bold text-gray-800 mb-4">Bartenders</h1>
			<p class="text-gray-600">The notable people and places behind the cocktails on this menu</p>
		</header>

		<div
			class="bg-white rounded-lg shadow-lg overflow-hidden"
			in:fly={{ y: 20, duration: 400, delay: 600 }}
		>
			<div class="border-b border-gray-200 bg-gray-50 px-6 py-4">
				<div class="grid grid-cols-12 gap-4 font-semibold text-gray-700">
					<div class="col-span-12 md:col-span-4">Name</div>
					<div class="hidden md:block md:col-span-8">Description</div>
				</div>
			</div>

			<div class="divide-y divide-gray-200">
				{#each bartenders as bartender (bartender.slug)}
					<div
						class="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200 focus-within:bg-gray-50"
						role="button"
						tabindex="0"
						on:click={() => navigateToBartender(bartender.slug)}
						on:keydown={(e) => handleKeydown(e, bartender.slug)}
					>
						<div class="grid grid-cols-12 gap-4 items-start">
							<div class="col-span-12 md:col-span-4">
								<h3 class="font-semibold text-gray-800 text-lg">{bartender.name}</h3>
								{#if bartender.birthYear || bartender.deathYear}
									<p class="text-xs text-gray-500 mt-0.5">
										{bartender.birthYear ?? ''}{bartender.birthYear || bartender.deathYear
											? ' – '
											: ''}{bartender.deathYear ?? ''}
									</p>
								{/if}
								{#if cocktailCountBySlug.get(bartender.slug)}
									<p class="text-xs text-gray-400 mt-0.5">
										{cocktailCountBySlug.get(bartender.slug)} cocktail{cocktailCountBySlug.get(
											bartender.slug
										) === 1
											? ''
											: 's'}
									</p>
								{/if}
							</div>
							<div class="hidden md:block md:col-span-8">
								{#if bartender.description}
									<p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
										{bartender.description}
									</p>
								{:else}
									<span class="text-gray-400 text-sm">—</span>
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<ScrollToTop />
</main>

<style>
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
