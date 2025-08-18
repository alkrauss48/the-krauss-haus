import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const PIMMS_CUP: Cocktail = {
	title: "Pimm's Cup",
	description: "Pimm's #1, sparkling lemonade, cucumber, orange, strawberry, mint.",
	imagePath: '/images/cocktails/summer/pimms-cup.png',
	slug: 'pimms-cup',
	method: CocktailMethod.Built,
	ingredients: [
		"2oz Pimm's #1",
		'4oz sparkling lemonade',
		'Garnish: orange, mint sprig, strawberry, cucumber'
	],
	tags: [
		Tags.BaseSpirit.GIN,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.BUBBLY,
		Tags.AlcoholLevel.LOW,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.CLASSIC
	]
};

export default PIMMS_CUP;
