import type { Recipe } from '$lib/types/recipes';

const DRY_CURACAO: Recipe = {
	name: 'Dry Curaçao',
	slug: 'dry-curacao',
	description: 'Bright, dry orange liqueur with subtle bitterness.',
	ingredients: [
		'Peels from 3 navel oranges, unwaxed (no white pith)',
		'Peels from 1/2 lemon, unwaxed (no white pith)',
		'2"x1" grapefruit peel, unwaxed (no white pith)',
		'570mL 50% ABV Vodka',
		'250mL Brandy',
		'1/2 tsp coriander seeds, lightly crushed',
		'1/2 cinnamon stick',
		'150g Granulated Sugar',
		'50mL Water'
	],
	instructions:
		'Infuse orange, lemon, and grapefruit peels with vodka and brandy in a glass jar for 10 days. On day 7, add cinnamon stick and coriander seeds. After the full 10 days, strain. Add the water and sugar to the strained infusion. Seal and shake vigorously. Let stand for 24–48 hours, shaking occasionally until all of the sugar has dissolved. Let rest at least 3 weeks, preferably 4 weeks.',
	notes:
		'Makes approximately 950 mL at ~40% ABV. Best after 3–4 weeks; continues to improve for 2–3 months.'
};

export default DRY_CURACAO;
