<script lang="ts">
	import RecipeList from '$lib/components/RecipeList.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import BackButton from '$lib/components/BackButton.svelte';
	import { fade, fly } from 'svelte/transition';
	import { infusions } from '$lib/data/infusions';
</script>

<svelte:head>
	<title>Spirit Infusions - The Krauss Haus</title>
	<meta
		name="description"
		content="List of homemade spirit infusions used in cocktails at The Krauss Haus"
	/>
	<meta property="og:image" content="https://thekrausshaus.com/images/open-graph/og-root.jpg" />
</svelte:head>

<main
	class="min-h-screen p-6 bg-[#f8f9fa] overflow-y-auto"
	in:fly={{ y: 20, duration: 400, delay: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="max-w-4xl mx-auto pb-8">
		<BackButton />

		<header class="text-center mb-16" in:fly={{ y: 20, duration: 400, delay: 400 }}>
			<h1 class="text-4xl font-bold text-gray-800 mb-4">Liquor Infusions</h1>
			<p class="text-gray-600">Why buy a flavored spirit or liqueur if you can make your own?</p>
		</header>

		<div class="bg-white rounded-lg shadow-sm p-6">
			<h2 class="text-2xl font-bold text-gray-800 mb-6">Infusion Recipes</h2>
			<RecipeList recipes={infusions} />
		</div>
	</div>

	<ScrollToTop />
</main>
