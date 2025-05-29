<script lang="ts">
	import type { Cocktail } from '$lib/types/cocktails';
	import { sectionColors } from '$lib/types/colors';
	import CocktailCard from './CocktailCard.svelte';
	import { fly } from 'svelte/transition';

	export let featuredDrink: Cocktail;
	export let title = 'Welcome Drink';
	export let subtitle =
		"Because you shouldn't have to worry about what to order the moment you walk in the door.";
</script>

<section
	class="bg-white rounded-lg shadow-lg p-8 border border-amber-100 relative overflow-hidden"
	in:fly={{ y: 20, duration: 400, delay: 500 }}
>
	<div class="max-w-xl mx-auto">
		<div class="text-center mb-8">
			<h2 class="text-3xl font-medium text-gray-800 mb-2 tracking-wide">{title}</h2>
			<p class="text-lg text-gray-600 font-light leading-relaxed">
				{subtitle}
			</p>
		</div>
		<div class="max-w-md mx-auto">
			<CocktailCard
				title={featuredDrink.title}
				description={featuredDrink.description}
				imagePath={featuredDrink.imagePath}
				bgColors={sectionColors.featured}
				ingredients={featuredDrink.ingredients}
			/>
		</div>
	</div>
</section>
