import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
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
	ingredients: [
		'1.5oz Gin',
		'.5oz Passion fruit syrup',
		'.5oz Lemon',
		'.25oz Orgeat',
		'.25oz Falernum',
		'Garnish: Lemon peel and maraschino cherry'
	],
	tags: [
		Tags.BaseSpirit.GIN,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.SPICED,
		Tags.AlcoholLevel.LOW,
		Tags.Technique.SHAKEN,
		Tags.Infusions.FALERNUM,
		Tags.Syrups.PASSION_FRUIT_SYRUP,
		Tags.Syrups.ORGEAT,
		Tags.Style.TIKI,
		Tags.Origin.CLASSIC
	]
};

export default SATURN;
