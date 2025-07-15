import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const IRON_RANGER: Cocktail = {
	title: 'Iron Ranger',
	subtitle: 'A bourbon tiki with a spicy kick',
	description: 'Bourbon, falernum, demerara syrup, lemon, pineapple.',
	imagePath: '/images/cocktails/tiki/iron-ranger.png',
	method: CocktailMethod.Shaken,
	ingredients: [
		'2oz Bourbon',
		'.5oz Falernum',
		'.5oz Demerara syrup',
		'.75oz Lemon',
		'1oz Pineapple juice',
		'Garnish: Mint sprig and freshly grated cinnamon'
	]
};

export default IRON_RANGER;
