import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const KOLAWEIZEN: Cocktail = {
	title: 'Kolaweizen',
	description: 'Hefeweizen, coca-cola.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/kolaweizen.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/kolaweizen.png',
	slug: 'kolaweizen',
	method: CocktailMethod.Built,
	servedIn: ServedIn.PintGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '6oz',
			ingredient: Ingredients.BeerAndWine.ERDINGER_WEISSBIER
		},
		{
			amount: '6oz',
			ingredient: Ingredients.Mixers.COCA_COLA
		}
	],
	tags: [
		Tags.BaseAlcohol.BEER,
		Tags.FlavorProfile.BUBBLY,
		Tags.Technique.BUILT,
		Tags.Origin.FOLK,
		Tags.ServedIn.PINT_GLASS,
		Tags.AlcoholLevel.LOW,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default KOLAWEIZEN;
