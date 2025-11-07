import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const MARGARITA: Cocktail = {
	title: 'Margarita',
	description: 'Blanco tequila, cointreau, lime, agave nectar, salt.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/margarita.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/margarita.png',
	slug: 'margarita',
	method: CocktailMethod.Shaken,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.CIMARRON_BLANCO
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Liqueurs.COINTREAU
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.AGAVE_NECTAR
		},
		{
			label: 'Garnish: Salt rim',
			ingredient: Ingredients.Other.SALT
		},
		{
			label: 'Garnish: Lime wedge',
			ingredient: Ingredients.Citrus.LIME
		}
	],
	variations: [
		{
			name: 'Spicy',
			description: 'Swap .5oz of tequila with jalepeño infused tequila.',
			images: []
		}
	],
	tags: [
		Tags.BaseAlcohol.TEQUILA,
		Tags.FlavorProfile.CITRUS,
		Tags.AlcoholLevel.HIGH,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.CLASSIC
	]
};

export default MARGARITA;
