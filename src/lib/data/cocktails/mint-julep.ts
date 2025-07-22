import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const MINT_JULEP: Cocktail = {
	title: 'Mint Julep',
	description: 'Bourbon, simple syrup, mint.',
	imagePath: '/images/cocktails/summer/mint-julep.png',
	slug: 'mint-julep',
	method: CocktailMethod.Built,
	ingredients: ['2oz Bourbon', '.5oz Rich simple syrup', '6-10 leaves Mint', 'Garnish: Mint sprig']
};

export default MINT_JULEP;
