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
import AMARETTO_SOUR from '$lib/data/cocktails/amaretto-sour';
import ESPRESSO_MARTINI from '$lib/data/cocktails/espresso-martini';
import CHOCOLATE_COVERED_CHERRIES from '$lib/data/cocktails/chocolate-covered-cherries';
import RATTLE_SKULL from './cocktails/rattle-skull';

export const featuredDrinks: Cocktail[] = [CARAMEL_APPLE_SPICE];

export const categories: Category[] = [
	{
		title: "Mommy's Drinks",
		bgColors: sectionColors.mommy,
		cocktails: [HOT_TODDY, MERRY_MULE, CHOCOLATE_COVERED_CHERRIES]
	},
	{
		title: "Daddy's Drinks",
		bgColors: sectionColors.daddy,
		cocktails: [SAZERAC, MARTINI, OLD_FASHIONED]
	},
	{
		title: "Cyrus' Drinks",
		bgColors: sectionColors.cyrus,
		cocktails: [PENICILLIN, RATTLE_SKULL, OAXACA_OLD_FASHIONED]
	},
	{
		title: "Lucas' Drinks",
		bgColors: sectionColors.lucas,
		cocktails: [MANHATTAN, AMARETTO_SOUR, ESPRESSO_MARTINI]
	}
];
