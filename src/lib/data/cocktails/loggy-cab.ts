import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

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
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.FORDS
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			amount: '4oz',
			ingredient: Ingredients.Mixers.SODA_WATER
		},
		{
			label: 'Garnish: Lime wheel',
			ingredient: Ingredients.Citrus.LIME
		}
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
		Tags.BaseAlcohol.GIN,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.BUBBLY,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.ORIGINAL
	]
};

export default LOGGY_CAB;
