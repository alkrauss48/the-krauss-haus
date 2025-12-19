import type { CocktailPath } from '$lib/types/cocktail-path';
import BATANGA from '../cocktails/batanga';
import CAIPIRINHA from '../cocktails/caipirinha';
import MICHELADA from '../cocktails/michelada';
import SEA_LEGS from '../cocktails/sea-legs';
import SPAGHETT from '../cocktails/spaghett';

export const FISHERMAN: CocktailPath = {
	title: 'Fisherman',
	subtitle: 'Salty. Refreshing. Beach-proof.',
	slug: 'fisherman',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/fisherman.jpeg',
	description:
		'A path for drinkers who love brine, bubbles, and sun-worn refreshment—beer cocktails, salty highballs, and maritime spirits.',
	cocktails: [CAIPIRINHA, SPAGHETT, MICHELADA, BATANGA, SEA_LEGS]
};
