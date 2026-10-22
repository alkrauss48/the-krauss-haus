import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { cocktailsBySlug } from '$lib/data/all-cocktails';
import { allPaths } from '$lib/data/all-paths';
import type { CocktailPath } from '$lib/types/cocktail-path';
import { allCollections } from '$lib/data/all-collections';
import type { CocktailCollection } from '$lib/types/cocktail-collection';
import { collectionCocktails } from '$lib/utils/collections';
import { menuConfig } from '$lib/data/menu-config';

export const load: PageLoad = ({ params }) => {
	const { slug } = params;
	const cocktail = cocktailsBySlug.get(slug);

	if (!cocktail) {
		throw error(404, `Cocktail "${slug}" not found`);
	}

	const isOnMenu = (menuSlug: string): boolean => {
		const menu = menuConfig[menuSlug];
		if (!menu) return false;
		if (menu.featuredDrinks?.some((d) => d.slug === cocktail.slug)) return true;
		return menu.categories.some((category) =>
			category.cocktails.some((c) => c.slug === cocktail.slug)
		);
	};

	const onSummer = isOnMenu('summer');
	const onWinter = isOnMenu('winter');
	const onTiki = isOnMenu('tiki');

	// Find which paths contain this cocktail
	const pathsContainingCocktail: CocktailPath[] = allPaths.filter((path) =>
		path.cocktails.some((c) => c.slug === cocktail.slug)
	);

	// Find which collections contain this cocktail
	const collectionsContainingCocktail: CocktailCollection[] = allCollections.filter((collection) =>
		collectionCocktails(collection).some((c) => c.slug === cocktail.slug)
	);

	return {
		cocktail,
		onSummer,
		onWinter,
		onTiki,
		pathsContainingCocktail,
		collectionsContainingCocktail
	};
};
