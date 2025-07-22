import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const SAZERAC: Cocktail = {
	title: 'Sazerac',
	description: "Rye whiskey, cognac, absinthe, peychaud's bitters, demerara syrup, lemon twist.",
	imagePath: '/images/cocktails/winter/sazerac.png',
	slug: 'sazerac',
	method: CocktailMethod.Stirred,
	ingredients: [
		'1.5oz Rye whiskey',
		'.5oz Cognac',
		'Absinthe rinse',
		"4 dashes Peychaud's bitters",
		'1 dash Angostura bitters',
		'.25oz Demerara syrup',
		'Garnish: Lemon twist'
	]
};

export default SAZERAC;
