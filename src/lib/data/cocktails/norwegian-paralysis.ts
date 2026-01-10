import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const NORWEIGAN_PARALYSIS: Cocktail = {
	title: 'Norwegian Paralysis',
	description: 'Aquavit, orange, pineapple, lemon, demarara syrup, orgeat.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/norwegian-paralysis.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/norwegian-paralysis.png',
	slug: 'norwegian-paralysis',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.HighballGlass,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.AQUAVIT
		},
		{
			amount: '1.5oz',
			ingredient: Ingredients.Citrus.ORANGE
		},
		{
			amount: '1.5oz',
			ingredient: Ingredients.Citrus.PINEAPPLE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.ORGEAT
		},
		{
			label: 'Garnish: Lemon wedge',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		}
	],
	tags: [
		Tags.FlavorProfile.CITRUS,
		Tags.AlcoholLevel.LOW,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.MODERN,
		Tags.ServedIn.HIGHBALL_GLASS,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default NORWEIGAN_PARALYSIS;
