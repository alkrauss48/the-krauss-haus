import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const TIA_MIA: Cocktail = {
	title: 'Tia Mia',
	description: 'Mezcal, jamaican rum, cointreau, orgeat, lime.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/tia-mia.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/tia-mia.png',
	slug: 'tia-mia',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.DEL_MAGUY_VIDA
		},
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_SIGNATURE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.COINTREAU
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.ORGEAT
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			label: 'Garnish: Mint spring',
			ingredient: Ingredients.HerbsAndSpices.MINT
		},
		{
			label: 'Garnish: Lime wheel',
			ingredient: Ingredients.Citrus.LIME
		}
	],
	variations: [
		{
			name: 'Chili',
			description: 'Add 1 dash smoked chili bitters',
			images: []
		}
	],
	tags: [
		Tags.BaseAlcohol.MEZCAL,
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,

		Tags.Origin.MODERN,
		Tags.AlcoholLevel.HIGH,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default TIA_MIA;
