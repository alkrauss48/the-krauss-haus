<script lang="ts">
	import MenuLink from '$lib/components/MenuLink.svelte';
</script>

<main
	class="min-h-screen flex flex-col items-center gap-10 p-6 sm:p-4 md:p-6 font-['Montserrat'] bg-[#f8f9fa] md:justify-center"
>
	<header
		class="text-center p-6 bg-white rounded-xl shadow-sm relative overflow-hidden w-full max-w-[320px] sm:max-w-[400px] mt-8 md:mt-0"
	>
		<p class="text-lg sm:text-base text-gray-600 m-0 font-normal tracking-wider">Welcome to the</p>
		<h1
			class="text-5xl sm:text-4xl m-2 font-bold bg-[linear-gradient(90deg,#ff0000_0%,#ff7f00_14.28%,#ffff00_28.57%,#00ff00_42.85%,#0000ff_57.14%,#4b0082_71.42%,#8b00ff_85.71%,#ff0000_100%)] bg-[length:400%] animate-rainbow-text bg-clip-text text-transparent tracking-tight drop-shadow-sm"
		>
			Krauss Haus
		</h1>
	</header>

	<!-- Tiki Party Call to Action -->
	<section class="w-full max-w-[400px] sm:max-w-[500px] mb-8">
		<h2 class="text-sm text-center font-medium text-gray-500 mb-3">Upcoming Event</h2>
		<a
			href="/party"
			class="block relative overflow-hidden bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-2xl p-8 text-center text-white shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl"
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
				<h2 class="text-3xl sm:text-4xl font-bold mb-2 drop-shadow-lg">Tiki Party</h2>
				<p class="text-lg sm:text-xl font-medium opacity-90 drop-shadow-md">
					Saturday, August 9, 2025
				</p>
			</div>

			<!-- Shimmer Effect -->
			<div
				class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"
			></div>
		</a>
	</section>

	<!-- Cocktail Menus -->
	<section class="w-full max-w-[320px] sm:max-w-[400px] mb-16">
		<h2 class="text-sm text-center font-medium text-gray-500 mb-3">Cocktail Menus</h2>
		<nav class="flex flex-col gap-4" aria-label="Menu Navigation">
			<MenuLink href="/summer-menu" label="Summer Menu" />
			<MenuLink href="/tiki-menu" label="Tiki Menu" />
			<MenuLink href="/winter-menu" label="Winter Menu" />
		</nav>
	</section>
	<!-- Extras -->
	<section class="w-full max-w-[320px] sm:max-w-[400px]">
		<h2 class="text-sm text-center font-medium text-gray-500 mb-3">Extras</h2>
		<nav class="flex flex-col gap-4" aria-label="Secondary Menu Navigation">
			<MenuLink href="/syrups" label="Homemade Syrups" variant="secondary" />
			<MenuLink href="/infusions" label="Spirit Infusions" variant="secondary" />
		</nav>
	</section>

	<footer class="mt-auto pt-8 text-center text-sm text-gray-400">
		<p>
			Made with love by the Krauss family (<a
				href="https://thecodeboss.dev"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-gray-600 transition-colors">Aaron</a
			>,
			<a
				href="https://laylakrauss.dev"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-gray-600 transition-colors">Layla</a
			>,
			<a
				href="https://cyruskrauss.com"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-gray-600 transition-colors">Cyrus</a
			>, and
			<a
				href="https://lucaskrauss.dev"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-gray-600 transition-colors">Lucas</a
			>)
		</p>
	</footer>
</main>
