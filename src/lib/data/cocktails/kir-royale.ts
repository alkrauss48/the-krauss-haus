import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const KIR_ROYALE: Cocktail = {
	title: 'Kir Royale',
	description: 'Crème de baies noires, champagne.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/kir-royale.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/kir-royale.png',
	slug: 'kir-royale',
	method: CocktailMethod.Built,
	servedIn: ServedIn.FluteGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.HOUSE_DARK_BERRY_CREME
		},
		{
			amount: '4oz',
			ingredient: Ingredients.BeerAndWine.CHAMPAGNE
		}
	],
	tags: [
		Tags.BaseAlcohol.WINE,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.FRUITY,
		Tags.Technique.BUILT,
		Tags.Origin.CLASSIC,
		Tags.AlcoholLevel.LOW,
		Tags.ServedIn.FLUTE_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default KIR_ROYALE;
