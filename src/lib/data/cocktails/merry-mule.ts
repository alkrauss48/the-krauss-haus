import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const MERRY_MULE: Cocktail = {
	title: 'Merry Mule',
	subtitle: "Served as the bride's drink at our wedding",
	description: 'Vodka, cinnamon syrup, lime, ginger beer.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/merry-mule.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/merry-mule.png',
	slug: 'merry-mule',
	method: CocktailMethod.Built,
	servedIn: ServedIn.Mug,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.MONOPOLOWA
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.CINNAMON_SYRUP
		},
		{
			amount: '.5oz',
			label: 'Lime',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '4oz',
			ingredient: Ingredients.Mixers.GINGER_BEER
		},
		{
			label: 'Garnish: Cinnamon stick',
			ingredient: Ingredients.HerbsAndSpices.CINNAMON
		},
		'Garnish: Apple slices'
	],
	tags: [
		Tags.BaseAlcohol.VODKA,
		Tags.FlavorProfile.SPICED,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.ORIGINAL,
		Tags.ServedIn.MUG
	]
};

export default MERRY_MULE;
