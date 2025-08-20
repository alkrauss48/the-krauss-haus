import type { Recipe } from '$lib/types/recipes';
import { Tags } from '$lib/data/all-tags';

const HONEY_SYRUP: Recipe = {
	name: 'Honey Syrup',
	slug: 'honey-syrup',
	description: 'A blend of honey and water for a floral sweetness',
	ingredients: ['1 part (by volume) honey', '1 part (by volume) water'],
	instructions:
		'Combine honey and hot water in a jar or container. Stir until honey dissolves completely. Let cool and store in an airtight container in the refrigerator.',
	notes:
		'Use raw honey for the best flavor. Used in the Three Dots & a Dash and the Port Light. Recipe makes 1 cup.',
	tag: Tags.Syrups.HONEY_SYRUP
};

export default HONEY_SYRUP;
