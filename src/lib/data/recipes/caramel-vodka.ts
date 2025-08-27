import type { Recipe } from '$lib/types/recipes';

const CARAMEL_VODKA: Recipe = {
	name: 'Caramel Vodka',
	slug: 'caramel-vodka',
	description: 'Vodka infused with homemade caramel syrup for a sweet, rich flavor.',
	ingredients: ['1 oz caramel syrup (see recipe)', '3 oz vodka'],
	instructions: 'Mix ingredients together. Easy as that!',
	notes:
		'Because the caramel syrup has no fat, this infusion will maintain a nice, translucent color with no separation.'
};

export default CARAMEL_VODKA;
