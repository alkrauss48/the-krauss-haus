import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import DEMERARA_SYRUP from '../recipes/demerara-syrup';

const JUNGLE_BIRD: Cocktail = {
	title: 'Jungle Bird',
	subtitle: 'A perfect balance of bitter and sweet',
	description: 'Dark rum, campari, pineapple, lime, demarara syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/jungle-bird.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/jungle-bird.png',
	slug: 'jungle-bird',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1.5oz Appleton Estate Signature (Jamaican rum)',
		'.75oz Campari',
		'1.5oz Pineapple juice',
		'.5oz Lime',
		{
			amount: '.5oz',
			recipe: DEMERARA_SYRUP
		},
		'Garnish: Pineapple wedge'
	],
	variations: [
		{
			name: 'Funky',
			description: 'Float .25 oz of Hamilton Pot Still Jamaican Black',
			images: []
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.BITTER,
		Tags.FlavorProfile.FRUITY,
		Tags.Technique.SHAKEN,

		Tags.Style.TIKI,
		Tags.FlavorProfile.CITRUS,
		Tags.Origin.CLASSIC,
		Tags.AlcoholLevel.LOW
	]
};

export default JUNGLE_BIRD;
