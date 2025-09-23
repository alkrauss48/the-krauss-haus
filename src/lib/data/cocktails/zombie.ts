import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import FALERNUM from '../recipes/falernum';
import GRENADINE from '../recipes/grenadine';
import CINNAMON_SYRUP from '../recipes/cinnamon-syrup';

const ZOMBIE: Cocktail = {
	title: 'Zombie',
	subtitle: 'The original heavy-weight tiki classic. Max 2 per person.',
	description:
		"Blended light rum, Jamaican rum, overproof rum, falernum, Donn's Mix, lime, grenadine, herbstura.",
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/zombie.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/zombie.png',
	slug: 'zombie',
	method: CocktailMethod.FlashBlended,
	ingredients: [
		'1oz Appleton Estate Signature (Jamaican rum)',
		'.5oz Probitas (Blended light rum)',
		'.5oz Coruba (Jamaican rum)',
		'.5oz Hamilton 151 (Overproof Demerara rum)',
		'.5oz Planteray OFTD (Overproof Blended rum)',
		{
			amount: '.5oz',
			recipe: FALERNUM
		},
		{
			amount: '1 tsp',
			recipe: GRENADINE
		},
		{
			amount: '1 tsp',
			recipe: CINNAMON_SYRUP
		},
		'2 tsp Grapefruit',
		'.75oz Lime',
		'1 dash Herbstura',
		'Garnish: Mint sprig'
	],
	tags: [
		Tags.BaseSpirit.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.SPICED,
		Tags.AlcoholLevel.HIGH,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.FLASH_BLENDED,

		Tags.Style.TIKI,
		Tags.Origin.CLASSIC
	]
};

export default ZOMBIE;
