<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let isOpen = false;

	const dispatch = createEventDispatcher();

	function closeModal() {
		dispatch('close');
	}

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}

	function handleBackdropKeydown(event: KeyboardEvent) {
		if ((event.key === 'Enter' || event.key === ' ') && event.target === event.currentTarget) {
			closeModal();
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
	<div
		class="fixed inset-0 bg-gray-500/60 backdrop-blur-sm flex items-center justify-center z-40"
		on:click={handleBackdropClick}
		on:keydown={handleBackdropKeydown}
		role="button"
		tabindex="-1"
		aria-label="Close modal backdrop"
	>
		<div
			class="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl z-50"
			role="dialog"
			aria-modal="true"
			aria-labelledby="tip-modal-title"
		>
			<div class="flex justify-between items-center mb-4">
				<h2 id="tip-modal-title" class="text-lg font-semibold text-gray-900">
					Support the Krauss Haus
				</h2>
				<button
					on:click={closeModal}
					class="text-gray-400 hover:text-gray-600 transition-colors"
					aria-label="Close modal"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<p class="text-sm text-gray-600 mb-6">
				It costs about $3.25 in raw materials to make an average cocktail. If you enjoy our
				cocktails, consider leaving a tip!
			</p>

			<div class="flex flex-col sm:flex-row gap-3">
				<a
					href="https://cash.app/$thecodeboss"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center justify-center gap-3 flex-1 py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-medium"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 64 64"
						><g fill="#FFF"
							><path
								fill="#00D632"
								d="M41.7 0c6.4 0 9.6 0 13.1 1.1a13.6 13.6 0 018.1 8.1C64 12.7 64 15.9 64 22.31v19.37c0 6.42 0 9.64-1.1 13.1a13.6 13.6 0 01-8.1 8.1C51.3 64 48.1 64 41.7 64H22.3c-6.42 0-9.64 0-13.1-1.1a13.6 13.6 0 01-8.1-8.1C0 51.3 0 48.1 0 41.69V22.3c0-6.42 0-9.64 1.1-13.1a13.6 13.6 0 018.1-8.1C12.7 0 15.9 0 22.3 0z"
							/><path
								d="M42.47 23.8c.5.5 1.33.5 1.8 0l2.5-2.6c.53-.5.5-1.4-.06-1.94a19.73 19.73 0 00-6.72-3.84l.79-3.8c.17-.83-.45-1.61-1.28-1.61h-4.84a1.32 1.32 0 00-1.28 1.06l-.7 3.38c-6.44.33-11.9 3.6-11.9 10.3 0 5.8 4.51 8.29 9.28 10 4.51 1.72 6.9 2.36 6.9 4.78 0 2.49-2.38 3.95-5.9 3.95-3.2 0-6.56-1.07-9.16-3.68a1.3 1.3 0 00-1.84 0l-2.7 2.7a1.36 1.36 0 000 1.92c2.1 2.07 4.76 3.57 7.792 4.4l-.74 3.57c-.17.83.44 1.6 1.27 1.61l4.85.04a1.32 1.32 0 001.3-1.06l.7-3.39C40.28 49.07 45 44.8 45 38.57c0-5.74-4.7-8.16-10.4-10.13-3.26-1.21-6.08-2.04-6.08-4.53 0-2.42 2.63-3.38 5.27-3.38 3.36 0 6.59 1.39 8.7 3.29z"
							/></g
						></svg
					>
					Cash App
				</a>

				<a
					href="https://venmo.com/u/therealcodeboss"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center justify-center gap-3 flex-1 py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
				>
					<svg class="w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
						><path
							fill="currentColor"
							d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.6C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.8,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM278,387H174.32L132.75,138.44l90.75-8.62,22,176.87c20.53-33.45,45.88-86,45.88-121.87,0-19.62-3.36-33-8.61-44L365.4,124.1c9.56,15.78,13.86,32,13.86,52.57C379.25,242.17,323.34,327.26,278,387Z"
						/></svg
					>
					Venmo
				</a>
			</div>

			<p class="text-xs text-gray-400 mt-4 text-center">
				Thank you for supporting our cocktail adventures! 🍹
			</p>
		</div>
	</div>
{/if}
