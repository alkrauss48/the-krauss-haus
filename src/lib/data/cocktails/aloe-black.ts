import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const ALOE_BLACK: Cocktail = {
	title: 'Aloe Black',
	description: 'Blanco tequila, chareau, dark berry liqueur, lemon, rich simple syrup, cucumber.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/aloe-black.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/aloe-black.webp',
	slug: 'aloe-black',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.SmallCubes,
	hasStraw: false,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.CIMARRON_BLANCO
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.CHAREAU
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.HOUSE_DARK_BERRY_CREME
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			amount: '5 slices',
			ingredient: Ingredients.Other.CUCUMBER
		},
		{
			label: 'Garnish: Sprinkle of pink salt',
			ingredient: Ingredients.Other.SALT
		},
		'Garnish: Edible flower'
	],
	tags: [
		Tags.BaseAlcohol.TEQUILA,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.MODERN,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default ALOE_BLACK;
