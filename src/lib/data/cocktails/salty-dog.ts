import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const SALTY_DOG: Cocktail = {
	title: 'Salty Dog',
	description: 'Vodka, grapefruit, salt.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/salty-dog.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/salty-dog.png',
	slug: 'salty-dog',
	method: CocktailMethod.Built,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.SmallCubes,
	hasStraw: false,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.MONOPOLOWA
		},
		{
			amount: '4oz',
			ingredient: Ingredients.Citrus.GRAPEFRUIT
		},
		{
			label: 'Salt rim',
			ingredient: Ingredients.Other.SALT
		}
	],
	variations: [
		{
			name: 'Greyhound',
			ingredients: ['No salt rim.'],
			images: []
		}
	],
	tags: [
		Tags.BaseAlcohol.VODKA,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.CLASSIC,
		Tags.PrepTime.SIMPLE_PREP,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default SALTY_DOG;
