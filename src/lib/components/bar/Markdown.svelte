<script lang="ts">
	import type { MdBlock } from '$lib/bar/markdown';
	import MarkdownInline from './MarkdownInline.svelte';

	let {
		blocks,
		compact = false,
		onNavigate
	}: { blocks: MdBlock[]; compact?: boolean; onNavigate?: () => void } = $props();

	// Headings inside a quoted consult card sit at document scale otherwise, which looks
	// broken in a 420px drawer.
	const headingClass = $derived(
		compact ? 'mt-3 mb-1 text-[0.95em] font-semibold' : 'mt-4 mb-1 text-base font-bold'
	);
</script>

<!--
	Keyed by index on purpose. A fresh AST is parsed on every delta, so every node is a new
	object — keying by identity would tear down and rebuild the whole answer sixty times a
	second instead of diffing the tail.
-->
{#each blocks as block, i (i)}
	{#if block.kind === 'paragraph'}
		<p class="whitespace-pre-wrap [&:not(:first-child)]:mt-3">
			<MarkdownInline nodes={block.children} {onNavigate} />
		</p>
	{:else if block.kind === 'heading'}
		<p class="{headingClass} first:mt-0">
			<MarkdownInline nodes={block.children} {onNavigate} />
		</p>
	{:else if block.kind === 'list'}
		<svelte:element
			this={block.ordered ? 'ol' : 'ul'}
			class="mt-2 space-y-1 pl-5 {block.ordered ? 'list-decimal' : 'list-disc'}"
			start={block.ordered ? block.start : undefined}
		>
			{#each block.items as item, j (j)}
				<li class="whitespace-pre-wrap"><MarkdownInline nodes={item} {onNavigate} /></li>
			{/each}
		</svelte:element>
	{/if}
{/each}
