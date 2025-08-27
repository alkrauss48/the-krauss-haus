import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import RICH_SIMPLE_SYRUP from '../recipes/rich-simple-syrup';

const DAIQUIRI: Cocktail = {
	title: 'Daiquiri',
	description: 'Light rum, lime, simple syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/daiquiri.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/daiquiri.png',
	slug: 'daiquiri',
	method: CocktailMethod.Shaken,
	ingredients: [
		'2oz Probitas',
		'.75oz Lime',
		{
			amount: '.5oz',
			recipe: RICH_SIMPLE_SYRUP
		},
		'Garnish: Lime wedge'
	],
	tags: [
		Tags.BaseSpirit.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,

		Tags.Style.SOUR,
		Tags.Origin.CLASSIC
	]
};

export default DAIQUIRI;
