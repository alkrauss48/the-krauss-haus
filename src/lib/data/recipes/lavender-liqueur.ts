import type { Recipe } from '$lib/types/recipes';

const LAVENDER_LIQUEUR: Recipe = {
	name: 'Lavender Liqueur',
	slug: 'lavender-liqueur',
	description: 'A floral liqueur made by infusing lavender into grain alcohol.',
	ingredients: [
		'5oz 40% ABV Vodka',
		'1.5 tsp dried culinary lavender petals (or 1 tbsp fresh)',
		'2oz Simple Syrup (1:1)'
	],
	instructions:
		'Steep vodka and lavender for 12 hours. Strain out the solids, then add the simple syrup.',
	notes: 'Makes ~7oz at 28% ABV.'
};

export default LAVENDER_LIQUEUR;
