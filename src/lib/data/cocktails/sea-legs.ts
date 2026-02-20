import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const SEA_LEGS: Cocktail = {
	title: 'Sea Legs',
	description: 'Single malt scotch, mezcal, orgeat, lime, celery bitters, angostura bitters, salt.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/sea-legs.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/sea-legs.png',
	slug: 'sea-legs',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.CoupeGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.LAPHROIG
		},
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.DEL_MAGUY_VIDA
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Syrups.ORGEAT
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.CELERY
		},
		{
			label: 'Garnish: Salted rim',
			ingredient: Ingredients.Other.SALT
		},
		{
			label: 'Garnish: Dash of Angostura bitters',
			ingredient: Ingredients.Bitters.ANGOSTURA
		}
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.BaseAlcohol.MEZCAL,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.SHAKEN,
		Tags.Origin.MODERN,
		Tags.ServedIn.COUPE_GLASS
	]
};

export default SEA_LEGS;
