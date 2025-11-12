import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const ESPRESSO_MARTINI: Cocktail = {
	title: 'Espresso Martini',
	description: 'Cognac, coffee liqueur, espresso, demerara syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/espresso-martini.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/espresso-martini.png',
	slug: 'espresso-martini',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.CoupeGlass,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.ST_REMY_VSOP
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Liqueurs.MR_BLACK
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Other.ESPRESSO
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
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
	tags: [
		Tags.BaseAlcohol.BRANDY,
		Tags.Technique.SHAKEN,
		Tags.Origin.MODERN,
		Tags.ServedIn.COUPE_GLASS
	]
};

export default ESPRESSO_MARTINI;
