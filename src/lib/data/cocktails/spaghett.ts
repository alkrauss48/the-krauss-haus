import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const SPAGHETT: Cocktail = {
	title: 'Spaghett',
	description: 'Miller high life, aperol, lemon.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/spaghett.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/spaghett.png',
	slug: 'spaghett',
	method: CocktailMethod.Built,
	ingredients: ['12oz Miller high life bottle', '1oz Aperol', '.5oz Lemon'],
	notes: 'Drink some of the beer. Fill the bottle back up with the Aperol and lemon.',
	tags: [
		Tags.FlavorProfile.BITTER,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.Origin.MODERN
	]
};

export default SPAGHETT;
