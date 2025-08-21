import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const PENICILLIN: Cocktail = {
	title: 'Penicillin',
	description: 'Blended scotch, single malt scotch, honey-ginger syrup, lemon.',
	imagePath: 'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/penicillin.png',
	slug: 'penicillin',
	method: CocktailMethod.Shaken,
	ingredients: [
		'2oz Blended scotch',
		'.25oz Laphroaig',
		'.75oz Honey-ginger syrup',
		'.75oz Lemon',
		'Garnish: Candied ginger'
	],
	tags: [
		Tags.BaseSpirit.WHISKEY,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.SHAKEN,
		Tags.Syrups.HONEY_GINGER_SYRUP,
		Tags.Style.SOUR,
		Tags.Origin.MODERN
	]
};

export default PENICILLIN;
