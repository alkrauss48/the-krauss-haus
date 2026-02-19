import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const RATTLE_SKULL: Cocktail = {
	title: 'Rattle Skull',
	description: 'Porter beer, dark rum, cognac, lime, demerara syrup, nutmeg.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/rattle-skull.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/rattle-skull.png',
	slug: 'rattle-skull',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.PintGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '12oz',
			ingredient: Ingredients.BeerAndWine.FULLERS_LONDON_PORTER
		},
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_SIGNATURE
		},
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.ST_REMY_VSOP
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.DEMERARA_SYRUP
		},
		{
			label: 'Garnish: Freshly grated nutmeg',
			ingredient: Ingredients.HerbsAndSpices.NUTMEG
		}
	],
	notes:
		'This cocktail is over 300 years old, dating back to colonial New England. A "rattle skull" refers to an empty-headed person, which this drink might induce. Pour beer into a glass. Shake rum, cognac, lime, and demerara syrup with ice. Strain over beer into glass. Garnish with nutmeg.',
	tags: [
		Tags.BaseAlcohol.BEER,
		Tags.Origin.FOLK,
		Tags.BaseAlcohol.RUM,
		Tags.BaseAlcohol.BRANDY,
		Tags.AlcoholLevel.HIGH,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.SHAKEN,
		Tags.ServedIn.PINT_GLASS
	]
};

export default RATTLE_SKULL;
