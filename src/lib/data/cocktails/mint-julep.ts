import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

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
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.ELIJAH_CRAIG
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			amount: '6-10 leaves',
			ingredient: Ingredients.HerbsAndSpices.MINT
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		}
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
