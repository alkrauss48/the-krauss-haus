import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const OAXACA_OLD_FASHIONED: Cocktail = {
	title: 'Oaxaca Old Fashioned',
	description: 'Reposado tequila, mezcal, agave nectar, xocolatl bitters, smoked orange twist.',
	imagePath: '/images/cocktails/winter/oaxaca-old-fashioned.png',
	slug: 'oaxaca-old-fashioned',
	method: CocktailMethod.Built,
	ingredients: [
		'1.5oz Reposado tequila',
		'.5 oz Mezcal',
		'.25 oz Agave nectar',
		'2 dashes Xocolatl bitters',
		'Garnish: Smoked orange twist'
	],
	tags: [
		Tags.BaseSpirit.TEQUILA,
		Tags.BaseSpirit.MEZCAL,
		Tags.FlavorProfile.BOOZY,
		Tags.Technique.BUILT,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.MODERN
	]
};

export default OAXACA_OLD_FASHIONED;
