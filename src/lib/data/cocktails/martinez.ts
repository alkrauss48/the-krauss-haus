import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const MARTINEZ: Cocktail = {
	title: 'Martinez',
	description: 'Genever, sweet vermouth, maraschino, angostura, orange bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/martinez.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/martinez.png',
	slug: 'martinez',
	method: CocktailMethod.Stirred,
	servedIn: ServedIn.NickAndNoraGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.BOLS
		},
		{
			amount: '1.5oz',
			ingredient: Ingredients.BeerAndWine.COCCHI_VERMOUTH_DI_TORINO
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.MARASCHINO_LIQUEUER
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.ORANGE
		},
		{
			label: 'Garnish: Orange twist',
			ingredient: Ingredients.Citrus.ORANGE_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.GIN,
		Tags.BaseAlcohol.WINE,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC,
		Tags.AlcoholLevel.HIGH,
		Tags.ServedIn.NICK_AND_NORA_GLASS
	]
};

export default MARTINEZ;
