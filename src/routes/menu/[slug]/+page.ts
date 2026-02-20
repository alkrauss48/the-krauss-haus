import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { menuConfig } from '$lib/data/menu-config';

export const load: PageLoad = ({ params }) => {
	const menu = menuConfig[params.slug];

	if (!menu) {
		throw error(404, `Menu "${params.slug}" not found`);
	}

	return { menu };
};
