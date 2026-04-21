import type { CocktailPath } from '$lib/types/cocktail-path';
import DESERT_DREAMS from '../cocktails/desert-dreams';
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
		'Follow the agave from field to flame. This path opens with the most iconic citrus cocktail on earth, then dreams into passion fruit and a whisper of mezcal, drifts through tropical pineapple warmth, and as mezcal enters alongside rum, the smoke builds until by the final pour it stands alone—balanced, bitter, and modern.',
	cocktails: [MARGARITA, DESERT_DREAMS, GILDA, TIA_MIA, DIVISION_BELL]
};
