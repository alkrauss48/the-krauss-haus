import type { Recipe } from '$lib/types/recipes';
import { Tags } from '$lib/data/all-tags';

const GRENADINE: Recipe = {
	name: 'Grenadine',
	slug: 'grenadine',
	description: 'A pomegranate-based syrup with a deep red color and tart sweetness',
	ingredients: [
		'1 cup pomegranate juice',
		'1 cup granulated sugar',
		'1 oz pomegranate molasses',
		'1/2 tsp orange blossom water'
	],
	instructions:
		'Combine pomegranate juice and sugar in a saucepan. Heat over medium heat, stirring occasionally, until sugar dissolves. Remove from heat, add pomegranate molasses and orange blossom water.',
	notes: 'Used in the Moonwell, Jack Rose, and Singapore Sling. Recipe makes about 1.5 cups.',
	tag: Tags.Syrups.GRENADINE
};

export default GRENADINE;
