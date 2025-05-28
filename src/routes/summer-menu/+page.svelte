<script>
	import CocktailCard from '$lib/components/CocktailCard.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let showScrollTop = false;

	function handleScroll() {
		showScrollTop = window.scrollY > 300;
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const featuredDrink = {
		title: "Pimm's Cup",
		description: "Pimm's #1, sparkling lemonade, cucumber, orange, strawberry, mint.",
		imagePath: '/images/cocktails/summer/pimms-cup.png'
	};

	const sectionColors = {
		featured: ['#fecaca', '#fef3c7', '#dbeafe'], // Original pastel colors
		mommy: ['#fae8ff', '#fce7f3', '#fdf2f8'], // Soft purples and pinks
		daddy: ['#dbeafe', '#e0e7ff', '#ede9fe'], // Cool blues and purples
		cyrus: ['#dcfce7', '#f0fdf4', '#ecfdf5'], // Fresh greens
		lucas: ['#fff7ed', '#ffedd5', '#fef3c7'] // Warm oranges and yellows
	};

	const categories = [
		{
			title: "Mommy's Drinks",
			bgColors: sectionColors.mommy,
			cocktails: [
				{
					title: 'Spritz',
					description: 'Prosecco, aperol, soda water, orange wedge.',
					imagePath: '/images/cocktails/summer/spritz.png'
				},
				{
					title: 'Margarita',
					description: 'Blanco tequila, cointreau, lime, agave nectar.',
					imagePath: '/images/cocktails/summer/margarita.png',
					variations: 'Spicy'
				},
				{
					title: 'Moonwell',
					description:
						'Light rum, elderflower liqueur, grenadine, sage bitters, lemon, soda water.',
					imagePath: '/images/cocktails/summer/moonwell.png',
					variations: "Valden's, Qweenanne's, Pounders', Troker's"
				}
			]
		},
		{
			title: "Daddy's Drinks",
			bgColors: sectionColors.daddy,
			cocktails: [
				{
					title: 'Daiquiri',
					description: 'Light rum, lime, simple syrup.',
					imagePath: '/images/cocktails/summer/daiquiri.png'
				},
				{
					title: 'Negroni',
					description: 'Gin, campari, sweet vermouth, orange twist.',
					imagePath: '/images/cocktails/summer/negroni.png',
					variations: 'Mezcal'
				},
				{
					title: 'Mint Julep',
					description: 'Bourbon, simple syrup, mint.',
					imagePath: '/images/cocktails/summer/mint-julep.png'
				}
			]
		},
		{
			title: "Cyrus' Drinks",
			bgColors: sectionColors.cyrus,
			cocktails: [
				{
					title: 'Caipirinha',
					description: 'Cachaça, lime, sugar.',
					imagePath: '/images/cocktails/summer/caipirinha.png'
				},
				{
					title: 'Jack Rose',
					description: 'Calvados, applejack, grenadine, lemon.',
					imagePath: '/images/cocktails/summer/jack-rose.png'
				},
				{
					title: 'Loggy Cab',
					description: 'Gin, lime, sugar, soda water.',
					imagePath: '/images/cocktails/summer/loggy-cab.png'
				}
			]
		},
		{
			title: "Lucas' Drinks",
			bgColors: sectionColors.lucas,
			cocktails: [
				{
					title: 'Mojito',
					description: 'Light rum, lime, sugar, mint, angostura bitters.',
					imagePath: '/images/cocktails/summer/mojito.png'
				},
				{
					title: 'French 75',
					description: 'Prosecco, gin, lemon, simple syrup.',
					imagePath: '/images/cocktails/summer/french-75.png'
				},
				{
					title: 'Paper Plane',
					description: 'Bourbon, amaro nonino, aperol, lemon.',
					imagePath: '/images/cocktails/summer/paper-plane.png'
				}
			]
		}
	];

	function goBack() {
		goto('/');
	}
</script>

<svelte:head>
	<title>Summer Menu - The Krauss Haus</title>
	<meta name="description" content="Summer cocktail menu at The Krauss Haus" />
</svelte:head>

<main
	class="min-h-screen p-6 bg-[#f8f9fa] overflow-y-auto"
	in:fly={{ y: 20, duration: 400, delay: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="max-w-7xl mx-auto pb-8">
		<button
			on:click={goBack}
			class="mb-8 flex items-center text-gray-600 hover:text-amber-600 transition-colors duration-200 group"
			in:fly={{ x: -20, duration: 400, delay: 300 }}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
					clip-rule="evenodd"
				/>
			</svg>
			Back to Home
		</button>

		<header class="text-center mb-16" in:fly={{ y: 20, duration: 400, delay: 400 }}>
			<h1 class="text-4xl font-bold text-gray-800 mb-4">Summer Menu</h1>
			<p class="text-gray-600">Refreshing cocktails for the warm season</p>
		</header>

		<div class="space-y-24">
			<!-- Featured Welcome Drink -->
			<section
				class="bg-white rounded-lg shadow-lg p-8 border border-amber-100 relative overflow-hidden"
				in:fly={{ y: 20, duration: 400, delay: 500 }}
			>
				<div class="max-w-3xl mx-auto">
					<div class="text-center mb-8">
						<h2 class="text-3xl font-medium text-gray-800 mb-2 tracking-wide">Welcome Drink</h2>
						<p class="text-lg text-gray-600 font-light leading-relaxed">
							Because you shouldn't have to worry about what to order the moment you walk in the
							door.
						</p>
					</div>
					<div class="max-w-md mx-auto">
						<CocktailCard
							title={featuredDrink.title}
							description={featuredDrink.description}
							imagePath={featuredDrink.imagePath}
							bgColors={sectionColors.featured}
						/>
					</div>
				</div>
			</section>

			{#each categories as category, i}
				<section class="relative" in:fly={{ y: 20, duration: 400, delay: 600 + i * 100 }}>
					<!-- Category Header with decorative line -->
					<div class="flex items-center mb-12">
						<div class="flex-1 h-px bg-gray-200"></div>
						<h2 class="text-3xl font-bold text-gray-800 px-8">{category.title}</h2>
						<div class="flex-1 h-px bg-gray-200"></div>
					</div>

					<!-- Cocktail Grid -->
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{#each category.cocktails as cocktail, j}
							<div in:fly={{ y: 20, duration: 400, delay: 700 + i * 100 + j * 50 }}>
								<CocktailCard
									title={cocktail.title}
									description={cocktail.description}
									imagePath={cocktail.imagePath}
									bgColors={category.bgColors}
									variations={cocktail.variations}
								/>
							</div>
						{/each}
					</div>
				</section>
			{/each}
		</div>
	</div>

	<!-- Scroll to top button -->
	<button
		on:click={scrollToTop}
		class="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-110 cursor-pointer z-50 {showScrollTop
			? 'opacity-100 translate-y-0'
			: 'opacity-0 translate-y-4 pointer-events-none'}"
		aria-label="Scroll to top"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 text-gray-600"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 10l7-7m0 0l7 7m-7-7v18"
			/>
		</svg>
	</button>
</main>
