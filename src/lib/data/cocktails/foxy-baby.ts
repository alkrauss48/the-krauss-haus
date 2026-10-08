import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import CLEVYR from '$lib/data/bartenders/clevyr';

const FOXY_BABY: Cocktail = {
	title: 'Foxy Baby',
	description:
		'Dark rum, jalapeño tequila, elderflower liqueur, orange, chili bitters, orange bitters, limonata.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/foxy-baby.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/foxy-baby.webp',
	slug: 'foxy-baby',
	createdBy: CLEVYR,
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.SmallCubes,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.25oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_SIGNATURE
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.BaseSpirits.JALAPENO_TEQUILA
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.ELDERFLOWER_LIQUEUR
		},
		{
			amount: '3 dashes',
			ingredient: Ingredients.Bitters.ORANGE
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.CHILI
		},
		{
			label: '1/2 orange, juiced',
			ingredient: Ingredients.Citrus.ORANGE
		},
		{
			amount: '2oz',
			ingredient: Ingredients.Mixers.SANPELLEGRINO_LIMONATA
		},
		{
			label: 'Garnish: Orange twist',
			ingredient: Ingredients.Citrus.ORANGE_GARNISH
		},
		{
			label: 'Garnish: Maraschino cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		}
	],
	notes:
		'Shake everything except the limonata, strain over ice, then top with the limonata. Created by Clevyr, a software company in OKC, as a team exercise during a virtual diaper party over Zoom in the midst of the Covid-19 pandemic. Clevyr\'s mascot is the fox, hence the name "Foxy Baby." Each employee contributed in some way, with a memory or a story, to the creation of this cocktail.',
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.SPICED,
		Tags.FlavorProfile.BUBBLY,
		Tags.Technique.SHAKEN,
		Tags.Origin.ORIGINAL,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default FOXY_BABY;
