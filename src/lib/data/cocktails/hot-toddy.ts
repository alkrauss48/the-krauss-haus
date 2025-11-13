import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const HOT_TODDY: Cocktail = {
	title: 'Hot Toddy',
	slug: 'hot-toddy',
	description: 'Bourbon, benedictine, spiced tea, honey, lemon, cinnamon, maraschino cherry.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/hot-toddy.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/hot-toddy.png',
	method: CocktailMethod.Built,
	servedIn: ServedIn.Mug,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.EVAN_WILLIAMS_BIB
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.BENEDICTINE
		},
		{
			amount: '5oz',
			ingredient: Ingredients.Mixers.SPICED_TEA
		},
		{
			label: 'Honey to taste',
			ingredient: Ingredients.Syrups.HONEY_SYRUP
		},
		{
			label: '1/4 Lemon, juiced',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			label: 'Garnish: Cinnamon stick',
			ingredient: Ingredients.HerbsAndSpices.CINNAMON
		},
		{
			label: 'Garnish: Lemon wheel',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		},
		{
			label: 'Garnish: Maraschino cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		}
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.FlavorProfile.SPICED,
		Tags.FlavorProfile.HERBAL,
		Tags.Temperature.HOT,
		Tags.Technique.BUILT,
		Tags.Origin.FOLK,
		Tags.ServedIn.MUG
	],
	notes: "I usually do 7 swirls of honey; it's just too thick to want to measure with a jigger."
};

export default HOT_TODDY;
