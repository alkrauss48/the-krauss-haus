<script lang="ts">
	import MenuLink from '$lib/components/MenuLink.svelte';
	import FeaturedEvent from '$lib/components/FeaturedEvent.svelte';
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
		<FeaturedEvent
			title="Tiki Party"
			subtitle="Saturday, August 9, 2025"
			url="/parties/tiki-party-2025"
		/>
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
