import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const GRASSHOPPER: Cocktail = {
	title: 'Grasshopper',
	description: 'Vodka, mint syrup, crème de cacao, heavy cream.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/grasshopper.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/grasshopper.png',
	slug: 'grasshopper',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.CoupeGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.MONOPOLOWA
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Syrups.MINT_SYRUP
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Liqueurs.CREME_DE_CACAO
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Other.HEAVY_CREAM
		}
	],
	notes: 'Shake with ice and strain into a chilled coupe glass.',
	tags: [
		Tags.BaseAlcohol.VODKA,
		Tags.FlavorProfile.CREAMY,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.SHAKEN,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.COUPE_GLASS,
		Tags.AlcoholLevel.LOW
	]
};

export default GRASSHOPPER;
