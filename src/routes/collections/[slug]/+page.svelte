<script lang="ts">
	import type { PageData } from './$types';
	import type { SectionColor } from '$lib/types/colors';
	import CocktailCard from '$lib/components/CocktailCard.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CopyLinkButton from '$lib/components/CopyLinkButton.svelte';
	import { fade, fly } from 'svelte/transition';

	let { data }: { data: PageData } = $props();
	let collection = $derived(data.collection);

	// An ungrouped collection is one section with no heading. `offset` keeps the card entrance
	// stagger running across sections instead of restarting under each heading.
	let sections = $derived.by(() => {
		const groups = collection.groups ?? [{ heading: undefined, cocktails: collection.cocktails }];
		let offset = 0;
		return groups.map((group) => {
			const section = { ...group, offset };
			offset += group.cocktails.length;
			return section;
		});
	});

	const defaultColors: SectionColor = {
		primary: '#dbeafe',
		secondary: '#e0e7ff',
		tertiary: '#ede9fe',
		variationText: '#1e40af'
	};
</script>

<svelte:head>
	<title>{collection.title} - The Krauss Haus</title>
	<meta name="description" content={collection.description} />
	<meta
		property="og:image"
		content={collection.imagePath ?? 'https://thekrausshaus.com/images/open-graph/og-root.jpg'}
	/>
</svelte:head>

<main
	class="flex-1 p-6 bg-[#f8f9fa] overflow-y-auto"
	in:fly={{ y: 20, duration: 400, delay: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="max-w-7xl mx-auto pb-8">
		<Breadcrumbs />

		<header class="text-center mb-16" in:fly={{ y: 20, duration: 400, delay: 400 }}>
			<div class="flex items-center justify-center gap-3 mb-4">
				<h1 class="text-4xl font-bold text-gray-800">{collection.title}</h1>
				<CopyLinkButton
					url={typeof window !== 'undefined' ? window.location.href : ''}
					ariaLabel="Copy link to {collection.title} collection"
					size="md"
				/>
			</div>
			<p class="text-gray-600 max-w-2xl mx-auto">{collection.description}</p>
		</header>

		<div class="space-y-16">
			{#each sections as section (section.heading ?? '')}
				<section>
					{#if section.heading}
						<div
							class="flex items-center mb-10"
							in:fly={{ y: 20, duration: 400, delay: 600 + section.offset * 50 }}
						>
							<div class="flex-1 h-px bg-gray-200"></div>
							<h2 class="text-xl md:text-2xl font-semibold text-gray-700 text-center px-4 md:px-8">
								{section.heading}
							</h2>
							<div class="flex-1 h-px bg-gray-200"></div>
						</div>
					{/if}
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{#each section.cocktails as cocktail, index (cocktail.slug)}
							<div in:fly={{ y: 20, duration: 400, delay: 600 + (section.offset + index) * 50 }}>
								<CocktailCard {cocktail} bgColors={collection.bgColors ?? defaultColors} />
							</div>
						{/each}
					</div>
				</section>
			{/each}
		</div>
	</div>

	<ScrollToTop />
</main>
