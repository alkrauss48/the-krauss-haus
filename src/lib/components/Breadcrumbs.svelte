<script lang="ts">
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';
	import { fly } from 'svelte/transition';

	// Define the breadcrumb structure based on routes
	interface Breadcrumb {
		label: string;
		href: string;
	}

	function generateBreadcrumbs(pathname: string): Breadcrumb[] {
		const breadcrumbs: Breadcrumb[] = [{ label: 'Home', href: '/' }];

		// Split the path into segments and build breadcrumbs
		const segments = pathname.split('/').filter((segment) => segment.length > 0);

		for (let i = 0; i < segments.length; i++) {
			const segment = segments[i];
			const href = '/' + segments.slice(0, i + 1).join('/');

			// Map segment names to readable labels
			let label = segment;
			switch (segment) {
				case 'cocktails':
					label = 'Cocktails';
					break;
				case 'summer-menu':
					label = 'Summer Menu';
					break;
				case 'winter-menu':
					label = 'Winter Menu';
					break;
				case 'tiki-menu':
					label = 'Tiki Menu';
					break;
				case 'recipes':
					label = 'Recipes';
					break;
				case 'parties':
					label = 'Cocktail Parties';
					break;
				case 'tiki-party-2025':
					label = 'Tiki Party 2025';
					break;
				default:
					// For cocktail slugs and other dynamic segments, format them nicely
					label = segment
						.split('-')
						.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
						.join(' ');
					break;
			}

			breadcrumbs.push({ label, href });
		}

		return breadcrumbs;
	}

	$: breadcrumbs = generateBreadcrumbs($page.url.pathname);
	$: isHomePage = $page.url.pathname === '/';
</script>

{#if !isHomePage}
	<nav
		class="mb-8 flex items-center text-sm text-gray-600"
		aria-label="Breadcrumb navigation"
		in:fly={{ x: -20, duration: 400, delay: 300 }}
	>
		{#each breadcrumbs as breadcrumb, index (breadcrumb.href)}
			{#if index === breadcrumbs.length - 1}
				<!-- Current page - not clickable -->
				<span class="text-gray-800 font-medium">
					{breadcrumb.label}
				</span>
			{:else}
				<!-- Clickable breadcrumb link -->
				<a
					href={resolve(breadcrumb.href)}
					class="hover:text-amber-600 transition-colors duration-200"
					data-sveltekit-prefetch
				>
					{breadcrumb.label}
				</a>

				<!-- Separator -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 mx-2 text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			{/if}
		{/each}
	</nav>
{/if}
