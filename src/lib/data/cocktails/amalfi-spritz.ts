import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const AMALFI_SPRITZ: Cocktail = {
	title: 'Amalfi Spritz',
	description: 'Prosecco, limoncello, soda water, lemon wheel, mint sprig.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/amalfi-spritz.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/amalfi-spritz.webp',
	slug: 'amalfi-spritz',
	method: CocktailMethod.Built,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.SmallCubes,
	hasStraw: false,
	ingredients: [
		{
			amount: '3oz',
			ingredient: Ingredients.BeerAndWine.PROSECCO
		},
		{
			amount: '2oz',
			ingredient: Ingredients.Liqueurs.LIMONCELLO
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Mixers.SODA_WATER
		},
		{
			label: 'Garnish: Lemon wheel',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		}
	],
	tags: [
		Tags.BaseAlcohol.WINE,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.BUBBLY,
		Tags.AlcoholLevel.LOW,
		Tags.Technique.BUILT,
		Tags.Origin.MODERN,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default AMALFI_SPRITZ;
