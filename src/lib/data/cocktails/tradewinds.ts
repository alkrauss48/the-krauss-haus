import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const TRADEWINDS: Cocktail = {
	title: 'Tradewinds',
	description: 'Jamaican rum blend, stone fruit liqueur, lemon, coconut cream.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/tradewinds.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/tradewinds.png',
	slug: 'tradewinds',
	method: CocktailMethod.FlashBlended,
	servedIn: ServedIn.HighballGlass,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_SIGNATURE
		},
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.CORUBA
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Liqueurs.STONE_FRUIT_LIQUEUR
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Other.CREAM_OF_COCONUT
		},
		{
			label: 'Garnish: Lemon wheel',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		}
	],
	notes: 'The house stone fruit liqueur replaces the traditional apricot liqueur.',
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CREAMY,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.FLASH_BLENDED,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.AlcoholLevel.HIGH,
		Tags.ServedIn.HIGHBALL_GLASS
	]
};

export default TRADEWINDS;
