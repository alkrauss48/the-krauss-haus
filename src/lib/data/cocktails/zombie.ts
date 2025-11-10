import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

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
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.APPLETON_ESTATE_SIGNATURE
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.PROBITAS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.CORUBA
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.HAMILTON_151
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.BaseSpirits.PLANTERAY_OFTD
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.FALERNUM
		},
		{
			amount: '1 tsp',
			ingredient: Ingredients.Syrups.GRENADINE
		},
		{
			amount: '1 tsp',
			ingredient: Ingredients.Syrups.CINNAMON_SYRUP
		},
		{
			amount: '2 tsp',
			ingredient: Ingredients.Citrus.GRAPEFRUIT
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.HERBSTURA
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
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
