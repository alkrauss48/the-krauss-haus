import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const MOJITO: Cocktail = {
	title: 'Mojito',
	description: 'Light rum, lime, sugar, mint, angostura bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/mojito.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/mojito.png',
	slug: 'mojito',
	method: CocktailMethod.Built,
	ingredients: [
		'2oz Planteray 3 Star',
		'.75oz Lime',
		'1 tbsp Sugar',
		'6-10 leaves Mint',
		'Garnish: Mint sprig & dash of Angostura bitters',
		'Soda water (to top)'
	],
	notes:
		'Muddle lime, sugar, and mint lightly in glass. Add rum, then ice cubes. Stir, top with soda water and garnishes.',
	tags: [
		Tags.BaseSpirit.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.CLASSIC
	]
};

export default MOJITO;
