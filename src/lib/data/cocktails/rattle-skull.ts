import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import DEMERARA_SYRUP from '../recipes/demerara-syrup';

const RATTLE_SKULL: Cocktail = {
	title: 'Rattle Skull',
	description: 'Porter beer, dark rum, cognac, lime, demerara syrup, nutmeg.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/rattle-skull.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/rattle-skull.png',
	slug: 'rattle-skull',
	method: CocktailMethod.Shaken,
	ingredients: [
		'12oz Porter (beer)',
		'1oz Appleton Estate Signature Jamaican rum',
		'1oz Cognac',
		'.75oz Lime',
		{
			amount: '.5oz',
			recipe: DEMERARA_SYRUP
		},
		'Garnish: Freshly grated nutmeg'
	],
	notes:
		'This cocktail is over 300 years old, dating back to colonial New England. A "rattle skull" refers to an empty-headed person, which this drink might induce. Pour beer into a glass. Shake rum, cognac, lime, and demerara syrup with ice. Strain over beer into glass. Garnish with nutmeg.',
	tags: [
		Tags.Origin.FOLK,
		Tags.BaseAlcohol.RUM,
		Tags.BaseAlcohol.BRANDY,
		Tags.AlcoholLevel.HIGH,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.SHAKEN
	]
};

export default RATTLE_SKULL;
