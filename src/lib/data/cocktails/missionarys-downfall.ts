import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const MISSIONARYS_DOWNFALL: Cocktail = {
	title: "Missionary's Downfall",
	description: 'Light rum, peach liqueur, mint, pineapple, honey syrup, lime.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/missionarys-downfall.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/missionarys-downfall.png',
	slug: 'missionarys-downfall',
	method: CocktailMethod.Blended,
	servedIn: ServedIn.HighballGlass,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.PLANTERAY_3_STARS
		},
		'.5oz Peach liqueur',
		{
			amount: '12',
			label: 'Large mint leaves',
			ingredient: Ingredients.HerbsAndSpices.MINT
		},
		{
			amount: '56g (1/4 cup)',
			label: 'Diced fresh pineapple',
			ingredient: Ingredients.Citrus.PINEAPPLE_GARNISH
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Syrups.HONEY_SYRUP
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LIME
		},
		'158g (3/4 cup) crushed ice'
	],
	notes:
		'Makes ~12 oz. Heat the pineapple for 1-2 minutes (this deactivates the bromelain, which is what gives pineapple its "bite"). Blend all ingredients without ice, until mint is shredded. Add ice and blend just enough to make it all smooth.',
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BLENDED,
		Tags.Temperature.FROZEN,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.AlcoholLevel.LOW,
		Tags.ServedIn.HIGHBALL_GLASS
	]
};

export default MISSIONARYS_DOWNFALL;
