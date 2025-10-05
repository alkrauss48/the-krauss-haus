import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import RICH_SIMPLE_SYRUP from '../recipes/rich-simple-syrup';

const MINT_JULEP: Cocktail = {
	title: 'Mint Julep',
	description: 'Bourbon, simple syrup, mint.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/mint-julep.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/mint-julep.png',
	slug: 'mint-julep',
	method: CocktailMethod.Built,
	ingredients: [
		'2oz Bourbon',
		{
			amount: '.5oz',
			recipe: RICH_SIMPLE_SYRUP
		},
		'6-10 leaves Mint',
		'Garnish: Mint sprig'
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.FlavorProfile.HERBAL,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Technique.BUILT,

		Tags.Origin.FOLK
	]
};

export default MINT_JULEP;
