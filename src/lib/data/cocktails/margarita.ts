import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const MARGARITA: Cocktail = {
	title: 'Margarita',
	description: 'Blanco tequila, cointreau, lime, agave nectar.',
	imagePath: '/images/cocktails/summer/margarita.png',
	slug: 'margarita',
	method: CocktailMethod.Shaken,
	ingredients: [
		'2oz Blanco tequila',
		'.75oz Cointreau',
		'.75oz Lime',
		'.25oz Agave nectar',
		'Garnish: Lime wedge'
	],
	variations: [
		{
			name: 'Spicy',
			description: 'Swap .5oz of tequila with jalepeño infused tequila.',
			images: []
		}
	]
};

export default MARGARITA;
