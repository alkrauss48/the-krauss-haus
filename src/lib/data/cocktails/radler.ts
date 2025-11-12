import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const RADLER: Cocktail = {
	title: 'Radler',
	description: 'German helles or pilsner lager, sparkling lemonade.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/radler.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/radler.png',
	slug: 'radler',
	method: CocktailMethod.Built,
	servedIn: ServedIn.PintGlass,
	ingredients: [
		{
			amount: '50%',
			ingredient: Ingredients.BeerAndWine.WARSTEINER_PILSENER
		},
		{
			amount: '50%',
			ingredient: Ingredients.Mixers.SANPELLEGRINO_LIMONATA
		}
	],
	notes:
		"No need to measure. A 60/40 ratio of beer to lemonade works well too. We're partial to Bitburger Pils.",
	tags: [
		Tags.BaseAlcohol.BEER,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.AlcoholLevel.LOW,
		Tags.Origin.FOLK,
		Tags.ServedIn.PINT_GLASS
	]
};

export default RADLER;
