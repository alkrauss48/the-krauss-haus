import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const MINT_JULEP: Cocktail = {
	title: 'Mint Julep',
	description: 'Bourbon, simple syrup, mint.',
	imagePath: 'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/mint-julep.png',
	slug: 'mint-julep',
	method: CocktailMethod.Built,
	ingredients: ['2oz Bourbon', '.5oz Rich simple syrup', '6-10 leaves Mint', 'Garnish: Mint sprig'],
	tags: [
		Tags.BaseSpirit.WHISKEY,
		Tags.FlavorProfile.HERBAL,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Technique.BUILT,
		Tags.Syrups.RICH_SIMPLE_SYRUP,
		Tags.Origin.CLASSIC
	]
};

export default MINT_JULEP;
