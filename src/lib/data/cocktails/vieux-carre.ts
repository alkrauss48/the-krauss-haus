import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const VIEUX_CARRE: Cocktail = {
	title: 'Vieux Carré',
	description:
		"Rye whiskey, cognac, sweet vermouth, benedictine, angostura bitters, peychaud's bitters, lemon twist",
	imagePath: '/images/cocktails/vieux-carre.png',
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
	]
};

export default VIEUX_CARRE;
