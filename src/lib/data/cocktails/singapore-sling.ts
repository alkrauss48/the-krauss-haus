import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const SINGAPORE_SLING: Cocktail = {
	title: 'Singapore Sling',
	subtitle: 'A sophisticated gin-based tiki classic',
	description:
		'Gin, cherry heering, benedictine, cointreau, grenadine, pineapple, lime, angostura bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/singapore-sling.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/singapore-sling.png',
	slug: 'singapore-sling',
	method: CocktailMethod.Shaken,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.FORDS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.CHERRY_HEERING
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.BENEDICTINE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.COINTREAU
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.GRENADINE
		},
		{
			amount: '3oz',
			ingredient: Ingredients.Citrus.PINEAPPLE
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '3 dashes',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		'Garnish: Pineapple wedge',
		{
			label: 'Garnish: Maraschino cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		}
	],
	tags: [
		Tags.BaseAlcohol.GIN,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.AlcoholLevel.HIGH
	]
};

export default SINGAPORE_SLING;
