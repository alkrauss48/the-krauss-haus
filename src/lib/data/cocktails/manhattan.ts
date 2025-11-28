import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const MANHATTAN: Cocktail = {
	title: 'Manhattan',
	description: 'Rye whiskey, sweet vermouth, black walnut bitters, maraschino cherry.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/manhattan.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/manhattan.png',
	slug: 'manhattan',
	method: CocktailMethod.Stirred,
	servedIn: ServedIn.NickAndNoraGlass,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.RITTENHOUSE
		},
		{
			amount: '1oz',
			ingredient: Ingredients.BeerAndWine.COCCHI_VERMOUTH_DI_TORINO
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.BLACK_WALNUT
		},
		{
			label: 'Garnish: Maraschino cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		}
	],
	variations: [
		{
			name: 'Black',
			ingredients: [
				{
					label: 'Sub Amaro Lucano for sweet vermouth.',
					ingredient: Ingredients.Liqueurs.AMARO_LUCANO
				}
			],
			images: []
		}
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.BaseAlcohol.WINE,
		Tags.AlcoholLevel.HIGH,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Technique.STIRRED,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.NICK_AND_NORA_GLASS
	]
};

export default MANHATTAN;
