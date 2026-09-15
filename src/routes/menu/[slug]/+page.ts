import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { menuConfig } from '$lib/data/menu-config';

export const load: PageLoad = ({ params }) => {
	// Guard with hasOwn: a bare lookup would resolve inherited keys like
	// "constructor" to a truthy value and crash the page instead of 404ing.
	const menu = Object.hasOwn(menuConfig, params.slug) ? menuConfig[params.slug] : undefined;

	if (!menu) {
		throw error(404, `Menu "${params.slug}" not found`);
	}

	return { menu };
};
