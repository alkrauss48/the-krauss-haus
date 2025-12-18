import type { Recipe } from '$lib/types/recipes';

const CREME_DE_CACAO: Recipe = {
	name: 'Crème de Cacao',
	slug: 'creme-de-cacao',
	description: 'A chocolate-flavored liqueur made from cacao nibs.',
	ingredients: [
		'4oz (by weight) Cacao Nibs',
		'6oz Everclear (95% ABV grain liquor)',
		'6.8oz Distilled Water',
		'10oz 1:1 Simple Syrup'
	],
	instructions:
		'Toast cacao nibs in air fryer or oven for 5 minutes. Let cool. Infuse cacao nibs in everclear for 7-10 days. Strain out cacao nibs. Add simple syrup and water. Let rest for 5 days.',
	notes: 'Makes ~20-22oz at ~25% ABV. Takes a couple of weeks to make.'
};

export default CREME_DE_CACAO;
