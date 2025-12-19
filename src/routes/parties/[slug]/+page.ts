import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { partiesBySlug } from '$lib/data/all-parties';

export const load: PageLoad = ({ params }) => {
	const { slug } = params;
	const party = partiesBySlug.get(slug);

	if (!party) {
		throw error(404, `Party "${slug}" not found`);
	}

	return {
		party
	};
};
