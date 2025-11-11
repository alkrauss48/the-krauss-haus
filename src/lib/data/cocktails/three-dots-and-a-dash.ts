import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const THREE_DOTS_AND_A_DASH: Cocktail = {
	title: 'Three Dots and a Dash',
	subtitle: 'A celebration of rum and spice',
	description:
		'Aged rhum agricole, blended rum, demerara rum, honey, orange, lime, falernum, allspice dram, angostura bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/three-dots-and-a-dash.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/three-dots-and-a-dash.png',
	slug: 'three-dots-and-a-dash',
	method: CocktailMethod.FlashBlended,
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
		'Garnish: Pineapple frond'
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
