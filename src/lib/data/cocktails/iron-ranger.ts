import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const IRON_RANGER: Cocktail = {
	title: 'Iron Ranger',
	subtitle: 'A bourbon tiki with a spicy kick',
	description: 'Bourbon, falernum, demerara syrup, lemon, pineapple.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/iron-ranger.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/iron-ranger.png',
	slug: 'iron-ranger',
	method: CocktailMethod.Shaken,
	ingredients: [
		'2oz Bourbon',
		'.5oz Falernum',
		'.5oz Demerara syrup',
		'.75oz Lemon',
		'1oz Pineapple juice',
		'Garnish: Mint sprig and freshly grated cinnamon'
	],
	tags: [
		Tags.BaseSpirit.WHISKEY,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.SHAKEN,
		Tags.Infusions.FALERNUM,
		Tags.Syrups.DEMERARA_SYRUP,
		Tags.Style.TIKI,
		Tags.Origin.MODERN
	]
};

export default IRON_RANGER;
