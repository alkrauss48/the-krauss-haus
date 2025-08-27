import type { Recipe } from '$lib/types/recipes';

const CINNAMON_SYRUP: Recipe = {
	name: 'Cinnamon Syrup',
	slug: 'cinnamon-syrup',
	description: 'Infused with cinnamon for a warm, spicy sweetness',
	ingredients: ['1.5 cups granulated sugar', '1 cup water', '4 cinnamon sticks'],
	instructions:
		'Combine sugar, water, and cinnamon sticks in a saucepan. Heat over medium heat, stirring occasionally, until sugar dissolves. Simmer for 5 minutes to infuse the cinnamon flavor. Remove from heat, pour everything into a mason jar. Let cool for 12 hours. Remove cinnamon sticks.',
	notes: 'Recipe makes about 1.75 cups.'
};

export default CINNAMON_SYRUP;
