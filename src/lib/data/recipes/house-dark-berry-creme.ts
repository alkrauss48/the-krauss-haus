import type { Recipe } from '$lib/types/recipes';

const HOUSE_DARK_BERRY_CREME: Recipe = {
	name: 'Dark Berry Liqueur',
	slug: 'house-dark-berry-creme',
	description: 'A rich berry liqueur infused with vodka, lemon peel, and Ceylon black tea.',
	ingredients: [
		'250g blueberries',
		'250g blackberries',
		'50g raspberries',
		'2 2"x1" strips lemon peel (washed, unwaxed, no pith)',
		'400mL 50% ABV Vodka',
		'225g granulated sugar',
		'1g Ceylon black tea leaves',
		'1T lemon juice'
	],
	instructions:
		'Lightly crush all fruit in a jar. Add vodka and lemon peel. Seal and shake. Let macerate for 14 days, shaking occasionally. After 14 days, add tea leaves, and macerate another 2 days. Strain through fine mesh, then strain again through cheesecloth or a coffee filter. Stir in sugar and lemon juice until fully dissolved. Bottle and rest for 2 weeks before using.',
	notes: 'Makes ~650mL. Store sealed in a cool, dark place. Best after 2-4 weeks.'
};

export default HOUSE_DARK_BERRY_CREME;
