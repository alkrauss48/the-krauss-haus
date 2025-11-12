import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const TORONTO: Cocktail = {
	title: 'Toronto',
	description: 'Rye whiskey, fernet branca, demerara syrup, lemon twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/toronto.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/toronto.png',
	slug: 'toronto',
	method: CocktailMethod.Stirred,
	servedIn: ServedIn.NickAndNoraGlass,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.RITTENHOUSE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.FERNET_BRANCA
		},
		{
			amount: '1 tsp',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
		},
		{
			label: 'Garnish: Lemon twist',
			ingredient: Ingredients.Citrus.LEMON
		}
	],
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.AlcoholLevel.HIGH,
		Tags.FlavorProfile.BITTER,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.NICK_AND_NORA_GLASS
	]
};

export default TORONTO;
