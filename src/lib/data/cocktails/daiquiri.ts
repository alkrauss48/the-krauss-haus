import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const DAIQUIRI: Cocktail = {
	title: 'Daiquiri',
	description: 'Light rum, lime, simple syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/daiquiri.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/daiquiri.png',
	slug: 'daiquiri',
	method: CocktailMethod.Shaken,
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
			ingredient: Ingredients.Citrus.LIME
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,

		Tags.Style.SOUR,
		Tags.Origin.CLASSIC
	]
};

export default DAIQUIRI;
