<script lang="ts">
	import type { Cocktail } from '$lib/types/cocktails';
	import { sectionColors } from '$lib/types/colors';
	import CocktailCard from './CocktailCard.svelte';
	import { fly } from 'svelte/transition';

	export let featuredDrinks: Cocktail[];
	export let title = 'Featured Drinks';
	export let subtitle = '';
</script>

<section
	class="rounded-lg p-8 relative overflow-hidden"
	in:fly={{ y: 20, duration: 400, delay: 500 }}
>
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-8">
			<h2 class="text-3xl font-medium text-gray-800 mb-2 tracking-wide">{title}</h2>
			<p class="text-lg text-gray-600 font-light leading-relaxed">
				{subtitle}
			</p>
		</div>
		<div class="flex flex-wrap justify-center gap-6">
			{#each featuredDrinks as drink, index (drink.slug)}
				<div
					class="w-full max-w-md md:flex-[0_1_calc(50%-12px)] lg:flex-[0_1_calc(33.333%-16px)]"
					in:fly={{ y: 20, duration: 400, delay: 500 + index * 100 }}
				>
					<CocktailCard cocktail={drink} bgColors={sectionColors.featured} />
				</div>
			{/each}
		</div>
	</div>
</section>
