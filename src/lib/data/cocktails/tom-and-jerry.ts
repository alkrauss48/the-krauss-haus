import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

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
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.EVAN_WILLIAMS_BIB
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_SIGNATURE
		},
		{
			amount: '2 tbsp',
			ingredient: Ingredients.Other.TOM_AND_JERRY_BATTER
		},
		'5oz Hot water',
		{
			label: 'Garnish: Freshly grated nutmeg',
			ingredient: Ingredients.HerbsAndSpices.NUTMEG
		}
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.BaseAlcohol.RUM,
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
