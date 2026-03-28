import type { CocktailPath } from '$lib/types/cocktail-path';
import KING_OF_KINGS from '../cocktails/king-of-kings';
import CHOCOLATE_COVERED_CHERRIES from '../cocktails/chocolate-covered-cherries';
import SINGAPORE_SLING from '../cocktails/singapore-sling';
import PAINKILLER from '../cocktails/painkiller';
import RAMOS_GIN_FIZZ from '../cocktails/ramos-gin-fizz';

export const ROYAL: CocktailPath = {
	title: 'Royal',
	subtitle: 'Rich. Indulgent. Decadent.',
	slug: 'royal',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/royal.jpeg',
	description:
		'Every sip should feel like an indulgence. This path opens with a lavish cascade of fruit and liqueur, melts into creamy tropical bliss, deepens through rich multi-spirit warmth and a dessert you can drink, then finishes with a velvety, cream-topped crown jewel. These are drinks that reward you for going all in.',
	cocktails: [
		SINGAPORE_SLING,
		PAINKILLER,
		KING_OF_KINGS,
		CHOCOLATE_COVERED_CHERRIES,
		RAMOS_GIN_FIZZ
	]
};
