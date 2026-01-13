<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fade, scale, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { browser } from '$app/environment';
	import { allCocktails } from '$lib/data/all-cocktails';
	import type { Cocktail } from '$lib/types/cocktails';
	import CocktailCard from '$lib/components/CocktailCard.svelte';
	import { tick } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';

	export let isOpen = false;

	let modalContent: HTMLElement;
	let countdownNumber: string | null = null;
	let selectedCocktail: Cocktail | null = null;
	let showIntro = true;
	let showCountdown = false;
	let showResult = false;
	let stars: Array<{ id: number; x: number; y: number; delay: number; animationDuration: number }> =
		[];
	let fireworks: Array<{ id: number; x: number; y: number; delay: number }> = [];
	let starIdCounter = 0;
	let fireworkIdCounter = 0;
	let selectedCocktailSlugs = new SvelteSet<string>();
	let countdownCancelled = false;

	// Generate random cocktail (shuffle behavior - no repeats until all shown)
	function getRandomCocktail(): Cocktail {
		// Get cocktails that haven't been selected yet
		const availableCocktails = allCocktails.filter(
			(cocktail) => !selectedCocktailSlugs.has(cocktail.slug)
		);

		// If all cocktails have been shown, reset and start over
		if (availableCocktails.length === 0) {
			selectedCocktailSlugs.clear();
			// Now all cocktails are available again
			const randomIndex = Math.floor(Math.random() * allCocktails.length);
			const selected = allCocktails[randomIndex];
			selectedCocktailSlugs.add(selected.slug);
			return selected;
		}

		// Pick a random cocktail from available ones
		const randomIndex = Math.floor(Math.random() * availableCocktails.length);
		const selected = availableCocktails[randomIndex];
		selectedCocktailSlugs.add(selected.slug);
		return selected;
	}

	// Generate stars for animation
	function generateStars(count: number = 20): void {
		stars = [];
		for (let i = 0; i < count; i++) {
			stars.push({
				id: starIdCounter++,
				x: Math.random() * 100,
				y: Math.random() * 100,
				delay: Math.random() * 0.5,
				animationDuration: 0.5 + Math.random() * 0.5
			});
		}
	}

	// Generate fireworks for animation
	function generateFireworks(count: number = 8): void {
		fireworks = [];
		for (let i = 0; i < count; i++) {
			fireworks.push({
				id: fireworkIdCounter++,
				x: Math.random() * 100,
				y: Math.random() * 100,
				delay: Math.random() * 0.5
			});
		}
	}

	// Start the countdown process
	async function startCountdown(): Promise<void> {
		showIntro = false;
		showCountdown = true;
		showResult = false;
		countdownNumber = null;
		selectedCocktail = null;
		countdownCancelled = false;

		// Countdown from 3 to 1
		for (let i = 3; i >= 1; i--) {
			countdownNumber = i.toString();
			generateStars(40 - i * 10); // More stars each number
			generateFireworks(40 - i * 10);
			await tick();
			await new Promise((resolve) => setTimeout(resolve, 1000));
			if (countdownCancelled) return;
		}

		countdownNumber = '0';

		// Final explosion
		generateStars(50);
		generateFireworks(50);
		await tick();
		await new Promise((resolve) => setTimeout(resolve, 500));
		if (countdownCancelled) return;

		// Show result
		selectedCocktail = getRandomCocktail();
		showCountdown = false;
		showResult = true;
	}

	// Reset and start again
	function pickAnother(): void {
		startCountdown();
	}

	// Close modal and reset state
	function closeModal(): void {
		isOpen = false;
		countdownCancelled = true; // Cancel any running countdown
		// Reset after animation
		if (browser) {
			setTimeout(() => {
				showIntro = true;
				showCountdown = false;
				showResult = false;
				countdownNumber = null;
				selectedCocktail = null;
				stars = [];
				fireworks = [];
			}, 300);
		} else {
			// Reset immediately if not in browser
			showIntro = true;
			showCountdown = false;
			showResult = false;
			countdownNumber = null;
			selectedCocktail = null;
			stars = [];
			fireworks = [];
		}
	}

	// Handle escape key
	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape' && isOpen) {
			closeModal();
		}
	}

	// Handle click outside modal
	function handleBackdropClick(event: MouseEvent): void {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}

	// Focus the modal when it opens
	$: if (isOpen && browser && modalContent) {
		// Use setTimeout to ensure the element is rendered
		setTimeout(() => {
			modalContent?.focus();
		}, 0);
	}

	onMount(() => {
		if (browser) {
			window.addEventListener('keydown', handleKeydown);
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('keydown', handleKeydown);
		}
	});
</script>

{#if isOpen}
	<div
		class="fixed inset-0 bg-gray-900/70 backdrop-blur-sm flex items-center justify-center z-50"
		on:click={handleBackdropClick}
		on:keydown={(e) => e.key === 'Escape' && closeModal()}
		role="presentation"
		aria-label="Random cocktail modal"
		transition:fade={{ duration: 300 }}
	>
		<div
			bind:this={modalContent}
			class="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl relative overflow-hidden"
			on:click|stopPropagation
			on:keydown|stopPropagation
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
			tabindex="-1"
			transition:scale={{ duration: 300, easing: quintOut }}
		>
			<!-- Close button -->
			<button
				class="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-gray-600 transition-colors z-10"
				on:click={closeModal}
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

			<!-- Intro Screen -->
			{#if showIntro}
				<div class="text-center" in:fade={{ duration: 300 }}>
					<h2 id="modal-title" class="text-xl md:text-3xl font-bold text-gray-800 mb-4">
						Random Cocktail Picker
					</h2>
					<p class="text-gray-600 mb-8 text-md md:text-lg leading-relaxed">
						Ready to discover something new? We'll pick a random cocktail from our collection!
					</p>
					<button
						class="cursor-pointer px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
						on:click={startCountdown}
					>
						Pick my Cocktail
					</button>
				</div>
			{/if}

			<!-- Countdown Screen -->
			{#if showCountdown}
				<div class="relative min-h-[400px] flex items-center justify-center">
					<!-- Animated background stars -->
					{#each stars as star (star.id)}
						<div
							class="absolute pointer-events-none"
							style="left: {star.x}%; top: {star.y}%;"
							in:fly={{
								x: (Math.random() - 0.5) * 200,
								y: (Math.random() - 0.5) * 200,
								duration: 800,
								delay: star.delay,
								easing: quintOut
							}}
							out:fade={{ duration: 300 }}
						>
							<svg
								class="w-6 h-6 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								style="animation: twinkle {star.animationDuration}s ease-in-out infinite;"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
						</div>
					{/each}

					<!-- Fireworks -->
					{#each fireworks as firework (firework.id)}
						<div
							class="absolute pointer-events-none"
							style="left: {firework.x}%; top: {firework.y}%;"
							in:scale={{
								duration: 600,
								delay: firework.delay,
								easing: quintOut
							}}
							out:fade={{ duration: 400 }}
						>
							<div class="relative w-4 h-4">
								<!-- Firework burst -->
								{#each Array.from({ length: 8 }, (_, i) => i) as i (i)}
									{@const colors = [
										'#ff6b6b',
										'#4ecdc4',
										'#ffe66d',
										'#ff6b9d',
										'#c44569',
										'#f8b500',
										'#6c5ce7',
										'#00b894'
									]}
									{@const rotation = i * 45}
									{@const animationDelay = firework.delay}
									<div
										class="absolute w-1 h-1 rounded-full"
										style="background-color: {colors[
											i
										]}; transform: rotate({rotation}deg) translateY(-20px); animation: firework-burst 0.6s ease-out {animationDelay}s;"
									></div>
								{/each}
							</div>
						</div>
					{/each}

					<!-- Countdown Number -->
					{#if countdownNumber !== null}
						<div
							class="relative z-10"
							in:scale={{
								duration: 200,
								easing: quintOut
							}}
							out:scale={{
								duration: 200,
								easing: quintOut
							}}
						>
							<div
								class="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500"
								style="text-shadow: 0 0 30px rgba(251, 146, 60, 0.5), 0 0 60px rgba(251, 146, 60, 0.3); animation: pulse 1s ease-in-out infinite;"
							>
								{countdownNumber}
							</div>
						</div>
					{/if}
				</div>
			{/if}

			<!-- Result Screen -->
			{#if showResult && selectedCocktail}
				<div class="text-center" in:fade={{ duration: 400, delay: 200 }}>
					<h2 class="text-lg md:text-2xl font-bold text-gray-800 mb-6">{selectedCocktail.title}</h2>
					<div class="mb-6">
						<CocktailCard cocktail={selectedCocktail} showTitle={false} showVariations={false} />
					</div>
					<button
						class="cursor-pointer px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
						on:click={pickAnother}
					>
						Pick Another
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	@keyframes twinkle {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.3;
			transform: scale(0.8);
		}
	}

	@keyframes firework-burst {
		0% {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
		100% {
			opacity: 0;
			transform: translateY(-30px) scale(0);
		}
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.1);
			opacity: 0.9;
		}
	}
</style>
