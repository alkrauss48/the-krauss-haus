import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const NAKED_AND_FAMOUS: Cocktail = {
	title: 'Naked and Famous',
	description: 'Mezcal, yellow chartreuse, aperol, lime.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/naked-and-famous.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/naked-and-famous.png',
	slug: 'naked-and-famous',
	method: CocktailMethod.Shaken,
	ingredients: [
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.DEL_MAGUY_VIDA
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Liqueurs.YELLOW_CHARTREUSE
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Liqueurs.APEROL
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		}
	],
	tags: [
		Tags.BaseAlcohol.MEZCAL,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.MODERN
	]
};

export default NAKED_AND_FAMOUS;
