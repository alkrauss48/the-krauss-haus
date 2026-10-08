import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const KIRSCHWASSER_PUNCH: Cocktail = {
	title: 'Kirschwasser Punch',
	description: 'Kirschwasser, rich simple syrup, yellow chartreuse, lemon, maraschino cherry.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/kirschwasser-punch.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/kirschwasser-punch.webp',
	slug: 'kirschwasser-punch',
	method: CocktailMethod.Built,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.SCHLADERER
		},
		{
			amount: '2 tsp',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			amount: '1 tsp',
			ingredient: Ingredients.Liqueurs.YELLOW_CHARTREUSE
		},
		{
			label: '1 Lemon wedge, squeezed and garnished',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		},
		{
			label: 'Garnish: Maraschino cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		}
	],
	notes:
		'Build in the glass: squeeze the lemon wedge in and drop it into the drink, add the rest, then fill with crushed ice. Garnish with a maraschino cherry.',
	tags: [
		Tags.BaseAlcohol.BRANDY,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.BUILT,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC,
		Tags.AlcoholLevel.HIGH,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default KIRSCHWASSER_PUNCH;
