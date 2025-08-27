import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { recipesBySlug } from '$lib/data/all-recipes';

export const load: PageLoad = ({ params }) => {
	const { slug } = params;
	const recipe = recipesBySlug.get(slug);

	if (!recipe) {
		throw error(404, `Recipe "${slug}" not found`);
	}

	return {
		recipe
	};
};
