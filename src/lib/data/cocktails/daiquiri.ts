import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const DAIQUIRI: Cocktail = {
	title: 'Daiquiri',
	description: 'Blended light rum, lime, simple syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/daiquiri.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/daiquiri.webp',
	slug: 'daiquiri',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.CoupeGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.PROBITAS
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			label: 'Garnish: Lime wedge',
			ingredient: Ingredients.Citrus.LIME_GARNISH
		}
	],
	variations: [
		{
			name: '+Funk',
			ingredients: [
				{
					label: 'Swap 1oz of Probitas with .75oz Wray and Nephew Overproof Jamaican Rum.',
					ingredient: Ingredients.BaseSpirits.WRAY_AND_NEPHEW
				}
			],
			images: []
		},
		{
			name: '+Lavender',
			ingredients: [
				{
					label: 'Swap 1oz of Probitas with 1oz Lavender Liqueur.',
					ingredient: Ingredients.Liqueurs.LAVENDER_LIQUEUR
				},
				{
					label: 'Reduce rich simple syrup to .25oz.',
					ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
				}
			],
			images: []
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,

		Tags.Style.SOUR,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.COUPE_GLASS
	]
};

export default DAIQUIRI;
