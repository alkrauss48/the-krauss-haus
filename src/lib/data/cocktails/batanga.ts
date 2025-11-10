import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const BATANGA: Cocktail = {
	title: 'Batanga',
	description: 'Blanco tequila, coca cola, lime, salt.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/batanga.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/batanga.png',
	slug: 'batanga',
	method: CocktailMethod.Built,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.CIMARRON_BLANCO
		},
		{
			amount: '4oz',
			ingredient: Ingredients.Mixers.COCA_COLA
		},
		{
			amount: '.5oz',
			label: 'Lime, pressed with shell',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Other.SALT
		}
	],
	notes:
		'Typically unmeasured. Add tequila, then ice, then lime (including shell). Top with soda, add salt, and stir with the knife used to cut the lime.',
	tags: [
		Tags.BaseAlcohol.TEQUILA,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.FOLK
	]
};

export default BATANGA;
