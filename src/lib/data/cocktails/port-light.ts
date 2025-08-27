import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';
import HONEY_SYRUP from '../recipes/honey-syrup';
import PASSIONFRUIT_SYRUP from '../recipes/passionfruit-syrup';

const PORT_LIGHT: Cocktail = {
	title: 'Port Light',
	subtitle: 'A bourbon-based tropical delight',
	description: 'Bourbon, honey, lemon, passion fruit.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/port-light.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/port-light.png',
	slug: 'port-light',
	method: CocktailMethod.Shaken,
	ingredients: [
		'2oz Bourbon',
		{
			amount: '.5oz',
			recipe: HONEY_SYRUP
		},
		'.75oz Lemon',
		{
			amount: '.5oz',
			recipe: PASSIONFRUIT_SYRUP
		},
		'1 Egg white',
		'Garnish: Mint spring, pineapple square, and maraschino cherry'
	],
	tags: [
		Tags.BaseSpirit.WHISKEY,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.FRUITY,
		Tags.Technique.SHAKEN,

		Tags.Style.TIKI,
		Tags.Origin.CLASSIC
	]
};

export default PORT_LIGHT;
