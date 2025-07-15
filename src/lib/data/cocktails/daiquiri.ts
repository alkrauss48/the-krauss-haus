import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const DAIQUIRI: Cocktail = {
	title: 'Daiquiri',
	description: 'Light rum, lime, simple syrup.',
	imagePath: '/images/cocktails/summer/daiquiri.png',
	method: CocktailMethod.Shaken,
	ingredients: ['2oz Probitas', '.75oz Lime', '.5oz Rich simple syrup', 'Garnish: Lime wedge']
};

export default DAIQUIRI;
