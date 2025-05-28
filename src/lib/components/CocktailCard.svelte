<script>
	import { onMount } from 'svelte';

	export let title;
	export let description;
	export let imagePath;
	export let bgColors = ['#fecaca', '#fef3c7', '#dbeafe']; // Default pastel colors
	export let variations = ''; // Optional variations text
	export let ingredients = []; // Array of ingredient strings

	let showModal = false;

	function toggleModal() {
		showModal = !showModal;
	}

	function handleKeydown(event) {
		if (event.key === 'Escape' && showModal) {
			showModal = false;
		}
	}

	// Add event listener when component mounts
	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

<div
	class="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col cursor-pointer"
	on:click={toggleModal}
>
	<div class="h-64 relative">
		<!-- Pastel diagonal gradient background -->
		<div
			class="absolute inset-0 opacity-30"
			style="background: linear-gradient(135deg, {bgColors[0]} 0%, {bgColors[1]} 50%, {bgColors[2]} 100%);"
		></div>
		<img src={imagePath} alt={title} class="w-full h-full object-contain p-4 relative z-10" />
	</div>
	<div class="p-6 flex-1 flex flex-col">
		<h3 class="text-xl font-bold text-gray-800 mb-2">{title}</h3>
		<p class="text-gray-600 flex-1">{description}</p>
		{#if variations}
			<p class="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-50 font-light tracking-wide">
				Variations: {variations}
			</p>
		{/if}
	</div>
</div>

{#if showModal}
	<div
		class="fixed inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center z-40"
		on:click={toggleModal}
	>
		<div
			class="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl z-50"
			on:click|stopPropagation
		>
			<div class="flex justify-between items-start mb-6">
				<h3 class="text-2xl font-bold text-gray-800">{title}</h3>
				<button class="text-gray-400 hover:text-gray-600" on:click={toggleModal}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			{#if ingredients.length > 0}
				<ul class="space-y-3">
					{#each ingredients as ingredient}
						<li class="flex items-start">
							<span class="text-amber-600 mr-2">•</span>
							<span class="text-gray-700">{ingredient}</span>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
{/if}
