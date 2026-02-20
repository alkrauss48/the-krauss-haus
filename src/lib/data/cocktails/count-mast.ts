import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const COUNT_MAST: Cocktail = {
	title: 'Count Mast',
	description: 'Gin, jägermeister, sweet vermouth, lemon twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/count-mast.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/count-mast.png',
	slug: 'count-mast',
	method: CocktailMethod.Stirred,
	servedIn: ServedIn.CoupeGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.FORDS
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Liqueurs.JAGERMEISTER
		},
		{
			amount: '1oz',
			ingredient: Ingredients.BeerAndWine.COCCHI_VERMOUTH_DI_TORINO
		},
		{
			label: 'Garnish: Lemon twist',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		}
	],
	notes:
		'A Negroni variation that substitutes Jägermeister for Campari, creating a sweeter and more herbaceous profile with subtle licorice notes.',
	tags: [
		Tags.BaseAlcohol.GIN,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.MODERN,
		Tags.ServedIn.COUPE_GLASS,
		Tags.AlcoholLevel.HIGH
	]
};

export default COUNT_MAST;
