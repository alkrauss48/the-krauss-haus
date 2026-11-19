<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { replaceState } from '$app/navigation';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import BatchCalculator from '$lib/components/BatchCalculator.svelte';
	import type { Cocktail } from '$lib/types/cocktails';
	import { allCocktails, cocktailsBySlug } from '$lib/data/all-cocktails';
	import { canBatch } from '$lib/utils/batch';
	import { getIngredientDisplayName } from '$lib/utils/ingredients';
	import { buildServingSentence } from '$lib/utils/serving';

	const batchable = allCocktails.filter(canBatch).sort((a, b) => a.title.localeCompare(b.title));

	function fromSlug(slug: string | null): Cocktail | null {
		const cocktail = slug ? cocktailsBySlug.get(slug) : undefined;
		return cocktail && canBatch(cocktail) ? cocktail : null;
	}

	/** Lowercase, accents stripped, so "creole" finds "Créole". */
	function normalize(text: string): string {
		return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
	}

	// `?cocktail=slug` opens the page on that drink, so a batch can be bookmarked or shared.
	let selected = $state<Cocktail | null>(fromSlug(page.url.searchParams.get('cocktail')));
	let query = $state('');
	let listOpen = $state(false);
	let activeIndex = $state(0);
	let inputEl: HTMLInputElement | undefined = $state();

	let results = $derived.by(() => {
		const needle = normalize(query.trim());
		if (!needle) return batchable;
		return batchable.filter(
			(cocktail) =>
				normalize(cocktail.title).includes(needle) ||
				(cocktail.subtitle ? normalize(cocktail.subtitle).includes(needle) : false)
		);
	});
	let servingSentence = $derived(selected ? buildServingSentence(selected) : null);

	const listboxId = 'batch-cocktail-options';
	const optionId = (i: number) => `batch-cocktail-option-${i}`;

	function syncUrl(cocktail: Cocktail | null): void {
		const query = cocktail ? `?cocktail=${encodeURIComponent(cocktail.slug)}` : '';
		try {
			// The path is resolved; the rule just can't see through the appended query string.
			// eslint-disable-next-line svelte/no-navigation-without-resolve
			replaceState(resolve('/batch-calculator') + query, {});
		} catch {
			// The router isn't up yet; the URL is a convenience, not the page's state.
		}
	}

	function choose(cocktail: Cocktail): void {
		selected = cocktail;
		query = '';
		listOpen = false;
		activeIndex = 0;
		syncUrl(cocktail);
	}

	function changeCocktail(): void {
		selected = null;
		syncUrl(null);
		listOpen = true;
		queueMicrotask(() => inputEl?.focus());
	}

	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			listOpen = true;
			activeIndex = Math.max(0, Math.min(activeIndex + 1, results.length - 1));
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			activeIndex = Math.max(activeIndex - 1, 0);
		} else if (event.key === 'Enter') {
			const cocktail = results[activeIndex];
			if (listOpen && cocktail) {
				event.preventDefault();
				choose(cocktail);
			}
		} else if (event.key === 'Escape') {
			listOpen = false;
		}
	}

	// Keep the highlighted option in view as the arrow keys move through a long list.
	$effect(() => {
		if (!listOpen) return;
		document.getElementById(optionId(activeIndex))?.scrollIntoView?.({ block: 'nearest' });
	});
</script>

<svelte:head>
	<title>Batch Calculator - The Krauss Haus</title>
	<meta
		name="description"
		content="Scale any cocktail on the menu for a crowd or the freezer, with dilution water and the toppers to add at service."
	/>
	<meta property="og:image" content="https://thekrausshaus.com/images/open-graph/og-root.jpg" />
</svelte:head>

<main
	class="flex-1 p-6 bg-[#f8f9fa] overflow-y-auto"
	in:fly={{ y: 20, duration: 400, delay: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="max-w-7xl mx-auto pb-8">
		<Breadcrumbs />

		<div class="max-w-3xl mx-auto">
			<header class="text-center mb-12" in:fly={{ y: 20, duration: 400, delay: 400 }}>
				<h1 class="text-4xl font-bold text-gray-800 mb-4">Batch Calculator</h1>
				<p class="text-gray-600">
					Pick a cocktail and scale its spec for a crowd or the freezer, with the dilution water and
					the toppers to add at service.
				</p>
			</header>

			<!-- Cocktail picker -->
			<section class="mb-8" in:fly={{ y: 20, duration: 400, delay: 600 }}>
				<div class="bg-white rounded-lg shadow-sm">
					<div
						class="bg-gradient-to-r from-amber-50 to-orange-50 px-8 py-6 border-b border-amber-100 rounded-t-lg"
					>
						<div class="flex items-center gap-3">
							<div class="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
								<svg
									class="w-5 h-5 text-amber-700"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>
							<h2 class="text-2xl font-bold text-gray-800">Cocktail</h2>
						</div>
					</div>

					{#if selected}
						<div class="flex flex-col sm:flex-row" data-testid="batch-selected">
							<!-- Framed like CocktailCard: the whole drink, contained, on a soft backdrop. -->
							<div
								class="relative h-64 sm:h-auto sm:w-56 shrink-0 bg-gradient-to-br from-amber-50 to-orange-50"
							>
								<img
									src={selected.imagePath}
									alt={selected.title}
									class="absolute inset-0 w-full h-full object-contain p-4"
								/>
							</div>

							<div class="p-6 sm:p-8 flex flex-col gap-4 min-w-0 flex-1">
								<header>
									<div class="flex items-start justify-between gap-3">
										<h3 class="text-2xl font-bold text-gray-800 min-w-0">{selected.title}</h3>
										<button
											type="button"
											onclick={changeCocktail}
											class="shrink-0 text-sm font-medium text-amber-700 hover:text-amber-800 underline decoration-dotted underline-offset-2"
										>
											Change
										</button>
									</div>
									{#if selected.subtitle}
										<p class="text-gray-600 italic text-sm mt-1">{selected.subtitle}</p>
									{/if}
									<p class="text-gray-700 mt-2">{selected.description}</p>
								</header>

								{#if selected.ingredients && selected.ingredients.length > 0}
									<div>
										<h4 class="text-sm font-semibold text-gray-800 mb-2">Ingredients</h4>
										<ul class="space-y-1.5 text-sm text-gray-700">
											{#each selected.ingredients as ingredient, i (i)}
												<li class="flex items-start">
													<span class="mr-2 text-amber-600">•</span>
													{#if typeof ingredient === 'string'}
														<span>{ingredient}</span>
													{:else if ingredient.amount && !ingredient.label}
														<span>{ingredient.amount} {getIngredientDisplayName(ingredient)}</span>
													{:else}
														<span>{getIngredientDisplayName(ingredient)}</span>
													{/if}
												</li>
											{/each}
										</ul>
										{#if servingSentence}
											<p class="text-sm font-semibold text-gray-700 mt-3">{servingSentence}</p>
										{/if}
										{#if selected.servings && selected.servings > 1}
											<p class="text-sm text-gray-600 mt-1">
												Makes {selected.servings} servings
											</p>
										{/if}
									</div>
								{/if}

								<a
									href={resolve(`/cocktails/${selected.slug}`)}
									class="self-start mt-auto text-sm font-semibold text-amber-700 hover:text-amber-800"
								>
									Full recipe <span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
					{:else}
						<div class="p-8">
							<label
								for="batch-cocktail-search"
								class="block text-sm font-medium text-gray-700 mb-2"
							>
								Search cocktails
							</label>
							<div class="relative">
								<input
									bind:this={inputEl}
									id="batch-cocktail-search"
									type="text"
									role="combobox"
									autocomplete="off"
									placeholder="Daiquiri, Zombie, Old Fashioned…"
									aria-expanded={listOpen}
									aria-controls={listboxId}
									aria-autocomplete="list"
									aria-activedescendant={listOpen && results.length > 0
										? optionId(activeIndex)
										: undefined}
									bind:value={query}
									oninput={() => {
										listOpen = true;
										activeIndex = 0;
									}}
									onfocus={() => (listOpen = true)}
									onblur={() => (listOpen = false)}
									onkeydown={handleKeydown}
									class="w-full px-4 py-2 rounded-lg border border-gray-200 text-base focus:outline-none focus:border-amber-400"
								/>

								{#if listOpen}
									<ul
										id={listboxId}
										role="listbox"
										aria-label="Cocktails"
										class="absolute z-20 mt-1 w-full max-h-80 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg py-1"
									>
										{#each results as cocktail, i (cocktail.slug)}
											<!-- The combobox input owns the keyboard (arrows + Enter), as the ARIA pattern asks. -->
											<!-- svelte-ignore a11y_click_events_have_key_events -->
											<li
												id={optionId(i)}
												role="option"
												aria-selected={i === activeIndex}
												class="flex items-center gap-3 px-3 py-2 cursor-pointer {i === activeIndex
													? 'bg-amber-50'
													: 'hover:bg-gray-50'}"
												onmousedown={(event) => event.preventDefault()}
												onclick={() => choose(cocktail)}
												onmouseenter={() => (activeIndex = i)}
											>
												<span
													class="w-10 h-12 shrink-0 rounded bg-gradient-to-br from-amber-50 to-orange-50"
												>
													<img
														src={cocktail.thumbnailImagePath}
														alt=""
														width="40"
														height="48"
														loading="lazy"
														class="w-full h-full object-contain p-0.5"
													/>
												</span>
												<span class="min-w-0">
													<span class="block text-sm font-medium text-gray-800 truncate">
														{cocktail.title}
													</span>
													{#if cocktail.subtitle}
														<span class="block text-xs text-gray-500 truncate">
															{cocktail.subtitle}
														</span>
													{/if}
												</span>
											</li>
										{:else}
											<li class="px-3 py-2 text-sm text-gray-500" role="presentation">
												No cocktails match “{query}”.
											</li>
										{/each}
									</ul>
								{/if}
							</div>
							<p class="text-xs text-gray-500 mt-2">
								{batchable.length} cocktails can be batched. Garnishes and anything that can't be poured
								into a bottle are listed apart.
							</p>
						</div>
					{/if}
				</div>
			</section>

			<!-- Batch -->
			{#if selected}
				<section class="mb-8" in:fly={{ y: 20, duration: 300 }}>
					<div class="bg-white rounded-lg shadow-sm overflow-hidden">
						<div
							class="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-blue-100"
						>
							<div class="flex items-center gap-3">
								<div class="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
									<svg
										class="w-5 h-5 text-blue-700"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 7h6m-6 4h6m-6 4h3M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
										/>
									</svg>
								</div>
								<h2 class="text-2xl font-bold text-gray-800">Batch</h2>
							</div>
						</div>
						<div class="p-8">
							<BatchCalculator cocktail={selected} />
						</div>
					</div>
				</section>
			{/if}
		</div>
	</div>
</main>

<ScrollToTop />
