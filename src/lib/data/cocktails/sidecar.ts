import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const SIDECAR: Cocktail = {
	title: 'Sidecar',
	description: 'Cognac, dry curaçao, lemon, orange bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/sidecar.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/sidecar.png',
	slug: 'sidecar',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1.5oz Cognac',
		'1oz Pierre Ferrand Dry Curaçao',
		'.75oz Lemon',
		'1 dash Orange bitters',
		'Garnish: Sugar rim'
	],
	tags: [
		Tags.BaseSpirit.BRANDY,
		Tags.FlavorProfile.CITRUS,
		Tags.AlcoholLevel.HIGH,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.CLASSIC
	]
};

export default SIDECAR;
