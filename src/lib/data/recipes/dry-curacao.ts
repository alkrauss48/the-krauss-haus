import type { Recipe } from '$lib/types/recipes';

const DRY_CURACAO: Recipe = {
	name: 'Dry Curaçao',
	slug: 'dry-curacao',
	description: 'Bright, dry orange liqueur with subtle bitterness.',
	ingredients: [
		'Peels from 5 navel oranges, unwaxed (no white pithe)',
		'Peels from 1/2 lemon, unwaxed (no white pithe)',
		'Peels from 3/4 grapefruit, unwaxed (no white pithe)',
		'300mL Everclear (95% ABV grain liquor)',
		'200mL Brandy',
		'1tsp coriander seeds, lightly crushed',
		'1/2 cinnamon stick',
		'140g Granulated Sugar',
		'320mL Water'
	],
	instructions:
		'Infuse all besides sugar and water in a glass jar for 7-10 days. Strain. Heat water and sugar to make syrup, let cool, and add to infusion. Let rest 3 weeks.',
	notes: 'Makes ~900mL at 40% ABV.'
};

export default DRY_CURACAO;
