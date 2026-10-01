import type { Recipe } from '$lib/types/recipes';

const RASPBERRY_SYRUP: Recipe = {
	name: 'Raspberry Syrup',
	slug: 'raspberry-syrup',
	description: 'A bright, jammy syrup made from fresh raspberries.',
	ingredients: [
		'6oz carton of raspberries',
		'1 cup granulated sugar',
		'1/2 cup water',
		'1 teaspoon lemon juice'
	],
	instructions:
		"Muddle the raspberries with the sugar, and let it sit for 20-30 minutes. Add the water, then cook over low heat for about 5–10 minutes, stirring occasionally. Don't boil it. Remove from heat and let cool. Add the lemon juice.",
	notes: 'Recipe makes about 1.5 cups. Lasts 1-2 weeks in the fridge.'
};

export default RASPBERRY_SYRUP;
