import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const JAGER_OLD_FASHIONED: Cocktail = {
	title: 'Jäger Old Fashioned',
	description: 'Jägermeister, rye whiskey, maple syrup, aromatic bitters, orange twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/jager-old-fashioned.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/jager-old-fashioned.webp',
	slug: 'jager-old-fashioned',
	method: CocktailMethod.Built,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.LargeCube,
	hasStraw: false,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.Liqueurs.JAGERMEISTER
		},
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.RITTENHOUSE
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.MAPLE_SYRUP
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			label: 'Garnish: Orange twist',
			ingredient: Ingredients.Citrus.ORANGE_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.BUILT,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.MODERN,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default JAGER_OLD_FASHIONED;
