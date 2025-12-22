import type { Cocktail, Category } from '$lib/types/cocktails';
import { sectionColors } from '$lib/types/colors';

import CAIPIRINHA from '$lib/data/cocktails/caipirinha';
import FRENCH_75 from '$lib/data/cocktails/french-75';
import GILDED_ROSE from '$lib/data/cocktails/gilded-rose';
import MARGARITA from '$lib/data/cocktails/margarita';
import MICHELADA from '$lib/data/cocktails/michelada';
import MINT_JULEP from '$lib/data/cocktails/mint-julep';
import MOJITO from '$lib/data/cocktails/mojito';
import MOONWELL from '$lib/data/cocktails/moonwell';
import NEGRONI from '$lib/data/cocktails/negroni';
import PAPER_PLANE from '$lib/data/cocktails/paper-plane';
import SPRITZ from '$lib/data/cocktails/spritz';
import DAIQUIRI from './cocktails/daiquiri';
import SPAGHETT from './cocktails/spaghett';

export const featuredDrink: Cocktail = GILDED_ROSE;

export const categories: Category[] = [
	{
		title: "Mommy's Drinks",
		bgColors: sectionColors.mommy,
		cocktails: [SPRITZ, MARGARITA, MOONWELL]
	},
	{
		title: "Daddy's Drinks",
		bgColors: sectionColors.daddy,
		cocktails: [MICHELADA, NEGRONI, MINT_JULEP]
	},
	{
		title: "Cyrus' Drinks",
		bgColors: sectionColors.cyrus,
		cocktails: [CAIPIRINHA, SPAGHETT, DAIQUIRI]
	},
	{
		title: "Lucas' Drinks",
		bgColors: sectionColors.lucas,
		cocktails: [FRENCH_75, MOJITO, PAPER_PLANE]
	}
];
