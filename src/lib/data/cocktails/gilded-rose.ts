import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const GILDED_ROSE: Cocktail = {
	title: 'Gilded Rose',
	description: 'Persian spice liqueur, champagne, edible flower.',
	subtitle: 'A Krauss Family original',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/gilded-rose.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/gilded-rose.png',
	slug: 'gilded-rose',
	method: CocktailMethod.Built,
	ingredients: [
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.PERSIAN_SPICE_LIQUEUR
		},
		{
			amount: '4oz',
			ingredient: Ingredients.BeerAndWine.CHAMPAGNE
		},
		'Garnish: Edible flower'
	],
	notes:
		'Pour persian spice liqueur into champagne flute, then add champagne. No need to stir. Garnish with edible flower.',
	tags: [
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.BUILT,
		Tags.Origin.ORIGINAL,
		Tags.AlcoholLevel.LOW
	]
};

export default GILDED_ROSE;
