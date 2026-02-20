import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const NEGRONI_BIANCO_BERGAMOTTO: Cocktail = {
	title: 'Negroni Bianco Bergamotto',
	description: 'Gin, italicus, dry vermouth, lemon twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/negroni-bianco-bergamotto.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/negroni-bianco-bergamotto.png',
	slug: 'negroni-bianco-bergamotto',
	method: CocktailMethod.Stirred,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.LargeCube,
	hasStraw: false,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.FORDS
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Liqueurs.ITALICUS
		},
		{
			amount: '1oz',
			ingredient: Ingredients.BeerAndWine.DOLIN_VERMOUTH_DRY
		},
		{
			label: 'Garnish: Lemon twist',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.GIN,
		Tags.BaseAlcohol.WINE,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.MODERN,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default NEGRONI_BIANCO_BERGAMOTTO;
