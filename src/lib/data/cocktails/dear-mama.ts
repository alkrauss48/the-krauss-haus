import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const DEAR_MAMA: Cocktail = {
	title: 'Dear Mama',
	description: 'Amaro Lucano, Italicus, elderflower liqueur, dry vermouth, lime, cinnamon syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/dear-mama.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/dear-mama.png',
	slug: 'dear-mama',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.SmallCubes,
	hasStraw: false,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.Liqueurs.AMARO_LUCANO
		},
		{
			amount: '2 tsp',
			ingredient: Ingredients.Liqueurs.ITALICUS
		},
		{
			amount: '2 tsp',
			ingredient: Ingredients.Liqueurs.ELDERFLOWER_LIQUEUR
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BeerAndWine.DOLIN_VERMOUTH_DRY
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '1 tsp',
			ingredient: Ingredients.Syrups.CINNAMON_SYRUP
		}
	],
	notes: 'A fun cocktail from the makers of Amaro Lucano that introduces you to bitter flavors.',
	tags: [
		Tags.BaseAlcohol.WINE,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.SPICED,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.AlcoholLevel.LOW
	]
};

export default DEAR_MAMA;
