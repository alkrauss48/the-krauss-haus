import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { cocktailsBySlug } from '$lib/data/all-cocktails';

export const load: PageLoad = ({ params }) => {
	const { slug } = params;
	const cocktail = cocktailsBySlug.get(slug);

	if (!cocktail) {
		throw error(404, `Cocktail "${slug}" not found`);
	}

	return {
		cocktail
	};
};
