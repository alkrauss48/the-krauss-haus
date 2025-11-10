import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const MARTINI: Cocktail = {
	title: 'Martini',
	description: 'Gin, dry vermouth, orange bitters, olives.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/martini.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/martini.png',
	slug: 'martini',
	method: CocktailMethod.Stirred,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.FORDS
		},
		{
			amount: '1oz',
			ingredient: Ingredients.BeerAndWine.DOLIN_VERMOUTH_DRY
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.ORANGE
		},
		'Garnish: 3 Olives'
	],
	tags: [
		Tags.BaseAlcohol.GIN,
		Tags.BaseAlcohol.WINE,
		Tags.AlcoholLevel.HIGH,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC
	]
};

export default MARTINI;
