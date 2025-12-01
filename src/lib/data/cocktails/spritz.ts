import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const SPRITZ: Cocktail = {
	title: 'Spritz',
	description: 'Prosecco, aperol, soda water, orange wedge.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/spritz.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/spritz.png',
	slug: 'spritz',
	method: CocktailMethod.Built,
	servedIn: ServedIn.DoubleRocksGlass,
	ingredients: [
		{
			amount: '3oz',
			ingredient: Ingredients.BeerAndWine.PROSECCO
		},
		{
			amount: '2oz',
			ingredient: Ingredients.Liqueurs.APEROL
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Mixers.SODA_WATER
		},
		{
			label: 'Garnish: Orange wedge',
			ingredient: Ingredients.Citrus.ORANGE_GARNISH
		}
	],
	variations: [
		{
			name: 'Limoncello',
			ingredients: [
				{
					label: 'Swap Aperol with Limoncello.',
					ingredient: Ingredients.Liqueurs.LIMONCELLO
				}
			],
			images: []
		}
	],
	tags: [
		Tags.FlavorProfile.BITTER,
		Tags.FlavorProfile.BUBBLY,
		Tags.AlcoholLevel.LOW,
		Tags.Technique.BUILT,
		Tags.Origin.MODERN,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default SPRITZ;
