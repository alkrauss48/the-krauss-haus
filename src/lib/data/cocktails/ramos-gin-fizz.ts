import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

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
	servedIn: ServedIn.HighballGlass,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.FORDS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			label: '1 Egg white',
			ingredient: Ingredients.Other.EGG
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Other.HEAVY_CREAM
		},
		{
			amount: '3 drops',
			ingredient: Ingredients.Other.ORANGE_BLOSSOM_WATER
		},
		{
			label: 'Soda water',
			ingredient: Ingredients.Mixers.SODA_WATER
		}
	],
	notes:
		'Shake all ingredients, sans soda water, with 3 1" ice cubes, for 4 minutes. Add a splash of soda water to an 8-10oz single rocks or highball glass. Strain into glass. Place in fridge for 2-3 minutes to allow foam to set up. Pour rest of soda water down through straw via a funnel to lift up the foam over the rim of the glass.',
	tags: [
		Tags.BaseAlcohol.GIN,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.CREAMY,
		Tags.Technique.BUILT,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.HIGHBALL_GLASS
	]
};

export default RAMOS_GIN_FIZZ;
