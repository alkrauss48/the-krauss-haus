import type { Recipe } from '$lib/types/recipes';

const LIMONCELLO: Recipe = {
	name: 'Limoncello',
	slug: 'limoncello',
	description: 'A classic Italian liqueur made from lemons.',
	ingredients: [
		'Peels from 5 lemons, washed, unwaxed (no white pithe)',
		'1C 95% ABV Grain Liquor',
		'1.5C Water',
		'200g Sugar'
	],
	instructions:
		'Infuse grain liquor and lemon peels for 3 weeks. Heat water and sugar to make syrup, and let cool. Strain lemon peels out, add syrup. Let rest for 2 weeks.',
	notes: 'Makes ~24oz at 31% ABV. Traditionally served straight from the freezer.'
};

export default LIMONCELLO;
