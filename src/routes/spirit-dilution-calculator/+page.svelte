<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import { fade, fly } from 'svelte/transition';
	import { calculateDilution, type Unit } from '$lib/utils/spirit-dilution';

	let targetABV = 40;
	let sourceABV = 95;
	let finalVolume: number | undefined = undefined;
	let unit: Unit = 'mL';
	let finalVolumeDirty = false;

	$: valid =
		Number.isFinite(targetABV) &&
		Number.isFinite(sourceABV) &&
		typeof finalVolume === 'number' &&
		Number.isFinite(finalVolume) &&
		targetABV > 0 &&
		sourceABV > 0 &&
		finalVolume > 0 &&
		targetABV < sourceABV &&
		sourceABV <= 100 &&
		targetABV <= 100;

	$: result =
		valid && typeof finalVolume === 'number'
			? calculateDilution({ targetABV, sourceABV, finalVolume, unit })
			: null;

	function fmt(n: number): string {
		return n.toFixed(2);
	}

	function validationMessage(): string {
		const volumeMissing = typeof finalVolume !== 'number' || !Number.isFinite(finalVolume);
		if (!Number.isFinite(targetABV) || !Number.isFinite(sourceABV))
			return 'Enter values for all three fields.';
		if (volumeMissing) return finalVolumeDirty ? 'Enter values for all three fields.' : '';
		if (finalVolume! <= 0) return 'Volume must be greater than zero.';
		if (targetABV <= 0 || sourceABV <= 0) return 'ABV values must be greater than zero.';
		if (targetABV > 100 || sourceABV > 100) return 'ABV values cannot exceed 100%.';
		if (targetABV >= sourceABV) return 'Target ABV must be lower than source ABV.';
		return '';
	}

	$: hint = valid ? '' : validationMessage();
</script>

<svelte:head>
	<title>Spirit Dilution Calculator - The Krauss Haus</title>
	<meta
		name="description"
		content="Convert high-proof alcohol into your desired ABV with the right amount of spirit and water, broken down by volume and weight."
	/>
	<meta property="og:image" content="https://thekrausshaus.com/images/open-graph/og-root.jpg" />
</svelte:head>

<main
	class="min-h-screen p-6 bg-[#f8f9fa] overflow-y-auto"
	in:fly={{ y: 20, duration: 400, delay: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="max-w-3xl mx-auto pb-8">
		<Breadcrumbs />

		<header class="text-center mb-12" in:fly={{ y: 20, duration: 400, delay: 400 }}>
			<h1 class="text-4xl font-bold text-gray-800 mb-4">Spirit Dilution Calculator</h1>
			<p class="text-gray-600">
				Convert high-proof alcohol into your desired ABV with the right amount of spirit and water,
				broken down by volume and weight.
			</p>
		</header>

		<!-- Inputs -->
		<section class="mb-8" in:fly={{ y: 20, duration: 400, delay: 600 }}>
			<div class="bg-white rounded-lg shadow-sm overflow-hidden">
				<div class="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-blue-100">
					<div class="flex items-center gap-3">
						<div class="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
							<svg
								class="w-5 h-5 text-blue-700"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 4v16m8-8H4"
								/>
							</svg>
						</div>
						<h2 class="text-2xl font-bold text-gray-800">Inputs</h2>
					</div>
				</div>

				<div class="p-8 flex flex-col gap-6">
					<div>
						<label for="finalVolume" class="block text-sm font-medium text-gray-700 mb-2">
							Final Volume
						</label>
						<div class="flex gap-2">
							<input
								id="finalVolume"
								type="number"
								min="0"
								step="any"
								bind:value={finalVolume}
								on:input={() => (finalVolumeDirty = true)}
								class="flex-1 min-w-0 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400"
							/>
							<div
								class="inline-flex flex-shrink-0 rounded-lg border border-gray-200 overflow-hidden"
								role="group"
								aria-label="Unit"
							>
								<button
									type="button"
									on:click={() => (unit = 'mL')}
									class="w-16 py-2 text-sm whitespace-nowrap transition-colors {unit === 'mL'
										? 'bg-gray-800 text-white'
										: 'bg-white text-gray-700 hover:bg-gray-50'}"
									aria-pressed={unit === 'mL'}
								>
									mL
								</button>
								<button
									type="button"
									on:click={() => (unit = 'fl oz')}
									class="w-16 py-2 text-sm whitespace-nowrap transition-colors border-l border-gray-200 {unit ===
									'fl oz'
										? 'bg-gray-800 text-white'
										: 'bg-white text-gray-700 hover:bg-gray-50'}"
									aria-pressed={unit === 'fl oz'}
								>
									fl oz
								</button>
							</div>
						</div>
					</div>

					<div class="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-4">
						<div class="flex-1">
							<label for="sourceABV" class="block text-sm font-medium text-gray-700 mb-2">
								Source ABV
							</label>
							<div class="relative">
								<input
									id="sourceABV"
									type="number"
									min="0"
									max="100"
									step="0.1"
									bind:value={sourceABV}
									class="w-full px-4 py-2 pr-10 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400"
								/>
								<span
									class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none"
									>%</span
								>
							</div>
						</div>

						<div
							class="flex flex-shrink-0 items-center justify-center text-gray-400 sm:pb-2"
							aria-hidden="true"
						>
							<svg
								class="w-6 h-6 rotate-90 sm:rotate-0"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								/>
							</svg>
						</div>

						<div class="flex-1">
							<label for="targetABV" class="block text-sm font-medium text-gray-700 mb-2">
								Target ABV
							</label>
							<div class="relative">
								<input
									id="targetABV"
									type="number"
									min="0"
									max="100"
									step="0.1"
									bind:value={targetABV}
									class="w-full px-4 py-2 pr-10 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400"
								/>
								<span
									class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none"
									>%</span
								>
							</div>
						</div>
					</div>

					{#if hint}
						<div class="text-sm text-amber-700">
							{hint}
						</div>
					{/if}
				</div>
			</div>
		</section>

		<!-- Volume -->
		<section class="mb-8" in:fly={{ y: 20, duration: 400, delay: 800 }}>
			<div class="bg-white rounded-lg shadow-sm overflow-hidden">
				<div
					class="bg-gradient-to-r from-amber-50 to-yellow-50 px-8 py-6 border-b border-amber-100"
				>
					<div class="flex items-center gap-3">
						<div class="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
							<svg
								class="w-5 h-5 text-amber-700"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 3h14l-1 4H6L5 3zm1 4h12l-1 13a1 1 0 01-1 1H8a1 1 0 01-1-1L6 7z"
								/>
							</svg>
						</div>
						<h2 class="text-2xl font-bold text-gray-800">Volume</h2>
					</div>
				</div>

				<div class="p-8">
					{#if result}
						<dl class="divide-y divide-gray-100">
							<div class="flex items-baseline justify-between py-4">
								<dt class="text-gray-600">Source spirit</dt>
								<dd class="text-2xl font-semibold text-gray-800">
									{fmt(result.sourceVolume)}
									<span class="text-base font-normal text-gray-500 ml-1">{unit}</span>
								</dd>
							</div>
							<div class="flex items-baseline justify-between py-4">
								<dt class="text-gray-600">
									<span class="inline-block w-4 text-gray-400 font-medium">+</span>
									Water
								</dt>
								<dd class="text-2xl font-semibold text-gray-800">
									{fmt(result.waterVolume)}
									<span class="text-base font-normal text-gray-500 ml-1">{unit}</span>
								</dd>
							</div>
							<div class="flex items-baseline justify-between py-4 border-t-2 border-gray-200">
								<dt class="text-gray-700 font-medium">
									<span class="inline-block w-4 text-gray-400 font-medium">=</span>
									Final volume
								</dt>
								<dd class="text-2xl font-semibold text-gray-800">
									{fmt(result.sourceVolume + result.waterVolume)}
									<span class="text-base font-normal text-gray-500 ml-1">{unit}</span>
								</dd>
							</div>
						</dl>
					{:else}
						<p class="text-gray-500 text-center py-6">Enter values to see the breakdown.</p>
					{/if}
				</div>
			</div>
		</section>

		<!-- Weight -->
		<section class="mb-8" in:fly={{ y: 20, duration: 400, delay: 1000 }}>
			<div class="bg-white rounded-lg shadow-sm overflow-hidden">
				<div
					class="bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-6 border-b border-emerald-100"
				>
					<div class="flex items-center gap-3">
						<div class="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center">
							<svg
								class="w-5 h-5 text-emerald-700"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 6l3 12h12l3-12M3 6l9-3 9 3M3 6h18M9 21h6"
								/>
							</svg>
						</div>
						<h2 class="text-2xl font-bold text-gray-800">Weight</h2>
					</div>
				</div>

				<div class="p-8">
					{#if result}
						<dl class="divide-y divide-gray-100">
							<div class="flex items-baseline justify-between py-4">
								<dt class="text-gray-600">Source spirit</dt>
								<dd class="text-2xl font-semibold text-gray-800">
									{fmt(result.sourceWeight)}
									<span class="text-base font-normal text-gray-500 ml-1">g</span>
								</dd>
							</div>
							<div class="flex items-baseline justify-between py-4">
								<dt class="text-gray-600">Water</dt>
								<dd class="text-2xl font-semibold text-gray-800">
									{fmt(result.waterWeight)}
									<span class="text-base font-normal text-gray-500 ml-1">g</span>
								</dd>
							</div>
						</dl>
						<p class="text-sm text-gray-500 mt-4">
							Alcohol is less dense than water (about 0.789 g/mL vs. 1.0 g/mL), so equal volumes of
							spirit and water do not weigh the same.
						</p>
					{:else}
						<p class="text-gray-500 text-center py-6">Enter values to see the breakdown.</p>
					{/if}
				</div>
			</div>
		</section>

		<p class="text-sm text-gray-500 text-center px-4">
			Final mixed volume may vary slightly because alcohol and water contract when combined. Weights
			are estimates from a density table.
		</p>
	</div>

	<ScrollToTop />
</main>
