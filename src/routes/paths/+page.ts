import type { PageLoad } from './$types';
import { allPaths } from '$lib/data/all-paths';

export const load: PageLoad = () => {
	return {
		paths: allPaths
	};
};
