import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const NAUTILUS: Cocktail = {
	title: 'Nautilus',
	description:
		'Jamaican rum, rhum agricole, stone fruit liqueur, pineapple, orange, passionfruit, falernum, lime, lemon, angostura bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/nautilus.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/nautilus.png',
	slug: 'nautilus',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.TikiMug,
	ice: Ice.Crushed,
	hasStraw: true,
	servings: 2,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_SIGNATURE
		},
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.CLEMENT_SELECT_BARREL
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Liqueurs.STONE_FRUIT_LIQUEUR
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.PINEAPPLE
		},
		{
			amount: '1.5oz',
			ingredient: Ingredients.Citrus.ORANGE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.PASSIONFRUIT_SYRUP
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Liqueurs.FALERNUM
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '5 dashes',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		},
		{
			label: 'Garnish: Maraschino cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		}
	],
	notes:
		"Serves two. Served in the Nautilus tiki mug from Trader Sam's Grog Grotto at Disney World's Polynesian Resort. Garnish with any additional garnishes, such as pineapple fronds and edible flowers.",
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.SPICED,
		Tags.AlcoholLevel.HIGH,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.MODERN,
		Tags.ServedIn.TIKI_MUG,
		Tags.ServedIn.EXCLUSIVE_DRINKWARE,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default NAUTILUS;
