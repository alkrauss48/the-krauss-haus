import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const OLD_FASHIONED: Cocktail = {
	title: 'Old Fashioned',
	description: 'Bourbon, demerara syrup, black walnut bitters, orange twist.',
	imagePath: '/images/cocktails/winter/old-fashioned.png',
	slug: 'old-fashioned',
	method: CocktailMethod.Built,
	ingredients: [
		'2oz Bourbon',
		'.25oz Demerara syrup',
		'2 dashes Black walnut bitters',
		'Garnish: Orange twist'
	],
	variations: [
		{
			name: 'Smoked',
			description: 'Served in a smoked glass.',
			images: []
		},
		{
			name: 'Muddled',
			description: 'Muddle extra orange slice and maraschino cherry.',
			images: []
		},
		{
			name: 'Rum',
			description: 'Sub Aged rhum agricole for bourbon.',
			images: []
		}
	]
};

export default OLD_FASHIONED;
