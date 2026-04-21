import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import AARON_KRAUSS from '../bartenders/aaron-krauss';

const DESERT_DREAMS: Cocktail = {
	title: 'Desert Dreams',
	description:
		'Blanco tequila, mezcal, passion fruit, honey-ginger, lime, chili and xocolatl bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/desert-dreams.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/desert-dreams.png',
	slug: 'desert-dreams',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	createdBy: AARON_KRAUSS,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1.75oz',
			ingredient: Ingredients.BaseSpirits.CIMARRON_BLANCO
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.BaseSpirits.DEL_MAGUY_VIDA
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.PASSIONFRUIT_SYRUP
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.HONEY_GINGER_SYRUP
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.CHILI
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.XOCOLATL
		},
		{
			label: 'Pinch of salt',
			ingredient: Ingredients.Other.SALT
		},
		{
			label: 'Garnish: Lime shell',
			ingredient: Ingredients.Citrus.LIME_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.TEQUILA,
		Tags.BaseAlcohol.MEZCAL,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.ORIGINAL,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default DESERT_DREAMS;
