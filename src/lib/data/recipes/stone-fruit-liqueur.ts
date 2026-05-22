import type { Recipe } from '$lib/types/recipes';

const STONE_FRUIT_LIQUEUR: Recipe = {
	name: 'Stone Fruit Liqueur',
	slug: 'stone-fruit-liqueur',
	description: 'A house liqueur with notes of ripe peach and apricot.',
	ingredients: [
		'250 ml 95% ABV neutral spirit',
		'200 ml water',
		'250 g peach, chopped, with skin',
		'150 g apricot, chopped, with skin',
		'300 g sugar',
		'.5 oz amaretto',
		'1 strip lemon peel, with minimal white pith',
		'2 tsp lemon juice',
		'Tiny pinch of salt'
	],
	instructions:
		'Combine the 95% ABV spirit with the water to make about 450 ml of diluted spirit at roughly 53% ABV. In a clean jar, combine the chopped peach, chopped apricot, and sugar, then refrigerate for 24 hours to macerate. Add the diluted spirit and lemon peel, then infuse for 5-8 days, tasting toward the end of that window. Strain and fine-strain the liqueur, then stir in the amaretto, lemon juice, and a tiny pinch of salt. Let rest for 1-2 weeks before using.',
	notes: 'Refrigerate for best quality.'
};

export default STONE_FRUIT_LIQUEUR;
