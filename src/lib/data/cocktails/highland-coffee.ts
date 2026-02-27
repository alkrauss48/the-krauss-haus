import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const HIGHLAND_COFFEE: Cocktail = {
	title: 'Highland Coffee',
	description: 'Blended scotch, espresso, demerara syrup, hot water, whipped cream.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/highland-coffee.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/highland-coffee.png',
	slug: 'highland-coffee',
	method: CocktailMethod.Built,
	servedIn: ServedIn.Mug,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.MONKEY_SHOULDER
		},
		{
			amount: '2oz',
			ingredient: Ingredients.Other.ESPRESSO
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
		},
		'3oz Hot water',
		{
			label: 'Top with lightly whipped heavy cream',
			ingredient: Ingredients.Other.HEAVY_CREAM
		}
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.FlavorProfile.CREAMY,
		Tags.Temperature.HOT,
		Tags.Technique.BUILT,
		Tags.Origin.ORIGINAL,
		Tags.AlcoholLevel.LOW,
		Tags.ServedIn.MUG,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default HIGHLAND_COFFEE;
