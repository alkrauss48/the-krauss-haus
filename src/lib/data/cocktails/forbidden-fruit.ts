import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import AISHA_SHARPE from '$lib/data/bartenders/aisha-sharpe';

const FORBIDDEN_FRUIT: Cocktail = {
	title: 'Forbidden Fruit',
	description:
		"Apple brandy, Pimm's #1, lemon, simple syrup, angostura bitters, peychaud's bitters, ginger beer.",
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/forbidden-fruit.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/forbidden-fruit.webp',
	slug: 'forbidden-fruit',
	createdBy: AISHA_SHARPE,
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.HighballGlass,
	ice: Ice.SmallCubes,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.LAIRDS_BIB
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Liqueurs.PIMMS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '1 tsp',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.PEYCHAUDS
		},
		{
			amount: '3oz',
			ingredient: Ingredients.Mixers.GINGER_BEER
		},
		{
			label: 'Garnish: Half lemon wheel',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		}
	],
	notes:
		'Shake everything except the ginger beer, strain over ice, then top with the ginger beer. Created by Aisha Sharpe in New York City, in response to a challenge from Liquor.com to fit as many holiday flavors as possible into a single drink.',
	tags: [
		Tags.BaseAlcohol.BRANDY,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.SPICED,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.BUBBLY,
		Tags.Technique.SHAKEN,
		Tags.Style.HIGHBALL,
		Tags.Origin.MODERN,
		Tags.AlcoholLevel.LOW,
		Tags.ServedIn.HIGHBALL_GLASS
	]
};

export default FORBIDDEN_FRUIT;
