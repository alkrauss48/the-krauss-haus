import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const NAVY_GROG: Cocktail = {
	title: 'Navy Grog',
	description:
		'Dark jamaican rum, demerara rum, blended light rum, honey syrup, lime, grapefruit, soda water.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/navy-grog.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/navy-grog.png',
	slug: 'navy-grog',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1oz Coruba (Dark Jamaican rum)',
		'1oz Hamilton 86 (Demerara rum)',
		'1oz Planteray 3 Stars (Blended light rum)',
		'1oz Honey syrup',
		'.75oz Lime',
		'.75oz Grapefruit',
		'1oz Soda water',
		'Garnish: Mint sprig'
	],
	notes:
		'One of the only classic tiki cocktails not served over crushed ice. Shake all ingredients besides soda water with ice. Strain into a glass over ice block. Top with soda water and garnish with mint sprig.',
	tags: [
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.BaseSpirit.RUM,
		Tags.AlcoholLevel.HIGH,
		Tags.FlavorProfile.CITRUS,
		Tags.Syrups.HONEY_SYRUP,
		Tags.Technique.BUILT
	]
};

export default NAVY_GROG;
