import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const MISSIONARYS_DOWNFALL: Cocktail = {
	title: "Missionary's Downfall",
	description: 'Miller high life, aperol, lemon',
	imagePath: '/images/cocktails/missionarys-downfall.png',
	slug: 'missionarys-downfall',
	method: CocktailMethod.Blended,
	ingredients: [
		'1oz Probitas (Blended light rum)',
		'.5oz Peach liqueur',
		'1oz Honey syrup',
		'.5oz Lime',
		'56g (1/4 cup) diced fresh pineapple',
		'12 large mint leaves',
		'158g (3/4 cup) crushed ice'
	],
	notes:
		'Heat the pineapple for 1-2 minutes (this deactivates the bromelain, which is what gives pineapple its "bite"). Blend all ingredients without ice, until mint is shredded. Add ice and blend just enough to make it all smooth.'
};

export default MISSIONARYS_DOWNFALL;
