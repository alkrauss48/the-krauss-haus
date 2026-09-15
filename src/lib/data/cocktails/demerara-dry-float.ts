import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';
import DONN_THE_BEACHCOMBER from '$lib/data/bartenders/donn-beach';

const DEMERARA_DRY_FLOAT: Cocktail = {
	title: 'Demerara Dry Float',
	description:
		'Jamaican rum, passionfruit, lime, lemon, demerara syrup, maraschino, overproof demerara rum float, mint.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/demerara-dry-float.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/demerara-dry-float.webp',
	slug: 'demerara-dry-float',
	createdBy: DONN_THE_BEACHCOMBER,
	method: CocktailMethod.FlashBlended,
	servedIn: ServedIn.DoubleRocksGlass,
	ice: Ice.Crushed,
	hasStraw: true,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_SIGNATURE
		},
		{
			amount: '1.5oz',
			ingredient: Ingredients.Syrups.PASSIONFRUIT_SYRUP
		},
		{
			amount: '2oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '1 tsp',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.MARASCHINO_LIQUEUER
		},
		{
			label: 'Side of Danger: .75oz Overproof Demerara Rum (Hamilton 151)',
			amount: '.75oz',
			ingredient: Ingredients.BaseSpirits.HAMILTON_151
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		}
	],
	notes:
		'Flash blend everything except the mint and the Hamilton 151. Pour into the glass over crushed ice and garnish with mint. Serve the Hamilton 151 alongside in a shot glass — a side of danger — so the guest can float it on the drink themselves.',
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.AlcoholLevel.HIGH,
		Tags.Technique.FLASH_BLENDED,
		Tags.Style.TIKI,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS,
		Tags.PrepTime.COMPLEX_PREP
	]
};

export default DEMERARA_DRY_FLOAT;
