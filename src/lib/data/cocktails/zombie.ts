import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const ZOMBIE: Cocktail = {
	title: 'Zombie',
	subtitle: 'The original heavy-weight tiki classic. Max 2 per person.',
	description:
		"Blended light rum, Jamaican rum, overproof rum, falernum, Donn's Mix, lime, grenadine, herbstura.",
	imagePath: '/images/cocktails/tiki/zombie.png',
	slug: 'zombie',
	method: CocktailMethod.FlashBlended,
	ingredients: [
		'1oz Appleton Estate Signature (Jamaican rum)',
		'.5oz Probitas (Blended light rum)',
		'.5oz Coruba (Jamaican rum)',
		'.5oz Hamilton 151 (Overproof Demerara rum)',
		'.5oz Planteray OFTD (Overproof Blended rum)',
		".5oz Donn's Mix (2:1 ratio of Grapefruit to Cinnamon Syrup)",
		'.5oz Falernum',
		'.75oz Lime',
		'1tsp Grenadine',
		'1 dash Herbstura',
		'Garnish: Mint sprig'
	]
};

export default ZOMBIE;
