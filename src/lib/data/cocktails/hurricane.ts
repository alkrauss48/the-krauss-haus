import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const HURRICANE: Cocktail = {
	title: 'Hurricane',
	subtitle: 'A powerful blend of rums with a tropical twist',
	description: 'Jamaican rum, blended rum, fassionola, lemon.',
	imagePath: 'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/hurricane.png',
	slug: 'hurricane',
	method: CocktailMethod.Shaken,
	ingredients: [
		'.75oz Coruba (Jamaican rum)',
		'.75oz Appleton Estate Signature (Jamaican rum)',
		'.5oz Probitas (Blended light rum)',
		'1oz Fassionola',
		'.75oz Lemon',
		'Garnish: Lemon wheel'
	],
	tags: [
		Tags.BaseSpirit.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.Technique.SHAKEN,
		Tags.Syrups.FASSIONOLA,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC
	]
};

export default HURRICANE;
