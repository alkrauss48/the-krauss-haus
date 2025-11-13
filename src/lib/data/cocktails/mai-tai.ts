import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const MAI_TAI: Cocktail = {
	title: 'Mai Tai',
	subtitle: 'The king of tiki drinks, complex and balanced',
	description: 'Jamaican rum, blended rum, cachaca, orange curaçao, orgeat, lime, demerara syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/mai-tai.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/mai-tai.png',
	slug: 'mai-tai',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.SMITH_AND_CROSS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.LEBLON
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.PLANTERAY_OFTD
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.DRY_CURACAO
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.ORGEAT
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		},
		{
			label: 'Garnish: Lime shell',
			ingredient: Ingredients.Citrus.LIME_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.AlcoholLevel.HIGH,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default MAI_TAI;
