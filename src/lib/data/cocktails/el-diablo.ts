import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import TRADER_VIC from '$lib/data/bartenders/trader-vic';

const EL_DIABLO: Cocktail = {
	title: 'El Diablo',
	description: 'Blanco tequila, crème de baies noires, lime, ginger beer.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/el-diablo.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/el-diablo.png',
	slug: 'el-diablo',
	createdBy: TRADER_VIC,
	method: CocktailMethod.Built,
	servedIn: ServedIn.HighballGlass,
	ice: Ice.SmallCubes,
	hasStraw: true,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.CIMARRON_BLANCO
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.HOUSE_DARK_BERRY_CREME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '3oz',
			ingredient: Ingredients.Mixers.GINGER_BEER
		},
		{
			label: 'Garnish: Lime wedge',
			ingredient: Ingredients.Citrus.LIME_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.TEQUILA,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.SPICED,
		Tags.FlavorProfile.BUBBLY,
		Tags.Technique.BUILT,
		Tags.AlcoholLevel.LOW,
		Tags.Style.HIGHBALL,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.HIGHBALL_GLASS
	]
};

export default EL_DIABLO;
