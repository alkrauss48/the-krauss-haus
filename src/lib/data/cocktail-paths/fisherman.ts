import type { CocktailPath } from '$lib/types/cocktail-path';
import CAIPIRINHA from '../cocktails/caipirinha';
import LOST_LAKE from '../cocktails/lost-lake';
import MICHELADA from '../cocktails/michelada';
import SEA_LEGS from '../cocktails/sea-legs';
import SPAGHETT from '../cocktails/spaghett';

export const FISHERMAN: CocktailPath = {
	title: 'Fisherman',
	subtitle: 'Breezy. Refreshing. Shoreline-ready.',
	slug: 'fisherman',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/fisherman.jpeg',
	description:
		'Kick off your shoes and unwind by the water. This path starts with muddled citrus simplicity, drifts into light beer-and-bitter refreshment, picks up fruity tropical notes, then cools down with a savory, spiced sipper before finishing with a true sea-worn cocktail—smoky, bold flavors that echo the ocean itself.',
	cocktails: [CAIPIRINHA, SPAGHETT, LOST_LAKE, MICHELADA, SEA_LEGS]
};
