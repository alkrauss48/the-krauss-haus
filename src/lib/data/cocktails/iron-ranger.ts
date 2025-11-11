import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const IRON_RANGER: Cocktail = {
	title: 'Iron Ranger',
	subtitle: 'Bourbon-based with a hint of spice',
	description: 'Bourbon, falernum, demerara syrup, lemon, pineapple, cinnamon, mint.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/iron-ranger.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/iron-ranger.png',
	slug: 'iron-ranger',
	method: CocktailMethod.Shaken,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.EVAN_WILLIAMS_BIB
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.FALERNUM
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.PINEAPPLE
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			label: 'Garnish: Mint Sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		},
		{
			label: 'Garnish: Grated Cinnamon',
			ingredient: Ingredients.HerbsAndSpices.CINNAMON
		}
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.MODERN
	]
};

export default IRON_RANGER;
