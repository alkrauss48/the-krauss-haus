import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const KING_OF_KINGS: Cocktail = {
	title: 'King of Kings',
	description:
		'Blended rum, cognac, gin, persian spice liqueur, orgeat, lime, orange, angostura bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/king-of-kings.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/king-of-kings.png',
	slug: 'king-of-kings',
	method: CocktailMethod.FlashBlended,
	servedIn: ServedIn.TikiMug,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.PROBITAS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.ST_REMY_VSOP
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.FORDS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.PERSIAN_SPICE_LIQUEUR
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.ORGEAT
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.ORANGE
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.ANGOSTURA
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.BaseAlcohol.BRANDY,
		Tags.BaseAlcohol.GIN,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.FLASH_BLENDED,
		Tags.Style.TIKI,
		Tags.Origin.ORIGINAL,
		Tags.ServedIn.TIKI_MUG,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default KING_OF_KINGS;
