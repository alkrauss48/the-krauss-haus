import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const PAINKILLER: Cocktail = {
	title: 'Painkiller',
	description: 'Demerara rum, pineapple, cream of coconut, orange, nutmeg.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/painkiller.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/painkiller.png',
	slug: 'painkiller',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.TikiMug,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.HAMILTON_86
		},
		{
			amount: '4oz',
			ingredient: Ingredients.Citrus.PINEAPPLE
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.ORANGE
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Other.CREAM_OF_COCONUT
		},
		{
			label: 'Garnish: Freshly grated nutmeg',
			ingredient: Ingredients.HerbsAndSpices.NUTMEG
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.CREAMY,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.TIKI_MUG
	]
};

export default PAINKILLER;
