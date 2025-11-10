import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const JUNGLE_BIRD: Cocktail = {
	title: 'Jungle Bird',
	subtitle: 'A perfect balance of bitter and sweet',
	description: 'Dark rum, campari, pineapple, lime, demarara syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/jungle-bird.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/jungle-bird.png',
	slug: 'jungle-bird',
	method: CocktailMethod.Shaken,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_SIGNATURE
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Liqueurs.CAMPARI
		},
		{
			amount: '1.5oz',
			ingredient: Ingredients.Citrus.PINEAPPLE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
		},
		{
			label: 'Garnish: Pineapple wedge',
			ingredient: Ingredients.Citrus.PINEAPPLE
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.BITTER,
		Tags.FlavorProfile.FRUITY,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.FlavorProfile.CITRUS,
		Tags.Origin.CLASSIC,
		Tags.AlcoholLevel.LOW
	]
};

export default JUNGLE_BIRD;
