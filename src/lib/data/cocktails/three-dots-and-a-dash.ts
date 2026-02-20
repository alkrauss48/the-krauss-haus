import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const THREE_DOTS_AND_A_DASH: Cocktail = {
	title: 'Three Dots and a Dash',
	description:
		'Aged rhum agricole, blended rum, demerara rum, honey, orange, lime, falernum, allspice dram, angostura bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/three-dots-and-a-dash.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/three-dots-and-a-dash.png',
	slug: 'three-dots-and-a-dash',
	method: CocktailMethod.FlashBlended,
	servedIn: ServedIn.TikiMug,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.CLEMENT_SELECT_BARREL
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.PLANTERAY_OFTD
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.HAMILTON_86
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.HONEY_SYRUP
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.ORANGE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.FALERNUM
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.ALLSPICE_DRAM
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			label: 'Garnish: Three maraschino cherries',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		},
		{
			label: 'Garnish: Pineapple frond',
			ingredient: Ingredients.Citrus.PINEAPPLE_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.AlcoholLevel.HIGH,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.FLASH_BLENDED,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.TIKI_MUG,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default THREE_DOTS_AND_A_DASH;
