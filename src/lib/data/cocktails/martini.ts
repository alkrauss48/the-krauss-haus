import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const MARTINI: Cocktail = {
	title: 'Martini',
	description: 'Gin, dry vermouth, orange bitters, olives.',
	imagePath: '/images/cocktails/winter/martini.png',
	method: CocktailMethod.Stirred,
	ingredients: ['2oz Gin', '1oz Dry vermouth', '2 dashes Orange bitters', 'Garnish: Olive']
};

export default MARTINI;
