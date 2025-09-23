import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import CINNAMON_SYRUP from '../recipes/cinnamon-syrup';

const DONGA_PUNCH: Cocktail = {
	title: 'Donga Punch',
	description: 'Jamaican rum, blended rum, fassionola, lemon.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/donga-punch.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/donga-punch.png',
	slug: 'donga-punch',
	method: CocktailMethod.Shaken,
	ingredients: [
		'2oz Clement Barrel Select (Aged Rhum Agricole)',
		'1oz Grapefruit',
		{
			amount: '.5oz',
			recipe: CINNAMON_SYRUP
		},
		'.75oz Lime'
	],
	tags: [
		Tags.BaseSpirit.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC
	]
};

export default DONGA_PUNCH;
