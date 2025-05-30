<script lang="ts">
	import SyrupList from '$lib/components/SyrupList.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import BackButton from '$lib/components/BackButton.svelte';
	import { fade, fly } from 'svelte/transition';
	import { syrups } from '$lib/data/syrups';
</script>

<svelte:head>
	<title>Homemade Syrups - The Krauss Haus</title>
	<meta name="description" content="List of homemade syrups used in cocktails at The Krauss Haus" />
</svelte:head>

<main
	class="min-h-screen p-6 bg-[#f8f9fa] overflow-y-auto"
	in:fly={{ y: 20, duration: 400, delay: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="max-w-4xl mx-auto pb-8">
		<BackButton />

		<header class="text-center mb-16" in:fly={{ y: 20, duration: 400, delay: 400 }}>
			<h1 class="text-4xl font-bold text-gray-800 mb-4">Homemade Syrups</h1>
			<p class="text-gray-600">The secret ingredients behind our cocktails</p>
		</header>

		<SyrupList {syrups} />
	</div>

	<ScrollToTop />
</main>
