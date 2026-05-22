<script lang="ts">
	import { onMount, onDestroy, tick } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { searchAll, type SearchResult } from '$lib/data/all-searchable';

	export let isOpen = false;
	export let onClose: () => void = () => {};

	let query = '';
	let results: SearchResult[] = [];
	let activeIndex = 0;
	let inputEl: HTMLInputElement | null = null;
	let listboxEl: HTMLUListElement | null = null;
	let lastFocusedElement: HTMLElement | null = null;
	const listboxId = 'search-results-listbox';
	const inputId = 'search-modal-input';

	$: results = query.trim().length > 0 ? searchAll(query, 15) : [];
	$: if (results.length > 0 && activeIndex >= results.length) activeIndex = 0;

	function handleInput() {
		activeIndex = 0;
	}

	function selectResult(result: SearchResult) {
		closeAndNavigate(result.item.href);
	}

	function closeAndNavigate(href: string) {
		close();
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		goto(resolve(href as any));
	}

	function close() {
		isOpen = false;
		onClose();
	}

	function resetState() {
		query = '';
		results = [];
		activeIndex = 0;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!isOpen) return;

		if (event.key === 'Escape') {
			event.preventDefault();
			close();
			return;
		}

		if (event.key === 'ArrowDown') {
			event.preventDefault();
			if (results.length === 0) return;
			activeIndex = (activeIndex + 1) % results.length;
			scrollActiveIntoView();
			return;
		}

		if (event.key === 'ArrowUp') {
			event.preventDefault();
			if (results.length === 0) return;
			activeIndex = (activeIndex - 1 + results.length) % results.length;
			scrollActiveIntoView();
			return;
		}

		if (event.key === 'Home') {
			if (results.length === 0) return;
			event.preventDefault();
			activeIndex = 0;
			scrollActiveIntoView();
			return;
		}

		if (event.key === 'End') {
			if (results.length === 0) return;
			event.preventDefault();
			activeIndex = results.length - 1;
			scrollActiveIntoView();
			return;
		}

		if (event.key === 'Enter') {
			if (results[activeIndex]) {
				event.preventDefault();
				selectResult(results[activeIndex]);
			}
			return;
		}

		if (event.key === 'Tab') {
			// Trap focus inside the dialog (only two stops: input and close button)
			const focusables = getFocusables();
			if (focusables.length === 0) return;
			const first = focusables[0];
			const last = focusables[focusables.length - 1];
			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		}
	}

	function getFocusables(): HTMLElement[] {
		if (!browser) return [];
		const root = document.getElementById('search-modal-root');
		if (!root) return [];
		return Array.from(
			root.querySelectorAll<HTMLElement>(
				'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
			)
		);
	}

	function scrollActiveIntoView() {
		if (!browser || !listboxEl) return;
		const el = listboxEl.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`);
		el?.scrollIntoView({ block: 'nearest' });
	}

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) close();
	}

	$: if (isOpen && browser) {
		lastFocusedElement = (document.activeElement as HTMLElement) ?? null;
		tick().then(() => inputEl?.focus());
	}

	$: if (!isOpen && browser) {
		const el = lastFocusedElement;
		setTimeout(() => {
			resetState();
			el?.focus?.();
		}, 200);
	}

	onMount(() => {
		if (browser) window.addEventListener('keydown', handleKeydown);
	});

	onDestroy(() => {
		if (browser) window.removeEventListener('keydown', handleKeydown);
	});

	function typeBadgeClass(type: string): string {
		switch (type) {
			case 'cocktail':
				return 'bg-amber-100 text-amber-800';
			case 'recipe':
				return 'bg-emerald-100 text-emerald-800';
			case 'path':
				return 'bg-purple-100 text-purple-800';
			case 'party':
				return 'bg-pink-100 text-pink-800';
			case 'bartender':
				return 'bg-blue-100 text-blue-800';
			case 'menu':
				return 'bg-orange-100 text-orange-800';
			case 'page':
				return 'bg-gray-200 text-gray-700';
			default:
				return 'bg-gray-100 text-gray-700';
		}
	}
</script>

{#if isOpen}
	<div
		id="search-modal-root"
		class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-start justify-center z-50 px-4 pt-[10vh] sm:pt-[15vh]"
		on:click={handleBackdropClick}
		role="presentation"
		transition:fade={{ duration: 200 }}
	>
		<div
			class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]"
			role="dialog"
			aria-modal="true"
			aria-labelledby="search-modal-title"
			transition:scale={{ duration: 200, easing: quintOut, start: 0.96 }}
		>
			<h2 id="search-modal-title" class="sr-only">Search The Krauss Haus</h2>

			<div class="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
				<svg
					class="h-5 w-5 text-gray-400 shrink-0"
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
				<input
					bind:this={inputEl}
					bind:value={query}
					on:input={handleInput}
					id={inputId}
					type="text"
					placeholder="Search cocktails, recipes, paths…"
					class="flex-1 bg-transparent border-0 outline-none text-gray-800 placeholder-gray-400 text-base py-1"
					autocomplete="off"
					spellcheck="false"
					role="combobox"
					aria-expanded={results.length > 0}
					aria-controls={listboxId}
					aria-activedescendant={results.length > 0 ? `search-result-${activeIndex}` : undefined}
					aria-autocomplete="list"
					aria-label="Search The Krauss Haus"
				/>
				<button
					type="button"
					class="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md"
					on:click={close}
					aria-label="Close search"
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
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<div class="overflow-y-auto" aria-live="polite" aria-atomic="false">
				{#if query.trim().length === 0}
					<p class="px-4 py-8 text-sm text-center text-gray-500">
						Start typing to search cocktails, recipes, paths, parties, bartenders, menus, and pages.
					</p>
				{:else if results.length === 0}
					<p class="px-4 py-8 text-sm text-center text-gray-500">
						No results for <span class="font-medium text-gray-700">"{query}"</span>.
					</p>
				{:else}
					<ul
						bind:this={listboxEl}
						id={listboxId}
						role="listbox"
						aria-label="Search results"
						class="py-1"
					>
						{#each results as result, i (result.item.href)}
							<li
								id="search-result-{i}"
								role="option"
								aria-selected={i === activeIndex}
								data-index={i}
							>
								<button
									type="button"
									class="w-full cursor-pointer text-left flex items-center gap-3 px-4 py-3 transition-colors {i ===
									activeIndex
										? 'bg-amber-50'
										: 'hover:bg-gray-50'}"
									on:click={() => selectResult(result)}
									on:mouseenter={() => (activeIndex = i)}
									tabindex="-1"
								>
									{#if result.item.imagePath}
										<img
											src={result.item.imagePath}
											alt=""
											class="h-12 w-12 rounded-md object-contain shrink-0 bg-gray-100"
											loading="lazy"
										/>
									{:else}
										<div
											class="h-12 w-12 rounded-md shrink-0 bg-gray-100 flex items-center justify-center"
											aria-hidden="true"
										>
											<svg
												class="h-5 w-5 text-gray-400"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M4 6h16M4 12h16M4 18h7"
												/>
											</svg>
										</div>
									{/if}
									<div class="flex-1 min-w-0">
										<div class="flex items-center gap-2">
											<span class="font-medium text-gray-800 truncate">
												{result.item.title}
											</span>
											<span
												class="text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded shrink-0 {typeBadgeClass(
													result.item.type
												)}"
											>
												{result.item.typeLabel}
											</span>
										</div>
										{#if result.item.description}
											<p class="text-sm text-gray-500 truncate">
												{result.item.description}
											</p>
										{/if}
									</div>
								</button>
							</li>
						{/each}
					</ul>
				{/if}
			</div>

			<div
				class="hidden sm:flex items-center gap-4 px-4 py-2 border-t border-gray-100 text-xs text-gray-400"
			>
				<span><kbd class="font-sans">↑</kbd> <kbd class="font-sans">↓</kbd> to navigate</span>
				<span><kbd class="font-sans">↵</kbd> to select</span>
				<span><kbd class="font-sans">esc</kbd> to close</span>
			</div>
		</div>
	</div>
{/if}
