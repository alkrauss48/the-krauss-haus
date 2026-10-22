import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const WISCONSIN_OLD_FASHIONED: Cocktail = {
	title: 'Wisconsin Old Fashioned',
	description: 'Cognac, muddled orange and cherry, simple syrup, aromatic bitters, soda water.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/wisconsin-old-fashioned.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/wisconsin-old-fashioned.webp',
	slug: 'wisconsin-old-fashioned',
	method: CocktailMethod.Built,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.SmallCubes,
	hasStraw: false,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.ST_REMY_VSOP
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			amount: '5 dashes',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			label: '1 Maraschino cherry, muddled',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		},
		{
			label: '1 Orange slice, muddled',
			ingredient: Ingredients.Citrus.ORANGE_GARNISH
		},
		{
			amount: '2oz',
			ingredient: Ingredients.Mixers.SODA_WATER
		},
		{
			label: 'Garnish: Maraschino cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		},
		{
			label: 'Garnish: Orange twist',
			ingredient: Ingredients.Citrus.ORANGE_GARNISH
		}
	],
	notes:
		'Muddle the orange slice and maraschino cherry first, then add the cognac, simple syrup, and bitters. Stir, add ice, and top with soda water and garnishes.',
	tags: [
		Tags.BaseAlcohol.BRANDY,
		Tags.FlavorProfile.FRUITY,
		Tags.Technique.BUILT,
		Tags.Origin.FOLK,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default WISCONSIN_OLD_FASHIONED;
