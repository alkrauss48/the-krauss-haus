import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const FANCY_FREE: Cocktail = {
	title: 'Fancy Free',
	description: 'Bourbon, maraschino liqueur, aromatic and orange bitters, orange twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/fancy-free.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/fancy-free.webp',
	slug: 'fancy-free',
	method: CocktailMethod.Built,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.LargeCube,
	hasStraw: false,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.ELIJAH_CRAIG
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.MARASCHINO_LIQUEUER
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.ORANGE
		},
		{
			label: 'Garnish: Orange twist',
			ingredient: Ingredients.Citrus.ORANGE_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.Technique.BUILT,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default FANCY_FREE;
