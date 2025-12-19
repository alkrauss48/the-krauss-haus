<script lang="ts">
	import type { PageData } from './$types';
	import PartyTimeline from '$lib/components/PartyTimeline.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { fade, fly } from 'svelte/transition';

	export let data: PageData;
	const { party } = data;

	// Custom colors for the party theme
	// TODO: Make this configurable per party if needed
	const partyColors = {
		primary: '#f0f9ff',
		secondary: '#dbeafe',
		tertiary: '#fefefe',
		variationText: '#bfdbfe'
	};

	function formatDate(date: Date): string {
		return date.toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function formatDateShort(date: Date): string {
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>{party.name} - The Krauss Haus</title>
	<meta name="description" content="{party.description} - {formatDateShort(party.date)}" />
	<meta
		property="og:image"
		content="https://thekrausshaus.com/images/open-graph/tiki-party-2025.jpg"
	/>
</svelte:head>

<main
	class="min-h-screen p-6 bg-gradient-to-br from-amber-50 to-orange-50 overflow-y-auto"
	in:fly={{ y: 20, duration: 400, delay: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="max-w-4xl mx-auto pb-8">
		<Breadcrumbs />

		<header class="text-center mb-16" in:fly={{ y: 20, duration: 400, delay: 400 }}>
			<h1 class="text-5xl font-bold text-amber-800 mb-4">{party.name}</h1>
			<p class="text-2xl text-amber-600 font-medium mb-2">{formatDate(party.date)}</p>
			<p class="text-xl text-amber-700 font-medium">{party.description}</p>
		</header>

		<!-- Timeline -->
		<PartyTimeline partySchedule={party.schedule} {partyColors} />
	</div>

	<ScrollToTop />
</main>
