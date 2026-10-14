import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }) => {
	// Parse search term from URL query params
	const searchTerm = url.searchParams.get('search') || '';

	return {
		searchTerm
	};
};
