import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const OLD_FASHIONED: Cocktail = {
	title: 'Old Fashioned',
	description: 'Bourbon, demerara syrup, black walnut bitters, orange twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/old-fashioned.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/old-fashioned.png',
	slug: 'old-fashioned',
	method: CocktailMethod.Built,
	servedIn: ServedIn.DoubleRocksGlass,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.ELIJAH_CRAIG
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.BLACK_WALNUT
		},
		{
			label: 'Garnish: Orange twist',
			ingredient: Ingredients.Citrus.ORANGE_GARNISH
		}
	],
	variations: [
		{
			name: 'Smoked',
			ingredients: ['Served in a smoked glass'],
			images: []
		},
		{
			name: 'Muddled',
			ingredients: [
				{
					label: 'Muddle extra orange slice.',
					ingredient: Ingredients.Citrus.ORANGE_GARNISH
				},
				{
					label: 'Muddle maraschino cherry.',
					ingredient: Ingredients.Other.MARASCHINO_CHERRY
				}
			],
			images: []
		},
		{
			name: 'Rum',
			ingredients: [
				{
					label: 'Sub aged rhum agricole for bourbon.',
					ingredient: Ingredients.BaseSpirits.CLEMENT_SELECT_BARREL
				}
			],
			images: []
		},
		{
			name: 'Spiced',
			ingredients: [
				{
					label: 'Sub rye whiskey for bourbon.',
					ingredient: Ingredients.BaseSpirits.RITTENHOUSE
				},
				{
					label: 'Add 1/4oz of allspice dram.',
					ingredient: Ingredients.Liqueurs.ALLSPICE_DRAM
				}
			],
			images: []
		}
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.Technique.BUILT,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default OLD_FASHIONED;
