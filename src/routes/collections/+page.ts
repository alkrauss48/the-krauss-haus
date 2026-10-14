import type { PageLoad } from './$types';
import { allCollections } from '$lib/data/all-collections';

export const load: PageLoad = () => {
	return {
		collections: allCollections
	};
};
