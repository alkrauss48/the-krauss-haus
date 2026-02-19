import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const AMERICAN_BOILERMAKER: Cocktail = {
	title: 'American Boilermaker',
	description: 'Whiskey shot, beer.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/american-boilermaker.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/american-boilermaker.png',
	slug: 'american-boilermaker',
	method: CocktailMethod.Built,
	servedIn: ServedIn.PintGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.ELIJAH_CRAIG
		},
		{
			amount: '12oz',
			ingredient: Ingredients.BeerAndWine.MILLER_HIGH_LIFE
		}
	],
	notes:
		'Traditionally served as a shot of whiskey followed by a beer chaser. Can also be consumed by dropping the shot into the beer (depth charge) or alternating sips.',
	tags: [
		Tags.BaseAlcohol.BEER,
		Tags.BaseAlcohol.WHISKEY,
		Tags.FlavorProfile.BUBBLY,
		Tags.Technique.BUILT,
		Tags.Origin.FOLK,
		Tags.ServedIn.PINT_GLASS,
		Tags.AlcoholLevel.HIGH,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default AMERICAN_BOILERMAKER;
