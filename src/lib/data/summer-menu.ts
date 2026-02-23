import type { Cocktail, Category } from '$lib/types/cocktails';
import { sectionColors } from '$lib/types/colors';

import GILDED_ROSE from '$lib/data/cocktails/gilded-rose';
import MARGARITA from '$lib/data/cocktails/margarita';
import MICHELADA from '$lib/data/cocktails/michelada';
import MOJITO from '$lib/data/cocktails/mojito';
import MOONWELL from '$lib/data/cocktails/moonwell';
import NEGRONI from '$lib/data/cocktails/negroni';
import PAPER_PLANE from '$lib/data/cocktails/paper-plane';
import SPRITZ from '$lib/data/cocktails/spritz';
import DAIQUIRI from './cocktails/daiquiri';
import SPAGHETT from './cocktails/spaghett';
import SURFER_ON_ACID from './cocktails/surfer-on-acid';
import MINT_JULEP from './cocktails/mint-julep';
import SLAP_N_PICKLE from './cocktails/slap-n-pickle';

export const featuredDrinks: Cocktail[] = [GILDED_ROSE];

export const categories: Category[] = [
	{
		title: "Mommy's Drinks",
		bgColors: sectionColors.mommy,
		cocktails: [SPRITZ, MARGARITA, MOONWELL]
	},
	{
		title: "Daddy's Drinks",
		bgColors: sectionColors.daddy,
		cocktails: [MICHELADA, NEGRONI, SURFER_ON_ACID]
	},
	{
		title: "Cyrus' Drinks",
		bgColors: sectionColors.cyrus,
		cocktails: [DAIQUIRI, SPAGHETT, MINT_JULEP]
	},
	{
		title: "Lucas' Drinks",
		bgColors: sectionColors.lucas,
		cocktails: [SLAP_N_PICKLE, MOJITO, PAPER_PLANE]
	}
];
