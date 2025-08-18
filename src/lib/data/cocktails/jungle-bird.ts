import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const JUNGLE_BIRD: Cocktail = {
	title: 'Jungle Bird',
	subtitle: 'A perfect balance of bitter and sweet',
	description: 'Dark rum, campari, pineapple, lime, demarara syrup.',
	imagePath: '/images/cocktails/tiki/jungle-bird.png',
	slug: 'jungle-bird',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1.5oz Appleton Estate Signature (Jamaican rum)',
		'.75oz Campari',
		'1.5oz Pineapple juice',
		'.5oz Lime',
		'.5oz Demerara syrup',
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
		Tags.BaseSpirit.RUM,
		Tags.BaseSpirit.AMARO,
		Tags.FlavorProfile.BITTER,
		Tags.FlavorProfile.FRUITY,
		Tags.Technique.SHAKEN,
		Tags.Syrups.DEMERARA_SYRUP,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.AlcoholLevel.LOW
	]
};

export default JUNGLE_BIRD;
