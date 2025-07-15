import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const PORT_LIGHT: Cocktail = {
	title: 'Port Light',
	subtitle: 'A bourbon-based tropical delight',
	description: 'Bourbon, honey, lemon, passion fruit.',
	imagePath: '/images/cocktails/tiki/port-light.png',
	method: CocktailMethod.Shaken,
	ingredients: [
		'2oz Bourbon',
		'.5oz Honey syrup',
		'.75oz Lemon',
		'.5oz Passion fruit syrup',
		'(Optional) Egg white',
		'Garnish: Mint spring, pineapple square, and maraschino cherry'
	]
};

export default PORT_LIGHT;
