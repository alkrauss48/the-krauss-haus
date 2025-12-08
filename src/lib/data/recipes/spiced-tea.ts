import type { Recipe } from '$lib/types/recipes';

const SPICED_TEA: Recipe = {
	name: 'Spiced Tea',
	slug: 'spiced-tea',
	description: 'A simply-spiced black tea.',
	ingredients: ['20oz hot water', '5g Ceylon black tea', '3 whole cloves', '1 cinnamon stick'],
	instructions: 'Steep all together in teapot for 8 minutes, then pour.',
	notes: 'Makes 20oz of tea.'
};

export default SPICED_TEA;
