import type { Cocktail, Category } from '$lib/types/cocktails';
import { sectionColors } from '$lib/types/colors';

import GILDED_ROSE from '$lib/data/cocktails/gilded-rose';
import MARGARITA from '$lib/data/cocktails/margarita';
import MICHELADA from '$lib/data/cocktails/michelada';
import MOJITO from '$lib/data/cocktails/mojito';
import MOONWELL from '$lib/data/cocktails/moonwell';
import SPRITZ from '$lib/data/cocktails/spritz';
import SURFER_ON_ACID from './cocktails/surfer-on-acid';
import KING_OF_KINGS from './cocktails/king-of-kings';
import CAIPIRINHA from './cocktails/caipirinha';
import DEAR_LUKEY from './cocktails/dear-lukey';
import GIN_BASIL_SMASH from './cocktails/gin-basil-smash';
import MINT_JULEP from './cocktails/mint-julep';
import RUM_RUNNER from './cocktails/rum-runner';
import PAPER_PLANE from './cocktails/paper-plane';

export const featuredDrinks: Cocktail[] = [GILDED_ROSE, MOONWELL];

export const categories: Category[] = [
	{
		title: "Mommy's Drinks",
		bgColors: sectionColors.mommy,
		cocktails: [MOJITO, MARGARITA, GIN_BASIL_SMASH]
	},
	{
		title: "Daddy's Drinks",
		bgColors: sectionColors.daddy,
		cocktails: [MICHELADA, MINT_JULEP, SURFER_ON_ACID]
	},
	{
		title: "Cyrus' Drinks",
		bgColors: sectionColors.cyrus,
		cocktails: [KING_OF_KINGS, CAIPIRINHA, RUM_RUNNER]
	},
	{
		title: "Lucas' Drinks",
		bgColors: sectionColors.lucas,
		cocktails: [SPRITZ, DEAR_LUKEY, PAPER_PLANE]
	}
];
