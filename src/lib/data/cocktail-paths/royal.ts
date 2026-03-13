import type { CocktailPath } from '$lib/types/cocktail-path';
import KING_OF_KINGS from '../cocktails/king-of-kings';
import CHOCOLATE_COVERED_CHERRIES from '../cocktails/chocolate-covered-cherries';
import FRENCH_75 from '../cocktails/french-75';
import PAINKILLER from '../cocktails/painkiller';
import RAMOS_GIN_FIZZ from '../cocktails/ramos-gin-fizz';

export const ROYAL: CocktailPath = {
	title: 'Royal',
	subtitle: 'Decadent. Refined. Indulgent.',
	slug: 'royal',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/royal.jpeg',
	description:
		'For those who savor luxury in every sip. The Royal path celebrates richness, ceremony, and indulgence—creamy textures, elegant spirits, and cocktails worthy of velvet curtains and crystal glassware. These are drinks made to be lingered over, admired, and enjoyed without restraint.',
	cocktails: [FRENCH_75, PAINKILLER, KING_OF_KINGS, CHOCOLATE_COVERED_CHERRIES, RAMOS_GIN_FIZZ]
};
