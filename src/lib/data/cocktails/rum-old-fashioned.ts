import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const RUM_OLD_FASHIONED: Cocktail = {
	title: 'Rum Old Fashioned',
	description: 'Aged Jamaican rum, demerara syrup, aromatic and orange bitters, orange twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/rum-old-fashioned.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/rum-old-fashioned.webp',
	slug: 'rum-old-fashioned',
	method: CocktailMethod.Built,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.LargeCube,
	hasStraw: false,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_12_YEAR
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.ORANGE
		},
		{
			label: 'Garnish: Orange twist',
			ingredient: Ingredients.Citrus.ORANGE_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.Technique.BUILT,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.MODERN,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default RUM_OLD_FASHIONED;
