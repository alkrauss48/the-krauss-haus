import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import HONEY_SYRUP from '../recipes/honey-syrup';

const MISSIONARYS_DOWNFALL: Cocktail = {
	title: "Missionary's Downfall",
	description: 'Blended light rum, peach liqueur, mint, pineapple, honey syrup, lime.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/missionarys-downfall.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/missionarys-downfall.png',
	slug: 'missionarys-downfall',
	method: CocktailMethod.Blended,
	ingredients: [
		'1oz Probitas (Blended light rum)',
		'.5oz Peach liqueur',
		'12 large mint leaves',
		'56g (1/4 cup) diced fresh pineapple',
		{
			amount: '1oz',
			recipe: HONEY_SYRUP
		},
		'.5oz Lime',
		'158g (3/4 cup) crushed ice'
	],
	notes:
		'Makes ~12 oz. Heat the pineapple for 1-2 minutes (this deactivates the bromelain, which is what gives pineapple its "bite"). Blend all ingredients without ice, until mint is shredded. Add ice and blend just enough to make it all smooth.',
	tags: [
		Tags.BaseSpirit.RUM,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BLENDED,
		Tags.Syrups.HONEY_SYRUP,
		Tags.Temperature.FROZEN,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.AlcoholLevel.LOW
	]
};

export default MISSIONARYS_DOWNFALL;
