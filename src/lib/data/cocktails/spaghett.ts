import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const SPAGHETT: Cocktail = {
	title: 'Spaghett',
	description: 'Miller high life, aperol, lemon',
	imagePath: '/images/cocktails/spaghett.png',
	slug: 'spaghett',
	method: CocktailMethod.Built,
	ingredients: ['12oz Miller high life bottle', '1oz Aperol', '.5oz Lemon'],
	notes: 'Drink some of the beer. Fill the bottle back up with the Aperol and lemon.'
};

export default SPAGHETT;
