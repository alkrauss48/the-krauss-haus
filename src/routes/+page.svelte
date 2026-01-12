<script lang="ts">
	import MenuLink from '$lib/components/MenuLink.svelte';
	import TipButton from '$lib/components/TipButton.svelte';
	import TipModal from '$lib/components/TipModal.svelte';
	import { resolve } from '$app/paths';

	let showTipModal = false;

	function handleTipOpen() {
		showTipModal = true;
	}

	function handleTipClose() {
		showTipModal = false;
	}
</script>

<svelte:head>
	<title>The Krauss Haus</title>
	<meta name="description" content="Our house bar menus! Come have a drink with us." />
	<meta property="og:image" content="https://thekrausshaus.com/images/open-graph/og-root.jpg" />
</svelte:head>

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

	<!-- Menus and Explore Grid -->
	<div
		class="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[800px] mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8"
	>
		<!-- Cocktail Menus -->
		<section class="w-full bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-sm">
			<h2 class="text-lg text-center font-medium text-amber-800 mb-3">Cocktail Menus</h2>
			<p class="text-sm text-center text-amber-700/80 mb-6 leading-relaxed">
				Browse our curated seasonal menus featuring handpicked cocktails for each time of year
			</p>
			<nav class="flex flex-col gap-5" aria-label="Menu Navigation">
				<MenuLink href="/summer-menu" label="Summer Menu" />
				<MenuLink href="/tiki-menu" label="Tiki Menu" />
				<MenuLink href="/winter-menu" label="Winter Menu" />
			</nav>
		</section>

		<!-- Explore Section: Paths and All Cocktails -->
		<section class="w-full bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-sm">
			<h2 class="text-lg text-center font-medium text-indigo-800 mb-3">Explore</h2>
			<p class="text-sm text-center text-indigo-700/80 mb-6 leading-relaxed">
				Discover cocktails through guided paths or search and filter our entire collection
			</p>
			<nav class="flex flex-col gap-5" aria-label="Explore Navigation">
				<a
					href={resolve('/paths')}
					class="block w-full p-5 text-center rounded-xl transition-all duration-200 bg-white/80 hover:bg-white text-gray-800 border border-purple-200/50 hover:border-purple-300 shadow-sm hover:shadow-md backdrop-blur-sm"
				>
					<h3 class="text-base font-semibold mb-1 text-gray-800">Cocktail Paths</h3>
					<p class="text-xs text-gray-600">Start your journey</p>
				</a>
				<a
					href={resolve('/cocktails')}
					class="block w-full p-5 text-center rounded-xl transition-all duration-200 bg-white/80 hover:bg-white text-gray-800 border border-blue-200/50 hover:border-blue-300 shadow-sm hover:shadow-md backdrop-blur-sm"
				>
					<h3 class="text-base font-semibold mb-1 text-gray-800">All Cocktails</h3>
					<p class="text-xs text-gray-600">Browse our complete collection</p>
				</a>
			</nav>
		</section>
	</div>
	<!-- Extras -->
	<section class="w-full max-w-[320px] sm:max-w-[400px]">
		<h2 class="text-sm text-center font-medium text-gray-500 mb-3">Extras</h2>
		<nav class="flex flex-col gap-4" aria-label="Secondary Menu Navigation">
			<MenuLink href="/ingredients" label="Ingredients" variant="secondary" />
			<MenuLink href="/parties" label="Cocktail Parties" variant="secondary" />
			<MenuLink href="/recipes" label="Recipes" variant="secondary" />
		</nav>
	</section>

	<footer class="mt-auto pt-8 text-center text-sm text-gray-400">
		<div class="mb-6">
			<TipButton on:open={handleTipOpen} />
		</div>
		<p>
			Made with love by the Krauss family (<a
				href="https://thecodeboss.dev"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-gray-600 transition-colors underline decoration-dotted underline-offset-2"
				>Aaron</a
			>,
			<a
				href="https://laylakrauss.dev"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-gray-600 transition-colors underline decoration-dotted underline-offset-2"
				>Layla</a
			>,
			<a
				href="https://cyruskrauss.com"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-gray-600 transition-colors underline decoration-dotted underline-offset-2"
				>Cyrus</a
			>, and
			<a
				href="https://lucaskrauss.dev"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-gray-600 transition-colors underline decoration-dotted underline-offset-2"
				>Lucas</a
			>)
		</p>
	</footer>
</main>

<!-- Tip Modal -->
<TipModal bind:isOpen={showTipModal} on:close={handleTipClose} />
