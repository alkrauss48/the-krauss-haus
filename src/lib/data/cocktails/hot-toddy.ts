import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const HOT_TODDY: Cocktail = {
	title: 'Hot Toddy',
	slug: 'hot-toddy',
	description: 'Bourbon, benedictine, spiced tea, honey, lemon, cinnamon.',
	imagePath: '/images/cocktails/winter/hot-toddy.png',
	method: CocktailMethod.Built,
	ingredients: [
		'1.5oz Bourbon',
		'.5oz Benedictine',
		'5oz Spiced tea',
		'Honey to taste',
		'1/4 Lemon, juiced',
		'Garnish: Cinnamon stick, lemon wheel, and maraschino cherry'
	]
};

export default HOT_TODDY;
