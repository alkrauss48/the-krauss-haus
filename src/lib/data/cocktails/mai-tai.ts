import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import TRADER_VIC from '$lib/data/bartenders/trader-vic';

const MAI_TAI: Cocktail = {
	title: 'Mai Tai',
	description: 'Jamaican rum, rhum agricole, dry curaçao, orgeat, lime, demerara syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/mai-tai.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/mai-tai.webp',
	slug: 'mai-tai',
	createdBy: TRADER_VIC,
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_12_YEAR
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.SMITH_AND_CROSS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.CLEMENT_SELECT_BARREL
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.DRY_CURACAO
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.ORGEAT
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
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
	variations: [
		{
			name: "Aaron's Original",
			ingredients: [
				{
					label: 'Increase Smith and Cross to 1oz.',
					ingredient: Ingredients.BaseSpirits.SMITH_AND_CROSS
				},
				{
					label: 'Swap the Clement Select Barrel for .5oz Leblon Cachaça.',
					ingredient: Ingredients.BaseSpirits.LEBLON
				},
				{
					label: 'Swap the Appleton Estate 12-Year for .5oz Planteray OFTD.',
					ingredient: Ingredients.BaseSpirits.PLANTERAY_OFTD
				}
			],
			images: []
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.AlcoholLevel.HIGH,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default MAI_TAI;
