import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const SPRITZ: Cocktail = {
	title: 'Spritz',
	description: 'Prosecco, aperol, soda water, orange wedge.',
	imagePath: '/images/cocktails/summer/spritz.png',
	method: CocktailMethod.Built,
	ingredients: ['3oz Prosecco', '2oz Aperol', '1oz Soda water', 'Garnish: Orange wedge']
};

export default SPRITZ;
