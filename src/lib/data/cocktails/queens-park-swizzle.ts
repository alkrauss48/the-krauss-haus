import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const QUEENS_PARK_SWIZZLE: Cocktail = {
	title: "Queen's Park Swizzle",
	description: 'Demerara rum, mint, lime, demerara syrup, angostura bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/queens-park-swizzle.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/queens-park-swizzle.png',
	slug: 'queens-park-swizzle',
	method: CocktailMethod.Swizzled,
	servedIn: ServedIn.HighballGlass,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.HAMILTON_86
		},
		{
			amount: '10 leaves',
			ingredient: Ingredients.HerbsAndSpices.MINT
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		}
	],
	variations: [
		{
			name: 'Spiced',
			ingredients: [
				{
					label: 'Swap the demerara syrup with .5oz cinnamon syrup.',
					ingredient: Ingredients.Syrups.CINNAMON_SYRUP
				}
			],
			images: []
		}
	],
	notes:
		'Muddle the mint with the lime and syrup, then swizzle with crushed ice and float the bitters on top.',
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SWIZZLED,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.HIGHBALL_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default QUEENS_PARK_SWIZZLE;
