import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const CUBA_LIBRE: Cocktail = {
	title: 'Cuba Libre',
	description: 'Light rum, coca cola, lime.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/cuba-libre.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/cuba-libre.png',
	slug: 'cuba-libre',
	method: CocktailMethod.Built,
	servedIn: ServedIn.HighballGlass,
	ice: Ice.SmallCubes,
	hasStraw: false,
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
			ingredient: Ingredients.Citrus.LIME
		},
		{
			label: 'Garnish: Lime shell',
			ingredient: Ingredients.Citrus.LIME_GARNISH
		}
	],
	notes: 'Typically unmeasured. Add rum, then ice, then lime (including shell). Top with soda.',
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.FOLK,
		Tags.ServedIn.HIGHBALL_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default CUBA_LIBRE;
