import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const VIEUX_CARRE: Cocktail = {
	title: 'Vieux Carré',
	description:
		"Rye whiskey, cognac, sweet vermouth, benedictine, angostura bitters, peychaud's bitters, lemon twist.",
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/vieux-carre.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/vieux-carre.png',
	slug: 'vieux-carre',
	method: CocktailMethod.Stirred,
	ingredients: [
		'.75oz Rye whiskey',
		'.75oz Cognac',
		'.75oz Sweet vermouth',
		'1tsp Benedictine',
		'2 dashes Angostura bitters',
		"2 dashes Peychaud's bitters",
		'Garnish: Lemon twist'
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.BaseAlcohol.BRANDY,
		Tags.BaseAlcohol.WINE,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC
	]
};

export default VIEUX_CARRE;
