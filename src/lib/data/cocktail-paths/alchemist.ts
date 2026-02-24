import type { CocktailPath } from '$lib/types/cocktail-path';
import CARAMEL_APPLE_SPICE from '../cocktails/caramel-apple-spice';
import COBRAS_FANG from '../cocktails/cobras-fang';
import SATURN from '../cocktails/saturn';
import THREE_DOTS_AND_A_DASH from '../cocktails/three-dots-and-a-dash';
import ZOMBIE from '../cocktails/zombie';

export const ALCHEMIST: CocktailPath = {
	title: 'Alchemist',
	subtitle: 'Inventive. Adventurous. Transformative.',
	slug: 'alchemist',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/alchemist.jpeg',
	description:
		'You love flavors that surprise. This path leans into bold profiles, unusual syrups, and technical builds that reward exploration.',
	cocktails: [SATURN, CARAMEL_APPLE_SPICE, THREE_DOTS_AND_A_DASH, COBRAS_FANG, ZOMBIE]
};
