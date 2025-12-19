import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { cocktailsBySlug } from '$lib/data/all-cocktails';
import { allPaths } from '$lib/data/all-paths';
import type { CocktailPath } from '$lib/types/cocktail-path';

export const load: PageLoad = ({ params }) => {
	const { slug } = params;
	const cocktail = cocktailsBySlug.get(slug);

	if (!cocktail) {
		throw error(404, `Cocktail "${slug}" not found`);
	}

	// Find which paths contain this cocktail
	const pathsContainingCocktail: CocktailPath[] = allPaths.filter((path) =>
		path.cocktails.some((c) => c.slug === cocktail.slug)
	);

	return {
		cocktail,
		pathsContainingCocktail
	};
};
