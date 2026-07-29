import type { Recipe } from '$lib/types/recipes';

const CREME_DE_CACAO: Recipe = {
	name: 'Crème de Cacao',
	slug: 'creme-de-cacao',
	description: 'A chocolate-flavored liqueur made from cacao nibs.',
	ingredients: [
		'4oz (by weight) Cacao Nibs',
		'6oz 95% ABV Grain Liquor',
		'7oz Distilled Water',
		'10oz 1:1 Simple Syrup'
	],
	instructions:
		'Toast the cacao nibs at 275–300°F for approximately 5 minutes, shaking once, until fragrant. Allow them to cool completely. Combine the cacao nibs, grain liquor, and 4 oz distilled water. Infuse for 7–10 days, shaking gently once daily and tasting beginning around day five. Strain thoroughly without aggressively squeezing the nibs. Add the simple syrup and remaining 3 oz distilled water. Bottle and let rest for 10–14 days.',
	notes: 'Makes ~20-22oz at ~23-26% ABV. Takes a couple of weeks to make.'
};

export default CREME_DE_CACAO;
