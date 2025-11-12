import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const GIN_BASIL_SMASH: Cocktail = {
	title: 'Gin Basil Smash',
	description: 'Gin, lemon, simple syrup, basil.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/gin-basil-smash.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/gin-basil-smash.png',
	slug: 'gin-basil-smash',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.FORDS
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			amount: '12',
			label: 'Basil leaves',
			ingredient: Ingredients.HerbsAndSpices.BASIL
		},
		{
			label: 'Garnish: Basil sprig',
			ingredient: Ingredients.HerbsAndSpices.BASIL
		}
	],
	notes:
		'Muddle lemon and basil lightly in shaker tin. Add other ingredients with ice. Shake and strain. Garnish with basil sprig.',
	tags: [
		Tags.BaseAlcohol.GIN,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.MODERN,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default GIN_BASIL_SMASH;
