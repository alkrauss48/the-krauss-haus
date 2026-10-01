import type { Recipe } from '$lib/types/recipes';

const VANILLA_EXTRACT: Recipe = {
	name: 'Vanilla Extract',
	slug: 'vanilla-extract',
	description: 'Homemade vanilla extract from vodka and split vanilla beans.',
	ingredients: ['4oz vodka', '4 vanilla beans, split and scraped'],
	instructions: 'Infuse for 6 months. Strain through a coffee filter.',
	notes:
		'To make vanilla syrup or vodka, add 1 dash (1/8 teaspoon) of vanilla extract per 1/2oz of syrup or vodka.'
};

export default VANILLA_EXTRACT;
