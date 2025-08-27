import type { Recipe } from '$lib/types/recipes';

const JALAPENO_TEQUILA: Recipe = {
	name: 'Jalapeño Tequila',
	slug: 'jalapeno-tequila',
	description: 'Tequila infused with fresh jalapeño for a spicy kick.',
	ingredients: ['4oz blanco tequila', '1 medium jalapeño, sliced w/ half seeds'],
	instructions:
		'Add ingredients to a mason jar and let infuse for 24 hours, swirling around every few hours. Strain.',
	notes: 'Used in the Spicy Margarita. If you want a spicier infusion, use more seeds.'
};

export default JALAPENO_TEQUILA;
