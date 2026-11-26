<script lang="ts">
	import { CocktailMethod } from '$lib/enums/methods';
	import type { Cocktail } from '$lib/types/cocktails';
	import { buildBatch, dilutionFor, formatNumber } from '$lib/utils/batch';

	let { cocktail }: { cocktail: Cocktail } = $props();

	const MIN_SERVINGS = 1;
	const MAX_SERVINGS = 500;

	let servingsInput = $state<number | null>(8);
	let freezerDilution = $state(false);

	// An empty or out-of-range box keeps the last sensible count rather than blanking the table.
	let servings = $derived(
		typeof servingsInput === 'number' && Number.isFinite(servingsInput)
			? Math.min(MAX_SERVINGS, Math.max(MIN_SERVINGS, Math.round(servingsInput)))
			: MIN_SERVINGS
	);
	let batch = $derived(buildBatch(cocktail, servings, { freezerDilution }));
	let dilutionLabel = $derived(
		`+${Math.round(dilutionFor(cocktail) * 100)}%${cocktail.method === CocktailMethod.Shaken ? ', shaken' : ''}`
	);

	// A punch's spec is for the whole recipe, not one drink.
	let recipeYield = $derived(cocktail.servings && cocktail.servings > 1 ? cocktail.servings : null);
	let per = $derived(recipeYield ? 'per recipe' : 'per drink');
	let specHeading = $derived(recipeYield ? `Recipe (serves ${recipeYield})` : 'Per drink');

	// What "Total with service additions" adds up, and which toppers it can't measure ("Top with soda").
	let servedNote = $derived.by(() => {
		const parts = freezerDilution
			? 'The batch, its water and the toppers'
			: 'The batch and the toppers';
		const unmeasured = batch.toppers.filter((line) => line.totalOz === 0).map((line) => line.name);
		if (unmeasured.length === 0) return `${parts}, poured together.`;
		const verb = unmeasured.length === 1 ? 'has' : 'have';
		return `${parts}, poured together — not counting ${unmeasured.join(', ')}, which ${verb} no measured amount.`;
	});

	const oz = (n: number) => `${formatNumber(n)} oz`;
	const ml = (n: number) => `${Math.round(n)} mL`;
</script>

<section class="flex flex-col gap-5" aria-label="Batch for {cocktail.title}">
	<div class="flex flex-col sm:flex-row sm:items-end gap-4">
		<div>
			<label for="batch-servings" class="block text-sm font-medium text-gray-700 mb-1">
				Servings
			</label>
			<input
				id="batch-servings"
				type="number"
				inputmode="numeric"
				min={MIN_SERVINGS}
				max={MAX_SERVINGS}
				step="1"
				bind:value={servingsInput}
				class="w-28 px-3 py-2 rounded-lg border border-gray-200 text-base focus:outline-none focus:border-amber-400"
			/>
		</div>
		<label class="flex items-center gap-2 text-sm text-gray-700 sm:pb-2.5 cursor-pointer">
			<input type="checkbox" bind:checked={freezerDilution} class="w-4 h-4 accent-amber-600" />
			Add dilution for a freezer batch ({dilutionLabel})
		</label>
	</div>

	<div class="overflow-x-auto">
		<table class="w-full text-sm">
			<thead>
				<tr class="text-left text-gray-500 border-b border-gray-200">
					<th class="py-2 pr-3 font-medium">Ingredient</th>
					<th class="py-2 px-3 font-medium whitespace-nowrap">{specHeading}</th>
					<th class="py-2 px-3 font-medium text-right whitespace-nowrap">Batch (oz)</th>
					<th class="py-2 pl-3 font-medium text-right whitespace-nowrap">Batch (mL)</th>
				</tr>
			</thead>
			<tbody>
				{#each batch.liquids as line, i (i)}
					<tr class="border-b border-gray-100">
						<td class="py-2 pr-3 text-gray-800">{line.name}</td>
						<td class="py-2 px-3 text-gray-600 whitespace-nowrap">{line.perDrink}</td>
						<td class="py-2 px-3 text-right text-gray-800 whitespace-nowrap">
							{oz(line.totalOz)}
							{#if line.totalCount}
								<span class="block text-xs text-gray-500">{line.totalCount}</span>
							{/if}
						</td>
						<td class="py-2 pl-3 text-right text-gray-800 whitespace-nowrap">{ml(line.totalMl)}</td>
					</tr>
				{/each}
			</tbody>
			<tfoot>
				<tr class="font-semibold text-gray-800">
					<td class="pt-3 pr-3" colspan="2">Batch volume</td>
					<td class="pt-3 px-3 text-right whitespace-nowrap">{oz(batch.batchOz)}</td>
					<td class="pt-3 pl-3 text-right whitespace-nowrap">{ml(batch.batchMl)}</td>
				</tr>
				{#if freezerDilution}
					<tr class="text-blue-800" data-testid="batch-water">
						<td class="pt-1 pr-3" colspan="2">
							Water ({Math.round(batch.dilutionPct * 100)}% dilution)
						</td>
						<td class="pt-1 px-3 text-right whitespace-nowrap">{oz(batch.waterOz)}</td>
						<td class="pt-1 pl-3 text-right whitespace-nowrap">{ml(batch.waterMl)}</td>
					</tr>
					<tr class="font-bold text-gray-900">
						<td class="pt-1 pr-3" colspan="2">Total</td>
						<td class="pt-1 px-3 text-right whitespace-nowrap">{oz(batch.totalOz)}</td>
						<td class="pt-1 pl-3 text-right whitespace-nowrap">{ml(batch.totalMl)}</td>
					</tr>
				{/if}
			</tfoot>
		</table>
	</div>

	{#if batch.toppers.length > 0}
		<div data-testid="batch-toppers">
			<h3 class="text-sm font-semibold text-gray-800 mb-1">Add at service</h3>
			<p class="text-xs text-gray-500 mb-2">
				Carbonated, so it stays out of the batch and the dilution. Top each drink as you pour.
			</p>
			<ul class="text-sm text-gray-700 space-y-1">
				{#each batch.toppers as line, i (i)}
					<li>
						{line.name}{#if line.perDrink}: {line.perDrink} {per}{/if}
						{#if line.totalOz > 0}
							<span class="text-gray-500">({oz(line.totalOz)} / {ml(line.totalMl)} in all)</span>
						{/if}
					</li>
				{/each}
			</ul>
			{#if batch.toppersOz > 0}
				<p
					class="mt-3 pt-3 border-t border-gray-100 text-sm font-semibold text-gray-800 flex flex-wrap justify-between gap-x-4"
					data-testid="batch-served"
				>
					<span>Total with service additions</span>
					<span class="whitespace-nowrap">{oz(batch.servedOz)} / {ml(batch.servedMl)}</span>
				</p>
				<p class="text-xs text-gray-500 mt-1">{servedNote}</p>
			{/if}
		</div>
	{/if}

	{#if batch.other.length > 0}
		<div>
			<h3 class="text-sm font-semibold text-gray-800 mb-1">Prep by hand</h3>
			<ul class="text-sm text-gray-700 space-y-1">
				{#each batch.other as line, i (i)}
					<li>
						{#if line.perDrink}
							{line.name}: {line.perDrink}
							{per}{#if line.total}
								<span class="text-gray-500"> ({line.total} in all)</span>{/if}
						{:else if line.total}
							{line.total} <span class="text-gray-500">({line.name} {per})</span>
						{:else}
							{line.name} <span class="text-gray-500">{per}</span>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</section>
