import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const RUM_BARREL: Cocktail = {
	title: 'Rum Barrel',
	description:
		'Jamaican rum, demarara rum, overproof rum, lime, pineapple, demerara syrup, allspice dram, falernum, angostura bitters, mint.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/rum-barrel.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/rum-barrel.png',
	slug: 'rum-barrel',
	method: CocktailMethod.FlashBlended,
	servedIn: ServedIn.TikiMug,
	ingredients: [
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.CORUBA
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_SIGNATURE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.HAMILTON_86
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.BaseSpirits.SMITH_AND_CROSS
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.BaseSpirits.HAMILTON_151
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.PINEAPPLE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.ALLSPICE_DRAM
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.FALERNUM
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		},
		{
			label: 'Garnish: Lime shell',
			ingredient: Ingredients.Citrus.LIME_GARNISH
		}
	],
	notes: 'Float the 151 rum on top.',
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.SPICED,
		Tags.AlcoholLevel.HIGH,
		Tags.Technique.FLASH_BLENDED,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.TIKI_MUG,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default RUM_BARREL;
