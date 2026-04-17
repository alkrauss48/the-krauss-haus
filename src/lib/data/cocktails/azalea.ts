import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const AZALEA: Cocktail = {
	title: 'Azalea',
	description:
		'Vodka, grenadine, lemon, rich simple syrup, water, grenadine, maraschino cherry, orange slice.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/azalea.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/azalea.png',
	slug: 'azalea',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.HighballGlass,
	ice: Ice.SmallCubes,
	hasStraw: true,
	ingredients: [
		{
			amount: '1.25oz',
			ingredient: Ingredients.BaseSpirits.MONOPOLOWA
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.GRENADINE
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		'3.5oz Purified Water',
		{
			label: 'Garnish: Maraschino cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		},
		{
			label: 'Garnish: Orange slice',
			ingredient: Ingredients.Citrus.ORANGE_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.VODKA,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.MODERN,
		Tags.ServedIn.HIGHBALL_GLASS,
		Tags.AlcoholLevel.LOW
	],
	notes:
		'The official cocktail of the Masters golf tournament. Typically served with lemonade, but this recipe makes an on-the-fly lemonade with fresh ingredients.'
};

export default AZALEA;
