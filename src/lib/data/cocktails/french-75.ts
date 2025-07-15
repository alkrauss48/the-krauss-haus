import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const FRENCH_75: Cocktail = {
	title: 'French 75',
	description: 'Prosecco, gin, lemon, simple syrup.',
	imagePath: '/images/cocktails/summer/french-75.png',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1oz Gin',
		'.5oz Lemon',
		'.5oz rich simple syrup',
		'3oz Prosecco',
		'Garnish: Lemon twist'
	]
};

export default FRENCH_75;
