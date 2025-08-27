import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import RICH_SIMPLE_SYRUP from '../recipes/rich-simple-syrup';

const LOGGY_CAB: Cocktail = {
	title: 'Loggy Cab',
	subtitle: 'A Krauss Family original',
	description: 'Gin, lime, simple syrup, soda water.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/loggy-cab.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/loggy-cab.png',
	slug: 'loggy-cab',
	method: CocktailMethod.Built,
	ingredients: [
		'2oz Gin',
		'.75oz Lime',
		{
			amount: '.5oz',
			recipe: RICH_SIMPLE_SYRUP
		},
		'4oz Soda water',
		'Garnish: Lime wheel'
	],
	variations: [
		{
			name: 'Gimlet',
			description: 'Classic cocktail. No soda water. Serve up.',
			images: []
		},
		{
			name: 'Tom Collins',
			description: 'Classic cocktail. Swap out the lime for lemon.',
			images: []
		},
		{
			name: 'Gin Rickey',
			description: 'Classic cocktail. No simple syrup.',
			images: []
		},
		{
			name: 'Cabin-style',
			description:
				'Swap syrup for 1T sugar. Use 3/4 - 1 lime, shake with shells. Dump all into glass.',
			images: []
		}
	],
	tags: [
		Tags.BaseSpirit.GIN,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.BUBBLY,
		Tags.Technique.BUILT,

		Tags.Style.HIGHBALL,
		Tags.Origin.ORIGINAL
	]
};

export default LOGGY_CAB;
