import type { CocktailPath } from '$lib/types/cocktail-path';
import DAIQUIRI from '../cocktails/daiquiri';
import HURRICANE from '../cocktails/hurricane';
import IRON_RANGER from '../cocktails/iron-ranger';
import MAI_TAI from '../cocktails/mai-tai';

export const HUNTER: CocktailPath = {
	title: 'Hunter',
	subtitle: 'Sunny. Juicy. Invigorating.',
	slug: 'hunter',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/hunter.jpeg',
	description:
		'If you crave bright citrus and tropical freshness, this path leads you deeper into rum and fruit-forward drinks with rising complexity.',
	cocktails: [HURRICANE, DAIQUIRI, IRON_RANGER, MAI_TAI]
};
