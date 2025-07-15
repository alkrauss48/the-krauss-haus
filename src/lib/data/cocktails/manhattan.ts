import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const MANHATTAN: Cocktail = {
	title: 'Manhattan',
	description: 'Rye whiskey, sweet vermouth, black walnut bitters, maraschino cherry.',
	imagePath: '/images/cocktails/winter/manhattan.png',
	method: CocktailMethod.Stirred,
	ingredients: [
		'2oz Rye whiskey',
		'1oz Sweet vermouth',
		'2 dashes Black walnut bitters',
		'Garnish: Maraschino cherry'
	],
	variations: [
		{
			name: 'Black',
			description: 'Sub Amaro Lucano for sweet vermouth.',
			images: []
		}
	]
};

export default MANHATTAN;
