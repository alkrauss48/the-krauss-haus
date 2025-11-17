import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const COBRAS_FANG: Cocktail = {
	title: "Cobra's Fang",
	subtitle: 'A dangerously smooth blend of rum and spice',
	description:
		'Overproof demerara rum, falernum, fassionola, lime, orange, herbstura, mint, cinnamon.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/cobras-fang.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/cobras-fang.png',
	slug: 'cobras-fang',
	method: CocktailMethod.FlashBlended,
	servedIn: ServedIn.TikiMug,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.HAMILTON_151
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.FALERNUM
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.FASSIONOLA
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.ORANGE
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.HERBSTURA
		},
		{
			label: 'Garnish: Mint Sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		},
		{
			label: 'Garnish: Cinnamon Stick',
			ingredient: Ingredients.HerbsAndSpices.CINNAMON
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.AlcoholLevel.HIGH,
		Tags.FlavorProfile.SPICED,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.FLASH_BLENDED,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.TIKI_MUG,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default COBRAS_FANG;
