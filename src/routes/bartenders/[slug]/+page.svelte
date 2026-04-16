<script lang="ts">
	import type { PageData } from './$types';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import CocktailsTable from '$lib/components/CocktailsTable.svelte';
	import CopyLinkButton from '$lib/components/CopyLinkButton.svelte';
	import { fade, fly } from 'svelte/transition';

	export let data: PageData;
	const { bartender, cocktails } = data;
</script>

<svelte:head>
	<title>{bartender.name} - The Krauss Haus</title>
	<meta
		name="description"
		content={bartender.description ?? `Cocktails created by ${bartender.name}`}
	/>
	{#if bartender.imageUrl}
		<meta property="og:image" content={bartender.imageUrl} />
	{/if}
	<meta property="og:title" content="{bartender.name} - The Krauss Haus" />
	<meta
		property="og:description"
		content={bartender.description ?? `Cocktails created by ${bartender.name}`}
	/>
</svelte:head>

<main
	class="min-h-screen p-6 bg-[#f8f9fa] overflow-y-auto"
	in:fly={{ y: 20, duration: 400, delay: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="max-w-6xl mx-auto pb-8">
		<Breadcrumbs />

		<div
			class="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
			in:fly={{ y: 20, duration: 400, delay: 400 }}
		>
			<div class="p-8">
				<header class="mb-4">
					<div class="flex items-start gap-4">
						{#if bartender.imageUrl}
							<img
								src={bartender.imageUrl}
								alt={bartender.name}
								class="w-24 h-24 rounded-full object-cover shadow-sm"
							/>
						{/if}
						<div class="flex-1">
							<div class="flex items-center gap-3 mb-1">
								<h1 class="text-4xl font-bold text-gray-800">{bartender.name}</h1>
								<CopyLinkButton
									url={typeof window !== 'undefined' ? window.location.href : ''}
									ariaLabel="Copy link to {bartender.name}"
									size="md"
								/>
							</div>
							{#if bartender.birthYear || bartender.deathYear}
								<p class="text-sm text-gray-500 mb-2">
									{bartender.birthYear ?? ''}{bartender.birthYear || bartender.deathYear
										? ' – '
										: ''}{bartender.deathYear ?? ''}
								</p>
							{/if}
						</div>
					</div>
					{#if bartender.description}
						<p class="text-lg text-gray-700 leading-relaxed mt-4">{bartender.description}</p>
					{/if}
				</header>
			</div>
		</div>

		<section in:fly={{ y: 20, duration: 400, delay: 600 }}>
			<h2 class="text-2xl font-bold text-gray-800 mb-4">
				Cocktails by {bartender.name}
				<span class="text-base font-normal text-gray-500 ml-2">({cocktails.length})</span>
			</h2>
			{#if cocktails.length === 0}
				<div class="bg-white rounded-lg shadow p-12 text-center">
					<p class="text-gray-500 text-lg">No cocktails on file yet.</p>
				</div>
			{:else}
				<CocktailsTable {cocktails} showSearch={false} showFilters={false} />
			{/if}
		</section>
	</div>

	<ScrollToTop />
</main>
