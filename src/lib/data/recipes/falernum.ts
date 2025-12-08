import type { Recipe } from '$lib/types/recipes';

const FALERNUM: Recipe = {
	name: 'Falernum',
	slug: 'falernum',
	description: 'A spiced liqueur with notes of ginger, clove, and lime.',
	ingredients: [
		'8 oz overproof rum (like Planteray OFTD)',
		'12 limes zested (not juiced)',
		'24 cloves',
		'30g ginger, chopped',
		'1 tsp grated nutmeg',
		'1 vanilla bean, split and scraped. Include seeds and pot',
		'16 oz semi-rich (1.5:1) simple syrup made with unsweetened oatmilk',
		'1 oz amaretto'
	],
	instructions:
		'Steep all ingredients in rum for 24 hours, besides simple syrup and amaretto. Strain to remove solids. Add simple syrup and amaretto.',
	notes:
		'Makes ~24oz at 23% ABV. Because of its alcohol content, this will keep for up to 2 years refrigerated.'
};

export default FALERNUM;
