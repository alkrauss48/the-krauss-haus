import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const ESPRESSO_MARTINI: Cocktail = {
	title: 'Espresso Martini',
	description: 'Cognac, coffee liqueur, espresso, demerara syrup.',
	imagePath: '/images/cocktails/winter/espresso-martini.png',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1.5oz Cognac',
		'1oz Mr. Black Coffee Liqueur',
		'1oz Espresso',
		'.25oz Demerara syrup',
		'Garnish: 3 coffee beans'
	],
	variations: [
		{
			name: 'Hazelnut',
			description: 'Swap .5oz of Cognac with Frangelico.',
			images: []
		},
		{
			name: 'Peppermint',
			description: 'Swap .5oz of Cognac with peppermint infused vodka.',
			images: []
		}
	]
};

export default ESPRESSO_MARTINI;
