import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const PIMMS_CUP: Cocktail = {
	title: "Pimm's Cup",
	description: "Pimm's #1, sparkling lemonade, cucumber, orange, strawberry, mint.",
	imagePath: '/images/cocktails/summer/pimms-cup.png',
	method: CocktailMethod.Built,
	ingredients: [
		"2oz Pimm's #1",
		'4oz sparkling lemonade',
		'Garnish: orange, mint sprig, strawberry, cucumber'
	]
};

export default PIMMS_CUP;
