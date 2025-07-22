import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const HURRICANE: Cocktail = {
	title: 'Hurricane',
	subtitle: 'A powerful blend of rums with a tropical twist',
	description: 'Jamaican rum, blended rum, fassionola, lemon.',
	imagePath: '/images/cocktails/tiki/hurricane.png',
	slug: 'hurricane',
	method: CocktailMethod.Shaken,
	ingredients: [
		'.75oz Coruba (Jamaican rum)',
		'.75oz Appleton Estate Signature (Jamaican rum)',
		'.5oz Probitas (Blended light rum)',
		'1oz Fassionola',
		'.75oz Lemon',
		'Garnish: Lemon wheel'
	]
};

export default HURRICANE;
