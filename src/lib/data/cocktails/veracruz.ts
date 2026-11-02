import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const VERACRUZ: Cocktail = {
	title: 'Veracruz',
	description: 'Mezcal, chareau, dry vermouth, lime, rich simple syrup, chili bitters, cucumber.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/veracruz.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/veracruz.webp',
	slug: 'veracruz',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.SmallCubes,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.DEL_MAGUY_VIDA
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.CHAREAU
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BeerAndWine.DOLIN_VERMOUTH_DRY
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.CHILI
		},
		{
			label: 'Garnish: Cucumber spear',
			ingredient: Ingredients.Other.CUCUMBER
		}
	],
	tags: [
		Tags.BaseAlcohol.MEZCAL,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default VERACRUZ;
