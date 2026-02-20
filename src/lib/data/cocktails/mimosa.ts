import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const MIMOSA: Cocktail = {
	title: 'Mimosa',
	description: 'Champagne, orange juice',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/mimosa.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/mimosa.png',
	slug: 'mimosa',
	method: CocktailMethod.Built,
	servedIn: ServedIn.FluteGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '50%',
			ingredient: Ingredients.BeerAndWine.CHAMPAGNE
		},
		{
			amount: '50%',
			ingredient: Ingredients.Citrus.ORANGE
		}
	],
	tags: [
		Tags.BaseAlcohol.WINE,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.Origin.CLASSIC,
		Tags.AlcoholLevel.LOW,
		Tags.ServedIn.FLUTE_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default MIMOSA;
