import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const MAI_TAI: Cocktail = {
	title: 'Mai Tai',
	subtitle: 'The king of tiki drinks, complex and balanced',
	description: 'Jamaican rum, blended rum, cachaca, orange curaçao, orgeat, lime, demerara syrup.',
	imagePath: 'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/mai-tai.png',
	slug: 'mai-tai',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1oz Smith and Cross (Overproof Jamaican rum)',
		'.5oz Leblon (Cachaca)',
		'.5oz Planteray OFTD (Overproof blended rum)',
		'.5oz Pierre Ferrand Dry Curaçao',
		'.5oz Orgeat',
		'1oz Lime',
		'.25oz Demerara syrup',
		'Garnish: Mint sprig and lime shell'
	],
	tags: [
		Tags.BaseSpirit.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.AlcoholLevel.HIGH,
		Tags.Technique.SHAKEN,
		Tags.Syrups.ORGEAT,
		Tags.Syrups.DEMERARA_SYRUP,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC
	]
};

export default MAI_TAI;
