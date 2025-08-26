import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { recipesBySlug } from '$lib/data/all-recipes';
import { syrups } from '$lib/data/syrups';
import { infusions } from '$lib/data/infusions';

export const load: PageLoad = ({ params }) => {
	const { slug } = params;
	const recipe = recipesBySlug.get(slug);

	if (!recipe) {
		throw error(404, `Recipe "${slug}" not found`);
	}

	// Determine if this recipe is from syrups or infusions
	const isFromSyrups = syrups.some((syrup) => syrup.slug === slug);
	const isFromInfusions = infusions.some((infusion) => infusion.slug === slug);

	return {
		recipe,
		backToPage: isFromSyrups ? 'syrups' : isFromInfusions ? 'infusions' : null
	};
};
