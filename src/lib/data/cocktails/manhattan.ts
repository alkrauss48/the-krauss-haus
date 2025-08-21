import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const MANHATTAN: Cocktail = {
	title: 'Manhattan',
	description: 'Rye whiskey, sweet vermouth, black walnut bitters, maraschino cherry.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/manhattan.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/manhattan.png',
	slug: 'manhattan',
	method: CocktailMethod.Stirred,
	ingredients: [
		'2oz Rye whiskey',
		'1oz Sweet vermouth',
		'2 dashes Black walnut bitters',
		'Garnish: Maraschino cherry'
	],
	variations: [
		{
			name: 'Black',
			description: 'Sub Amaro Lucano for sweet vermouth.',
			images: []
		}
	],
	tags: [
		Tags.BaseSpirit.WHISKEY,
		Tags.BaseSpirit.AMARO,
		Tags.AlcoholLevel.HIGH,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Technique.STIRRED,
		Tags.Origin.CLASSIC
	]
};

export default MANHATTAN;
