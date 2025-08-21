import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const JET_PILOT: Cocktail = {
	title: 'Jet Pilot',
	subtitle: 'A bold, spicy journey through the tropics',
	description:
		'Jamaican rum, overproof demerara rum, falernum, cinnamon syrup, lime, grapefruit, herbstura.',
	imagePath: 'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/jet-pilot.png',
	slug: 'jet-pilot',
	method: CocktailMethod.FlashBlended,
	ingredients: [
		'.5oz Smith and Cross (Overproof Jamaican rum)',
		'.5oz Coruba (Jamaican rum)',
		'.75oz Appleton Estate Signature (Jamaican rum)',
		'.75oz Hamilton 151 (Overproof Demerara rum)',
		'.5oz Falernum',
		'.5oz Cinnamon syrup',
		'.5oz Lime',
		'.5oz Grapefruit',
		'1 dash Herbstura',
		'Garnish: Maraschino cherry'
	],
	tags: [
		Tags.BaseSpirit.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.AlcoholLevel.HIGH,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.FLASH_BLENDED,
		Tags.Infusions.FALERNUM,
		Tags.Syrups.CINNAMON_SYRUP,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC
	]
};

export default JET_PILOT;
