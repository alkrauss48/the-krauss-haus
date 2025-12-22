import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const CHAMPAGNE_COCKTAIL: Cocktail = {
	title: 'Champagne Cocktail',
	description: 'Champagne, cognac, demerara syrup, angostura bitters, lemon twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/champagne-cocktail.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/champagne-cocktail.png',
	slug: 'champagne-cocktail',
	method: CocktailMethod.Built,
	servedIn: ServedIn.FluteGlass,
	ingredients: [
		{
			amount: '4oz',
			ingredient: Ingredients.BeerAndWine.CHAMPAGNE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.ST_REMY_VSOP
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
		},
		{
			amount: '3 dashes',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			label: 'Garnish: Lemon twist',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		}
	],
	notes:
		'Pour cognac, demerara syrup, and angostura bitters into flute glass. Stir, then add champagne. Garnish with lemon twist.',
	tags: [
		Tags.BaseAlcohol.WINE,
		Tags.BaseAlcohol.BRANDY,
		Tags.FlavorProfile.BUBBLY,
		Tags.Technique.BUILT,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.FLUTE_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default CHAMPAGNE_COCKTAIL;
