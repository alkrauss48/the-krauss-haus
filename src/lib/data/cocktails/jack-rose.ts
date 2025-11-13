import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const JACK_ROSE: Cocktail = {
	title: 'Jack Rose',
	description: 'Calvados, applejack, grenadine, lemon.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/jack-rose.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/jack-rose.png',
	slug: 'jack-rose',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.CoupeGlass,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.BOULARD_VSOP
		},
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.LAIRDS_BIB
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Syrups.GRENADINE
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			label: 'Garnish: Lemon twist',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.BRANDY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.COUPE_GLASS
	]
};

export default JACK_ROSE;
