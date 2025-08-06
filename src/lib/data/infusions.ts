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
	},
	{
		name: 'Falernum',
		description: 'A spiced liqueur with notes of ginger, clove, and lime',
		ingredients: [
			'8 oz overproof rum (like Planteray OFTD)',
			'12 limes zested (not juiced)',
			'24 cloves',
			'30g ginger, chopped',
			'1 tsp grated nutmeg',
			'1 vanilla bean, split and scraped. Include seeds and pot',
			'16 oz semi-rich (1.5:1) simple syrup made with oatmilk',
			'1 oz amaretto'
		],
		instructions:
			'Steep all ingredients in rum for 24 hours, besides simple syrup and amaretto. Strain to remove solids. Add simple syrup and amaretto.',
		notes:
			"Makes ~25oz at 23% ABV. Used in the Three Dots & a Dash, the Jet Pilot, the Cobra's Fang, the Saturn, and the Iron Ranger. Because of its alcohol content, this will keep for up to 2 years refrigerated. Recipe makes about 2.75-3 cups."
	},
];
