import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import PASSIONFRUIT_SYRUP from '../recipes/passionfruit-syrup';
import ORGEAT from '../recipes/orgeat';
import FALERNUM from '../recipes/falernum';

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
	ingredients: [
		'1.5oz Gin',
		{
			amount: '.5oz',
			recipe: PASSIONFRUIT_SYRUP
		},
		'.5oz Lemon',
		{
			amount: '.25oz',
			recipe: ORGEAT
		},
		{
			amount: '.25oz',
			recipe: FALERNUM
		},
		'Garnish: Lemon peel and maraschino cherry'
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
		Tags.Origin.CLASSIC
	]
};

export default SATURN;
