import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const COSMOPOLITAN: Cocktail = {
	title: 'Cosmopolitan',
	description: 'Citron vodka, cointreau, lime, cranberry cordial, simple syrup, orange twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/cosmopolitan.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/cosmopolitan.png',
	slug: 'cosmopolitan',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.CoupeGlass,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.CITRON_VODKA
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Liqueurs.COINTREAU
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Other.CRANBERRY_CORDIAL
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			label: 'Garnish: Orange twist',
			ingredient: Ingredients.Citrus.ORANGE_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.VODKA,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.MODERN,
		Tags.ServedIn.COUPE_GLASS
	]
};

export default COSMOPOLITAN;
