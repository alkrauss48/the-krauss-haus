import type { Recipe } from '$lib/types/recipes';

const AQUAVIT: Recipe = {
	name: 'Aquavit',
	slug: 'aquavit',
	description: 'Nordic spirit flavored with caraway, dill, and botanicals.',
	ingredients: [
		'4oz Everclear (95% ABV grain liquor)',
		'5oz Distilled Water',
		'1.25 tsp Caraway seed',
		'.5 tsp Dill seed',
		'.5 tsp Coriander seed',
		'.5 tsp Fennel',
		'1"x2" strip of lemon peel'
	],
	instructions:
		'Lightly toast dry spices for 30-45 seconds until fragrant. Cool and gently grind with mortar and pestle. Combine all ingredients together for 24-36 hours. Strain. Let rest for 2-3 days.',
	notes: 'Makes ~9oz at 43% ABV.'
};

export default AQUAVIT;
