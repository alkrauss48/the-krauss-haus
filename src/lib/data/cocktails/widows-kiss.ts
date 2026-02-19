import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const WIDOWS_KISS: Cocktail = {
	title: "Widow's Kiss",
	description: 'Apple brandy, yellow chartreuse, benedictine, angostura bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/widows-kiss.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/widows-kiss.png',
	slug: 'widows-kiss',
	method: CocktailMethod.Stirred,
	servedIn: ServedIn.NickAndNoraGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.BOULARD_VSOP
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.YELLOW_CHARTREUSE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.BENEDICTINE
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			label: 'Garnish: Maraschino cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		}
	],
	tags: [
		Tags.BaseAlcohol.BRANDY,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.NICK_AND_NORA_GLASS,
		Tags.AlcoholLevel.HIGH
	]
};

export default WIDOWS_KISS;
