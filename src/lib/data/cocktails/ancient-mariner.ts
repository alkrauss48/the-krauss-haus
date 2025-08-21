import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const ANCIENT_MARINER: Cocktail = {
	title: 'Ancient Mariner',
	subtitle: 'A complex blend of spice and citrus',
	description: 'Blended rum, demerara rum, allspice dram, lime, grapefruit, demerara syrup.',
	imagePath: 'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/ancient-mariner.png',
	slug: 'ancient-mariner',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1oz Probitas (Blended light rum)',
		'1oz Hamilton 86 (Demerara rum)',
		'.25oz Allspice dram',
		'.5oz Demerara syrup',
		'.5oz Lime',
		'.5oz Grapefruit',
		'Garnish: Mint sprig and lime wedge'
	],
	tags: [
		Tags.BaseSpirit.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.SHAKEN,
		Tags.Syrups.DEMERARA_SYRUP,
		Tags.Style.TIKI,
		Tags.Origin.MODERN
	]
};

export default ANCIENT_MARINER;
