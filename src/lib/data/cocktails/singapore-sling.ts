import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const SINGAPORE_SLING: Cocktail = {
	title: 'Singapore Sling',
	subtitle: 'A sophisticated gin-based tiki classic',
	description:
		'Gin, cherry heering, benedictine, cointreau, grenadine, pineapple, lime, angostura bitters.',
	imagePath: 'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/singapore-sling.png',
	slug: 'singapore-sling',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1.5oz Gin',
		'.5oz Cherry Heering',
		'.5oz Benedictine',
		'.5oz Cointreau',
		'.5oz Grenadine',
		'3oz Pineapple juice',
		'.75oz Lime juice',
		'3 dashes Angostura bitters',
		'Garnish: Pineapple wedge and maraschino cherry'
	],
	tags: [
		Tags.BaseSpirit.GIN,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.SHAKEN,
		Tags.Syrups.GRENADINE,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.AlcoholLevel.HIGH
	]
};

export default SINGAPORE_SLING;
