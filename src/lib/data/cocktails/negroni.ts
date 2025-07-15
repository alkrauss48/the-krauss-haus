import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const NEGRONI: Cocktail = {
	title: 'Negroni',
	description: 'Gin, campari, sweet vermouth, orange twist.',
	imagePath: '/images/cocktails/summer/negroni.png',
	method: CocktailMethod.Stirred,
	ingredients: ['1oz Gin', '1oz Campari', '1oz Sweet vermouth', 'Garnish: Orange twist'],
	variations: [
		{
			name: 'Mezcal',
			description: 'Sub mezcal for gin.',
			images: []
		}
	]
};

export default NEGRONI;
