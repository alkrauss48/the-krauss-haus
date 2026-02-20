import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const PLANTERS_PUNCH: Cocktail = {
	title: "Planter's Punch",
	description: 'Jamaican rum, demerara syrup, lime, angostura bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/planters-punch.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/planters-punch.png',
	slug: 'planters-punch',
	method: CocktailMethod.FlashBlended,
	servedIn: ServedIn.HighballGlass,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '3oz',
			ingredient: Ingredients.BaseSpirits.CORUBA
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '4 dashes',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		}
	],
	tags: [
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.BaseAlcohol.RUM,
		Tags.AlcoholLevel.HIGH,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.FLASH_BLENDED,
		Tags.ServedIn.HIGHBALL_GLASS
	]
};

export default PLANTERS_PUNCH;
