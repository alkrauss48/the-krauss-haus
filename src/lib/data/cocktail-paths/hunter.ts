import type { CocktailPath } from '$lib/types/cocktail-path';
import DAIQUIRI from '../cocktails/daiquiri';
import DONGA_PUNCH from '../cocktails/donga-punch';
import HURRICANE from '../cocktails/hurricane';
import IRON_RANGER from '../cocktails/iron-ranger';
import MAI_TAI from '../cocktails/mai-tai';

export const HUNTER: CocktailPath = {
	title: 'Hunter',
	subtitle: 'Tropical. Rum-soaked. Sun-chasing.',
	slug: 'hunter',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/hunter.jpeg',
	description:
		'Chase the sun through rum and tropical fruit. This path opens with easy, fruity sweetness, sharpens into clean citrus balance, then layers in warm spice and unexpected spirit swaps before landing on layered, multi-rum complexity. The deeper you go, the more the tropics reveal.',
	cocktails: [HURRICANE, DAIQUIRI, DONGA_PUNCH, IRON_RANGER, MAI_TAI]
};
