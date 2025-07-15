import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const SINGAPORE_SLING: Cocktail = {
	title: 'Singapore Sling',
	subtitle: 'A sophisticated gin-based tiki classic',
	description:
		'Gin, cherry heering, benedictine, cointreau, grenadine, pineapple, lime, angostura bitters.',
	imagePath: '/images/cocktails/tiki/singapore-sling.png',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1.5oz Gin',
		'.5oz Cherry Heering',
		'.5oz Benedictine',
		'.5oz Cointreau',
		'.5oz Grenadine',
		'3oz Pineapple juice',
		'.75oz Lime juice',
		'3 dashes Angostura bitters',
		'Garnish: Pineapple wedge and maraschino cherry'
	]
};

export default SINGAPORE_SLING;
