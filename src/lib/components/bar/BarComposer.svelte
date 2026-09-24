<script lang="ts">
	import { bartenders, type BartenderKey } from '$lib/bar/bartenders';
	import { MAX_QUESTION } from '$lib/bar/bar.svelte';

	let {
		value = $bindable(''),
		bartender,
		busy,
		canSend,
		retryAfter = null,
		onSend,
		onStop
	}: {
		value: string;
		bartender: BartenderKey;
		busy: boolean;
		canSend: boolean;
		retryAfter?: number | null;
		onSend: () => void;
		onStop: () => void;
	} = $props();

	let textarea = $state<HTMLTextAreaElement | null>(null);

	const who = $derived(bartenders[bartender]);
	// Only worth showing once it is nearly a problem.
	const showCount = $derived(value.length > MAX_QUESTION - 200);
	const blocked = $derived(retryAfter !== null && retryAfter > 0);

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			if (canSend && !blocked) onSend();
		}
	}

	// Grow with the question up to MAX_HEIGHT, then scroll inside. Reset to auto first so it
	// also shrinks back when text is deleted or the draft is cleared after sending.
	const MAX_HEIGHT = 176;

	$effect(() => {
		void value;
		if (!textarea) return;
		textarea.style.height = 'auto';
		const next = Math.min(textarea.scrollHeight + 2, MAX_HEIGHT);
		textarea.style.height = `${next}px`;
		textarea.style.overflowY = textarea.scrollHeight + 2 > MAX_HEIGHT ? 'auto' : 'hidden';
	});

	export function focus() {
		textarea?.focus();
	}
</script>

<div
	class="border-t border-gray-200 bg-white/80 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm"
>
	<div class="flex items-end gap-2">
		<textarea
			bind:this={textarea}
			bind:value
			onkeydown={onKeydown}
			rows="1"
			maxlength={MAX_QUESTION}
			disabled={blocked}
			placeholder={who.placeholder}
			aria-label={who.placeholder}
			class="min-h-12 flex-1 resize-none overscroll-contain rounded-xl border border-gray-200 bg-white px-4 py-3 text-base leading-snug text-gray-800 placeholder-gray-400 pointer-fine:text-[0.94rem] outline-none focus:border-amber-300 disabled:bg-gray-50"
		></textarea>

		{#if busy}
			<button
				type="button"
				onclick={onStop}
				aria-label="Stop"
				class="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-gray-800 text-white transition-colors hover:bg-gray-900"
			>
				<span class="h-3 w-3 rounded-[2px] bg-current" aria-hidden="true"></span>
			</button>
		{:else}
			<button
				type="button"
				onclick={onSend}
				disabled={!canSend || blocked}
				aria-label="Send"
				class="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-amber-600 text-white transition-colors hover:bg-amber-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
			>
				<svg
					class="h-5 w-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 10l7-7m0 0l7 7m-7-7v18"
					/>
				</svg>
			</button>
		{/if}
	</div>

	{#if showCount}
		<p class="mt-1 text-right text-[0.7rem] text-gray-400">
			{value.length}/{MAX_QUESTION}
		</p>
	{/if}
</div>
