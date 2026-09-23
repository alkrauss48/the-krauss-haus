<script lang="ts">
	// The bar's one AI tell, shared by the launcher and the cocktail-page on-ramp so both
	// read as the same offer. The second, smaller star is what keeps it from looking like a
	// generic asterisk at 16px.
	let { class: className = 'h-4 w-4' }: { class?: string } = $props();
</script>

<svg
	class={className}
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	fill="currentColor"
	aria-hidden="true"
>
	<path d="M12 2.5 13.9 8.1 19.5 10 13.9 11.9 12 17.5 10.1 11.9 4.5 10 10.1 8.1Z" opacity="0.95" />
	<path
		d="M18.5 15 19.4 17.6 22 18.5 19.4 19.4 18.5 22 17.6 19.4 15 18.5 17.6 17.6Z"
		opacity="0.6"
	/>
</svg>
