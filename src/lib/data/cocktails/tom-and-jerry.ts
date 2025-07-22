import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const TOM_AND_JERRY: Cocktail = {
	title: 'Tom and Jerry',
	slug: 'tom-and-jerry',
	subtitle: 'Family recipe from Great Grandpa Krauss',
	description: 'Bourbon, dark rum, egg, sugar, nutmeg.',
	imagePath: '/images/cocktails/winter/tom-and-jerry.png',
	method: CocktailMethod.Built,
	ingredients: [
		'.75oz Bourbon',
		'.75oz Appleton Estate Signature',
		'2 tbsp Tom & Jerry batter',
		'5oz Hot water',
		'Garnish: Freshly grated nutmeg'
	]
};

export default TOM_AND_JERRY;
