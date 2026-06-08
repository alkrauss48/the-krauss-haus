import type { Cocktail, Category } from '$lib/types/cocktails';
import { sectionColors } from '$lib/types/colors';

import HOT_TODDY from '$lib/data/cocktails/hot-toddy';
import MERRY_MULE from '$lib/data/cocktails/merry-mule';
import CARAMEL_APPLE_SPICE from '$lib/data/cocktails/caramel-apple-spice';
import SAZERAC from '$lib/data/cocktails/sazerac';
import MARTINI from '$lib/data/cocktails/martini';
import OLD_FASHIONED from '$lib/data/cocktails/old-fashioned';
import PENICILLIN from '$lib/data/cocktails/penicillin';
import OAXACA_OLD_FASHIONED from '$lib/data/cocktails/oaxaca-old-fashioned';
import MANHATTAN from '$lib/data/cocktails/manhattan';
import ESPRESSO_MARTINI from '$lib/data/cocktails/espresso-martini';
import CHOCOLATE_COVERED_CHERRIES from '$lib/data/cocktails/chocolate-covered-cherries';
import NEGRONI from './cocktails/negroni';
import SLAP_N_PICKLE from './cocktails/slap-n-pickle';
import JACK_ROSE from './cocktails/jack-rose';

export const featuredDrinks: Cocktail[] = [CARAMEL_APPLE_SPICE, MERRY_MULE];

export const categories: Category[] = [
	{
		title: "Mommy's Drinks",
		bgColors: sectionColors.mommy,
		cocktails: [HOT_TODDY, CHOCOLATE_COVERED_CHERRIES, PENICILLIN]
	},
	{
		title: "Daddy's Drinks",
		bgColors: sectionColors.daddy,
		cocktails: [SAZERAC, MARTINI, OLD_FASHIONED]
	},
	{
		title: "Cyrus' Drinks",
		bgColors: sectionColors.cyrus,
		cocktails: [JACK_ROSE, SLAP_N_PICKLE, OAXACA_OLD_FASHIONED]
	},
	{
		title: "Lucas' Drinks",
		bgColors: sectionColors.lucas,
		cocktails: [MANHATTAN, NEGRONI, ESPRESSO_MARTINI]
	}
];
