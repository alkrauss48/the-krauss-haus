import type { Recipe } from '$lib/types/recipes';
import { Tags } from '$lib/data/all-tags';

const ORGEAT: Recipe = {
	name: 'Orgeat',
	slug: 'orgeat',
	description: 'An almond-flavored syrup with notes of rose and orange blossom water',
	ingredients: [
		'2 cups unsweetened oat milk',
		'3 cups granulated sugar',
		'1/2 tsp rose water',
		'1 tsp orange blossom water',
		'1.5 oz amaretto'
	],
	instructions:
		'Combine oatmilk and sugar in a saucepan. Heat over medium heat, stirring occasionally, until sugar dissolves. Remove from heat, and add remaining ingredients.',
	notes: 'Used in the Mai Tai and the Saturn. Recipe makes about 3.5 cups.',
	tag: Tags.Syrups.ORGEAT
};

export default ORGEAT;
