import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const JACK_ROSE: Cocktail = {
	title: 'Jack Rose',
	description: 'Calvados, applejack, grenadine, lemon.',
	imagePath: '/images/cocktails/summer/jack-rose.png',
	slug: 'jack-rose',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1oz Calvados',
		'1oz Applejack',
		'.75oz Grenadine',
		'.75oz Lemon',
		'Garnish: Lemon twist'
	]
};

export default JACK_ROSE;
