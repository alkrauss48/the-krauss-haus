import type { CocktailPath } from '$lib/types/cocktail-path';
import CHOCOLATE_COVERED_CHERRIES from '../cocktails/chocolate-covered-cherries';
import FRENCH_75 from '../cocktails/french-75';
import KING_OF_KINGS from '../cocktails/king-of-kings';
import RAMOS_GIN_FIZZ from '../cocktails/ramos-gin-fizz';
import SINGAPORE_SLING from '../cocktails/singapore-sling';

export const ROYAL: CocktailPath = {
	title: 'Royal',
	subtitle: 'Rich. Indulgent. Decadent.',
	slug: 'royal',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/royal.jpeg',
	description:
		'Every sip should feel like an indulgence. This path opens on a champagne toast, escalates into a lavish multi-spirit tiki blend, moves through a cascade of fruit and liqueur, then dips into a dessert you can drink before finishing with a velvety, cream-topped crown jewel. These are drinks that reward you for going all in.',
	cocktails: [FRENCH_75, KING_OF_KINGS, SINGAPORE_SLING, CHOCOLATE_COVERED_CHERRIES, RAMOS_GIN_FIZZ]
};
