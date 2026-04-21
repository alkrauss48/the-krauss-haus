import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const PALOMA: Cocktail = {
	title: 'Paloma',
	description: 'Blanco tequila, grapefruit, lime, agave, soda water, salt.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/paloma.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/paloma.png',
	slug: 'paloma',
	method: CocktailMethod.Built,
	servedIn: ServedIn.HighballGlass,
	ice: Ice.SmallCubes,
	hasStraw: false,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.CIMARRON_BLANCO
		},
		{
			amount: '1.5oz',
			ingredient: Ingredients.Citrus.GRAPEFRUIT
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.AGAVE_NECTAR
		},
		{
			amount: '2oz',
			ingredient: Ingredients.Mixers.SODA_WATER
		},
		{
			label: 'Pinch of salt',
			ingredient: Ingredients.Other.SALT
		},
		{
			label: 'Rim: Coarse sea salt',
			ingredient: Ingredients.Other.SALT
		},
		{
			label: 'Garnish: Grapefruit wedge',
			ingredient: Ingredients.Citrus.GRAPEFRUIT_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.TEQUILA,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.FOLK,
		Tags.ServedIn.HIGHBALL_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default PALOMA;
