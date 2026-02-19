import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const DEER_AND_BEER: Cocktail = {
	title: 'Deer and Beer',
	description: 'Jägermeister, pilsner lager.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/deer-and-beer.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/deer-and-beer.png',
	slug: 'deer-and-beer',
	method: CocktailMethod.Built,
	servedIn: ServedIn.PintGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.Liqueurs.JAGERMEISTER
		},
		{
			amount: '12oz',
			ingredient: Ingredients.BeerAndWine.WARSTEINER_PILSENER
		}
	],
	notes:
		'A play on the classic boilermaker, substituting Jägermeister for whiskey. The herbal notes of Jägermeister pair surprisingly well with crisp lager.',
	tags: [
		Tags.BaseAlcohol.BEER,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.BUILT,
		Tags.Origin.MODERN,
		Tags.ServedIn.PINT_GLASS,
		Tags.AlcoholLevel.HIGH,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default DEER_AND_BEER;
