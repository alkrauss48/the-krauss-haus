import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const BRANDY_CRUSTA: Cocktail = {
	title: 'Brandy Crusta',
	description: 'Cognac, dry curaçao, maraschino, lemon, angostura, sugar-crusted rim.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/brandy-crusta.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/brandy-crusta.png',
	slug: 'brandy-crusta',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.CoupeGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.ST_REMY_VSOP
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.DRY_CURACAO
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.MARASCHINO_LIQUEUER
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.ORANGE
		},
		{
			label: 'Garnish: Sugar-crusted rim',
			ingredient: Ingredients.Other.SUGAR
		},
		{
			label: 'Garnish: Long, wide lemon peel lining the glass',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		}
	],
	notes:
		'Crust the rim with sugar and line the inside of the glass with a long, wide lemon peel before straining.',
	tags: [
		Tags.BaseAlcohol.BRANDY,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.Technique.SHAKEN,
		Tags.Style.SOUR,
		Tags.Origin.CLASSIC,
		Tags.AlcoholLevel.HIGH,
		Tags.ServedIn.COUPE_GLASS,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default BRANDY_CRUSTA;
