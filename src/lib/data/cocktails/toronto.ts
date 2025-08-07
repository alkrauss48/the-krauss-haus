import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const TORONTO: Cocktail = {
	title: 'Toronto',
	description: 'Rye whiskey, fernet branca, demerara syrup, lemon twist',
	imagePath: '/images/cocktails/toronto.png',
	slug: 'toronto',
	method: CocktailMethod.Stirred,
	ingredients: [
		'2oz Rye whiskey',
		'.5oz Fernet Branca',
		'1tsp Demerara syrup',
		'Garnish: Lemon twist'
	]
};

export default TORONTO;
