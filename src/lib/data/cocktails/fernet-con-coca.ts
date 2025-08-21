import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const FERNET_CON_COCA: Cocktail = {
	title: 'Fernet con Coca',
	description: 'Fernet branca, coca cola, ice.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/fernet-con-coca.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/fernet-con-coca.png',
	slug: 'fernet-con-coca',
	method: CocktailMethod.Built,
	ingredients: ['30% Fernet branca', '70% Coca cola'],
	notes:
		'Eye-ball the fernet and coca cola amounts. Fernet first, over ice. No need to stir. There should be foam from the coca cola.',
	tags: [
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.BITTER,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.CLASSIC
	]
};

export default FERNET_CON_COCA;
