import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const SAZERAC: Cocktail = {
	title: 'Sazerac',
	description: "Rye whiskey, cognac, absinthe, peychaud's bitters, demerara syrup, lemon twist.",
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/sazerac.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/sazerac.png',
	slug: 'sazerac',
	method: CocktailMethod.Stirred,
	servedIn: ServedIn.SingleRocksGlass,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.RITTENHOUSE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.ST_REMY_VSOP
		},
		{
			label: 'Absinthe rinse',
			ingredient: Ingredients.BaseSpirits.ABSINTHE
		},
		{
			amount: '4 dashes',
			ingredient: Ingredients.Bitters.PEYCHAUDS
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
		},
		{
			label: 'Garnish: Lemon twist',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.BaseAlcohol.BRANDY,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.SINGLE_ROCKS_GLASS
	]
};

export default SAZERAC;
