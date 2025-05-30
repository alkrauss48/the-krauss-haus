<script lang="ts">
	import type { Syrup } from '$lib/data/syrups';
	import { fade, fly } from 'svelte/transition';

	export let syrups: Syrup[];
</script>

<div class="bg-white rounded-lg shadow-sm p-6">
	<h2 class="text-2xl font-bold text-gray-800 mb-6">Homemade Syrups</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		{#each syrups as syrup, i (syrup.name)}
			<div class="p-4 bg-gray-50 rounded-lg" in:fly={{ y: 20, duration: 400, delay: i * 50 }}>
				<h3 class="font-semibold text-gray-800 mb-1">{syrup.name}</h3>
				{#if syrup.description}
					<p class="text-sm text-gray-600">{syrup.description}</p>
				{/if}
			</div>
		{/each}
	</div>
</div>
