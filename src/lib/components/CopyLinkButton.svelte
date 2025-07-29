<script lang="ts">
	export let url: string;
	export let ariaLabel: string = 'Copy link';
	export let size: 'sm' | 'md' = 'md';

	let showCopyFeedback = false;

	async function copyToClipboard(event: Event): Promise<void> {
		event.preventDefault();
		event.stopPropagation();

		try {
			await navigator.clipboard.writeText(url);
			showCopyFeedback = true;
			setTimeout(() => {
				showCopyFeedback = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy URL to clipboard:', err);
		}
	}

	$: iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
	$: padding = size === 'sm' ? 'p-1' : 'p-2';
</script>

<button
	class="cursor-pointer text-gray-400 hover:text-amber-600 transition-colors {padding} rounded-md hover:bg-gray-50 relative"
	on:click={copyToClipboard}
	aria-label={ariaLabel}
	title="Copy link"
>
	<svg class={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
		/>
	</svg>

	<!-- Copy feedback tooltip -->
	{#if showCopyFeedback}
		<div
			class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10"
		>
			Link copied!
			<div
				class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-800"
			></div>
		</div>
	{/if}
</button>
