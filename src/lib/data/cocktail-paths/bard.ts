import type { CocktailPath } from '$lib/types/cocktail-path';
import ESPRESSO_MARTINI from '../cocktails/espresso-martini';
import GILDED_ROSE from '../cocktails/gilded-rose';
import MARGARITA from '../cocktails/margarita';
import MOJITO from '../cocktails/mojito';
import SIDECAR from '../cocktails/sidecar';

export const BARD: CocktailPath = {
	title: 'Bard',
	subtitle: 'Friendly. Balanced. Crowd-pleasing.',
	slug: 'bard',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/bard.jpeg',
	description:
		'You enjoy drinks that make people smile—bright, bubbly, refreshing, and fun. This path teaches balance while staying effortlessly enjoyable.',
	cocktails: [MARGARITA, GILDED_ROSE, SIDECAR, MOJITO, ESPRESSO_MARTINI]
};
