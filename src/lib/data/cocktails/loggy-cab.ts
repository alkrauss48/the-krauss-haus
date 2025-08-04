import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const LOGGY_CAB: Cocktail = {
	title: 'Loggy Cab',
	subtitle: 'A Krauss Family original',
	description: 'Gin, lime, simple syrup, soda water.',
	imagePath: '/images/cocktails/summer/loggy-cab.png',
	slug: 'loggy-cab',
	method: CocktailMethod.Built,
	ingredients: [
		'2oz Gin',
		'.75oz Lime',
		'.5oz Rich simple syrup',
		'4oz Soda water',
		'Garnish: Lime wheel'
	],
	variations: [
		{
			name: 'Gimlet',
			description: 'Classic cocktail. No soda water. Serve up.',
			images: []
		},
		{
			name: 'Tom Collins',
			description: 'Classic cocktail. Swap out the lime for lemon.',
			images: []
		},
		{
			name: 'Gin Rickey',
			description: 'Classic cocktail. No simple syrup.',
			images: []
		},
		{
			name: 'Cabin-style',
			description:
				'Swap syrup for 1T sugar. Use 3/4 - 1 lime, shake with shells. Dump all into glass.',
			images: []
		}
	]
};

export default LOGGY_CAB;
