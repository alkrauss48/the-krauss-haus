import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const RUM_RUNNER: Cocktail = {
	title: 'Rum Runner',
	description:
		'Jamaican rum blend, stone fruit liqueur, dark berry crème, pineapple, grenadine, lime, orange.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/rum-runner.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/rum-runner.png',
	slug: 'rum-runner',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.HighballGlass,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.CORUBA
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_SIGNATURE
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.BaseSpirits.WRAY_AND_NEPHEW
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.STONE_FRUIT_LIQUEUR
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.HOUSE_DARK_BERRY_CREME
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.PINEAPPLE
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.GRENADINE
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.ORANGE
		},
		{
			label: 'Garnish: Orange wheel',
			ingredient: Ingredients.Citrus.ORANGE_GARNISH
		},
		{
			label: 'Garnish: Maraschino cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		}
	],
	notes:
		'Built in 1972 at the Holiday Isle Tiki Bar in the Florida Keys. The house stone fruit liqueur replaces the original crème de banane.',
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.PrepTime.COMPLEX_PREP,
		Tags.AlcoholLevel.HIGH
	]
};

export default RUM_RUNNER;
