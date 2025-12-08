import type { Recipe } from '$lib/types/recipes';

const RICH_SIMPLE_SYRUP: Recipe = {
	name: 'Rich Simple Syrup',
	slug: 'rich-simple-syrup',
	description: 'A 2:1 ratio of sugar to water, creating a more concentrated sweetness.',
	ingredients: ['2 parts (by weight) granulated sugar', '1 part (by weight) water'],
	instructions:
		'Combine sugar and water in a saucepan. Heat over medium heat, stirring occasionally, until sugar dissolves completely. Do not boil. Let cool and store in an airtight container in the refrigerator.',
	notes:
		'The 2:1 ratio makes it more concentrated than regular simple syrup, so you can use less in cocktails. This syrup will keep for up to 6 months in the refrigerator. '
};

export default RICH_SIMPLE_SYRUP;
