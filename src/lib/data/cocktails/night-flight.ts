import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import AARON_KRAUSS from '$lib/data/bartenders/aaron-krauss';

const NIGHT_FLIGHT: Cocktail = {
	title: 'Night Flight',
	description: 'Gin, lemon, maraschino, lavender, and dark berry liqueur.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/night-flight.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/night-flight.png',
	slug: 'night-flight',
	createdBy: AARON_KRAUSS,
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.CoupeGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.FORDS
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.MARASCHINO_LIQUEUER
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.LAVENDER_LIQUEUR
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.HOUSE_DARK_BERRY_CREME
		}
	],
	tags: [
		Tags.BaseAlcohol.GIN,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.ORIGINAL,
		Tags.ServedIn.COUPE_GLASS
	]
};

export default NIGHT_FLIGHT;
