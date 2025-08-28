<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import type { SectionColor } from '$lib/types/colors';
	import type { CocktailVariant, Cocktail } from '$lib/types/cocktails';
	import { methodColors } from '$lib/enums/methods';
	import CopyLinkButton from '$lib/components/CopyLinkButton.svelte';

	export let cocktail: Cocktail;
	export let bgColors: SectionColor = {
		primary: '#fecaca',
		secondary: '#fef3c7',
		tertiary: '#dbeafe',
		variationText: '#7c2d12'
	}; // Default pastel colors

	let showModal = false;
	let showVariationModal = false;
	let selectedVariant: CocktailVariant | null = null;
	let modalContent: HTMLElement;
	let variationModalContent: HTMLElement;
	let lastFocusedElement: HTMLElement | null = null;

	function getFocusableElements(element: HTMLElement): HTMLElement[] {
		return Array.from(
			element.querySelectorAll(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			)
		) as HTMLElement[];
	}

	function handleTabKey(e: KeyboardEvent): void {
		if (!showModal && !showVariationModal) return;

		const modalToUse = showVariationModal ? variationModalContent : modalContent;
		const focusableElements = getFocusableElements(modalToUse);
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
		} else {
			lastFocusedElement?.focus();
		}
	}

	function toggleVariationModal(): void {
		showVariationModal = !showVariationModal;

		if (showVariationModal) {
			lastFocusedElement = document.activeElement as HTMLElement;
		} else {
			lastFocusedElement?.focus();
		}
	}

	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape') {
			if (showVariationModal) {
				showVariationModal = false;
			} else if (showModal) {
				showModal = false;
			}
		}
		handleTabKey(event);
	}

	function handleVariantClick(event: Event, variant: CocktailVariant): void {
		event.stopPropagation();
		selectedVariant = variant;
		toggleVariationModal();
	}

	function navigateToCocktail(event: Event): void {
		event.preventDefault();
		goto(`/cocktails/${cocktail.slug}`);
	}

	// Add event listener when component mounts
	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
	});
</script>

<button
	class="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col cursor-pointer w-full text-left border-0 p-0 hover:shadow-lg transition-shadow duration-300"
	on:click={toggleModal}
	on:keydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			toggleModal();
		}
	}}
	aria-label="View {cocktail.title} details"
>
	<div class="h-64 relative w-full">
		<!-- Pastel diagonal gradient background -->
		<div
			class="absolute inset-0 opacity-30"
			style="background: linear-gradient(135deg, {bgColors.primary} 0%, {bgColors.secondary} 50%, {bgColors.tertiary} 100%);"
		></div>
		<img
			src={cocktail.imagePath}
			alt={cocktail.title}
			class="w-full h-full object-contain p-4 relative z-10"
		/>
	</div>
	<div class="p-6 flex-1 flex flex-col">
		<h3 class="text-xl font-bold text-gray-800 mb-2">{cocktail.title}</h3>
		{#if cocktail.subtitle}
			<p class="text-gray-600 italic mb-2 text-sm">{cocktail.subtitle}</p>
		{/if}
		<p class="text-gray-600 flex-1">{cocktail.description}</p>
		{#if cocktail.variations && cocktail.variations.length > 0}
			<div class="mt-3 pt-3 border-t border-gray-50">
				<p class="text-xs text-gray-500 mb-2 font-light tracking-wide">Variations:</p>
				<div class="flex flex-wrap gap-2">
					{#each cocktail.variations as variant (variant.name)}
						<div
							class="px-3 py-1 text-xs font-medium rounded-full hover:opacity-80 focus:outline-none focus:ring-2 transition-all duration-200 cursor-pointer"
							style="background-color: {bgColors.primary}; color: {bgColors.variationText};"
							on:click={(e) => handleVariantClick(e, variant)}
							on:keydown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault();
									handleVariantClick(e, variant);
								}
							}}
							role="button"
							tabindex="0"
							aria-label="Select {variant.name} variation"
						>
							{variant.name}
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</button>

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
			class="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl z-50"
			on:click|stopPropagation
			role="presentation"
			aria-label="Cocktail details"
		>
			<div class="flex justify-between items-start mb-6">
				<div class="flex-1">
					<div class="flex items-center gap-2 mb-2">
						<a
							href="/cocktails/{cocktail.slug}"
							class="text-2xl font-bold text-gray-800 hover:text-amber-600 transition-colors cursor-pointer"
							on:click={navigateToCocktail}
						>
							{cocktail.title}
						</a>
						<CopyLinkButton
							url={typeof window !== 'undefined'
								? `${window.location.origin}/cocktails/${cocktail.slug}`
								: ''}
							ariaLabel="Copy link to {cocktail.title}"
							size="sm"
						/>
					</div>
					{#if cocktail.method}
						<div class="mt-2">
							<span class="text-xs text-gray-500 mb-2 font-light tracking-wide">Method:</span>
							<span
								class="px-3 py-1 text-xs font-medium rounded-full"
								style="background-color: {methodColors[
									cocktail.method as keyof typeof methodColors
								]}; color: #374151;"
							>
								{cocktail.method.charAt(0).toUpperCase() + cocktail.method.slice(1)}
							</span>
						</div>
					{/if}
				</div>
				<button
					class="cursor-pointer text-gray-400 hover:text-gray-600 ml-4"
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

			{#if cocktail.ingredients && cocktail.ingredients.length > 0}
				<ul class="space-y-3">
					{#each cocktail.ingredients as ingredient (ingredient)}
						<li class="flex items-start">
							<span class="text-amber-600 mr-2">•</span>
							{#if typeof ingredient === 'string'}
								<span class="text-gray-700">{ingredient}</span>
							{:else}
								<span class="text-gray-700">{ingredient.amount} {ingredient.recipe.name}</span>
							{/if}
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
{/if}

{#if showVariationModal}
	<div
		class="fixed inset-0 bg-gray-500/60 backdrop-blur-sm flex items-center justify-center z-40"
		on:click={toggleVariationModal}
		on:keydown={(e) => e.key === 'Escape' && toggleVariationModal()}
		role="presentation"
		aria-label="Close variation modal"
	>
		<div
			bind:this={variationModalContent}
			class="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl z-50"
			on:click|stopPropagation
			role="presentation"
			aria-label="Cocktail variation details"
		>
			<div class="flex justify-between items-start mb-6">
				<h3 class="text-2xl font-bold text-gray-800">{selectedVariant?.name}</h3>
				<button
					class="cursor-pointer text-gray-400 hover:text-gray-600"
					on:click={toggleVariationModal}
					aria-label="Close variation modal"
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
			{#if selectedVariant?.description}
				<p class="text-gray-700">{selectedVariant?.description}</p>
			{/if}
			{#if selectedVariant?.images && selectedVariant.images.length > 0}
				<div class="mt-4 flex gap-2">
					{#each selectedVariant.images as image (image)}
						<img
							src={image}
							alt={selectedVariant?.name}
							class="w-16 h-auto object-cover rounded-lg"
						/>
					{/each}
				</div>
			{/if}
		</div>
	</div>
{/if}
