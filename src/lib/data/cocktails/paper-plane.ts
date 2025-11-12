import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const PAPER_PLANE: Cocktail = {
	title: 'Paper Plane',
	slug: 'paper-plane',
	description: 'Bourbon, amaro nonino, aperol, lemon.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/paper-plane.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/paper-plane.png',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.CoupeGlass,
	ingredients: [
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.EVAN_WILLIAMS_BIB
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Liqueurs.AMARO_NONINO
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Liqueurs.APEROL
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LEMON
		}
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.BITTER,
		Tags.AlcoholLevel.LOW,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.MODERN,
		Tags.ServedIn.COUPE_GLASS
	]
};

export default PAPER_PLANE;
