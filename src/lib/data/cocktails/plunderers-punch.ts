import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const PLUNDERERS_PUNCH: Cocktail = {
	title: "Plunderer's Punch",
	description: 'Jamaican rum, dark berry liqueur, lime, vanilla, angostura bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/plunderers-punch.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/plunderers-punch.png',
	slug: 'plunderers-punch',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.TikiMug,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.CORUBA
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Liqueurs.HOUSE_DARK_BERRY_CREME
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.VANILLA_SYRUP
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.ANGOSTURA
		}
	],
	notes: "Served in the Pirate Skull tiki mug from The Beak and Barrel at Disney's Magic Kingdom.",
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.MODERN,
		Tags.ServedIn.TIKI_MUG,
		Tags.ServedIn.EXCLUSIVE_DRINKWARE
	]
};

export default PLUNDERERS_PUNCH;
