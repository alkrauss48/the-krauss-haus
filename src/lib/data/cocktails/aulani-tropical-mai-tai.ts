import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const AULANI_TROPICAL_MAI_TAI: Cocktail = {
	title: 'Aulani Tropical Mai Tai',
	description: 'Light rum, dark rum float, dry curaçao, orgeat, lime, pineapple, passionfruit.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/aulani-tropical-mai-tai.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/aulani-tropical-mai-tai.png',
	slug: 'aulani-tropical-mai-tai',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.TikiMug,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.PLANTERAY_3_STARS
		},
		{
			amount: '1oz',
			label: 'Coruba, floated',
			ingredient: Ingredients.BaseSpirits.CORUBA
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.DRY_CURACAO
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.ORGEAT
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '1.5oz',
			ingredient: Ingredients.Citrus.PINEAPPLE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.PASSIONFRUIT_SYRUP
		},
		{
			label: 'Garnish: Pineapple wedge',
			ingredient: Ingredients.Citrus.PINEAPPLE_GARNISH
		}
	],
	notes:
		'Served in the Aulani Tiki Hut tiki mug from the Disney Aulani Resort. Garnish with any additional garnishes, such as edible flowers.',
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

export default AULANI_TROPICAL_MAI_TAI;
