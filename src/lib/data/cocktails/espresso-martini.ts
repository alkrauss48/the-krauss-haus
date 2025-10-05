import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import DEMERARA_SYRUP from '../recipes/demerara-syrup';

const ESPRESSO_MARTINI: Cocktail = {
	title: 'Espresso Martini',
	description: 'Cognac, coffee liqueur, espresso, demerara syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/espresso-martini.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/espresso-martini.png',
	slug: 'espresso-martini',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1.5oz Cognac',
		'1oz Mr. Black Coffee Liqueur',
		'1oz Espresso',
		{
			amount: '.25oz',
			recipe: DEMERARA_SYRUP
		},
		'Garnish: 3 coffee beans'
	],
	variations: [
		{
			name: 'Hazelnut',
			description: 'Swap .5oz of Cognac with Frangelico.',
			images: []
		},
		{
			name: 'Peppermint',
			description: 'Swap .5oz of Cognac with peppermint infused vodka.',
			images: []
		}
	],
	tags: [Tags.BaseAlcohol.BRANDY, Tags.Technique.SHAKEN, Tags.Origin.MODERN]
};

export default ESPRESSO_MARTINI;
