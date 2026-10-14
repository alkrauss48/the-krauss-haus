import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import SEAN_OCONNOR_COMBEE from '$lib/data/bartenders/sean-oconnor-combee';

const CARAJILLO_OLD_FASHIONED: Cocktail = {
	title: 'Carajillo Old Fashioned',
	description: 'Cognac, rye whiskey, licor 43, coffee liqueur, coffee beans.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/carajillo-old-fashioned.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/carajillo-old-fashioned.webp',
	slug: 'carajillo-old-fashioned',
	createdBy: SEAN_OCONNOR_COMBEE,
	method: CocktailMethod.Stirred,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.LargeCube,
	hasStraw: false,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.ST_REMY_VSOP
		},
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.RITTENHOUSE
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.LICOR_43
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.MR_BLACK
		},
		'Garnish: 3 coffee beans'
	],
	tags: [
		Tags.BaseAlcohol.BRANDY,
		Tags.BaseAlcohol.WHISKEY,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.MODERN,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default CARAJILLO_OLD_FASHIONED;
