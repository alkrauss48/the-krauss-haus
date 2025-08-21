import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const FRENCH_75: Cocktail = {
	title: 'French 75',
	description: 'Prosecco, gin, lemon, simple syrup.',
	imagePath: 'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/french-75.png',
	slug: 'french-75',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1oz Gin',
		'.5oz Lemon',
		'.5oz rich simple syrup',
		'3oz Prosecco',
		'Garnish: Lemon twist'
	],
	tags: [
		Tags.BaseSpirit.GIN,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.BUBBLY,
		Tags.Technique.SHAKEN,
		Tags.Syrups.RICH_SIMPLE_SYRUP,
		Tags.Style.SOUR,
		Tags.Origin.CLASSIC
	]
};

export default FRENCH_75;
