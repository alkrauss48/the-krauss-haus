<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let url: string;
</script>

<a
	href={url}
	class="block relative overflow-hidden bg-orange-500 rounded-2xl p-8 text-center text-white shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl"
	style="background: linear-gradient(135deg, #fb923c 0%, #ef4444 50%, #ec4899 100%);"
>
	<!-- Animated Fireworks Background -->
	<div class="absolute inset-0 overflow-hidden">
		<!-- Firework 1 -->
		<div
			class="absolute top-4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-75"
		></div>
		<div
			class="absolute top-6 left-1/3 w-1 h-1 bg-pink-300 rounded-full animate-ping opacity-75"
			style="animation-delay: 0.5s;"
		></div>
		<div
			class="absolute top-2 left-2/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping opacity-75"
			style="animation-delay: 1s;"
		></div>

		<!-- Firework 2 -->
		<div
			class="absolute bottom-6 right-1/4 w-1.5 h-1.5 bg-green-300 rounded-full animate-ping opacity-75"
			style="animation-delay: 0.3s;"
		></div>
		<div
			class="absolute bottom-4 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-ping opacity-75"
			style="animation-delay: 0.8s;"
		></div>
		<div
			class="absolute bottom-8 right-2/3 w-2 h-2 bg-orange-300 rounded-full animate-ping opacity-75"
			style="animation-delay: 1.2s;"
		></div>

		<!-- Firework 3 -->
		<div
			class="absolute top-1/2 left-1/6 w-1 h-1 bg-red-300 rounded-full animate-ping opacity-75"
			style="animation-delay: 0.7s;"
		></div>
		<div
			class="absolute top-1/2 right-1/6 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping opacity-75"
			style="animation-delay: 1.1s;"
		></div>
	</div>

	<!-- Content -->
	<div class="relative z-10">
		<h2 class="text-3xl sm:text-4xl font-bold mb-2 drop-shadow-lg">{title}</h2>
		<p class="text-lg sm:text-xl font-medium opacity-90 drop-shadow-md">
			{subtitle}
		</p>
	</div>

	<!-- Shimmer Effect -->
	<div
		class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"
	></div>
</a>
