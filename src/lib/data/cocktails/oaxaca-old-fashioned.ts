import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const OAXACA_OLD_FASHIONED: Cocktail = {
	title: 'Oaxaca Old Fashioned',
	description: 'Reposado tequila, mezcal, agave nectar, xocolatl bitters, smoked orange twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/oaxaca-old-fashioned.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/oaxaca-old-fashioned.png',
	slug: 'oaxaca-old-fashioned',
	method: CocktailMethod.Built,
	servedIn: ServedIn.DoubleRocksGlass,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.CIMARRON_REPOSADO
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.DEL_MAGUY_VIDA
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.AGAVE_NECTAR
		},
		{
			amount: '2 dashes',
			ingredient: Ingredients.Bitters.XOCOLATL
		},
		{
			label: 'Garnish: Smoked orange twist',
			ingredient: Ingredients.Citrus.ORANGE
		}
	],
	tags: [
		Tags.BaseAlcohol.TEQUILA,
		Tags.BaseAlcohol.MEZCAL,
		Tags.Technique.BUILT,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.MODERN,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default OAXACA_OLD_FASHIONED;
