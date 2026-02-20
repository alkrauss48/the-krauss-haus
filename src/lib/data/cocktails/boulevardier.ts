import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const BOULEVARDIER: Cocktail = {
	title: 'Boulevardier',
	description: 'Rye whiskey, campari, sweet vermouth, orange twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/boulevardier.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/boulevardier.png',
	slug: 'boulevardier',
	method: CocktailMethod.Stirred,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.LargeCube,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.RITTENHOUSE
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Liqueurs.CAMPARI
		},
		{
			amount: '1oz',
			ingredient: Ingredients.BeerAndWine.COCCHI_VERMOUTH_DI_TORINO
		},
		{
			label: 'Garnish: Orange twist',
			ingredient: Ingredients.Citrus.ORANGE_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.BaseAlcohol.WINE,
		Tags.FlavorProfile.BITTER,
		Tags.AlcoholLevel.HIGH,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default BOULEVARDIER;
