import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const ANCIENT_MARINER: Cocktail = {
	title: 'Ancient Mariner',
	description:
		'Demerara rum, blended light rum, blanc rhum agricole, allspice dram, lime, grapefruit, demerara syrup, mint.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/ancient-mariner.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/ancient-mariner.png',
	slug: 'ancient-mariner',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.HAMILTON_86
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.PROBITAS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.NEISSON_BLANC
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.ALLSPICE_DRAM
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
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
			label: 'Garnish: Mint Sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		},
		{
			label: 'Garnish: Lime wedge',
			ingredient: Ingredients.Citrus.LIME_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.MODERN,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default ANCIENT_MARINER;
