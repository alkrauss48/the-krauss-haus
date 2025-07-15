import type { Cocktail, Category } from '$lib/types/cocktails';
import { sectionColors } from '$lib/types/colors';

import PIMMS_CUP from '$lib/data/cocktails/pimms-cup';
import SPRITZ from '$lib/data/cocktails/spritz';
import MARGARITA from '$lib/data/cocktails/margarita';
import MOONWELL from '$lib/data/cocktails/moonwell';
import DAIQUIRI from '$lib/data/cocktails/daiquiri';
import NEGRONI from '$lib/data/cocktails/negroni';
import MINT_JULEP from '$lib/data/cocktails/mint-julep';
import CAIPIRINHA from '$lib/data/cocktails/caipirinha';
import JACK_ROSE from '$lib/data/cocktails/jack-rose';
import LOGGY_CAB from '$lib/data/cocktails/loggy-cab';
import MOJITO from '$lib/data/cocktails/mojito';
import FRENCH_75 from '$lib/data/cocktails/french-75';
import PAPER_PLANE from '$lib/data/cocktails/paper-plane';

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
		cocktails: [DAIQUIRI, NEGRONI, MINT_JULEP]
	},
	{
		title: "Cyrus' Drinks",
		bgColors: sectionColors.cyrus,
		cocktails: [CAIPIRINHA, JACK_ROSE, LOGGY_CAB]
	},
	{
		title: "Lucas' Drinks",
		bgColors: sectionColors.lucas,
		cocktails: [MOJITO, FRENCH_75, PAPER_PLANE]
	}
];
