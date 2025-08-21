import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

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
		'1tsp Demerara syrup',
		'Garnish: Lemon twist'
	],
	tags: [
		Tags.BaseSpirit.WHISKEY,
		Tags.AlcoholLevel.HIGH,
		Tags.FlavorProfile.BITTER,
		Tags.Technique.STIRRED,
		Tags.Syrups.DEMERARA_SYRUP,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC
	]
};

export default TORONTO;
