import type { PageLoad } from './$types';
import { allCocktails } from '$lib/data/all-cocktails';

export const load: PageLoad = () => {
	return {
		cocktails: allCocktails
	};
};
