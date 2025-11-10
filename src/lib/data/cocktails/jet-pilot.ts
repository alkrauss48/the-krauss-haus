import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const JET_PILOT: Cocktail = {
	title: 'Jet Pilot',
	subtitle: 'A bold, spicy journey through the tropics',
	description:
		'Jamaican rum, overproof demerara rum, falernum, cinnamon syrup, lime, grapefruit, herbstura, maraschino cherry.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/jet-pilot.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/jet-pilot.png',
	slug: 'jet-pilot',
	method: CocktailMethod.FlashBlended,
	ingredients: [
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.SMITH_AND_CROSS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.CORUBA
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_SIGNATURE
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.HAMILTON_151
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.FALERNUM
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.CINNAMON_SYRUP
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.GRAPEFRUIT
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.HERBSTURA
		},
		{
			label: 'Garnish: Maraschino Cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		}
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

export default JET_PILOT;
