import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const DIVISION_BELL: Cocktail = {
	title: 'Division Bell',
	slug: 'division-bell',
	description: 'Mezcal, aperol, maraschino liqueur, lime, grapefruit twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/division-bell.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/division-bell.png',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1.5oz Mezcal',
		'.75oz Aperol',
		'.5oz Maraschino liqueur',
		'.75oz Lime',
		'Garnish: Grapefruit twist'
	],
	tags: [
		Tags.BaseAlcohol.MEZCAL,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.BITTER,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.MODERN
	]
};

export default DIVISION_BELL;
