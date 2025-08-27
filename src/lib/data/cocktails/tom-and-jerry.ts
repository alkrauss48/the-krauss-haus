import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import TOM_AND_JERRY_BATTER from '../recipes/tom-and-jerry-batter';

const TOM_AND_JERRY: Cocktail = {
	title: 'Tom and Jerry',
	slug: 'tom-and-jerry',
	description: 'Bourbon, dark rum, egg, sugar, nutmeg.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/tom-and-jerry.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/tom-and-jerry.png',
	method: CocktailMethod.Built,
	ingredients: [
		'.75oz Bourbon',
		'.75oz Appleton Estate Signature (Jamaican Rum)',
		{
			amount: '2 tbsp',
			recipe: TOM_AND_JERRY_BATTER
		},
		'5oz Hot water',
		'Garnish: Freshly grated nutmeg'
	],
	tags: [
		Tags.BaseSpirit.WHISKEY,
		Tags.BaseSpirit.RUM,
		Tags.FlavorProfile.CREAMY,
		Tags.FlavorProfile.SPICED,
		Tags.Temperature.HOT,
		Tags.Technique.BUILT,

		Tags.Origin.FOLK,
		Tags.AlcoholLevel.LOW
	],
	notes:
		"This is a family recipe created by Jack Krauss, Aaron's grandfather, who passed away in 2011."
};

export default TOM_AND_JERRY;
