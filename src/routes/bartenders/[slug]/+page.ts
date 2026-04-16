import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { bartendersBySlug } from '$lib/data/all-bartenders';
import { allCocktails } from '$lib/data/all-cocktails';

export const load: PageLoad = ({ params }) => {
	const { slug } = params;
	const bartender = bartendersBySlug.get(slug);

	if (!bartender) {
		throw error(404, `Bartender "${slug}" not found`);
	}

	const cocktails = allCocktails.filter((c) => c.createdBy?.slug === bartender.slug);

	return {
		bartender,
		cocktails
	};
};
