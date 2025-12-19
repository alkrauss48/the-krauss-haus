import type { PageLoad } from './$types';
import { allParties } from '$lib/data/all-parties';

export const load: PageLoad = () => {
	// Parties are already sorted by date in descending order (newest first) in all-parties.ts
	return {
		parties: allParties
	};
};
