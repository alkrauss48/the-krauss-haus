import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const PORT_LIGHT: Cocktail = {
	title: 'Port Light',
	description: 'Bourbon, honey, lemon, passion fruit.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/port-light.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/port-light.png',
	slug: 'port-light',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.EVAN_WILLIAMS_BIB
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.HONEY_SYRUP
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.PASSIONFRUIT_SYRUP
		},
		{
			label: '1 Egg white',
			ingredient: Ingredients.Other.EGG
		},
		{
			label: 'Garnish: Mint spring',
			ingredient: Ingredients.HerbsAndSpices.MINT
		},
		{
			label: 'Garnish: Pineapple square',
			ingredient: Ingredients.Citrus.PINEAPPLE_GARNISH
		},
		{
			label: 'Garnish: Maraschino cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		}
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default PORT_LIGHT;
