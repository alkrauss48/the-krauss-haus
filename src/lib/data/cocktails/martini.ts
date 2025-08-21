import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const MARTINI: Cocktail = {
	title: 'Martini',
	description: 'Gin, dry vermouth, orange bitters, olives.',
	imagePath: 'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/martini.png',
	slug: 'martini',
	method: CocktailMethod.Stirred,
	ingredients: ['2oz Gin', '1oz Dry vermouth', '2 dashes Orange bitters', 'Garnish: Olive'],
	tags: [
		Tags.BaseSpirit.GIN,
		Tags.AlcoholLevel.HIGH,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC
	]
};

export default MARTINI;
