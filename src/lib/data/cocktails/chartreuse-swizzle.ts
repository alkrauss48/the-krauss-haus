import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const CHARTREUSE_SWIZZLE: Cocktail = {
	title: 'Chartreuse Swizzle',
	description: 'Green chartreuse, pineapple, lime, falernum, overproof jamaican rum, mint.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/chartreuse-swizzle.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/chartreuse-swizzle.png',
	slug: 'chartreuse-swizzle',
	method: CocktailMethod.Swizzled,
	servedIn: ServedIn.HighballGlass,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1.25oz',
			ingredient: Ingredients.Liqueurs.GREEN_CHARTREUSE
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.BaseSpirits.WRAY_AND_NEPHEW
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.FALERNUM
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.PINEAPPLE
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		},
		{
			label: 'Garnish: Grated nutmeg',
			ingredient: Ingredients.HerbsAndSpices.NUTMEG
		}
	],
	tags: [
		Tags.FlavorProfile.HERBAL,
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.Technique.SWIZZLED,
		Tags.Style.TIKI,
		Tags.Origin.MODERN,
		Tags.AlcoholLevel.HIGH,
		Tags.ServedIn.HIGHBALL_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default CHARTREUSE_SWIZZLE;
