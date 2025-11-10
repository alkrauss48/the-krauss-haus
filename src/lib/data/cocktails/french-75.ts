import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const FRENCH_75: Cocktail = {
	title: 'French 75',
	description: 'Champagne, gin, lemon, simple syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/french-75.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/french-75.png',
	slug: 'french-75',
	method: CocktailMethod.Shaken,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.FORDS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			amount: '3oz',
			ingredient: Ingredients.BeerAndWine.CHAMPAGNE
		},
		{
			label: 'Garnish: Lemon twist',
			ingredient: Ingredients.Citrus.LEMON
		}
	],
	tags: [
		Tags.BaseAlcohol.GIN,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.BUBBLY,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.CLASSIC
	]
};

export default FRENCH_75;
