import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const SLAP_N_PICKLE: Cocktail = {
	title: "Slap 'N' Pickle",
	description: 'Aquavit, cucumber, lime, simple syrup, grenadine, celery bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/slap-n-pickle.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/slap-n-pickle.png',
	slug: 'slap-n-pickle',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.LargeCube,
	hasStraw: false,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.AQUAVIT
		},
		{
			label: '3 Cucumber wheels',
			ingredient: Ingredients.Other.CUCUMBER
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			amount: '1tsp',
			ingredient: Ingredients.Syrups.GRENADINE
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.CELERY
		},
		{
			label: 'Garnish: Cucumber spear',
			ingredient: Ingredients.Other.CUCUMBER
		}
	],
	notes:
		'Muddle cucumber wheels in shaker. Add remaining ingredients. Shake and strain into double rocks glass over block of ice. Garnish with cucumber spear.',
	tags: [
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.MODERN,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default SLAP_N_PICKLE;
