import type { PageLoad } from './$types';
import { allBartenders } from '$lib/data/all-bartenders';
import { allCocktails } from '$lib/data/all-cocktails';

export const load: PageLoad = () => {
	const cocktailCountBySlug = new Map<string, number>();
	for (const cocktail of allCocktails) {
		if (cocktail.createdBy) {
			const slug = cocktail.createdBy.slug;
			cocktailCountBySlug.set(slug, (cocktailCountBySlug.get(slug) ?? 0) + 1);
		}
	}

	return {
		bartenders: allBartenders,
		cocktailCountBySlug
	};
};
