import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const PALOMA: Cocktail = {
	title: 'Paloma',
	description: 'Tequila, grapefruit soda, lime.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/paloma.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/paloma.png',
	slug: 'paloma',
	method: CocktailMethod.Built,
	ingredients: [
		'2 fingers (or 2oz) Blanco Tequila',
		'(4oz) Squirt grapefruit soda',
		'1/2 Lime (or .5oz), pressed',
		'Garnish: Salt rim'
	],
	notes: 'Typically unmeasured. Add tequila, then ice, then lime. Top with soda.',
	tags: [
		Tags.BaseAlcohol.TEQUILA,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.FOLK
	]
};

export default PALOMA;
