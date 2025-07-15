import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const SATURN: Cocktail = {
	title: 'Saturn',
	subtitle: 'A gin-based tiki classic, bright and tropical',
	description: 'Gin, passion fruit, lemon, orgeat, falernum.',
	imagePath: '/images/cocktails/tiki/saturn.png',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1.5oz Gin',
		'.5oz Passion fruit syrup',
		'.5oz Lemon',
		'.25oz Orgeat',
		'.25oz Falernum',
		'Garnish: Lemon peel and maraschino cherry'
	]
};

export default SATURN;
