<script lang="ts">
	import type { PageData } from './$types';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import { fade, fly } from 'svelte/transition';
	import { goto } from '$app/navigation';

	export let data: PageData;
	const { parties } = data;

	let searchTerm = '';

	// Filter parties based on search term
	$: filteredParties = parties.filter(
		(party) =>
			party.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			party.description.toLowerCase().includes(searchTerm.toLowerCase())
	);

	function navigateToParty(slug: string): void {
		goto(`/parties/${slug}`);
	}

	function handleKeydown(event: KeyboardEvent, slug: string): void {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			navigateToParty(slug);
		}
	}

	function formatDate(date: Date): string {
		return date.toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>All Parties - The Krauss Haus</title>
	<meta name="description" content="Browse all parties and events at The Krauss Haus" />
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
			<h1 class="text-4xl font-bold text-gray-800 mb-4">All Parties</h1>
			<p class="text-gray-600">Browse our upcoming and past events</p>
		</header>

		<!-- Search Bar -->
		<div class="mb-8" in:fly={{ y: 20, duration: 400, delay: 600 }}>
			<div class="max-w-md mx-auto">
				<label for="party-search" class="block text-sm font-medium text-gray-700 mb-2">
					Search Parties
				</label>
				<div class="relative">
					<input
						id="party-search"
						type="text"
						bind:value={searchTerm}
						placeholder="Search by party name or description..."
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
				Showing {filteredParties.length} of {parties.length} parties
			{:else}
				{parties.length} {parties.length === 1 ? 'party' : 'parties'} total
			{/if}
		</div>

		<!-- Parties Table -->
		<div
			class="bg-white rounded-lg shadow-lg overflow-hidden"
			in:fly={{ y: 20, duration: 400, delay: 800 }}
		>
			{#if filteredParties.length === 0}
				<div class="p-12 text-center">
					<p class="text-gray-500 text-lg">No parties found matching "{searchTerm}"</p>
				</div>
			{:else}
				<!-- Table Header -->
				<div class="border-b border-gray-200 bg-gray-50 px-6 py-4">
					<div
						class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center font-semibold text-gray-700"
					>
						<div class="md:col-span-2">Name</div>
						<div class="md:col-span-7">Description</div>
						<div class="md:col-span-3">Date</div>
					</div>
				</div>

				<!-- Table Body -->
				<div class="divide-y divide-gray-200">
					{#each filteredParties as party, i (party.slug)}
						<div
							class="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200 focus-within:bg-gray-50"
							role="button"
							tabindex="0"
							on:click={() => navigateToParty(party.slug)}
							on:keydown={(e) => handleKeydown(e, party.slug)}
							in:fly={{ y: 20, duration: 300, delay: 900 + i * 50 }}
						>
							<div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
								<!-- Name -->
								<div class="md:col-span-2">
									<h3 class="font-semibold text-gray-800 text-lg">{party.name}</h3>
								</div>

								<!-- Description -->
								<div class="md:col-span-7">
									<p class="text-gray-600 text-sm leading-relaxed line-clamp-2">
										{party.description}
									</p>
								</div>

								<!-- Date -->
								<div class="md:col-span-3">
									<p class="text-gray-700 font-medium">{formatDate(party.date)}</p>
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
