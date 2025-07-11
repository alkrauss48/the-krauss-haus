<script lang="ts">
	import type { Recipe } from '$lib/types/recipes';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let recipes: Recipe[];

	let showModal = false;
	let selectedRecipe: Recipe | null = null;
	let modalContent: HTMLElement;
	let lastFocusedElement: HTMLElement | null = null;

	function getFocusableElements(element: HTMLElement): HTMLElement[] {
		return Array.from(
			element.querySelectorAll(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			)
		) as HTMLElement[];
	}

	function handleTabKey(e: KeyboardEvent): void {
		if (!showModal) return;

		const focusableElements = getFocusableElements(modalContent);
		const firstFocusableElement = focusableElements[0];
		const lastFocusableElement = focusableElements[focusableElements.length - 1];

		if (e.key === 'Tab') {
			if (e.shiftKey) {
				// If shift + tab and on first element, focus last element
				if (document.activeElement === firstFocusableElement) {
					e.preventDefault();
					lastFocusableElement.focus();
				}
			} else {
				// If tab and on last element, focus first element
				if (document.activeElement === lastFocusableElement) {
					e.preventDefault();
					firstFocusableElement.focus();
				}
			}
		}
	}

	function toggleModal(): void {
		showModal = !showModal;
		if (showModal) {
			lastFocusedElement = document.activeElement as HTMLElement;
			// Focus the first focusable element after a brief delay
			setTimeout(() => {
				const focusableElements = getFocusableElements(modalContent);
				if (focusableElements.length > 0) {
					focusableElements[0].focus();
				}
			}, 0);
		} else {
			lastFocusedElement?.focus();
		}
	}

	function handleRecipeClick(event: Event, recipe: Recipe): void {
		event.stopPropagation();
		selectedRecipe = recipe;
		toggleModal();
	}

	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape' && showModal) {
			showModal = false;
		}
		handleTabKey(event);
	}

	// Add event listener when component mounts
	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	{#each recipes as recipe, i (recipe.name)}
		<div
			class="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200"
			in:fly={{ y: 20, duration: 400, delay: i * 50 }}
			on:click={(e) => handleRecipeClick(e, recipe)}
			on:keydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					handleRecipeClick(e, recipe);
				}
			}}
			role="button"
			tabindex="0"
			aria-label="View {recipe.name} recipe details"
		>
			<h3 class="font-semibold text-gray-800 mb-1">{recipe.name}</h3>
			{#if recipe.description}
				<p class="text-sm text-gray-600">{recipe.description}</p>
			{/if}
		</div>
	{/each}
</div>

{#if showModal}
	<div
		class="fixed inset-0 bg-gray-500/60 backdrop-blur-sm flex items-center justify-center z-40"
		on:click={toggleModal}
		on:keydown={(e) => e.key === 'Escape' && toggleModal()}
		role="presentation"
		aria-label="Close modal"
	>
		<div
			bind:this={modalContent}
			class="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 shadow-xl z-50 max-h-[90vh] overflow-y-auto"
			on:click|stopPropagation
			role="presentation"
			aria-label="Recipe details"
		>
			<div class="flex justify-between items-start mb-6">
				<h3 class="text-2xl font-bold text-gray-800">{selectedRecipe?.name}</h3>
				<button
					class="text-gray-400 hover:text-gray-600"
					on:click={toggleModal}
					aria-label="Close modal"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
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

			{#if selectedRecipe?.description}
				<p class="text-gray-700 mb-6">{selectedRecipe.description}</p>
			{/if}

			{#if selectedRecipe?.ingredients && selectedRecipe.ingredients.length > 0}
				<div class="mb-6">
					<h4 class="text-lg font-semibold text-gray-800 mb-3">Ingredients</h4>
					<ul class="space-y-2">
						{#each selectedRecipe.ingredients as ingredient (ingredient)}
							<li class="flex items-start">
								<span class="text-amber-600 mr-2">•</span>
								<span class="text-gray-700">{ingredient}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/if}

			{#if selectedRecipe?.instructions}
				<div class="mb-6">
					<h4 class="text-lg font-semibold text-gray-800 mb-3">Instructions</h4>
					<p class="text-gray-700 leading-relaxed">{selectedRecipe.instructions}</p>
				</div>
			{/if}

			{#if selectedRecipe?.notes}
				<div class="mb-6">
					<h4 class="text-lg font-semibold text-gray-800 mb-3">Notes</h4>
					<p class="text-gray-700 leading-relaxed">{selectedRecipe.notes}</p>
				</div>
			{/if}
		</div>
	</div>
{/if}
