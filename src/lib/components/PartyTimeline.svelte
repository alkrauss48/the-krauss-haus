<script lang="ts">
	import CocktailCard from '$lib/components/CocktailCard.svelte';
	import { fly } from 'svelte/transition';
	import * as PartyData from '$lib/types/party';

	export let partySchedule: PartyData.PartyTimeSlot[];
	export let partyColors: {
		primary: string;
		secondary: string;
		tertiary: string;
		variationText: string;
	};

	// Destructure for easier use in template
	const { noteColors } = PartyData;
</script>

<!-- Timeline Container -->
<div class="relative max-w-3xl mx-auto">
	<!-- Timeline Line -->
	<div
		class="absolute left-6 md:left-12 top-0 bottom-0 w-1 bg-amber-400 rounded-full transform -translate-x-1/2"
		style="background: linear-gradient(to bottom, #fbbf24 0%, #f97316 100%);"
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
					class="flex-shrink-0 w-12 h-12 md:w-24 md:h-24 bg-amber-400 rounded-full flex items-center justify-center shadow-lg z-10"
					style="background: linear-gradient(135deg, #fbbf24 0%, #f97316 100%);"
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
			class="flex-shrink-0 w-12 h-12 md:w-24 md:h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-lg z-10"
			style="background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);"
		>
			<span class="text-white font-bold text-[10px] md:text-sm">Next</span>
		</div>
		<div class="flex-1 bg-white rounded-lg shadow-lg p-6 border border-orange-100">
			<h3 class="text-xl font-bold text-orange-800 mb-2">Custom orders!</h3>
			<p class="text-orange-600">Find something you want to try? Order up!</p>
		</div>
	</div>
</div>
