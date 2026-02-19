import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const CHOCOLATE_COVERED_CHERRIES: Cocktail = {
	title: 'Chocolate Covered Cherries',
	subtitle: "A creation from Teller's in OKC",
	description:
		'Bourbon, crème de cacao, cherry heering, cherry syrup, xocolatl bitters, maraschino cherry.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/chocolate-covered-cherries.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/chocolate-covered-cherries.png',
	slug: 'chocolate-covered-cherries',
	method: CocktailMethod.Stirred,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.LargeCube,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.EVAN_WILLIAMS_BIB
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Liqueurs.CREME_DE_CACAO
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.CHERRY_HEERING
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.MARASCHINO_CHERRY_SYRUP
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.XOCOLATL
		},
		{
			label: 'Garnish: Maraschino cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		}
	],
	notes: "We first experienced this cocktail at Teller's in OKC for our 7th anniversary.",
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.FlavorProfile.FRUITY,
		Tags.AlcoholLevel.HIGH,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default CHOCOLATE_COVERED_CHERRIES;
