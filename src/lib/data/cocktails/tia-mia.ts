import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import ORGEAT from '../recipes/orgeat';

const TIA_MIA: Cocktail = {
	title: 'Tia Mia',
	description: 'Mezcal, jamaican rum, cointreau, orgeat, lime.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/tia-mia.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/tia-mia.png',
	slug: 'tia-mia',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1oz Mezcal',
		'1oz Appleton Estate (Jamaican rum)',
		'.5oz Cointreau',
		{
			amount: '.5oz',
			recipe: ORGEAT
		},
		'.75oz Lime',
		'Garnish: Mint spring and lime wheel'
	],
	variations: [
		{
			name: 'Chili',
			description: 'Add 1 dash smoked chili bitters',
			images: []
		}
	],
	tags: [
		Tags.BaseSpirit.MEZCAL,
		Tags.BaseSpirit.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,

		Tags.Origin.MODERN,
		Tags.AlcoholLevel.HIGH
	]
};

export default TIA_MIA;
