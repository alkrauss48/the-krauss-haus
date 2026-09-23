<script lang="ts">
	import { parseMarkdown, plainText } from '$lib/bar/markdown';
	import { bartenders } from '$lib/bar/bartenders';
	import { isEmptyAnswer, type Activity, type Turn } from '$lib/bar/bar.svelte';
	import Markdown from './Markdown.svelte';
	import ConsultCard from './ConsultCard.svelte';
	import BarStatusLine from './BarStatusLine.svelte';

	let {
		turn,
		streaming = false,
		activity = { kind: 'idle' },
		waiting = 0,
		onRetry,
		onStop,
		onNavigate
	}: {
		turn: Turn;
		streaming?: boolean;
		activity?: Activity;
		waiting?: number;
		onRetry?: (id: string) => void;
		onStop?: () => void;
		onNavigate?: () => void;
	} = $props();

	const who = $derived(bartenders[turn.bartender]);

	/**
	 * What the bartender is doing belongs where the answer will be, not in a footer. While
	 * they think, reach for a book or pick up the phone, the bubble says so in words — a bare
	 * blinking caret says nothing at all.
	 */
	const status = $derived(
		streaming &&
			activity.kind !== 'idle' &&
			activity.kind !== 'answering' &&
			activity.kind !== 'error'
	);
	const quiet = $derived(!streaming && turn.note === undefined && isEmptyAnswer(turn));
	/** One signal of life at a time: the caret stands down while the status line speaks. */
	const caret = $derived(streaming && !status);

	/** The last text part is the only one still growing, so it is the only one with a caret. */
	function lastTextIndex(t: Turn): number {
		for (let i = t.parts.length - 1; i >= 0; i--) if (t.parts[i].kind === 'text') return i;
		return -1;
	}

	// Announced once, when it completes — announcing every delta turns a screen reader into
	// a stutter.
	const announcement = $derived(
		streaming
			? ''
			: turn.parts
					.map((p) => {
						if (p.kind === 'text') return plainText(parseMarkdown(p.text));
						if (p.kind === 'trouble') return p.message;
						return `${p.bartender} says: ${plainText(parseMarkdown(p.answer))}`;
					})
					.join('\n\n')
	);
</script>

{#if turn.role === 'guest'}
	<div class="flex justify-end">
		<div
			class="max-w-[85%] rounded-2xl rounded-br-sm bg-gray-800 px-3.5 py-2 text-[0.94rem] leading-relaxed text-white"
		>
			<p class="whitespace-pre-wrap">{turn.parts[0]?.kind === 'text' ? turn.parts[0].text : ''}</p>
		</div>
	</div>
{:else}
	<div class="flex justify-start">
		<div class="max-w-[92%] {who.bubble} px-3.5 py-2.5">
			<p class="mb-1 text-[0.7rem] font-bold tracking-widest {who.nameText}">
				{who.name.toUpperCase()}
			</p>

			<div class="text-[0.94rem] leading-relaxed text-gray-800">
				{#each turn.parts as part, i (i)}
					{#if part.kind === 'consult'}
						<ConsultCard bartender={part.bartender} answer={part.answer} {onNavigate} />
					{:else if part.kind === 'trouble'}
						<!-- Ruled off only when there is prose above it, so the guest can tell the
						     apology from the half-answer it interrupted. -->
						<p class="text-gray-500 italic {i > 0 ? 'mt-2 border-t border-gray-300/70 pt-2' : ''}">
							{part.message}
						</p>
					{:else}
						<Markdown
							blocks={parseMarkdown(part.text, {
								partial: streaming && i === lastTextIndex(turn),
								caret: streaming && i === lastTextIndex(turn)
							})}
							{onNavigate}
						/>
					{/if}
				{/each}

				{#if status}
					<BarStatusLine
						{activity}
						{waiting}
						bartender={turn.bartender}
						hasAnswered={true}
						inline
						{onStop}
					/>
				{:else if caret && turn.parts.length === 0}
					<Markdown blocks={parseMarkdown('', { caret: true })} />
				{/if}

				{#if quiet}
					<p class="text-gray-500 italic">…{who.name}'s gone quiet. Ask again?</p>
				{/if}
			</div>

			{#if turn.note === 'stopped'}
				<p class="mt-1.5 text-xs text-gray-400 italic">Cut short.</p>
			{/if}

			{#if (turn.note === 'failed' || quiet) && turn.question}
				<button
					type="button"
					class="mt-2 cursor-pointer rounded-full border border-gray-300 px-2.5 py-1 text-xs font-medium text-gray-600 transition-colors hover:border-gray-400 hover:text-gray-900"
					onclick={() => onRetry?.(turn.id)}
				>
					Ask again
				</button>
			{/if}
		</div>
	</div>

	{#if announcement !== ''}
		<p class="sr-only" aria-live="polite">{announcement}</p>
	{/if}
{/if}
