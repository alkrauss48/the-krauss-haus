import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const OAXACA_OLD_FASHIONED: Cocktail = {
	title: 'Oaxaca Old Fashioned',
	description: 'Reposado tequila, mezcal, agave nectar, xocolatl bitters, smoked orange twist.',
	imagePath: '/images/cocktails/winter/oaxaca-old-fashioned.png',
	slug: 'oaxaca-old-fashioned',
	method: CocktailMethod.Built,
	ingredients: [
		'1.5oz Reposado tequila',
		'.5 oz Mezcal',
		'.25 oz Agave nector',
		'2 dashes Xocolatl bitters',
		'Garnish: Smoked orange twist'
	]
};

export default OAXACA_OLD_FASHIONED;
