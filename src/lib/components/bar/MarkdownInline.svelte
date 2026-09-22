<!--
	Renders one level of the markdown AST. Every leaf reaches the DOM as escaped text — there
	is no `@html` anywhere in this tree, and hrefs are whitelisted by `classifyLink` first,
	because the model authors them.
-->
<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { toPathname } from '$lib/utils/paths';
	import { classifyLink } from '$lib/bar/links';
	import type { MdInline } from '$lib/bar/markdown';
	import Self from './MarkdownInline.svelte';

	let { nodes, onNavigate }: { nodes: MdInline[]; onNavigate?: () => void } = $props();

	function follow(event: MouseEvent, path: string) {
		event.preventDefault();
		onNavigate?.();
		goto(resolve(toPathname(path)));
	}
</script>

{#each nodes as node, i (i)}
	{#if node.kind === 'text'}{node.value}{:else if node.kind === 'strong'}
		<strong class="font-semibold"><Self nodes={node.children} {onNavigate} /></strong>
	{:else if node.kind === 'em'}
		<em class="italic"><Self nodes={node.children} {onNavigate} /></em>
	{:else if node.kind === 'code'}
		<code class="rounded bg-gray-100 px-1 py-0.5 font-mono text-[0.85em]">{node.value}</code>
	{:else if node.kind === 'caret'}
		<span
			class="ml-px inline-block h-[1em] w-px translate-y-[0.15em] bg-current opacity-70 motion-safe:animate-pulse"
			aria-hidden="true"
		></span>
	{:else if node.kind === 'link'}
		{@const target = node.href === null ? null : classifyLink(node.href)}
		{#if target?.kind === 'internal'}
			<!-- Sasha hands out links to this site's own pages; following one should land on the
			     cocktail, not reload the whole site. -->
			<a
				href={resolve(toPathname(target.path))}
				onclick={(event) => follow(event, target.path)}
				class="underline decoration-dotted underline-offset-2 hover:text-amber-700"
			>
				<Self nodes={node.children} {onNavigate} />
			</a>
		{:else if target?.kind === 'external'}
			<a
				href={target.href}
				target="_blank"
				rel="noopener noreferrer"
				class="underline decoration-dotted underline-offset-2 hover:text-amber-700"
			>
				<Self nodes={node.children} {onNavigate} />
			</a>
		{:else}
			<!-- Either still arriving, or an href we will not render as a link. Show the label. -->
			<Self nodes={node.children} {onNavigate} />
		{/if}
	{/if}
{/each}
