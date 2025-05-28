<script>
  import CocktailCard from '$lib/components/CocktailCard.svelte';
  import { goto } from '$app/navigation';

  const featuredDrink = {
    title: "Pimm's Cup",
    description: "Pimm’s #1, sparkling lemonade, cucumber, orange, strawberry, mint.",
    imagePath: "/images/cocktails/summer/pimms-cup.png"
  };

  const sectionColors = {
    featured: ['#fecaca', '#fef3c7', '#dbeafe'], // Original pastel colors
    mommy: ['#fae8ff', '#fce7f3', '#fdf2f8'],    // Soft purples and pinks
    daddy: ['#dbeafe', '#e0e7ff', '#ede9fe'],    // Cool blues and purples
    cyrus: ['#dcfce7', '#f0fdf4', '#ecfdf5'],    // Fresh greens
    lucas: ['#fff7ed', '#ffedd5', '#fef3c7']     // Warm oranges and yellows
  };

  const categories = [
    {
      title: "Mommy's Drinks",
      bgColors: sectionColors.mommy,
      cocktails: [
        {
          title: "Spritz",
          description: "Prosecco, aperol, soda water, orange wedge.",
          imagePath: "/images/cocktails/summer/spritz.png"
        },
        {
          title: "Margarita",
          description: "Blanco tequila, cointreau, lime, agave nectar.",
          imagePath: "/images/cocktails/summer/margarita.png"
        },
        {
          title: "Moonwell",
          description: "Light rum, elderflower liqueur, grenadine, sage bitters, lemon, soda water.",
          imagePath: "/images/cocktails/summer/moonwell.png"
        }
      ]
    },
    {
      title: "Daddy's Drinks",
      bgColors: sectionColors.daddy,
      cocktails: [
        {
          title: "Daiquiri",
          description: "Light rum, lime, simple syrup.",
          imagePath: "/images/cocktails/summer/daiquiri.png"
        },
        {
          title: "Negroni",
          description: "Gin, campari, sweet vermouth, orange twist.",
          imagePath: "/images/cocktails/summer/negroni.png"
        },
        {
          title: "Mint Julep",
          description: "Bourbon, simple syrup, mint.",
          imagePath: "/images/cocktails/summer/mint-julep.png"
        }
      ]
    },
    {
      title: "Cyrus' Drinks",
      bgColors: sectionColors.cyrus,
      cocktails: [
        {
          title: "Caipirinha",
          description: "Cachaça, lime, sugar.",
          imagePath: "/images/cocktails/summer/caipirinha.png"
        },
        {
          title: "Jack Rose",
          description: "Calvados, applejack, grenadine, lemon.",
          imagePath: "/images/cocktails/summer/jack-rose.png"
        },
        {
          title: "Loggy Cab",
          description: "Gin, lime, sugar, soda water.",
          imagePath: "/images/cocktails/summer/loggy-cab.png"
        }
      ]
    },
    {
      title: "Lucas' Drinks",
      bgColors: sectionColors.lucas,
      cocktails: [
        {
          title: "Mojito",
          description: "Light rum, lime, sugar, mint, angostura bitters.",
          imagePath: "/images/cocktails/summer/mojito.png"
        },
        {
          title: "French 75",
          description: "Prosecco, gin, lemon, simple syrup.",
          imagePath: "/images/cocktails/summer/french-75.png"
        },
        {
          title: "Paper Plane",
          description: "Bourbon, amaro nonino, aperol, lemon.",
          imagePath: "/images/cocktails/summer/paper-plane.png"
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

<main class="min-h-screen p-6 bg-[#f8f9fa] overflow-y-auto">
  <div class="max-w-7xl mx-auto pb-8">
    <button 
      on:click={goBack}
      class="mb-8 flex items-center text-gray-600 hover:text-amber-600 transition-colors duration-200 group"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      Back to Home
    </button>

    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Summer Menu</h1>
      <p class="text-gray-600">Refreshing cocktails for the warm season</p>
    </header>

    <div class="space-y-16">
      <!-- Featured Welcome Drink -->
      <section class="bg-white rounded-lg shadow-lg p-8 border border-amber-100 relative overflow-hidden">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-medium text-gray-800 mb-2 tracking-wide">Welcome Drink</h2>
            <p class="text-lg text-gray-600 font-light leading-relaxed">Because you shouldn't have to worry about what to order the moment you walk in the door.</p>
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

      {#each categories as category}
        <section>
          <h2 class="text-3xl font-bold text-gray-800 mb-8">{category.title}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each category.cocktails as cocktail}
              <CocktailCard
                title={cocktail.title}
                description={cocktail.description}
                imagePath={cocktail.imagePath}
                bgColors={category.bgColors}
              />
            {/each}
          </div>
        </section>
      {/each}
    </div>
  </div>
</main> 
