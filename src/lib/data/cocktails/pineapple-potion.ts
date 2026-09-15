import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const PINEAPPLE_POTION: Cocktail = {
	title: 'Pineapple Potion',
	description:
		'Light rum, demerara rum, coffee liqueur, cream of coconut, lime, pineapple, passionfruit, nutmeg.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/pineapple-potion.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/pineapple-potion.webp',
	slug: 'pineapple-potion',
	method: CocktailMethod.FlashBlended,
	servedIn: ServedIn.TikiMug,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.PLANTERAY_3_STARS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.HAMILTON_86
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Liqueurs.MR_BLACK
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Other.CREAM_OF_COCONUT
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Citrus.PINEAPPLE
		},
		{
			amount: '1 tsp',
			ingredient: Ingredients.Syrups.PASSIONFRUIT_SYRUP
		},
		{
			label: 'Garnish: Freshly grated nutmeg',
			ingredient: Ingredients.HerbsAndSpices.NUTMEG
		},
		'Garnish: 3 espresso beans',
		{
			label: 'Garnish: 3 pineapple fronds',
			ingredient: Ingredients.Citrus.PINEAPPLE_GARNISH
		}
	],
	notes: 'Served in the Poison Pineapple tiki mug designed by Jeff Granito.',
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.CREAMY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.FLASH_BLENDED,
		Tags.Style.TIKI,
		Tags.ServedIn.TIKI_MUG,
		Tags.ServedIn.EXCLUSIVE_DRINKWARE,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default PINEAPPLE_POTION;
