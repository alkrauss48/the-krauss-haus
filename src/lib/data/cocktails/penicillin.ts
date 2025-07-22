import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const PENICILLIN: Cocktail = {
	title: 'Penicillin',
	description: 'Blended scotch, single malt scotch, honey-ginger syrup, lemon',
	imagePath: '/images/cocktails/winter/penicillin.png',
	slug: 'penicillin',
	method: CocktailMethod.Shaken,
	ingredients: [
		'2oz Blended scotch',
		'.25oz Laphroaig',
		'.75oz Honey-ginger syrup',
		'.75oz Lemon',
		'Garnish: Candied ginger'
	]
};

export default PENICILLIN;
