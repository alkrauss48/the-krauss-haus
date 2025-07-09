import type { Recipe } from '$lib/types/recipes';

export const infusions: Recipe[] = [
	{
		name: 'Jalapeño Tequila',
		description: 'Tequila infused with fresh jalapeño for a spicy kick.',
		ingredients: ['4oz blanco tequila', '1 medium jalapeño, sliced w/ half seeds'],
		instructions:
			'Add ingredients to a mason jar and let infuse for 24 hours, swirling around every few hours. Strain.',
		notes: 'Used in the Spicy Margarita. If you want a spicier infusion, use more seeds.'
	},
	{
		name: 'Caramel Vodka',
		description: 'Vodka infused with homemade caramel syrup for a sweet, rich flavor.',
		ingredients: ['1 oz caramel syrup (see recipe)', '3 oz vodka'],
		instructions: 'Mix ingredients together. Easy as that!',
		notes:
			'Used in the Caramel Apple Spice. Because the caramel syrup has no fat, this infusion will maintain a nice, translucent color with no separation.'
	},
	{
		name: 'Peppermint Vodka',
		description: 'Vodka infused with peppermint candies for a festive, minty spirit.',
		ingredients: ['4 oz vodka', '2 hard peppermint candies (the ones with the red swirls)'],
		instructions:
			'Add ingredients to a mason jar and let infuse for 2-3 hours, swirling around every 15-30 minutes. Remove any lingering pieces.',
		notes: 'Used in the Peppermint Espresso Martini. This infusion will turn a nice pink/red color.'
	}
];
