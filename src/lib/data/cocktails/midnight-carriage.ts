import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import AARON_KRAUSS from '$lib/data/bartenders/aaron-krauss';

const MIDNIGHT_CARRIAGE: Cocktail = {
	title: 'Midnight Carriage',
	description:
		'Cachaça, blended rum, apple strudel liqueur, lemon, honey-ginger syrup, black walnut.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/pumpkin-buggy.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/pumpkin-buggy.webp',
	slug: 'midnight-carriage',
	createdBy: AARON_KRAUSS,
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.TikiMug,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.LEBLON
		},
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.PLANTERAY_OFTD
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Liqueurs.APPLE_STRUDEL_LIQUEUER
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Syrups.HONEY_GINGER_SYRUP
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.BLACK_WALNUT
		}
	],
	notes: 'Served in the Pumpkin Buggy tiki mug from Tiki Farm, designed by Bai.',
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.ORIGINAL,
		Tags.ServedIn.TIKI_MUG,
		Tags.ServedIn.EXCLUSIVE_DRINKWARE,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default MIDNIGHT_CARRIAGE;
