import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const MARGARITA: Cocktail = {
	title: 'Margarita',
	description: 'Blanco tequila, cointreau, lime, agave nectar.',
	imagePath: 'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/margarita.png',
	slug: 'margarita',
	method: CocktailMethod.Shaken,
	ingredients: [
		'2oz Blanco tequila',
		'.75oz Cointreau',
		'.75oz Lime',
		'.25oz Agave nectar',
		'Garnish: Lime wedge'
	],
	variations: [
		{
			name: 'Spicy',
			description: 'Swap .5oz of tequila with jalepeño infused tequila.',
			images: []
		}
	],
	tags: [
		Tags.BaseSpirit.TEQUILA,
		Tags.FlavorProfile.CITRUS,
		Tags.AlcoholLevel.HIGH,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.CLASSIC,
		Tags.Infusions.JALAPENO_TEQUILA
	]
};

export default MARGARITA;
