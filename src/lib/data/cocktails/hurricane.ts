import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const HURRICANE: Cocktail = {
	title: 'Hurricane',
	subtitle: 'A powerful blend of rums with a tropical twist',
	description: 'Jamaican rum, blended rum, fassionola, lemon.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/hurricane.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/hurricane.png',
	slug: 'hurricane',
	method: CocktailMethod.Shaken,
	ingredients: [
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.CORUBA
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_SIGNATURE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.PROBITAS
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Syrups.FASSIONOLA
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			label: 'Garnish: Lemon wheel',
			ingredient: Ingredients.Citrus.LEMON
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC
	]
};

export default HURRICANE;
