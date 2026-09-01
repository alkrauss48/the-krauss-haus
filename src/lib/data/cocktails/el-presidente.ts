import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const EL_PRESIDENTE: Cocktail = {
	title: 'El Presidente',
	description: 'Light rum, dry vermouth, dry curaçao, grenadine, orange twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full-webp/el-presidente.webp',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail-webp/el-presidente.webp',
	slug: 'el-presidente',
	method: CocktailMethod.Stirred,
	servedIn: ServedIn.NickAndNoraGlass,
	ice: Ice.None,
	hasStraw: false,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.PLANTERAY_3_STARS
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.BeerAndWine.DOLIN_VERMOUTH_DRY
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Liqueurs.DRY_CURACAO
		},
		{
			amount: '1 tsp',
			ingredient: Ingredients.Syrups.GRENADINE
		},
		{
			label: 'Garnish: Orange twist',
			ingredient: Ingredients.Citrus.ORANGE_GARNISH
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.BaseAlcohol.WINE,
		Tags.FlavorProfile.FRUITY,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.NICK_AND_NORA_GLASS,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default EL_PRESIDENTE;
