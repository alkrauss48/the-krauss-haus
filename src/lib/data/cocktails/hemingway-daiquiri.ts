import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const HEMINGWAY_DAIQUIRI: Cocktail = {
	title: 'Hemingway Daiquiri',
	description: 'Light blended rum, maraschino liqueur, lime, grapefruit.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/hemingway-daiquiri.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/hemingway-daiquiri.png',
	slug: 'hemingway-daiquiri',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.CoupeGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.PLANTERAY_3_STARS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.MARASCHINO_LIQUEUER
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.GRAPEFRUIT
		},
		{
			label: 'Garnish: Lime wheel',
			ingredient: Ingredients.Citrus.LIME_GARNISH
		}
	],
	notes: 'Also known as the Papa Doble. A drier version of the Daiquiri.',
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.COUPE_GLASS
	]
};

export default HEMINGWAY_DAIQUIRI;
