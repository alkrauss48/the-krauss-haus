import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const AMARETTO_SOUR: Cocktail = {
	title: 'Amaretto Sour',
	description: 'Amaretto, bourbon, lemon, simple syrup, egg white.',
	imagePath: '/images/cocktails/winter/amaretto-sour.png',
	slug: 'amaretto-sour',
	method: CocktailMethod.Shaken,
	ingredients: [
		'1.5oz Amaretto',
		'.75oz Bourbon',
		'.75oz Lemon',
		'.25oz Rich simple syrup',
		'1 egg white',
		'Garnish: Maraschino cherry'
	],
	tags: [
		Tags.BaseSpirit.WHISKEY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.Syrups.RICH_SIMPLE_SYRUP,
		Tags.Style.SOUR,
		Tags.Origin.MODERN
	]
};

export default AMARETTO_SOUR;
