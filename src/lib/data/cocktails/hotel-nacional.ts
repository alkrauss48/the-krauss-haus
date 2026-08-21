import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const HOTEL_NACIONAL: Cocktail = {
	title: 'Hotel Nacional',
	description: 'Light rum, stone fruit liqueur, pineapple, lime, simple syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/hotel-nacional.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/hotel-nacional.png',
	slug: 'hotel-nacional',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.CoupeGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.PLANTERAY_3_STARS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.STONE_FRUIT_LIQUEUR
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.PINEAPPLE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP
		},
		{
			label: 'Garnish: Lime wheel',
			ingredient: Ingredients.Citrus.LIME_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.COUPE_GLASS,
		Tags.AlcoholLevel.LOW,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default HOTEL_NACIONAL;
