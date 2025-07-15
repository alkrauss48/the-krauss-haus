import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const ANCIENT_MARINER: Cocktail = {
	title: 'Ancient Mariner',
	subtitle: 'A complex blend of spice and citrus',
	description: 'Blended rum, demerara rum, allspice dram, lime, grapefruit, demerara syrup.',
	imagePath: '/images/cocktails/tiki/ancient-mariner.png',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1oz Probitas (Blended light rum)',
		'1oz Hamilton 86 (Demerara rum)',
		'.25oz Allspice dram',
		'.5oz Demerara syrup',
		'.5oz Lime',
		'.5oz Grapefruit',
		'Garnish: Mint sprig and lime wedge'
	]
};

export default ANCIENT_MARINER;
