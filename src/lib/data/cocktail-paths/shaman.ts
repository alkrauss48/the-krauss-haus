import type { CocktailPath } from '$lib/types/cocktail-path';
import DESERT_DREAMS from '../cocktails/desert-dreams';
import MARGARITA from '../cocktails/margarita';
import OAXACA_OLD_FASHIONED from '../cocktails/oaxaca-old-fashioned';
import TIA_MIA from '../cocktails/tia-mia';
import VERACRUZ from '../cocktails/veracruz';

export const SHAMAN: CocktailPath = {
	title: 'Shaman',
	subtitle: 'Earthy. Spirited. Smoke-kissed.',
	slug: 'shaman',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/shaman.jpeg',
	description:
		'Follow the agave from field to flame. This path opens with the most iconic tequila citrus, then builds into chili-spiced tropical heat crowned with a float of mezcal, slows down for a stirred, spirit-forward marriage of agave and smoke, returns to mezcal in tiki disguise, and lands on a bright, herbal mezcal sour cooled with cucumber and warmed with chili.',
	cocktails: [MARGARITA, DESERT_DREAMS, OAXACA_OLD_FASHIONED, TIA_MIA, VERACRUZ]
};
