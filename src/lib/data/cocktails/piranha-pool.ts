import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const PIRANHA_POOL: Cocktail = {
	title: 'Piranha Pool',
	description: 'Vodka, dry curaçao, pineapple, cream of coconut, strawberry, lime.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/piranha-pool.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/piranha-pool.webp',
	slug: 'piranha-pool',
	method: CocktailMethod.Blended,
	servedIn: ServedIn.TikiMug,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.MONOPOLOWA
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.DRY_CURACAO
		},
		{
			amount: '2oz',
			ingredient: Ingredients.Citrus.PINEAPPLE
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Other.CREAM_OF_COCONUT
		},
		{
			label: '4 Strawberries',
			ingredient: Ingredients.Other.STRAWBERRY
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		'210g (1 cup) crushed ice'
	],
	notes:
		"Served in the Piranha tiki mug from Trader Sam's Enchanted Tiki Bar at the Disneyland Hotel.",
	tags: [
		Tags.BaseAlcohol.VODKA,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.CREAMY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BLENDED,
		Tags.Temperature.FROZEN,
		Tags.Style.TIKI,
		Tags.ServedIn.TIKI_MUG,
		Tags.ServedIn.EXCLUSIVE_DRINKWARE,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default PIRANHA_POOL;
