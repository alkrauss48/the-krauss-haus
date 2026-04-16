import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const WRAY_AND_TING: Cocktail = {
	title: 'Wray and Ting',
	description: 'Overproof Jamaican rum, grapefruit soda.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/wray-and-ting.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/wray-and-ting.png',
	slug: 'wray-and-ting',
	method: CocktailMethod.Built,
	servedIn: ServedIn.HighballGlass,
	ice: Ice.SmallCubes,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.WRAY_AND_NEPHEW
		},
		{
			amount: '4oz',
			ingredient: Ingredients.Mixers.GRAPEFRUIT_SODA
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.HIGHBALL_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default WRAY_AND_TING;
