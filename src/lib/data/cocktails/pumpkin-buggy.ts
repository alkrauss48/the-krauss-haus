import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import AARON_KRAUSS from '$lib/data/bartenders/aaron-krauss';

const PUMPKIN_BUGGY: Cocktail = {
	title: 'Pumpkin Buggy',
	description:
		'Jamaican rum, apple strudel liqueur, apple cider, lemon, dark berry liqueur, licor 43, black walnut.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/pumpkin-buggy.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/pumpkin-buggy.webp',
	slug: 'pumpkin-buggy',
	createdBy: AARON_KRAUSS,
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.TikiMug,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_SIGNATURE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.APPLE_STRUDEL_LIQUEUER
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Mixers.APPLE_CIDER
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.HOUSE_DARK_BERRY_CREME
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.LICOR_43
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

export default PUMPKIN_BUGGY;
