import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const RAMOS_GIN_FIZZ: Cocktail = {
	title: 'Ramos Gin Fizz',
	description:
		'Gin, lemon, lime, simple syrup, egg white, heavy cream, soda water, orange blossom water.',
	imagePath: 'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/ramos-gin-fizz.png',
	slug: 'ramos-gin-fizz',
	method: CocktailMethod.Built,
	ingredients: [
		'2oz Gin',
		'.5oz Lemon',
		'.5oz Lime',
		'.5oz Rich simple syrup',
		'1 Egg white',
		'1oz Heavy cream',
		'3 drops Orange blossom water',
		'Soda water'
	],
	notes:
		'Shake all ingredients, sans soda water, with 3 1" ice cubes, for 4 minutes until all ice is dissolved. Add a splash of soda water to the glass. Pour contents into glass. Place in freezer for 2-3 minutes. Pour rest of soda water down through straw to lift up the foam (a thin funnel may help).',
	tags: [
		Tags.BaseSpirit.GIN,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.CREAMY,
		Tags.Technique.BUILT,
		Tags.Syrups.RICH_SIMPLE_SYRUP,
		Tags.Origin.CLASSIC
	]
};

export default RAMOS_GIN_FIZZ;
