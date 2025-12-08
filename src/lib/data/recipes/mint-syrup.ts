import type { Recipe } from '$lib/types/recipes';

const MINT_SYRUP: Recipe = {
	name: 'Mint Syrup',
	slug: 'mint-syrup',
	description: 'Simple syrup infused with fresh mint.',
	ingredients: [
		'20g spearmint, including leaves and stems (bottom half of stems removed)',
		'240g hot water (heated to 190F)',
		'~240g granulated sugar'
	],
	instructions:
		'Steep mint and water for 10 minutes. Strain out mint. Add equal amount of sugar to mint water by weight. Stir until sugar is dissolved.',
	notes: 'Recipe makes about 1.5 cups.'
};

export default MINT_SYRUP;
