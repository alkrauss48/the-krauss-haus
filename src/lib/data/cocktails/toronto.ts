import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import DEMERARA_SYRUP from '../recipes/demerara-syrup';

const TORONTO: Cocktail = {
	title: 'Toronto',
	description: 'Rye whiskey, fernet branca, demerara syrup, lemon twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/toronto.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/toronto.png',
	slug: 'toronto',
	method: CocktailMethod.Stirred,
	ingredients: [
		'2oz Rye whiskey',
		'.5oz Fernet Branca',
		{
			amount: '1 tsp',
			recipe: DEMERARA_SYRUP
		},
		'Garnish: Lemon twist'
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.AlcoholLevel.HIGH,
		Tags.FlavorProfile.BITTER,
		Tags.Technique.STIRRED,

		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC
	]
};

export default TORONTO;
