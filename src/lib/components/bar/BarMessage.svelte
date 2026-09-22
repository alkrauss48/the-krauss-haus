<script lang="ts">
	import { parseMarkdown, plainText } from '$lib/bar/markdown';
	import { bartenders } from '$lib/bar/bartenders';
	import { isEmptyAnswer, type Turn } from '$lib/bar/bar.svelte';
	import Markdown from './Markdown.svelte';
	import ConsultCard from './ConsultCard.svelte';

	let {
		turn,
		streaming = false,
		onRetry,
		onNavigate
	}: {
		turn: Turn;
		streaming?: boolean;
		onRetry?: (id: string) => void;
		onNavigate?: () => void;
	} = $props();

	const who = $derived(bartenders[turn.bartender]);
	const quiet = $derived(!streaming && turn.note === undefined && isEmptyAnswer(turn));

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
					.map((p) =>
						p.kind === 'text'
							? plainText(parseMarkdown(p.text))
							: `${p.bartender} says: ${plainText(parseMarkdown(p.answer))}`
					)
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

				{#if streaming && turn.parts.length === 0}
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
