import type { Cocktail, Category } from '$lib/types/cocktails';
import { sectionColors } from '$lib/types/colors';

import GILDED_ROSE from '$lib/data/cocktails/gilded-rose';
import MARGARITA from '$lib/data/cocktails/margarita';
import MICHELADA from '$lib/data/cocktails/michelada';
import MOJITO from '$lib/data/cocktails/mojito';
import MOONWELL from '$lib/data/cocktails/moonwell';
import NEGRONI from '$lib/data/cocktails/negroni';
import SPRITZ from '$lib/data/cocktails/spritz';
import SPAGHETT from './cocktails/spaghett';
import SURFER_ON_ACID from './cocktails/surfer-on-acid';
import SLAP_N_PICKLE from './cocktails/slap-n-pickle';
import KING_OF_KINGS from './cocktails/king-of-kings';
import CAIPIRINHA from './cocktails/caipirinha';
import DEAR_LUKEY from './cocktails/dear-lukey';
import LOGGY_CAB from './cocktails/loggy-cab';

export const featuredDrinks: Cocktail[] = [GILDED_ROSE, LOGGY_CAB];

export const categories: Category[] = [
	{
		title: "Mommy's Drinks",
		bgColors: sectionColors.mommy,
		cocktails: [MOJITO, MARGARITA, MOONWELL]
	},
	{
		title: "Daddy's Drinks",
		bgColors: sectionColors.daddy,
		cocktails: [MICHELADA, NEGRONI, SURFER_ON_ACID]
	},
	{
		title: "Cyrus' Drinks",
		bgColors: sectionColors.cyrus,
		cocktails: [KING_OF_KINGS, CAIPIRINHA, SLAP_N_PICKLE]
	},
	{
		title: "Lucas' Drinks",
		bgColors: sectionColors.lucas,
		cocktails: [SPRITZ, DEAR_LUKEY, SPAGHETT]
	}
];
