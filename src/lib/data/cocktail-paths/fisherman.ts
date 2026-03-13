import type { CocktailPath } from '$lib/types/cocktail-path';
import CAIPIRINHA from '../cocktails/caipirinha';
import LOST_LAKE from '../cocktails/lost-lake';
import MICHELADA from '../cocktails/michelada';
import SEA_LEGS from '../cocktails/sea-legs';
import SPAGHETT from '../cocktails/spaghett';

export const FISHERMAN: CocktailPath = {
	title: 'Fisherman',
	subtitle: 'Salty. Savory. Shoreline-ready.',
	slug: 'fisherman',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/fisherman.jpeg',
	description:
		'For those who drink like they live—close to the water. This path starts with muddled citrus simplicity, moves through light beer-and-bitter refreshment, picks up fruity tropical notes, then turns savory and spiced before finishing smoky, peaty, and salt-rimmed.',
	cocktails: [CAIPIRINHA, SPAGHETT, LOST_LAKE, MICHELADA, SEA_LEGS]
};
