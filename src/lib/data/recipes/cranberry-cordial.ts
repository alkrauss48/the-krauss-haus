import type { Recipe } from '$lib/types/recipes';

const CRANBERRY_CORDIAL: Recipe = {
	name: 'Cranberry Cordial',
	slug: 'cranberry-cordial',
	description: 'Fresh cranberry cordial, lightly sweetened and tart.',
	ingredients: [
		'12oz package of cranberries',
		'2C water',
		'144g granulated sugar',
		'1 pinch of salt'
	],
	instructions:
		'Combine all ingredients in a saucepan. Heat over medium heat, stirring occasionally, until simmering. Simmer for 10 minutes. Remove from heat, and let cool. Press and strain out cranberries.',
	notes: 'Recipe makes about 2 cups.'
};

export default CRANBERRY_CORDIAL;
