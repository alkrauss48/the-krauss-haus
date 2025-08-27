<script lang="ts">
	import type { Recipe } from '$lib/types/recipes';
	import { fly } from 'svelte/transition';

	export let recipes: Recipe[];

	// Get the recipe slug URL
	function getRecipeUrl(recipe: Recipe): string {
		return `/recipes/${recipe.slug}`;
	}
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	{#each recipes as recipe, i (recipe.name)}
		<div
			class="rounded-lg border border-gray-200 overflow-hidden"
			in:fly={{ y: 20, duration: 400, delay: i * 50 }}
		>
			<a
				href={getRecipeUrl(recipe)}
				class="block p-4 bg-gray-50 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
				data-sveltekit-prefetch
			>
				<div class="flex items-start justify-between">
					<div class="flex-1">
						<h3 class="font-semibold text-gray-800 mb-1">{recipe.name}</h3>
						{#if recipe.description}
							<p class="text-sm text-gray-600">{recipe.description}</p>
						{/if}
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>
