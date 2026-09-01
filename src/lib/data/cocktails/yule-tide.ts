import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import JEFF_BEACHBUM_BERRY from '$lib/data/bartenders/jeff-beachbum-berry';

const YULE_TIDE: Cocktail = {
	title: 'Yule Tide',
	description: 'Blanco tequila, apple brandy, lime, cranberry cordial, maple.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/yule-tide.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/yule-tide.webp',
	slug: 'yule-tide',
	createdBy: JEFF_BEACHBUM_BERRY,
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.TikiMug,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.CIMARRON_BLANCO
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.LAIRDS_BIB
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Other.CRANBERRY_CORDIAL
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.MAPLE_SYRUP
		},
		{
			label: 'Garnish: Lime wheel',
			ingredient: Ingredients.Citrus.LIME_GARNISH
		},
		'Garnish: 3 cranberries skewered'
	],
	notes: "Served in the Mer-Santa tiki mug from Beachbum Berry's Sippin' Santa popup bar.",
	tags: [
		Tags.BaseAlcohol.TEQUILA,
		Tags.BaseAlcohol.BRANDY,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.MODERN,
		Tags.ServedIn.TIKI_MUG,
		Tags.ServedIn.EXCLUSIVE_DRINKWARE
	]
};

export default YULE_TIDE;
