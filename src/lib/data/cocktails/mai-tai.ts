import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const MAI_TAI: Cocktail = {
	title: 'Mai Tai',
	subtitle: 'The king of tiki drinks, complex and balanced',
	description: 'Jamaican rum, blended rum, cachaca, orange curaçao, orgeat, lime, demerara syrup.',
	imagePath: '/images/cocktails/tiki/mai-tai.png',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1oz Smith and Cross (Overproof Jamaican rum)',
		'.5oz Leblon (Cachaca)',
		'.5oz Planteray OFTD (Overproof blended rum)',
		'.5oz Pierre Ferrand Dry Curaçao',
		'.5oz Orgeat',
		'1oz Lime',
		'.25oz Demerara syrup',
		'Garnish: Mint sprig and lime shell'
	]
};

export default MAI_TAI;
