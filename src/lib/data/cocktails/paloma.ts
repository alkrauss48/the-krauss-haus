import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const PALOMA: Cocktail = {
	title: 'Paloma',
	description: 'Tequila, grapefruit soda, lime.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/paloma.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/paloma.png',
	slug: 'paloma',
	method: CocktailMethod.Built,
	servedIn: ServedIn.HighballGlass,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.CIMARRON_BLANCO
		},
		{
			amount: '4oz',
			ingredient: Ingredients.Mixers.GRAPEFRUIT_SODA
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			label: 'Garnish: Salt rim',
			ingredient: Ingredients.Other.SALT
		}
	],
	notes: 'Typically unmeasured. Add tequila, then ice, then lime. Top with soda.',
	tags: [
		Tags.BaseAlcohol.TEQUILA,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.FOLK,
		Tags.ServedIn.HIGHBALL_GLASS
	]
};

export default PALOMA;
