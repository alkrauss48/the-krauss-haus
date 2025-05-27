<script>
	export let href;
	export let label;
</script>

<a
	{href}
	class="relative py-5 px-4 text-lg font-semibold text-center bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:bg-gray-50 focus:outline-none focus:ring-3 focus:ring-[#2d3436]/30 border border-gray-200"
	aria-label="View {label}"
>
	{label}
</a>
