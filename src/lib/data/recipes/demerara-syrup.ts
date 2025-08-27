import type { Recipe } from '$lib/types/recipes';

const DEMERARA_SYRUP: Recipe = {
	name: 'Demerara Syrup',
	slug: 'demerara-syrup',
	description: 'Made with demerara sugar for a rich, molasses-like sweetness',
	ingredients: ['2 parts (by weight) demerara sugar', '1 part (by weight) water'],
	instructions:
		'Combine demerara sugar and water in a saucepan. Heat over medium heat, stirring occasionally, until sugar dissolves completely. Do not boil. Let cool and store in an airtight container in the refrigerator.',
	notes:
		'Demerara sugar adds a rich, caramel-like flavor that works beautifully alongside aged spirits. Turbinado sugar can be substituted for demerara. This syrup will keep for up to 6 months in the refrigerator. '
};

export default DEMERARA_SYRUP;
