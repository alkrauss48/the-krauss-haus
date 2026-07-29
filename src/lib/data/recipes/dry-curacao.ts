import type { Recipe } from '$lib/types/recipes';

const DRY_CURACAO: Recipe = {
	name: 'Dry Curaçao',
	slug: 'dry-curacao',
	description: 'Bright, dry orange liqueur with subtle bitterness.',
	ingredients: [
		'Peels from 3 navel oranges, unwaxed (no white pithe)',
		'Peels from 1/2 lemon, unwaxed (no white pithe)',
		'2"x1" grapefruit peel, unwaxed (no white pithe)',
		'300mL 95% ABV Grain Liquor',
		'250mL Brandy',
		'3/4 tsp coriander seeds, lightly crushed',
		'1/2 cinnamon stick',
		'140g Granulated Sugar',
		'320mL Water'
	],
	instructions:
		'Infuse orange, lemon, and grapefruit peels with grain liquor and brandy in a glass jar for 7 days. On day 4, add cinnamon stick and coriander seeds. After full 7 days, strain. Heat water and sugar to make syrup, let cool, and add to infusion. Let rest 3 weeks.',
	notes: 'Makes ~950mL at 40% ABV.'
};

export default DRY_CURACAO;
