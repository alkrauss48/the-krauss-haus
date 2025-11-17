import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const CARAMEL_APPLE_SPICE: Cocktail = {
	title: 'Caramel Apple Spice',
	subtitle: 'A Krauss Family original',
	description:
		'Apple brandy, goldschläger, caramel vodka, apple strudel liqueur, calvados, apple cider.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/caramel-apple-spice.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/caramel-apple-spice.png',
	slug: 'caramel-apple-spice',
	method: CocktailMethod.Built,
	servedIn: ServedIn.Mug,
	ingredients: [
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.LAIRDS_BIB
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.GOLDSCHLAGER
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.CARAMEL_VODKA
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.APPLE_STRUDEL_LIQUEUER
		},
		{
			label: 'Splash of Calvados',
			ingredient: Ingredients.BaseSpirits.BOULARD_VSOP
		},
		{
			amount: '5oz',
			ingredient: Ingredients.Mixers.APPLE_CIDER
		},
		{
			label: 'Garnish: Cinnamon Stick',
			ingredient: Ingredients.HerbsAndSpices.CINNAMON
		},
		{
			label: 'Garnish: Maraschino Cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		}
	],
	tags: [
		Tags.BaseAlcohol.BRANDY,
		Tags.Temperature.HOT,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.BUILT,
		Tags.Origin.ORIGINAL,
		Tags.AlcoholLevel.LOW,
		Tags.ServedIn.MUG,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default CARAMEL_APPLE_SPICE;
