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
import PIMMS_CUP from '$lib/data/cocktails/pimms-cup';
import RADLER from '$lib/data/cocktails/radler';
import SPRITZ from '$lib/data/cocktails/spritz';

export const featuredDrink: Cocktail = PIMMS_CUP;

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
		cocktails: [CAIPIRINHA, GILDED_ROSE, RADLER]
	},
	{
		title: "Lucas' Drinks",
		bgColors: sectionColors.lucas,
		cocktails: [MOJITO, FRENCH_75, PAPER_PLANE]
	}
];
