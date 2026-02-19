import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const FOREST_SPIRIT: Cocktail = {
	title: 'Forest Spirit',
	subtitle: 'A Krauss Family original',
	description:
		'Gin, elderflower liqueur, italicus, lemon, honey syrup, orange bitters, tonic water, mint.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/forest-spirit.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/forest-spirit.png',
	slug: 'forest-spirit',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.LargeCube,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.FORDS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.ELDERFLOWER_LIQUEUR
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.ITALICUS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.HONEY_SYRUP
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.ORANGE
		},
		{
			amount: '3-4 oz',
			ingredient: Ingredients.Mixers.TONIC_WATER
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		},
		{
			label: 'Garnish: Expressed lemon twist, discarded',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		},
		'Garnish: Cocktail umbrella'
	],
	notes:
		'Created as a themed drink for My Neighbor Totoro for our 7th anniversary. Shake all ingredients with ice except the soda water. Strain into a double rocks glass over ice. Top with soda water. Express and discard lemon twist. Garnish with a mint sprig and cocktail umbrella.',
	tags: [
		Tags.BaseAlcohol.GIN,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.BITTER,
		Tags.FlavorProfile.BUBBLY,
		Tags.Technique.SHAKEN,
		Tags.Style.HIGHBALL,
		Tags.Origin.ORIGINAL,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default FOREST_SPIRIT;
