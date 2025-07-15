import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const MERRY_MULE: Cocktail = {
	title: 'Merry Mule',
	subtitle: "Served as the bride's drink at our wedding",
	description: 'Vodka, cinnamon syrup, lime, ginger beer.',
	imagePath: '/images/cocktails/winter/merry-mule.png',
	method: CocktailMethod.Built,
	ingredients: [
		'2oz vodka',
		'.5 oz Cinnamon syrup',
		'1/2 Lime',
		'4oz Ginger beer',
		'Garnish: Cinnamon stick and apple slices'
	]
};

export default MERRY_MULE;
