import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import DICK_BRADSELL from '$lib/data/bartenders/dick-bradsell';

const RUSSIAN_SPRING_PUNCH: Cocktail = {
	title: 'Russian Spring Punch',
	description: 'Vodka, crème de baies noires, champagne, lemon, simple syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/russian-spring-punch.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/russian-spring-punch.png',
	slug: 'russian-spring-punch',
	createdBy: DICK_BRADSELL,
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.HighballGlass,
	ice: Ice.SmallCubes,
	hasStraw: true,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.MONOPOLOWA
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.HOUSE_DARK_BERRY_CREME
		},
		{
			amount: '2oz',
			ingredient: Ingredients.BeerAndWine.CHAMPAGNE
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			label: 'Garnish: Lemon wheel and blackberry',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		}
	],
	notes:
		'Shake everything except champagne with ice. Strain over fresh ice in a highball glass and top with champagne.',
	tags: [
		Tags.BaseAlcohol.VODKA,
		Tags.BaseAlcohol.WINE,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.BUBBLY,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.HIGHBALL_GLASS
	]
};

export default RUSSIAN_SPRING_PUNCH;
