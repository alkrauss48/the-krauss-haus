import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const SIDECAR: Cocktail = {
	title: 'Sidecar',
	description: 'Cognac, dry curaçao, lemon, orange bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/sidecar.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/sidecar.png',
	slug: 'sidecar',
	method: CocktailMethod.Shaken,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.ST_REMY_VSOP
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Liqueurs.DRY_CURACAO
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.ORANGE
		},
		{
			label: 'Garnish: Sugar rim',
			ingredient: Ingredients.Other.SUGAR
		}
	],
	tags: [
		Tags.BaseAlcohol.BRANDY,
		Tags.FlavorProfile.CITRUS,
		Tags.AlcoholLevel.HIGH,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.CLASSIC
	]
};

export default SIDECAR;
