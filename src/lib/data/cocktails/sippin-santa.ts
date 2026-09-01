import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import JEFF_BEACHBUM_BERRY from '$lib/data/bartenders/jeff-beachbum-berry';

const SIPPIN_SANTA: Cocktail = {
	title: "Sippin' Santa",
	description: 'Demerara rum, amaro, lemon, orange, honey-ginger, cinnamon, nutmeg.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/sippin-santa.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/sippin-santa.png',
	slug: 'sippin-santa',
	createdBy: JEFF_BEACHBUM_BERRY,
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.TikiMug,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.HAMILTON_86
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.AMARO_LUCANO
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.ORANGE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.HONEY_GINGER_SYRUP
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.CINNAMON_SYRUP
		},
		{
			label: 'Garnish: Freshly grated nutmeg',
			ingredient: Ingredients.HerbsAndSpices.NUTMEG
		}
	],
	notes: "Served in the Surfin' Santa tiki mug from Beachbum Berry's Sippin' Santa popup bar.",
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.SPICED,
		Tags.FlavorProfile.BITTER,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.MODERN,
		Tags.ServedIn.TIKI_MUG,
		Tags.ServedIn.EXCLUSIVE_DRINKWARE,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default SIPPIN_SANTA;
