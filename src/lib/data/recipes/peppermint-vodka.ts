import type { Recipe } from '$lib/types/recipes';

const PEPPERMINT_VODKA: Recipe = {
	name: 'Peppermint Vodka',
	slug: 'peppermint-vodka',
	description: 'Vodka infused with peppermint candies for a festive, minty spirit.',
	ingredients: ['4 oz vodka', '2 hard peppermint candies (the ones with the red swirls)'],
	instructions:
		'Add ingredients to a mason jar and let infuse for 2-3 hours, swirling around every 15-30 minutes. Remove any lingering pieces.',
	notes: 'Used in the Peppermint Espresso Martini. This infusion will turn a nice pink/red color.'
};

export default PEPPERMINT_VODKA;
