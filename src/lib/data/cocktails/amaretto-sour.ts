import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import RICH_SIMPLE_SYRUP from '../recipes/rich-simple-syrup';

const AMARETTO_SOUR: Cocktail = {
	title: 'Amaretto Sour',
	description: 'Amaretto, bourbon, lemon, simple syrup, egg white.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/amaretto-sour.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/amaretto-sour.png',
	slug: 'amaretto-sour',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1.5oz Amaretto',
		'.75oz Bourbon',
		'.75oz Lemon',
		{
			amount: '.25oz',
			recipe: RICH_SIMPLE_SYRUP
		},
		'1 Egg white',
		'Garnish: Maraschino cherry'
	],
	tags: [
		Tags.BaseSpirit.WHISKEY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.Syrups.RICH_SIMPLE_SYRUP,
		Tags.Style.SOUR,
		Tags.Origin.MODERN,
		Tags.AlcoholLevel.LOW
	]
};

export default AMARETTO_SOUR;
