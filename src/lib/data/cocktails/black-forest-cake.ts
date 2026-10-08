import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import AARON_KRAUSS from '$lib/data/bartenders/aaron-krauss';

const BLACK_FOREST_CAKE: Cocktail = {
	title: 'Black Forest Cake',
	description: 'Kirschwasser, crème de cacao, cherry heering, cream, raspberry syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/black-forest-cake.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/black-forest-cake.webp',
	slug: 'black-forest-cake',
	createdBy: AARON_KRAUSS,
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.CoupeGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.SCHLADERER
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Liqueurs.CREME_DE_CACAO
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.CHERRY_HEERING
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Other.HEAVY_CREAM
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.RASPBERRY_SYRUP
		},
		{
			label: 'Garnish: Maraschino cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		},
		'Garnish: Grated dark chocolate'
	],
	tags: [
		Tags.BaseAlcohol.BRANDY,
		Tags.FlavorProfile.CREAMY,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.DECADENT,
		Tags.Technique.SHAKEN,
		Tags.Origin.ORIGINAL,
		Tags.ServedIn.COUPE_GLASS
	]
};

export default BLACK_FOREST_CAKE;
