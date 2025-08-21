import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const SEA_LEGS: Cocktail = {
	title: 'Sea Legs',
	description: 'Single malt scotch, mezcal, orgeat, lime, celery bitters, angostura bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/sea-legs.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/sea-legs.png',
	slug: 'sea-legs',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1oz Single malt scotch',
		'1oz Mezcal',
		'.75oz Orgeat',
		'.75oz Lime',
		'2 dashes Celery bitters',
		'Garnish: salted rim and dash of angostura bitters'
	],
	tags: [
		Tags.BaseSpirit.WHISKEY,
		Tags.BaseSpirit.MEZCAL,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.SHAKEN,
		Tags.Syrups.ORGEAT,
		Tags.Origin.MODERN
	]
};

export default SEA_LEGS;
