import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const RADLER: Cocktail = {
	title: 'Radler',
	description: 'German helles or pilsner lager, sparkling lemonade.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/radler.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/radler.png',
	slug: 'radler',
	method: CocktailMethod.Built,
	ingredients: ['50% German helles or pilsner lager', '50% Sanpellegrino Limonata'],
	notes:
		"No need to measure. A 60/40 ratio of beer to lemonade works well too. I'm partial to Bitburger Pils.",
	tags: [
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.AlcoholLevel.LOW,
		Tags.Origin.FOLK
	]
};

export default RADLER;
