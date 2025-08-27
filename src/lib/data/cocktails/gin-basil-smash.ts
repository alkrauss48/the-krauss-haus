import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import RICH_SIMPLE_SYRUP from '../recipes/rich-simple-syrup';

const GIN_BASIL_SMASH: Cocktail = {
	title: 'Gin Basil Smash',
	description: 'Gin, lemon, simple syrup, basil.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/gin-basil-smash.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/gin-basil-smash.png',
	slug: 'gin-basil-smash',
	method: CocktailMethod.Shaken,
	ingredients: [
		'2oz Gin',
		'.75oz Lemon',
		{
			amount: '.5oz',
			recipe: RICH_SIMPLE_SYRUP
		},
		'12 Basil leaves',
		'Garnish: Basil sprig'
	],
	notes:
		'Muddle lemon and basil lightly in shaker tin. Add other ingredients with ice. Shake and strain. Garnish with basil sprig.',
	tags: [
		Tags.BaseSpirit.GIN,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.SHAKEN,

		Tags.Style.SOUR,
		Tags.Origin.MODERN
	]
};

export default GIN_BASIL_SMASH;
