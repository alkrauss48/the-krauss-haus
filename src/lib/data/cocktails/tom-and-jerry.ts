import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const TOM_AND_JERRY: Cocktail = {
	title: 'Tom and Jerry',
	slug: 'tom-and-jerry',
	subtitle: 'Family recipe from Great Grandpa Krauss',
	description: 'Bourbon, dark rum, egg, sugar, nutmeg.',
	imagePath: 'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/tom-and-jerry.png',
	method: CocktailMethod.Built,
	ingredients: [
		'.75oz Bourbon',
		'.75oz Appleton Estate Signature',
		'2 tbsp Tom & Jerry batter',
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
		Tags.Syrups.TOM_AND_JERRY_BATTER,
		Tags.Origin.ORIGINAL,
		Tags.AlcoholLevel.LOW
	]
};

export default TOM_AND_JERRY;
