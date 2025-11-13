import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const VIEUX_CARRE: Cocktail = {
	title: 'Vieux Carré',
	description:
		"Rye whiskey, cognac, sweet vermouth, benedictine, angostura bitters, peychaud's bitters, lemon twist.",
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/vieux-carre.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/vieux-carre.png',
	slug: 'vieux-carre',
	method: CocktailMethod.Stirred,
	servedIn: ServedIn.DoubleRocksGlass,
	ingredients: [
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.RITTENHOUSE
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.ST_REMY_VSOP
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.BeerAndWine.COCCHI_VERMOUTH_DI_TORINO
		},
		{
			amount: '1 tsp',
			ingredient: Ingredients.Liqueurs.BENEDICTINE
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.PEYCHAUDS
		},
		{
			label: 'Garnish: Lemon twist',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.BaseAlcohol.BRANDY,
		Tags.BaseAlcohol.WINE,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default VIEUX_CARRE;
