import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const CERVEZA_Y_TEQUILA: Cocktail = {
	title: 'Cerveza y Tequila',
	description: 'Mexican lager, blanco tequila.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/cerveza-y-tequila.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/cerveza-y-tequila.png',
	slug: 'cerveza-y-tequila',
	method: CocktailMethod.Built,
	servedIn: ServedIn.PintGlass,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.CIMARRON_BLANCO
		},
		{
			amount: '12oz',
			ingredient: Ingredients.BeerAndWine.TECATE_MEXICAN_LAGER
		}
	],
	tags: [
		Tags.BaseAlcohol.BEER,
		Tags.BaseAlcohol.TEQUILA,
		Tags.FlavorProfile.BUBBLY,
		Tags.Technique.BUILT,
		Tags.Origin.FOLK,
		Tags.ServedIn.PINT_GLASS,
		Tags.AlcoholLevel.HIGH,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default CERVEZA_Y_TEQUILA;
