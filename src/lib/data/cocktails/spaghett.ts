import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const SPAGHETT: Cocktail = {
	title: 'Spaghett',
	description: 'Miller high life, aperol, lemon.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/spaghett.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/spaghett.png',
	slug: 'spaghett',
	method: CocktailMethod.Built,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '12oz',
			ingredient: Ingredients.BeerAndWine.MILLER_HIGH_LIFE
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Liqueurs.APEROL
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LEMON
		}
	],
	notes: 'Drink some of the beer. Fill the bottle back up with the Aperol and lemon.',
	tags: [
		Tags.BaseAlcohol.BEER,
		Tags.FlavorProfile.BITTER,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.Origin.FOLK,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default SPAGHETT;
