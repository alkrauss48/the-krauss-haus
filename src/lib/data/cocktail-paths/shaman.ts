import type { CocktailPath } from '$lib/types/cocktail-path';
import DESERT_DREAMS from '../cocktails/desert-dreams';
import MARGARITA from '../cocktails/margarita';
import MICHELADA from '../cocktails/michelada';
import OAXACA_OLD_FASHIONED from '../cocktails/oaxaca-old-fashioned';
import TIA_MIA from '../cocktails/tia-mia';

export const SHAMAN: CocktailPath = {
	title: 'Shaman',
	subtitle: 'Earthy. Spirited. Smoke-kissed.',
	slug: 'shaman',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/shaman.jpeg',
	description:
		'Follow the agave from field to flame. This path opens with the most iconic tequila citrus, then builds into chili-spiced tropical heat crowned with a float of mezcal, takes a savory beer-and-lime break, returns to mezcal in tiki disguise, and lands on a stirred, spirit-forward marriage of agave and smoke.',
	cocktails: [MARGARITA, DESERT_DREAMS, MICHELADA, TIA_MIA, OAXACA_OLD_FASHIONED]
};
