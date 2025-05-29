<script>
	import { onMount } from 'svelte';
	import MenuLink from '$lib/components/MenuLink.svelte';

	// Meta tags will be handled by SvelteKit's head management
	onMount(() => {
		// Any client-side initialization if needed
	});
</script>

<svelte:head>
	<title>The Krauss Haus</title>
	<meta
		name="description"
		content="The Krauss Haus - A digital hub for guests featuring seasonal cocktail menus"
	/>
	<meta name="keywords" content="cocktails, menu, Krauss Haus, seasonal drinks, tiki drinks" />
	<meta name="author" content="The Krauss Haus" />
	<meta name="robots" content="index, follow" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://thekrausshaus.com/" />
	<meta property="og:title" content="The Krauss Haus" />
	<meta
		property="og:description"
		content="A digital hub for guests featuring seasonal cocktail menus"
	/>
	<meta property="og:image" content="https://thekrausshaus.com/images/og-image.jpg" />
	<meta property="og:site_name" content="The Krauss Haus" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://thekrausshaus.com/" />
	<meta name="twitter:title" content="The Krauss Haus" />
	<meta
		name="twitter:description"
		content="A digital hub for guests featuring seasonal cocktail menus"
	/>
	<meta name="twitter:image" content="https://thekrausshaus.com/images/og-image.jpg" />
	<meta name="twitter:creator" content="@thecodeboss" />

	<!-- Favicon -->
	<link rel="icon" type="image/png" href="/images/favicon/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/images/favicon/favicon.svg" />
	<link rel="shortcut icon" href="/images/favicon/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="Krauss Haus" />
	<link rel="manifest" href="/images/favicon/site.webmanifest" />

	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
		rel="stylesheet"
	/>
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

	<nav
		class="flex flex-col gap-4 w-full max-w-[320px] sm:max-w-[400px]"
		aria-label="Menu Navigation"
	>
		<MenuLink href="/summer-menu" label="Summer Menu" />
		<MenuLink href="/pdfs/tiki-menu.pdf" label="Tiki Menu" />
		<MenuLink href="/pdfs/winter-menu.pdf" label="Winter Menu" />
	</nav>
</main>
