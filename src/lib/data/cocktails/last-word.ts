import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const LAST_WORD: Cocktail = {
	title: 'Last Word',
	description: 'Gin, green chartreuse, maraschino liqueur, lime.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/last-word.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/last-word.png',
	slug: 'last-word',
	method: CocktailMethod.Shaken,
	ingredients: [
		'.75oz Gin',
		'.75oz Green Chartreuse',
		'.75oz Maraschino liqueur',
		'.75oz Lime',
		'Garnish: Maraschino cherry'
	],
	tags: [
		Tags.BaseAlcohol.GIN,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.CLASSIC
	]
};

export default LAST_WORD;
