import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import HONEY_SYRUP from '../recipes/honey-syrup';
import FALERNUM from '../recipes/falernum';

const THREE_DOTS_AND_A_DASH: Cocktail = {
	title: 'Three Dots and a Dash',
	subtitle: 'A celebration of rum and spice',
	description:
		'Aged rhum agricole, blended rum,demerara rum, honey, orange, lime, falernum, allspice dram, angostura bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/three-dots-and-a-dash.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/three-dots-and-a-dash.png',
	slug: 'three-dots-and-a-dash',
	method: CocktailMethod.FlashBlended,
	ingredients: [
		'1oz Clement Barrel Select (aged Rhum Agricole)',
		'.5oz Planteray OFTD (Overproof blended rum)',
		'.5oz Hamilton 86 (Demerara rum)',
		{
			amount: '.5oz',
			recipe: HONEY_SYRUP
		},
		'.5oz Orange juice',
		'.5oz Lime juice',
		{
			amount: '.25oz',
			recipe: FALERNUM
		},
		'.25oz Allspice dram',
		'1 dash Angostura bitters',
		'Garnish: Three maraschino cherries and pineapple frond'
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.AlcoholLevel.HIGH,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.FLASH_BLENDED,

		Tags.Style.TIKI,
		Tags.Origin.CLASSIC
	]
};

export default THREE_DOTS_AND_A_DASH;
