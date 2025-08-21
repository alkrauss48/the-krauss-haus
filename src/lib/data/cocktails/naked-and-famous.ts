import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const NAKED_AND_FAMOUS: Cocktail = {
	title: 'Naked and Famous',
	description: 'Mezcal, yellow chartreuse, aperol, lime',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/naked-and-famous.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/naked-and-famous.png',
	slug: 'naked-and-famous',
	method: CocktailMethod.Shaken,
	ingredients: ['.75oz Mezcal', '.75oz Yellow Chartreuse', '.75oz Aperol', '.75oz Lime'],
	tags: [
		Tags.BaseSpirit.MEZCAL,
		Tags.BaseSpirit.AMARO,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.MODERN
	]
};

export default NAKED_AND_FAMOUS;
