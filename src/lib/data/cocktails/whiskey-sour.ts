import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import RICH_SIMPLE_SYRUP from '../recipes/rich-simple-syrup';

const WHISKEY_SOUR: Cocktail = {
	title: 'Whiskey Sour',
	description: 'Whiskey, lemon, simple syrup, egg white.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/whiskey-sour.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/whiskey-sour.png',
	slug: 'whiskey-sour',
	method: CocktailMethod.Shaken,
	ingredients: [
		'.2oz Whiskey',
		'.75oz Lemon',
		{
			amount: '.5oz',
			recipe: RICH_SIMPLE_SYRUP
		},
		'1 egg white',
		'Garnish: Maraschino cherry'
	],
	tags: [
		Tags.BaseSpirit.WHISKEY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.Syrups.RICH_SIMPLE_SYRUP,
		Tags.Style.SOUR,
		Tags.Origin.CLASSIC
	]
};

export default WHISKEY_SOUR;
