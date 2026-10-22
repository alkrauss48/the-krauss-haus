import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const HEX_APPEAL: Cocktail = {
	title: 'Hex Appeal',
	description: 'Gin, rye, cachaça, Campari, lemon, cream of coconut, licor 43, celery bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/hex-appeal.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/hex-appeal.webp',
	slug: 'hex-appeal',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.TikiMug,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.TANQUERAY
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.RITTENHOUSE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.LEBLON
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.CAMPARI
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Other.CREAM_OF_COCONUT
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.LICOR_43
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.CELERY
		}
	],
	notes: 'Served in the Cauldron tiki mug from The Haunting popup-bar.',
	tags: [
		Tags.BaseAlcohol.GIN,
		Tags.BaseAlcohol.WHISKEY,
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CREAMY,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.BITTER,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.ServedIn.TIKI_MUG,
		Tags.ServedIn.EXCLUSIVE_DRINKWARE,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default HEX_APPEAL;
