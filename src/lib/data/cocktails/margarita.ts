import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const MARGARITA: Cocktail = {
	title: 'Margarita',
	description: 'Blanco tequila, cointreau, lime, agave nectar, salt.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/margarita.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/margarita.png',
	slug: 'margarita',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.CoupeGlass,
	ice: Ice.SmallCubes,
	hasStraw: false,
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
			ingredient: Ingredients.Citrus.LIME_GARNISH
		}
	],
	variations: [
		{
			name: 'Spicy',
			ingredients: [
				{
					label: 'Swap .5oz of tequila with jalepeño infused tequila.',
					ingredient: Ingredients.BaseSpirits.JALAPENO_TEQUILA
				}
			],
			images: []
		},
		{
			name: 'Mezcal',
			ingredients: [
				{
					label: 'Swap tequila with 1.5oz mezcal.',
					ingredient: Ingredients.BaseSpirits.DEL_MAGUY_VIDA
				}
			],
			images: []
		}
	],
	tags: [
		Tags.BaseAlcohol.TEQUILA,
		Tags.FlavorProfile.CITRUS,
		Tags.AlcoholLevel.HIGH,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.COUPE_GLASS
	]
};

export default MARGARITA;
