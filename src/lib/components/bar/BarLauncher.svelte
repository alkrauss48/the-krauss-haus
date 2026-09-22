<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { bar } from '$lib/bar/bar.svelte';

	const TELL_KEY = 'tkh-bar-tell';

	let tell = $state(false);

	// One gentle tell, once per session, and never under reduced motion. No badge, no pulse,
	// no auto-open, no "Hi! 👋" bubble.
	onMount(() => {
		let hide: ReturnType<typeof setTimeout>;
		const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;

		let seen = true;
		try {
			seen = sessionStorage.getItem(TELL_KEY) === '1';
		} catch {
			/* private mode — just skip the tell */
		}
		if (reduced || seen) return;

		const show = setTimeout(() => {
			tell = true;
			try {
				sessionStorage.setItem(TELL_KEY, '1');
			} catch {
				/* ignore */
			}
			hide = setTimeout(() => (tell = false), 4000);
		}, 2000);

		return () => {
			clearTimeout(show);
			clearTimeout(hide);
		};
	});
</script>

<div class="fixed right-4 bottom-4 z-40 flex items-center gap-2 sm:right-8 sm:bottom-8">
	{#if tell && !bar.open}
		<span
			class="rounded-full border border-gray-200 bg-white/90 px-3 py-1.5 text-xs text-gray-600 shadow-sm backdrop-blur-sm"
			transition:fade={{ duration: 400 }}
		>
			Sasha's behind the bar.
		</span>
	{/if}

	<button
		type="button"
		onclick={() => bar.openPanel()}
		aria-label="Ask the bartender"
		aria-haspopup="dialog"
		aria-expanded={bar.open}
		title="Pull up a stool"
		class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-gray-200/60 bg-white/80 text-gray-500 opacity-70 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:text-amber-600 hover:opacity-100 hover:shadow-md focus-visible:opacity-100"
	>
		<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 4h14l-7 8v7m-3 0h6M9 19h6"
			/>
		</svg>
	</button>
</div>
