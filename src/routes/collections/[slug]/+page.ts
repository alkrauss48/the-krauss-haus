import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { collectionsBySlug } from '$lib/data/all-collections';

export const load: PageLoad = ({ params }) => {
	const { slug } = params;
	const collection = collectionsBySlug.get(slug);

	if (!collection) {
		throw error(404, `Collection "${slug}" not found`);
	}

	return {
		collection
	};
};
