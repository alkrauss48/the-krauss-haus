import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const PAINKILLER: Cocktail = {
	title: 'Painkiller',
	subtitle: 'A creamy, coconut paradise in a glass',
	description: 'Demerara rum, pineapple, cream of coconut, orange, nutmeg.',
	imagePath: '/images/cocktails/tiki/painkiller.png',
	method: CocktailMethod.Shaken,
	ingredients: [
		'2oz Hamilton 86 (Demerara rum)',
		'4oz Pineapple juice',
		'1oz Orange juice',
		'1oz Cream of coconut',
		'Garnish: Freshly grated nutmeg'
	]
};

export default PAINKILLER;
