import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import CINNAMON_SYRUP from '../recipes/cinnamon-syrup';

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
	ingredients: [
		'2oz vodka',
		{
			amount: '.5 oz',
			recipe: CINNAMON_SYRUP
		},
		'1/2 Lime',
		'4oz Ginger beer',
		'Garnish: Cinnamon stick and apple slices'
	],
	tags: [
		Tags.BaseSpirit.VODKA,
		Tags.FlavorProfile.SPICED,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,

		Tags.Style.HIGHBALL,
		Tags.Origin.ORIGINAL
	]
};

export default MERRY_MULE;
