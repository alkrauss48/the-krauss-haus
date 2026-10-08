import type { Recipe } from '$lib/types/recipes';

const RASPBERRY_SYRUP: Recipe = {
	name: 'Raspberry Syrup',
	slug: 'raspberry-syrup',
	description: 'A bright, jammy syrup made from fresh raspberries.',
	ingredients: [
		'12oz carton of raspberries',
		'400g granulated sugar',
		'1 cup water',
		'2 tsp lemon juice'
	],
	instructions:
		"Muddle the raspberries with the sugar, and let it sit for 20-30 minutes. Add the water, then heat over low heat for about 5–10 minutes, stirring occasionally. Don't boil it. Remove from heat and let cool. Add the lemon juice. Strain through a fine mesh strainer into a jar or bottle.",
	notes: 'Recipe makes about 2.5 cups.'
};

export default RASPBERRY_SYRUP;
