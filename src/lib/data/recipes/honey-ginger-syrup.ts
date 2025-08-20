import type { Recipe } from '$lib/types/recipes';

const HONEY_GINGER_SYRUP: Recipe = {
	name: 'Honey-Ginger Syrup',
	slug: 'honey-ginger-syrup',
	description: 'Honey syrup infused with fresh ginger for a spicy kick',
	ingredients: [
		'1/2 cup honey',
		'1/2 cup hot water',
		'4" x 1" x 1" stick of peeled, sliced ginger'
	],
	instructions:
		'Combine honey, water, and ginger in a saucepan. Heat over medium heat, stirring occasionally, until honey dissolves. Simmer for 5 minutes to infuse the ginger flavor. Remove from heat, pour everything into a mason jar. Let cool for 12 hours. Remove ginger.',
	notes: 'Used in the Penicillin.'
};

export default HONEY_GINGER_SYRUP;
