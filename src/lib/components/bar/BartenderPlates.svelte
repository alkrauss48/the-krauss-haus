<script lang="ts">
	import { BARTENDER_KEYS, bartenders, type BartenderKey } from '$lib/bar/bartenders';

	/** The hover gloss: what to bring them, and — for Eddie — what not to. */
	function plateTitle(who: (typeof bartenders)[BartenderKey]): string {
		return who.caveat ? `${who.bestAt} ${who.caveat}` : who.bestAt;
	}

	let {
		active,
		busy,
		calling = null,
		onSwitch
	}: {
		active: BartenderKey;
		busy: boolean;
		/** Set while a consult is in flight — lights the other plate and draws the line. */
		calling?: BartenderKey | null;
		onSwitch: (key: BartenderKey) => void;
	} = $props();
</script>

<div class="relative flex items-stretch gap-2" role="radiogroup" aria-label="Who's behind the bar">
	{#each BARTENDER_KEYS as key, i (key)}
		{@const who = bartenders[key]}
		{@const lit = key === active || key === calling}
		<button
			type="button"
			role="radio"
			aria-checked={key === active}
			disabled={busy && key !== active}
			title={busy && key !== active ? 'one at a time' : plateTitle(who)}
			class="flex-1 cursor-pointer rounded-lg border px-3 py-2 text-left transition-all duration-300 disabled:cursor-not-allowed {lit
				? who.plate
				: who.plateDim} {busy && key !== active ? 'opacity-50' : ''}"
			onclick={() => onSwitch(key)}
		>
			<span class="flex items-center gap-1.5">
				<span
					class="h-1.5 w-1.5 rounded-full transition-opacity {who.accentDot} {lit
						? 'opacity-100'
						: 'opacity-0'}"
					aria-hidden="true"
				></span>
				<span class="text-sm font-bold tracking-wide">{who.name.toUpperCase()}</span>
			</span>
			<span class="mt-0.5 block text-[0.68rem] leading-tight opacity-80">{who.role}</span>
		</button>

		{#if i === 0}
			<!-- The line between the two coasters. Drawn only while the phone is off the hook. -->
			<span
				class="pointer-events-none absolute inset-y-0 left-1/2 flex w-8 -translate-x-1/2 items-center justify-center transition-opacity duration-300 {calling
					? 'opacity-100'
					: 'opacity-0'}"
				aria-hidden="true"
			>
				<span
					class="h-px w-full bg-[repeating-linear-gradient(90deg,currentColor_0_3px,transparent_3px_6px)] text-amber-500 motion-safe:animate-pulse"
				></span>
			</span>
		{/if}
	{/each}
</div>
