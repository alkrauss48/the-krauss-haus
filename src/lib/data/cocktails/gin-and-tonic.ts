import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const GIN_AND_TONIC: Cocktail = {
	title: 'Gin and Tonic',
	description: 'Gin, tonic water, lime wedge.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/gin-and-tonic.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/gin-and-tonic.png',
	slug: 'gin-and-tonic',
	method: CocktailMethod.Built,
	servedIn: ServedIn.HighballGlass,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.FORDS
		},
		{
			amount: '4oz',
			ingredient: Ingredients.Mixers.TONIC_WATER
		},
		{
			label: 'Garnish: Lime wedge',
			ingredient: Ingredients.Citrus.LIME_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.GIN,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.BITTER,
		Tags.AlcoholLevel.LOW,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.HIGHBALL_GLASS
	]
};

export default GIN_AND_TONIC;
