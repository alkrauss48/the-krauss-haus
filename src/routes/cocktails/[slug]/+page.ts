import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { cocktailsBySlug } from '$lib/data/all-cocktails';
import { allPaths } from '$lib/data/all-paths';
import type { CocktailPath } from '$lib/types/cocktail-path';
import {
	categories as summerCategories,
	featuredDrink as summerFeatured
} from '$lib/data/summer-menu';
import {
	categories as winterCategories,
	featuredDrink as winterFeatured
} from '$lib/data/winter-menu';
import { categories as tikiCategories } from '$lib/data/tiki-menu';

export const load: PageLoad = ({ params }) => {
	const { slug } = params;
	const cocktail = cocktailsBySlug.get(slug);

	if (!cocktail) {
		throw error(404, `Cocktail "${slug}" not found`);
	}

	// Check which menus contain this cocktail
	function isOnSummerMenu(): boolean {
		if (summerFeatured.slug === cocktail.slug) return true;
		return summerCategories.some((category) =>
			category.cocktails.some((c) => c.slug === cocktail.slug)
		);
	}

	function isOnWinterMenu(): boolean {
		if (winterFeatured.slug === cocktail.slug) return true;
		return winterCategories.some((category) =>
			category.cocktails.some((c) => c.slug === cocktail.slug)
		);
	}

	function isOnTikiMenu(): boolean {
		return tikiCategories.some((category) =>
			category.cocktails.some((c) => c.slug === cocktail.slug)
		);
	}

	const onSummer = isOnSummerMenu();
	const onWinter = isOnWinterMenu();
	const onTiki = isOnTikiMenu();

	// Find which paths contain this cocktail
	const pathsContainingCocktail: CocktailPath[] = allPaths.filter((path) =>
		path.cocktails.some((c) => c.slug === cocktail.slug)
	);

	return {
		cocktail,
		onSummer,
		onWinter,
		onTiki,
		pathsContainingCocktail
	};
};
