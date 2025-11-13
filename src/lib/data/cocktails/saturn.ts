import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const SATURN: Cocktail = {
	title: 'Saturn',
	subtitle: 'A gin-based tiki classic, bright and tropical',
	description: 'Gin, passion fruit, lemon, orgeat, falernum.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/saturn.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/saturn.png',
	slug: 'saturn',
	method: CocktailMethod.Shaken,
	servedIn: ServedIn.DoubleRocksGlass,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.FORDS
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.PASSIONFRUIT_SYRUP
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Syrups.ORGEAT
		},
		{
			amount: '.25oz',
			ingredient: Ingredients.Liqueurs.FALERNUM
		},
		{
			label: 'Garnish: Lemon peel',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		},
		{
			label: 'Garnish: Maraschino cherry',
			ingredient: Ingredients.Other.MARASCHINO_CHERRY
		}
	],
	tags: [
		Tags.BaseAlcohol.GIN,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.SPICED,
		Tags.AlcoholLevel.LOW,
		Tags.Technique.SHAKEN,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC,
		Tags.ServedIn.DOUBLE_ROCKS_GLASS
	]
};

export default SATURN;
