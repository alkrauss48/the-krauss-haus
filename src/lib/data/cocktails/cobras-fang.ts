import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import FALERNUM from '../recipes/falernum';
import FASSIONOLA from '../recipes/fassionola';

const COBRAS_FANG: Cocktail = {
	title: "Cobra's Fang",
	subtitle: 'A dangerously smooth blend of rum and spice',
	description: 'Overproof demerara rum, falernum, fassionola, lime, orange, herbstura.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/cobras-fang.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/cobras-fang.png',
	slug: 'cobras-fang',
	method: CocktailMethod.FlashBlended,
	ingredients: [
		'1.5oz Hamilton 151 (Overproof Demerara rum)',
		{
			amount: '.25oz',
			recipe: FALERNUM
		},
		{
			amount: '.5oz',
			recipe: FASSIONOLA
		},
		'.5oz Lime',
		'.5oz Orange',
		'1 dash Herbstura',
		'Garnish: Mint sprig and cinnamon stick'
	],
	tags: [
		Tags.BaseSpirit.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.AlcoholLevel.HIGH,
		Tags.FlavorProfile.SPICED,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.FLASH_BLENDED,

		Tags.Style.TIKI,
		Tags.Origin.CLASSIC
	]
};

export default COBRAS_FANG;
