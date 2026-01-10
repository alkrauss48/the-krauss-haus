import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const DR_FUNK: Cocktail = {
	title: 'Dr. Funk',
	description: 'Blended rum, absinthe, lime, grenadine, simple syrup, mint.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/dr-funk.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/dr-funk.png',
	slug: 'dr-funk',
	method: CocktailMethod.FlashBlended,
	servedIn: ServedIn.DoubleRocksGlass,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.PROBITAS
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.BaseSpirits.ABSINTHE
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.GRENADINE
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Mixers.SODA_WATER
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default DR_FUNK;
