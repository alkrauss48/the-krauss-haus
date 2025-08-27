import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import GRENADINE from '../recipes/grenadine';

const JACK_ROSE: Cocktail = {
	title: 'Jack Rose',
	description: 'Calvados, applejack, grenadine, lemon.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/jack-rose.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/jack-rose.png',
	slug: 'jack-rose',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1oz Calvados',
		'1oz Applejack',
		{
			amount: '.75oz',
			recipe: GRENADINE
		},
		'.75oz Lemon',
		'Garnish: Lemon twist'
	],
	tags: [
		Tags.BaseSpirit.BRANDY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,

		Tags.Style.SOUR,
		Tags.Origin.CLASSIC
	]
};

export default JACK_ROSE;
