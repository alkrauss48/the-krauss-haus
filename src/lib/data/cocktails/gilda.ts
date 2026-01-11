import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const GILDA: Cocktail = {
	title: 'Gilda',
	description: 'Blanco tequila, cinnamon syrup, lime, pineapple.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/gilda.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/gilda.png',
	slug: 'gilda',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.CoupeGlass,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.CIMARRON_BLANCO
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.CINNAMON_SYRUP
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.PINEAPPLE
		},
		{
			label: 'Garnish: Lime wheel',
			ingredient: Ingredients.Citrus.LIME_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.TEQUILA,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.MODERN,
		Tags.ServedIn.COUPE_GLASS
	]
};

export default GILDA;
