import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import DONN_BEACH from '$lib/data/bartenders/donn-beach';

const NAVY_GROG: Cocktail = {
	title: 'Navy Grog',
	description:
		'Jamaican rum, demerara rum, honey syrup, lime, grapefruit, angostura bitters, soda water.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/navy-grog.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/navy-grog.png',
	slug: 'navy-grog',
	createdBy: DONN_BEACH,
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.CORUBA
		},
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.HAMILTON_86
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.SMITH_AND_CROSS
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Syrups.HONEY_SYRUP
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.GRAPEFRUIT
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Mixers.SODA_WATER
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		}
	],
	notes:
		'Shake everything except soda with ice for 10-12 seconds. Strain over crushed or pebble ice in a double rocks glass or tiki mug. Top with soda and give a quick swizzle. Garnish with a mint sprig and optional spent lime shell.',
	tags: [
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.BaseAlcohol.RUM,
		Tags.AlcoholLevel.HIGH,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default NAVY_GROG;
