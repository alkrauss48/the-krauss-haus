import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const CANELAZO: Cocktail = {
	title: 'Canelazo',
	description: 'Aquavit, orange, cinnamon, clove, star anise, brown sugar, hot water.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/canelazo.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/canelazo.png',
	slug: 'canelazo',
	servedIn: ServedIn.Mug,
	ice: Ice.None,
	hasStraw: false,
	servings: 4,
	ingredients: [
		'4 cups water',
		{
			amount: '4oz',
			ingredient: Ingredients.BaseSpirits.AQUAVIT
		},
		{
			amount: '2oz',
			label: 'Peel and juice of 1 orange',
			ingredient: Ingredients.Citrus.ORANGE
		},
		{
			label: '2 cinnamon sticks',
			ingredient: Ingredients.HerbsAndSpices.CINNAMON
		},
		{
			amount: '4',
			label: 'Cloves',
			ingredient: Ingredients.HerbsAndSpices.CLOVE
		},
		'2 whole star anise pods',
		{
			label: '1/3C brown sugar',
			ingredient: Ingredients.Other.SUGAR
		}
	],
	tags: [
		Tags.FlavorProfile.SPICED,
		Tags.FlavorProfile.CITRUS,
		Tags.Temperature.HOT,
		Tags.Origin.FOLK,
		Tags.AlcoholLevel.LOW,
		Tags.ServedIn.MUG,
		Tags.PrepTime.COMPLEX_PREP
	],
	notes:
		'Simmer (do not boil) for 15 minutes without Aquavit. Remove from heat, strain, then add aquavit.'
};

export default CANELAZO;
