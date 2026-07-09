import type { Recipe } from '$lib/types/recipes';

const LAVENDER_LIQUEUR: Recipe = {
	name: 'Lavender Liqueur',
	slug: 'lavender-liqueur',
	description: 'A floral liqueur made by infusing lavender into grain alcohol.',
	ingredients: [
		'2oz Everclear (190 proof)',
		'3oz Water',
		'1 tsp dried culinary lavender petals (or 1 tbsp fresh)',
		'2oz Simple Syrup (1:1)',
		'Optional: small strip lemon peel (no white pith)'
	],
	instructions:
		'Steep everything but the syrup for 12 hours. Strain out the solids, then add the syrup.',
	notes: 'Makes ~7oz at 27% ABV.'
};

export default LAVENDER_LIQUEUR;
