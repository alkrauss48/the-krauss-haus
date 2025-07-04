import type { Recipe } from '$lib/types/recipes';

export const infusions: Recipe[] = [
	{
		name: 'Jalapeño Tequila',
		description: 'Tequila infused with fresh jalapeños for a spicy kick.',
		ingredients: ['1 (750ml) bottle blanco tequila', '2-3 fresh jalapeños, sliced'],
		instructions:
			'Add sliced jalapeños to the bottle of tequila (or pour both into a large jar). Let infuse at room temperature for 12-24 hours, tasting occasionally for desired heat. Strain out jalapeños and store tequila in the original bottle or a clean jar.',
		notes:
			'Great for spicy margaritas or palomas. The longer it infuses, the spicier it gets. Start tasting after 12 hours.'
	},
	{
		name: 'Caramel Vodka',
		description: 'Vodka infused with homemade caramel syrup for a sweet, rich flavor.',
		ingredients: ['1/2 cup caramel syrup (see recipe)', '1 (750ml) bottle vodka'],
		instructions:
			'Combine caramel syrup and vodka in a large jar. Stir or shake to combine. Let infuse for at least 24 hours, then strain if needed. Store in a clean bottle or jar.',
		notes:
			'Delicious in dessert cocktails or coffee drinks. Shake before using if separation occurs.'
	},
	{
		name: 'Peppermint Vodka',
		description: 'Vodka infused with peppermint candies for a festive, minty spirit.',
		ingredients: [
			'1 (750ml) bottle vodka',
			'1 cup peppermint candies (crushed, like Starlight mints or candy canes)'
		],
		instructions:
			'Add crushed peppermint candies to vodka in a large jar. Stir or shake to dissolve. Let sit for 1-2 days, shaking occasionally, until candies are fully dissolved. Strain if needed and store in a clean bottle.',
		notes:
			'Perfect for holiday cocktails or hot chocolate. The color will turn pink/red depending on the candies used.'
	}
];
