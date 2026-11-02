import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const BARREL_OF_MISCHIEF: Cocktail = {
	title: 'Barrel of Mischief',
	description:
		'Gin, jamaican rum, italicus, chareau, stone fruit liqueur, amaro lucano, lemon, rich simple syrup, mint.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/barrel-of-mischief.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/barrel-of-mischief.webp',
	slug: 'barrel-of-mischief',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.TikiMug,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.TANQUERAY
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.SMITH_AND_CROSS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.ITALICUS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.CHAREAU
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.STONE_FRUIT_LIQUEUR
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.AMARO_LUCANO
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		},
		{
			label: 'Garnish: Lemon wheel',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		}
	],
	notes: "Served in the Trader Sam's 15th Anniversary Laughing Hyena tiki mug.",
	tags: [
		Tags.BaseAlcohol.GIN,
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.CITRUS,
		Tags.AlcoholLevel.HIGH,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.ServedIn.TIKI_MUG,
		Tags.ServedIn.EXCLUSIVE_DRINKWARE,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default BARREL_OF_MISCHIEF;
