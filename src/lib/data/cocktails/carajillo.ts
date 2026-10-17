import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const CARAJILLO: Cocktail = {
	title: 'Carajillo',
	description: 'Licor 43, espresso.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/carajillo.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/carajillo.webp',
	slug: 'carajillo',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.LargeCube,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.Liqueurs.LICOR_43
		},
		{
			amount: '1.5oz',
			ingredient: Ingredients.Other.ESPRESSO
		}
	],
	tags: [
		Tags.FlavorProfile.DECADENT,
		Tags.Technique.SHAKEN,
		Tags.Origin.FOLK,
		Tags.AlcoholLevel.LOW,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default CARAJILLO;
