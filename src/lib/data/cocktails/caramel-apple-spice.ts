import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const CARAMEL_APPLE_SPICE: Cocktail = {
	title: 'Caramel Apple Spice',
	subtitle: 'A Krauss Family original',
	description:
		'Applejack, goldschläger, caramel vodka, apple strudel liqueur, calvados, apple cider.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/caramel-apple-spice.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/caramel-apple-spice.png',
	slug: 'caramel-apple-spice',
	method: CocktailMethod.Built,
	ingredients: [
		'.5oz Applejack',
		'.5oz Goldschläger',
		'.5oz Caramel vodka',
		'.5oz Apple strudel liqueur',
		'Splash of Calvados',
		'5oz Apple cider',
		'Garnish: Cinnamon stick and maraschino cherry'
	],
	tags: [
		Tags.BaseSpirit.BRANDY,
		Tags.Infusions.CARAMEL_VODKA,
		Tags.Temperature.HOT,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.BUILT,
		Tags.Origin.ORIGINAL,
		Tags.AlcoholLevel.LOW
	]
};

export default CARAMEL_APPLE_SPICE;
