import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const MICHELADA: Cocktail = {
	title: 'Michelada',
	description: 'Mexican lager, lime, worcestershire sauce, valentina hot sauce, salt, tajin rim.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/michelada.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/michelada.png',
	slug: 'michelada',
	method: CocktailMethod.Built,
	ingredients: [
		'12oz Mexican lager',
		'1 lime (minus a wedge)',
		'3 shakes Worcestershire sauce',
		'5 shakes Valentina hot sauce',
		'Pinch of salt',
		'Garnish: Tajin/Chamoy rim and lime wedge'
	],
	notes: 'Add all ingredients besides beer into a glass, then top with the beer.',
	tags: [
		Tags.Origin.FOLK,
		Tags.AlcoholLevel.LOW,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.SPICED,
		Tags.Technique.BUILT
	]
};

export default MICHELADA;
