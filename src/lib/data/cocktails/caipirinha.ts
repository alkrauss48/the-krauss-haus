import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const CAIPIRINHA: Cocktail = {
	title: 'Caipirinha',
	description: 'Cachaça, lime, sugar.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/caipirinha.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/caipirinha.png',
	slug: 'caipirinha',
	method: CocktailMethod.Built,
	servedIn: ServedIn.DoubleRocksGlass,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.LEBLON
		},
		{
			amount: '6',
			label: 'Lime wedges',
			ingredient: Ingredients.Citrus.LIME_GARNISH
		},
		{
			amount: '1 tbsp',
			ingredient: Ingredients.Other.SUGAR
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.Style.SOUR,
		Tags.Technique.BUILT,
		Tags.Origin.FOLK,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default CAIPIRINHA;
