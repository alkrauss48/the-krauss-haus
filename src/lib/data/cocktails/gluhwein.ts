import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const GLUHWEIN: Cocktail = {
	title: 'Glühwein',
	subtitle: 'Our own family recipe',
	description: 'Red wine, brandy, orange, lemon, cinnamon, clove, brown sugar.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/gluhwein.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/gluhwein.png',
	slug: 'gluhwein',
	ingredients: [
		{
			amount: '750ml',
			ingredient: Ingredients.BeerAndWine.CABERNET_SAUVIGNON
		},
		{
			label: '1/2 orange, zested and juiced',
			ingredient: Ingredients.Citrus.ORANGE
		},
		{
			label: '1/2 lemon, zested and juiced',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			label: '2 Cinnamon sticks',
			ingredient: Ingredients.HerbsAndSpices.CINNAMON
		},
		{
			amount: '6',
			label: 'Cloves',
			ingredient: Ingredients.HerbsAndSpices.CLOVE
		},
		{
			label: '1/4C Brown sugar',
			ingredient: Ingredients.Other.SUGAR
		},
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.ST_REMY_VSOP
		}
	],
	tags: [
		Tags.BaseAlcohol.WINE,
		Tags.BaseAlcohol.BRANDY,
		Tags.FlavorProfile.SPICED,
		Tags.Temperature.HOT,
		Tags.Origin.FOLK
	]
};

export default GLUHWEIN;
