import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const PAINKILLER: Cocktail = {
	title: 'Painkiller',
	subtitle: 'A creamy, coconut paradise in a glass',
	description: 'Demerara rum, pineapple, cream of coconut, orange, nutmeg.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/painkiller.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/painkiller.png',
	slug: 'painkiller',
	method: CocktailMethod.Shaken,
	ingredients: [
		'2oz Hamilton 86 (Demerara rum)',
		'4oz Pineapple juice',
		'1oz Orange juice',
		'1oz Cream of coconut',
		'Garnish: Freshly grated nutmeg'
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.CREAMY,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC
	]
};

export default PAINKILLER;
