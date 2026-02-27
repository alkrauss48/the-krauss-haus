import type { Recipe } from '$lib/types/recipes';

const CREME_DE_MENTHE: Recipe = {
	name: 'Crème de Menthe',
	slug: 'creme-de-menthe',
	description: 'A mint-forward sweet liqueur.',
	ingredients: [
		'45g fresh mint leaves (spearmint)',
		'5oz Everclear (95% ABV grain liquor)',
		'7oz distilled water',
		'12oz 1:1 simple syrup'
	],
	instructions:
		'Lightly bruise 30g mint leaves and infuse in everclear + distilled water for 24 hours. Strain out mint and add simple syrup. Add remaining 15g mint leaves for 10 hours. Strain. Let rest for 2-3 days before using.',
	notes: 'Makes ~24oz at ~20% ABV.'
};

export default CREME_DE_MENTHE;
