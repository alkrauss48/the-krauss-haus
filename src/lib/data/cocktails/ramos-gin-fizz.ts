import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import RICH_SIMPLE_SYRUP from '../recipes/rich-simple-syrup';

const RAMOS_GIN_FIZZ: Cocktail = {
	title: 'Ramos Gin Fizz',
	description:
		'Gin, lemon, lime, simple syrup, egg white, heavy cream, soda water, orange blossom water.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/ramos-gin-fizz.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/ramos-gin-fizz.png',
	slug: 'ramos-gin-fizz',
	method: CocktailMethod.Built,
	ingredients: [
		'2oz Gin',
		'.5oz Lemon',
		'.5oz Lime',
		{
			amount: '.5oz',
			recipe: RICH_SIMPLE_SYRUP
		},
		'1 Egg white',
		'1oz Heavy cream',
		'3 drops Orange blossom water',
		'Soda water'
	],
	notes:
		'Shake all ingredients, sans soda water, with 3 1" ice cubes, for 4 minutes. Add a splash of soda water to an 8-10oz single rocks or highball glass. Strain into glass. Place in fridge for 2-3 minutes to allow foam to set up. Pour rest of soda water down through straw via a funnel to lift up the foam over the rim of the glass.',
	tags: [
		Tags.BaseSpirit.GIN,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.CREAMY,
		Tags.Technique.BUILT,

		Tags.Origin.CLASSIC
	]
};

export default RAMOS_GIN_FIZZ;
