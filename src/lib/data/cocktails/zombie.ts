import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const ZOMBIE: Cocktail = {
	title: 'Zombie',
	subtitle: 'The original heavy-weight tiki classic. Max 2 per person.',
	description:
		"Blended light rum, Jamaican rum, overproof demerara rum, falernum, Donn's Mix, lime, grenadine, herbstura.",
	imagePath: '/images/cocktails/tiki/zombie.png',
	method: CocktailMethod.FlashBlended,
	ingredients: [
		'.5oz Probitas (Blended light rum)',
		'.5oz Coruba (Jamaican rum)',
		'.1oz Appleton Estate Signature (Jamaican rum)',
		'.1oz Hamilton 151 (Overproof Demerara rum)', // 151 is a 151 proof rum, which is 75.5% alcohol by volume.
		".5oz Donn's Mix (1/2 Grapefruit, 1/2 Cinnamon Syrup)",
		'.5oz Falernum',
		'.75oz Lime',
		'1tsp Grenadine',
		'1 dash Herbstura',
		'Garnish: Mint sprig'
	]
};

export default ZOMBIE;
