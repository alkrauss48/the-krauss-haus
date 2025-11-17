import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const NEGRONI: Cocktail = {
	title: 'Negroni',
	description: 'Gin, campari, sweet vermouth, orange twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/negroni.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/negroni.png',
	slug: 'negroni',
	method: CocktailMethod.Stirred,
	servedIn: ServedIn.DoubleRocksGlass,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.FORDS
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
	variations: [
		{
			name: 'Kingston',
			description: 'Sub Smith & Cross Jamaican Rum for gin.',
			images: []
		},
		{
			name: 'Mezcal',
			description: 'Sub mezcal for gin.',
			images: []
		}
	],
	tags: [
		Tags.BaseAlcohol.GIN,
		Tags.BaseAlcohol.WINE,
		Tags.FlavorProfile.BITTER,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default NEGRONI;
