import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const SANGRIA: Cocktail = {
	title: 'Sangria',
	description: 'Spanish red wine, brandy, cointreau, orange, lime, lemon, sugar, club soda.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/sangria.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/sangria.png',
	slug: 'sangria',
	servedIn: ServedIn.HighballGlass,
	ingredients: [
		{
			amount: '750mL',
			ingredient: Ingredients.BeerAndWine.TEMPRANILLO
		},
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.ST_REMY_VSOP
		},
		{
			amount: '1.5oz',
			ingredient: Ingredients.Liqueurs.COINTREAU
		},
		{
			label: '1 Orange, sliced',
			ingredient: Ingredients.Citrus.ORANGE
		},
		{
			label: '1 Lime, sliced',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			label: '1/2 Lemon, sliced',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '2 tbsp',
			ingredient: Ingredients.Other.SUGAR
		},
		{
			amount: '12oz',
			ingredient: Ingredients.Mixers.SODA_WATER
		}
	],
	notes:
		'Makes 4-5 servings. Combine all but soda water in pitcher. Let rest at least 2 hours in refrigerator. Pour with fruit over ice into wine glasses, and top with club soda.',
	tags: [
		Tags.BaseAlcohol.WINE,
		Tags.Origin.FOLK,
		Tags.BaseAlcohol.BRANDY,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.FRUITY,
		Tags.ServedIn.HIGHBALL_GLASS
	]
};

export default SANGRIA;
