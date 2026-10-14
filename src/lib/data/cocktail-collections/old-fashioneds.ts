import type { CocktailCollection } from '$lib/types/cocktail-collection';

import OLD_FASHIONED from '$lib/data/cocktails/old-fashioned';
import AMERICAN_TRILOGY from '$lib/data/cocktails/american-trilogy';
import CONFERENCE from '$lib/data/cocktails/conference';
import OAXACA_OLD_FASHIONED from '$lib/data/cocktails/oaxaca-old-fashioned';
import GODFATHER from '$lib/data/cocktails/godfather';
import IMPROVED_HOLLAND_GIN_COCKTAIL from '$lib/data/cocktails/improved-holland-gin-cocktail';
import CORN_N_OIL from '$lib/data/cocktails/corn-n-oil';
import SAZERAC from '$lib/data/cocktails/sazerac';
import TORONTO from '$lib/data/cocktails/toronto';
import TI_PUNCH from '$lib/data/cocktails/ti-punch';
import CARAJILLO_OLD_FASHIONED from '$lib/data/cocktails/carajillo-old-fashioned';

const OLD_FASHIONEDS: CocktailCollection = {
	slug: 'old-fashioneds',
	title: 'Old Fashioneds',
	description: 'Spirit, sugar, and bitters: the original cocktail, and the riffs that build on it.',
	bgColors: {
		primary: '#fff7ed',
		secondary: '#ffedd5',
		tertiary: '#fef3c7',
		variationText: '#9a3412'
	},
	cocktails: [
		OLD_FASHIONED,
		AMERICAN_TRILOGY,
		CONFERENCE,
		OAXACA_OLD_FASHIONED,
		GODFATHER,
		IMPROVED_HOLLAND_GIN_COCKTAIL,
		CORN_N_OIL,
		SAZERAC,
		TORONTO,
		TI_PUNCH,
		CARAJILLO_OLD_FASHIONED
	]
};

export default OLD_FASHIONEDS;
