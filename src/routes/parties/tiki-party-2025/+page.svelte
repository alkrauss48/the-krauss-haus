<script lang="ts">
	import PartyTimeline from '$lib/components/PartyTimeline.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import BackButton from '$lib/components/BackButton.svelte';
	import { fade, fly } from 'svelte/transition';
	import * as PartyData from '$lib/data/party';

	import PIMMS_CUP from '$lib/data/cocktails/pimms-cup';
	import HURRICANE from '$lib/data/cocktails/hurricane';
	import SATURN from '$lib/data/cocktails/saturn';
	import PAINKILLER from '$lib/data/cocktails/painkiller';
	import IRON_RANGER from '$lib/data/cocktails/iron-ranger';
	import SINGAPORE_SLING from '$lib/data/cocktails/singapore-sling';
	import SPRITZ from '$lib/data/cocktails/spritz';
	import ANCIENT_MARINER from '$lib/data/cocktails/ancient-mariner';
	import MAI_TAI from '$lib/data/cocktails/mai-tai';

	// Custom colors for the party theme
	const partyColors = {
		primary: '#f0f9ff',
		secondary: '#dbeafe',
		tertiary: '#fefefe',
		variationText: '#bfdbfe'
	};

	const partySchedule: PartyData.PartyTimeSlot[] = [
		{
			time: '4:00pm',
			cocktail: PIMMS_CUP,
			note: PartyData.PartyNote.WELCOME
		},
		{
			time: '4:30pm',
			cocktail: HURRICANE,
			note: PartyData.PartyNote.SMALL_BATCH
		},
		{
			time: '5:00pm',
			cocktail: SATURN,
			note: PartyData.PartyNote.SMALL_BATCH
		},
		{
			time: '5:30pm',
			cocktail: PAINKILLER,
			note: PartyData.PartyNote.BIG_BATCH
		},
		{
			time: '6:00pm',
			cocktail: ANCIENT_MARINER,
			note: PartyData.PartyNote.SMALL_BATCH
		},
		{
			time: '6:30pm',
			cocktail: SINGAPORE_SLING,
			note: PartyData.PartyNote.SMALL_BATCH
		},
		{
			time: '7:00pm',
			cocktail: SPRITZ,
			note: PartyData.PartyNote.BIG_BATCH
		},
		{
			time: '7:30pm',
			cocktail: IRON_RANGER,
			note: PartyData.PartyNote.SMALL_BATCH
		},
		{
			time: '8:00pm',
			cocktail: MAI_TAI,
			note: PartyData.PartyNote.SMALL_BATCH
		}
	];
</script>

<svelte:head>
	<title>Tiki Party - The Krauss Haus</title>
	<meta name="description" content="Celebrating Aaron's 35th in style on August 9th, 2025" />
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
		<BackButton />

		<header class="text-center mb-16" in:fly={{ y: 20, duration: 400, delay: 400 }}>
			<h1 class="text-5xl font-bold text-amber-800 mb-4">Tiki Party</h1>
			<p class="text-2xl text-amber-600 font-medium mb-2">Saturday, August 9, 2025</p>
			<p class="text-xl text-amber-700 font-medium">Celebrating Aaron's 35th in style</p>
		</header>

		<!-- Timeline -->
		<PartyTimeline {partySchedule} {partyColors} />
	</div>

	<ScrollToTop />
</main>
