import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const WHISKEY_SOUR: Cocktail = {
	title: 'Whiskey Sour',
	description: 'Whiskey, lemon, simple syrup, egg white.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/whiskey-sour.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/whiskey-sour.png',
	slug: 'whiskey-sour',
	method: CocktailMethod.Shaken,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.EVAN_WILLIAMS_BIB
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			label: '1 Egg white',
			ingredient: Ingredients.Other.EGG
		},
		{
			label: 'Garnish: Maraschino cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		}
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.CLASSIC
	]
};

export default WHISKEY_SOUR;
