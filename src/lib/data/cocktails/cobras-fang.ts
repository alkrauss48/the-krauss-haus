import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const COBRAS_FANG: Cocktail = {
	title: "Cobra's Fang",
	subtitle: 'A dangerously smooth blend of rum and spice',
	description: 'Overproof demerara rum, falernum, fassionola, lime, orange, herbstura.',
	imagePath: '/images/cocktails/tiki/cobras-fang.png',
	slug: 'cobras-fang',
	method: CocktailMethod.FlashBlended,
	ingredients: [
		'1.5oz Hamilton 151 (Overproof Demerara rum)',
		'.25oz Falernum',
		'.5oz Fassionola',
		'.5oz Lime',
		'.5oz Orange',
		'1 dash Herbstura',
		'Garnish: Mint sprig and cinnamon stick'
	]
};

export default COBRAS_FANG;
