import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import JEFF_BEACHBUM_BERRY from '$lib/data/bartenders/jeff-beachbum-berry';

const JINGLE_BIRD: Cocktail = {
	title: 'Jingle Bird',
	description: 'Bourbon, Jamaican rum, campari, pineapple, lime, cinnamon, allspice dram, nutmeg.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/jingle-bird.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/jingle-bird.webp',
	slug: 'jingle-bird',
	createdBy: JEFF_BEACHBUM_BERRY,
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.TikiMug,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.EVAN_WILLIAMS_BIB
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_SIGNATURE
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Liqueurs.CAMPARI
		},
		{
			amount: '1.5oz',
			ingredient: Ingredients.Citrus.PINEAPPLE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '2 tsp',
			ingredient: Ingredients.Syrups.CINNAMON_SYRUP
		},
		{
			amount: '1 tsp',
			ingredient: Ingredients.Liqueurs.ALLSPICE_DRAM
		},
		{
			label: 'Garnish: Freshly grated nutmeg',
			ingredient: Ingredients.HerbsAndSpices.NUTMEG
		},
		{
			label: 'Garnish: 3 pineapple fronds',
			ingredient: Ingredients.Citrus.PINEAPPLE_GARNISH
		}
	],
	notes: "Served in the Jingle Bird tiki mug from Beachbum Berry's Sippin' Santa popup bar.",
	tags: [
		Tags.BaseAlcohol.WHISKEY,
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.BITTER,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.MODERN,
		Tags.ServedIn.TIKI_MUG,
		Tags.ServedIn.EXCLUSIVE_DRINKWARE,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default JINGLE_BIRD;
