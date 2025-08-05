import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const SEA_LEGS: Cocktail = {
	title: 'Sea Legs',
	description: 'Single malt scotch, mezcal, orgeat, lime, celery bitters, angostura bitters',
	imagePath: '/images/cocktails/sea-legs.png',
	slug: 'sea-legs',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1oz Single malt scotch',
		'1oz Mezcal',
		'.75oz Orgeat',
		'.75oz Lime',
		'2 dashes Celery bitters',
		'Garnish: salted rim and dash of angostura bitters'
	]
};

export default SEA_LEGS;
