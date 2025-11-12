import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const PENICILLIN: Cocktail = {
	title: 'Penicillin',
	description: 'Blended scotch, single malt scotch, honey-ginger syrup, lemon.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/penicillin.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/penicillin.png',
	slug: 'penicillin',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.MONKEY_SHOULDER
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.BaseSpirits.LAPHROIG
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Syrups.HONEY_GINGER_SYRUP
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		'Garnish: Candied ginger'
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.SHAKEN,

		Tags.Style.SOUR,
		Tags.Origin.MODERN,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default PENICILLIN;
