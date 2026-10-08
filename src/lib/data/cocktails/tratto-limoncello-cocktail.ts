import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import CYNTHIA_TRAN from '$lib/data/bartenders/cynthia-tran';

const TRATTO_LIMONCELLO_COCKTAIL: Cocktail = {
	title: 'Tratto Limoncello Cocktail',
	description: 'Bourbon, limoncello, dry vermouth, orange bitters, angostura bitters, lemon twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/tratto-limoncello-cocktail.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/tratto-limoncello-cocktail.webp',
	slug: 'tratto-limoncello-cocktail',
	createdBy: CYNTHIA_TRAN,
	method: CocktailMethod.Stirred,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.LargeCube,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.EVAN_WILLIAMS_BIB
		},
		{
			amount: '1.5oz',
			ingredient: Ingredients.Liqueurs.LIMONCELLO
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BeerAndWine.DOLIN_VERMOUTH_DRY
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.ORANGE
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			label: 'Garnish: Lemon twist',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		}
	],
	notes: 'Created by Cynthia Tran at Tratto Restaurant in San Francisco.',
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.MODERN,
		Tags.AlcoholLevel.HIGH,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default TRATTO_LIMONCELLO_COCKTAIL;
