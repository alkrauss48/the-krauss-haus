import type { CocktailPath } from '$lib/types/cocktail-path';
import BATANGA from '../cocktails/batanga';
import DIVISION_BELL from '../cocktails/division-bell';
import GILDA from '../cocktails/gilda';
import MARGARITA from '../cocktails/margarita';
import TIA_MIA from '../cocktails/tia-mia';

export const SHAMAN: CocktailPath = {
	title: 'Shaman',
	subtitle: 'Earthy. Spirited. Smoke-kissed.',
	slug: 'shaman',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/shaman.jpeg',
	description:
		'Follow the agave from field to flame. This path starts with a dead-simple tequila-and-cola build, sharpens into the most iconic citrus cocktail on earth, then drifts through tropical pineapple warmth. From there, mezcal enters alongside rum, and by the final pour the smoke stands alone—balanced, bitter, and modern.',
	cocktails: [BATANGA, MARGARITA, GILDA, TIA_MIA, DIVISION_BELL]
};
