import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const TI_PUNCH: Cocktail = {
	title: 'Ti Punch',
	description: 'Rhum agricole, lime, simple syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/ti-punch.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/ti-punch.png',
	slug: 'ti-punch',
	method: CocktailMethod.Built,
	servedIn: ServedIn.SingleRocksGlass,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.NEISSON_BLANC
		},
		{
			label: '1 Lime coin',
			ingredient: Ingredients.Citrus.LIME_GARNISH
		},
		{
			amount: '1 tsp',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		}
	],
	notes:
		'Served without ice. Mix rhum and simple syrup in glass. Squeeze lime coin (a disk of lime rind) and drop into glass. Chacun prépare sa proper mort (each prepares his own death)!',
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Technique.BUILT,
		Tags.Origin.FOLK,
		Tags.ServedIn.SINGLE_ROCKS_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default TI_PUNCH;
