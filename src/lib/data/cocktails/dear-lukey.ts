import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const DEAR_LUKEY: Cocktail = {
	title: 'Dear Lukey',
	description: 'Amaro Lucano, Italicus, elderflower liqueur, dry vermouth, lime, cinnamon syrup.',
	subtitle: 'A Krauss Family original',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/dear-lukey.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/dear-lukey.png',
	slug: 'dear-lukey',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.LargeCube,
	hasStraw: true,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.Liqueurs.AMARO_LUCANO
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BeerAndWine.DOLIN_VERMOUTH_DRY
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.ITALICUS
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.ELDERFLOWER_LIQUEUR
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.CINNAMON_SYRUP
		},
		{
			label: 'Garnish: Lime twist',
			ingredient: Ingredients.Citrus.LIME_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.WINE,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.BITTER,
		Tags.FlavorProfile.SPICED,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.Origin.ORIGINAL,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.AlcoholLevel.LOW
	]
};

export default DEAR_LUKEY;
