import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import ERICK_CASTRO from '../bartenders/erick-castro';

const PINA_VERDE: Cocktail = {
	title: 'Piña Verde',
	description: 'Green chartreuse, pineapple, lime, cream of coconut, mint.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/pina-verde.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/pina-verde.webp',
	slug: 'pina-verde',
	createdBy: ERICK_CASTRO,
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.HighballGlass,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.Liqueurs.GREEN_CHARTREUSE
		},
		{
			amount: '1.5oz',
			ingredient: Ingredients.Citrus.PINEAPPLE
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Other.CREAM_OF_COCONUT
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		}
	],
	tags: [
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.CREAMY,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.MODERN,
		Tags.ServedIn.HIGHBALL_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default PINA_VERDE;
