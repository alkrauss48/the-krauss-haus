import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const SAZERAC: Cocktail = {
	title: 'Sazerac',
	description: "Rye whiskey, cognac, absinthe, peychaud's bitters, demerara syrup, lemon twist.",
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/sazerac.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/sazerac.png',
	slug: 'sazerac',
	method: CocktailMethod.Stirred,
	ingredients: [
		'1.5oz Rye whiskey',
		'.5oz Cognac',
		'Absinthe rinse',
		"4 dashes Peychaud's bitters",
		'1 dash Angostura bitters',
		'.25oz Demerara syrup',
		'Garnish: Lemon twist'
	],
	tags: [
		Tags.BaseSpirit.WHISKEY,
		Tags.BaseSpirit.BRANDY,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.STIRRED,
		Tags.Syrups.DEMERARA_SYRUP,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC
	]
};

export default SAZERAC;
