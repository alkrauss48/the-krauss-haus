import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const NAVY_GROG: Cocktail = {
	title: 'Navy Grog',
	description:
		'Jamaican rum, demerara rum, blended light rum, honey syrup, lime, grapefruit, soda water.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/navy-grog.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/navy-grog.png',
	slug: 'navy-grog',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ingredients: [
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.CORUBA
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_SIGNATURE
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.HAMILTON_86
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.PLANTERAY_3_STARS
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Syrups.HONEY_SYRUP
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.GRAPEFRUIT
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
		'One of the only classic tiki cocktails not served over crushed ice. Shake all ingredients besides soda water with ice. Strain into a glass over ice block. Top with soda water, serve with a straw, and garnish with mint sprig.',
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
