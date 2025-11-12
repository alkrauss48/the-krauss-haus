import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const DONGA_PUNCH: Cocktail = {
	title: 'Donga Punch',
	description: 'Aged rhum agricole, grapefruit, cinnamon syrup, lime.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/donga-punch.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/donga-punch.png',
	slug: 'donga-punch',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.CLEMENT_SELECT_BARREL
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.GRAPEFRUIT
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.CINNAMON_SYRUP
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default DONGA_PUNCH;
