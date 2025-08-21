import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const DAIQUIRI: Cocktail = {
	title: 'Daiquiri',
	description: 'Light rum, lime, simple syrup.',
	imagePath: 'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/daiquiri.png',
	slug: 'daiquiri',
	method: CocktailMethod.Shaken,
	ingredients: ['2oz Probitas', '.75oz Lime', '.5oz Rich simple syrup', 'Garnish: Lime wedge'],
	tags: [
		Tags.BaseSpirit.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.SHAKEN,
		Tags.Syrups.RICH_SIMPLE_SYRUP,
		Tags.Style.SOUR,
		Tags.Origin.CLASSIC
	]
};

export default DAIQUIRI;
