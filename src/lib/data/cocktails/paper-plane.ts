import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const PAPER_PLANE: Cocktail = {
	title: 'Paper Plane',
	slug: 'paper-plane',
	description: 'Bourbon, amaro nonino, aperol, lemon.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/paper-plane.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/paper-plane.png',
	method: CocktailMethod.Shaken,
	ingredients: ['.75oz Bourbon', '.75oz Amaro Nonino', '.75oz Aperol', '.75oz Lemon'],
	tags: [
		Tags.BaseSpirit.WHISKEY,
		Tags.BaseSpirit.AMARO,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.BITTER,
		Tags.AlcoholLevel.LOW,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.MODERN
	]
};

export default PAPER_PLANE;
