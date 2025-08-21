import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const HOT_TODDY: Cocktail = {
	title: 'Hot Toddy',
	slug: 'hot-toddy',
	description: 'Bourbon, benedictine, spiced tea, honey, lemon, cinnamon.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/hot-toddy.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/hot-toddy.png',
	method: CocktailMethod.Built,
	ingredients: [
		'1.5oz Bourbon',
		'.5oz Benedictine',
		'5oz Spiced tea',
		'Honey to taste',
		'1/4 Lemon, juiced',
		'Garnish: Cinnamon stick, lemon wheel, and maraschino cherry'
	],
	tags: [
		Tags.BaseSpirit.WHISKEY,
		Tags.FlavorProfile.SPICED,
		Tags.FlavorProfile.HERBAL,
		Tags.Temperature.HOT,
		Tags.Technique.BUILT,
		Tags.Origin.CLASSIC
	]
};

export default HOT_TODDY;
