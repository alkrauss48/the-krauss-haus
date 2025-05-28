<script>
	export let title;
	export let description;
	export let imagePath;
	export let bgColors = ['#fecaca', '#fef3c7', '#dbeafe']; // Default pastel colors
	export let variations = ''; // Optional variations text
</script>

<div class="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
	<div class="h-64 relative">
		<!-- Pastel diagonal gradient background -->
		<div
			class="absolute inset-0 opacity-30"
			style="background: linear-gradient(135deg, {bgColors[0]} 0%, {bgColors[1]} 50%, {bgColors[2]} 100%);"
		></div>
		<img src={imagePath} alt={title} class="w-full h-full object-contain p-4 relative z-10" />
	</div>
	<div class="p-6 flex-1 flex flex-col">
		<h3 class="text-xl font-bold text-gray-800 mb-2">{title}</h3>
		<p class="text-gray-600 flex-1">{description}</p>
		{#if variations}
			<p class="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-50 font-light tracking-wide">
				Variations: {variations}
			</p>
		{/if}
	</div>
</div>
