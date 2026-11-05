import type { Recipe } from '$lib/types/recipes';

const STONE_FRUIT_LIQUEUR: Recipe = {
	name: 'Stone Fruit Liqueur',
	slug: 'stone-fruit-liqueur',
	description: 'A house liqueur with notes of ripe peach and apricot.',
	ingredients: [
		'450ml 50% ABV Vodka',
		'250g peach, chopped, with skin',
		'150g apricot, chopped, with skin',
		'300g sugar',
		'.5oz amaretto',
		'2"x1" strip lemon peel, washed, unwaxed, with minimal white pith',
		'2 tsp lemon juice',
		'Tiny pinch of salt'
	],
	instructions:
		'In a clean jar, combine the chopped peach, chopped apricot, and sugar, then refrigerate for 24 hours to macerate. Add the vodka, lemon peel, then infuse for 8 days, shaking gently once daily. Strain and fine-strain. Stir in the amaretto, lemon juice, and a tiny pinch of salt. Let rest for 2 weeks.',
	notes: 'Yields approximately 750–800 ml at ~28% ABV.'
};

export default STONE_FRUIT_LIQUEUR;
