import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const JUNGLE_BIRD: Cocktail = {
	title: 'Jungle Bird',
	description: 'Dark rum, campari, pineapple, lime, demarara syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/jungle-bird.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/jungle-bird.png',
	slug: 'jungle-bird',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.LargeCube,
	hasStraw: false,
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
			ingredient: Ingredients.Citrus.PINEAPPLE_GARNISH
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
		Tags.AlcoholLevel.LOW,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default JUNGLE_BIRD;
