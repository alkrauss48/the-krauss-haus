import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { pathsBySlug } from '$lib/data/all-paths';

export const load: PageLoad = ({ params }) => {
	const { slug } = params;
	const path = pathsBySlug.get(slug);

	if (!path) {
		throw error(404, `Path "${slug}" not found`);
	}

	return {
		path
	};
};
