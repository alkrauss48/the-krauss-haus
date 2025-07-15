import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const LOGGY_CAB: Cocktail = {
	title: 'Loggy Cab',
	subtitle: 'A Krauss Family original',
	description: 'Gin, lime, simple syrup, soda water.',
	imagePath: '/images/cocktails/summer/loggy-cab.png',
	method: CocktailMethod.Built,
	ingredients: [
		'2oz Gin',
		'.75oz Lime',
		'.5oz Rich simple syrup',
		'4oz Soda water',
		'Garnish: Lime wheel'
	]
};

export default LOGGY_CAB;
