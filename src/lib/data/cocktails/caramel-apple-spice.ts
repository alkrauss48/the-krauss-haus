import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const CARAMEL_APPLE_SPICE: Cocktail = {
	title: 'Caramel Apple Spice',
	subtitle: 'A Krauss Family original',
	description:
		'Applejack, goldschläger, caramel vodka, apple strudel liqueur, calvados, apple cider',
	imagePath: '/images/cocktails/winter/caramel-apple-spice.png',
	method: CocktailMethod.Built,
	ingredients: [
		'.5oz Applejack',
		'.5oz Goldschläger',
		'.5oz Caramel vodka',
		'.5oz Apple strudel liqueur',
		'Splash of Calvados',
		'5oz Apple cider',
		'Garnish: Cinnamon stick and maraschino cherry'
	]
};

export default CARAMEL_APPLE_SPICE;
