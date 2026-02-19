import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const BITTER_GIUSEPPE: Cocktail = {
	title: 'Bitter Giuseppe',
	description: 'Amaro lucano, fernet branca, sweet vermouth, lemon, orange bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/bitter-guiseppe.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/bitter-guiseppe.png',
	slug: 'bitter-guiseppe',
	method: CocktailMethod.Stirred,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.LargeCube,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.75oz',
			ingredient: Ingredients.Liqueurs.AMARO_LUCANO
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.FERNET_BRANCA
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.BeerAndWine.COCCHI_VERMOUTH_DI_TORINO
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '6 dashes',
			ingredient: Ingredients.Bitters.ORANGE
		},
		{
			label: 'Garnish: Lemon twist',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.WINE,
		Tags.FlavorProfile.BITTER,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.MODERN,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default BITTER_GIUSEPPE;
