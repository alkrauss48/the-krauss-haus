import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const REVOLVER: Cocktail = {
	title: 'Revolver',
	description: 'Bourbon, rye whiskey, coffee liqueur, orange bitters, flamed orange twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/revolver.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/revolver.webp',
	slug: 'revolver',
	method: CocktailMethod.Stirred,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.LargeCube,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.ELIJAH_CRAIG
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.RITTENHOUSE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.MR_BLACK
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.ORANGE
		},
		{
			label: 'Garnish: Flamed orange twist',
			ingredient: Ingredients.Citrus.ORANGE_GARNISH
		}
	],
	notes: 'Originally made with Bulleit, a higher-rye bourbon, hence the name "Revolver".',
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.MODERN,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default REVOLVER;
