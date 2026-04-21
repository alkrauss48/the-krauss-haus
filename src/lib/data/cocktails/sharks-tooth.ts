import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import DONN_THE_BEACHCOMBER from '$lib/data/bartenders/donn-beach';

const SHARKS_TOOTH: Cocktail = {
	title: "Shark's Tooth",
	description:
		'Blended light rum, jamaican rum, lime, pineapple, rich simple syrup, maraschino cherry syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/sharks-tooth.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/sharks-tooth.png',
	slug: 'sharks-tooth',
	createdBy: DONN_THE_BEACHCOMBER,
	method: CocktailMethod.FlashBlended,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.PROBITAS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.PINEAPPLE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			amount: '1 tsp',
			ingredient: Ingredients.Syrups.MARASCHINO_CHERRY_SYRUP
		},
		{
			label: 'Sidecar: 1oz Coruba',
			ingredient: Ingredients.BaseSpirits.CORUBA
		},
		{
			label: 'Garnish: Maraschino cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		},
		{
			label: 'Garnish: Pineapple slice',
			ingredient: Ingredients.Citrus.PINEAPPLE_GARNISH
		}
	],
	notes:
		'Flash blend and pour into a mai tai glass. Pour the sidecar in when you’re ready to drink.',
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.Technique.FLASH_BLENDED,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default SHARKS_TOOTH;
