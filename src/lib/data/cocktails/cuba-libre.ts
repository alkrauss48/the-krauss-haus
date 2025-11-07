import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const CUBA_LIBRE: Cocktail = {
	title: 'Cuba Libre',
	description: 'Light rum, coca cola, lime.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/cuba-libre.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/cuba-libre.png',
	slug: 'cuba-libre',
	method: CocktailMethod.Built,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.PLANTERAY_3_STARS
		},
		{
			amount: '4oz',
			ingredient: Ingredients.Mixers.COCA_COLA
		},
		{
			amount: '.5oz',
			label: 'Lime, pressed with shell',
			ingredient: Ingredients.Citrus.LIME
		}
	],
	notes: 'Typically unmeasured. Add rum, then ice, then lime (including shell). Top with soda.',
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.FOLK
	]
};

export default CUBA_LIBRE;
