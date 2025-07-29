<script lang="ts">
	import { handleAnchorClick } from '$lib/utils/navigation';

	export let href: string;
	export let label: string;
	export let variant: 'primary' | 'secondary' = 'primary';

	function onClick(event: MouseEvent): void {
		handleAnchorClick(event, href);
	}
</script>

<a
	{href}
	on:click={onClick}
	class="block w-full p-4 text-center rounded-lg transition-all duration-200 {variant === 'primary'
		? 'bg-white hover:bg-gray-50 text-gray-800 shadow-sm hover:shadow'
		: 'bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200'}"
>
	{label}
</a>
