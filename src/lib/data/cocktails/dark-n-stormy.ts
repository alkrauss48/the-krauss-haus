import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const DARK_N_STORMY: Cocktail = {
	title: "Dark 'n' Stormy",
	description: 'Dark rum, ginger beer, lime.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/dark-n-stormy.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/dark-n-stormy.png',
	slug: 'dark-n-stormy',
	method: CocktailMethod.Built,
	servedIn: ServedIn.HighballGlass,
	ice: Ice.SmallCubes,
	hasStraw: false,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.CORUBA
		},
		{
			amount: '4oz',
			ingredient: Ingredients.Mixers.GINGER_BEER
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			label: 'Garnish: Lime wedge',
			ingredient: Ingredients.Citrus.LIME_GARNISH
		}
	],
	notes: 'Build ginger beer and lime over ice. Float dark rum on top.',
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.FOLK,
		Tags.ServedIn.HIGHBALL_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default DARK_N_STORMY;
