import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const WHISKEY_GINGER: Cocktail = {
	title: 'Whiskey Ginger',
	description: 'Whiskey, ginger beer, lemon, angostura bitters, salt.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/whiskey-ginger.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/whiskey-ginger.png',
	slug: 'whiskey-ginger',
	method: CocktailMethod.Built,
	servedIn: ServedIn.HighballGlass,
	ice: Ice.SmallCubes,
	hasStraw: false,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.EVAN_WILLIAMS_BIB
		},
		{
			amount: '3.5oz',
			ingredient: Ingredients.Mixers.GINGER_BEER
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			label: 'Pinch of salt',
			ingredient: Ingredients.Other.SALT
		},
		{
			label: 'Garnish: Lemon wedge',
			ingredient: Ingredients.Citrus.LIME_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.SPICED,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.MODERN,
		Tags.ServedIn.HIGHBALL_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default WHISKEY_GINGER;
