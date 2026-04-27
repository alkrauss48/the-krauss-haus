import type { Recipe } from '$lib/types/recipes';

const HOUSE_DARK_BERRY_CREME: Recipe = {
	name: 'House Dark Berry Crème',
	slug: 'house-dark-berry-creme',
	description: 'A rich berry liqueur infused with vodka, lemon peel, and Ceylon black tea.',
	ingredients: [
		'300g blueberries',
		'200g blackberries',
		'50g raspberries',
		'400mL vodka (40-50% ABV)',
		'225g granulated sugar',
		'2 strips lemon peel (no pith)',
		'0.3g Ceylon black tea leaves'
	],
	instructions:
		'Lightly crush all fruit in a jar. Add vodka, lemon peel, and tea leaves. Seal and shake. Let macerate for 2 weeks, shaking occasionally. Strain through fine mesh, then strain again through cheesecloth or a coffee filter. Stir in sugar until fully dissolved. Bottle and rest for 1-2 weeks before using.',
	notes:
		'Store sealed in the refrigerator or a cool, dark place. Best after 2-4 weeks; keeps well for up to 1 year.'
};

export default HOUSE_DARK_BERRY_CREME;
