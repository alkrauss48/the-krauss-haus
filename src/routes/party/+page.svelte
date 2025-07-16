<script lang="ts">
	import CocktailCard from '$lib/components/CocktailCard.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import BackButton from '$lib/components/BackButton.svelte';
	import { fade, fly } from 'svelte/transition';
	import { partySchedule, noteColors } from '$lib/data/party-schedule';

	// Custom colors for the party theme
	const partyColors = {
		primary: '#f0f9ff',
		secondary: '#dbeafe',
		tertiary: '#fefefe',
		variationText: '#bfdbfe'
	};
</script>

<svelte:head>
	<title>Tiki Party - The Krauss Haus</title>
	<meta
		name="description"
		content="Celebrating Aaron's 35th in style with a curated cocktail schedule"
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
			<p class="text-2xl text-amber-600 font-medium mb-2">Saturday, August 8, 2025</p>
			<p class="text-xl text-amber-700 font-medium">Celebrating Aaron's 35th in style</p>
		</header>

		<!-- Timeline Container -->
		<div class="relative max-w-3xl mx-auto">
			<!-- Timeline Line -->
			<div
				class="absolute left-6 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full transform -translate-x-1/2"
			></div>

			<!-- Schedule Items -->
			<div class="space-y-16">
				{#each partySchedule as timeSlot, i (timeSlot.time)}
					<div
						class="relative flex items-start gap-8 mb-8"
						in:fly={{ x: -20, duration: 400, delay: 600 + i * 100 }}
					>
						<!-- Time Badge -->
						<div
							class="flex-shrink-0 w-12 h-12 md:w-24 md:h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg z-10"
						>
							<span class="text-white font-bold text-[10px] md:text-sm">{timeSlot.time}</span>
						</div>

						<!-- Content Card -->
						<div class="flex-1 bg-white rounded-lg shadow-lg p-6 border border-amber-100">
							<!-- Note Badge -->
							<div class="mb-4">
								<span
									class="inline-block px-3 py-1 text-xs font-medium rounded-full {noteColors[
										timeSlot.note
									].bgClass} {noteColors[timeSlot.note].textClass}"
								>
									{timeSlot.note}
								</span>
							</div>

							<!-- Cocktail Card -->
							<CocktailCard cocktail={timeSlot.cocktail} bgColors={partyColors} />
						</div>
					</div>
				{/each}
			</div>

			<!-- End Marker -->
			<div
				class="relative flex items-center gap-8 mt-12"
				in:fly={{ x: -20, duration: 400, delay: 1500 }}
			>
				<div
					class="flex-shrink-0 w-12 h-12 md:w-24 md:h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg z-10"
				>
					<span class="text-white font-bold text-[10px] md:text-sm">Next</span>
				</div>
				<div class="flex-1 bg-white rounded-lg shadow-lg p-6 border border-orange-100">
					<h3 class="text-xl font-bold text-orange-800 mb-2">Custom orders!</h3>
					<p class="text-orange-600">Find something you want to try? Order up!</p>
				</div>
			</div>
		</div>
	</div>

	<ScrollToTop />
</main>
