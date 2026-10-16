<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { toPathname } from '$lib/utils/paths';
	import { siteNav, groupIsActive, type NavGroup, type NavLink } from '$lib/data/site-nav';
	import BarLauncher from '$lib/components/bar/BarLauncher.svelte';
	import RandomCocktailModal from '$lib/components/RandomCocktailModal.svelte';

	let { onSearch, searchOpen = false }: { onSearch: () => void; searchOpen?: boolean } = $props();

	let openGroup = $state<string | null>(null);
	let mobileOpen = $state(false);
	let showRandom = $state(false);

	let header: HTMLElement;
	let menuToggle: HTMLButtonElement;
	const triggers = $state<Record<string, HTMLButtonElement>>({});

	function closeAll() {
		openGroup = null;
		mobileOpen = false;
	}

	function toggleGroup(label: string) {
		openGroup = openGroup === label ? null : label;
	}

	function openRandom() {
		closeAll();
		showRandom = true;
	}

	// The nav outlives every page, so anything it opened has to be put away on the way out —
	// including the random cocktail modal, whose result card links to the drink.
	afterNavigate(() => {
		closeAll();
		showRandom = false;
	});

	function handleKeydown(event: KeyboardEvent) {
		if (event.key !== 'Escape') return;

		if (openGroup) {
			triggers[openGroup]?.focus();
			openGroup = null;
		} else if (mobileOpen) {
			menuToggle.focus();
			mobileOpen = false;
		}
	}

	function handlePointerdown(event: PointerEvent) {
		if ((openGroup || mobileOpen) && !header.contains(event.target as Node)) {
			closeAll();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} onpointerdown={handlePointerdown} />

{#snippet navLink(link: NavLink, nested: boolean)}
	{@const current = $page.url.pathname === link.href}
	<a
		href={resolve(toPathname(link.href))}
		aria-current={current ? 'page' : undefined}
		class="block rounded-lg px-3 py-2 text-sm transition-colors {current
			? 'bg-amber-50 text-amber-700 font-medium'
			: nested
				? 'text-gray-500 hover:bg-gray-50 hover:text-amber-600'
				: 'text-gray-700 font-medium hover:bg-gray-50 hover:text-amber-600'}"
	>
		{link.label}
	</a>
{/snippet}

{#snippet groupItems(group: NavGroup)}
	{#each group.sections as items, i (i)}
		<ul class={i > 0 ? 'mt-2 border-t border-gray-100 pt-2' : ''}>
			{#each items as item (item.label)}
				<li>
					{#if 'href' in item}
						{@render navLink(item, false)}
						{#if item.children?.length}
							<ul class="ml-3 border-l border-gray-200 pl-2">
								{#each item.children as child (child.href)}
									<li>{@render navLink(child, true)}</li>
								{/each}
							</ul>
						{/if}
					{:else}
						<button
							type="button"
							onclick={openRandom}
							aria-haspopup="dialog"
							class="block w-full cursor-pointer rounded-lg px-3 py-2 text-left text-sm text-gray-700 font-medium transition-colors hover:bg-gray-50 hover:text-amber-600"
						>
							{item.label}
						</button>
					{/if}
				</li>
			{/each}
		</ul>
	{/each}
{/snippet}

<header
	bind:this={header}
	class="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur-sm"
>
	<!-- Same box as every page: p-6 outside a max-w container, so the edges line up with the breadcrumbs. -->
	<nav aria-label="Main" class="px-6">
		<div class="mx-auto flex h-14 max-w-7xl items-center gap-2">
			<a
				href={resolve('/')}
				class="mr-4 text-lg font-bold tracking-tight text-gray-800 transition-colors hover:text-amber-600"
			>
				Krauss Haus
			</a>

			<ul class="hidden items-center gap-1 md:flex">
				{#each siteNav as group (group.label)}
					{@const id = `site-nav-${group.label.toLowerCase()}`}
					{@const open = openGroup === group.label}
					{@const active = groupIsActive($page.url.pathname, group)}
					<li class="relative">
						<button
							bind:this={triggers[group.label]}
							type="button"
							onclick={() => toggleGroup(group.label)}
							aria-expanded={open}
							aria-controls={open ? id : undefined}
							class="flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors {open ||
							active
								? 'text-amber-600'
								: 'text-gray-700 hover:text-amber-600'}"
						>
							{group.label}
							<svg
								class="h-4 w-4 transition-transform {open ? 'rotate-180' : ''}"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>

						{#if open}
							<div
								{id}
								class="absolute left-0 top-full mt-2 w-60 rounded-xl border border-gray-200 bg-white p-2 shadow-lg"
								transition:fly={{ y: -4, duration: 150 }}
							>
								{@render groupItems(group)}
							</div>
						{/if}
					</li>
				{/each}
			</ul>

			<div class="ml-auto flex items-center gap-1.5">
				<button
					type="button"
					class="cursor-pointer p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-500 hover:text-amber-600 hover:bg-white shadow-sm hover:shadow-md transition-all border border-gray-200/60"
					onclick={onSearch}
					aria-label="Open search"
					aria-haspopup="dialog"
					aria-expanded={searchOpen}
				>
					<svg
						class="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
						/>
					</svg>
				</button>

				<BarLauncher />

				<button
					bind:this={menuToggle}
					type="button"
					onclick={() => (mobileOpen = !mobileOpen)}
					aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={mobileOpen}
					aria-controls={mobileOpen ? 'site-nav-mobile' : undefined}
					class="ml-1 cursor-pointer rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-800 md:hidden"
				>
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
						aria-hidden="true"
					>
						{#if mobileOpen}
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						{/if}
					</svg>
				</button>
			</div>
		</div>
	</nav>

	{#if mobileOpen}
		<div
			id="site-nav-mobile"
			class="max-h-[calc(100dvh-3.5rem)] overflow-y-auto overscroll-contain border-t border-gray-200 bg-white px-3 pb-6 md:hidden"
			transition:slide={{ duration: 200 }}
		>
			{#each siteNav as group (group.label)}
				<section class="mt-4">
					<h2 class="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
						{group.label}
					</h2>
					{@render groupItems(group)}
				</section>
			{/each}
		</div>
	{/if}
</header>

<!-- Outside the header: its backdrop blur would otherwise become the modal's containing block. -->
<RandomCocktailModal bind:isOpen={showRandom} />
