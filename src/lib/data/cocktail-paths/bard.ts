import type { CocktailPath } from '$lib/types/cocktail-path';
import AMARETTO_SOUR from '../cocktails/amaretto-sour';
import ESPRESSO_MARTINI from '../cocktails/espresso-martini';
import LOGGY_CAB from '../cocktails/loggy-cab';
import MOJITO from '../cocktails/mojito';
import SPRITZ from '../cocktails/spritz';

export const BARD: CocktailPath = {
	title: 'Bard',
	subtitle: 'Vibrant. Approachable. Crowd-pleasing.',
	slug: 'bard',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/bard.jpeg',
	description:
		'The life of the party, one round at a time. This path opens with a breezy gin-and-lime fizz, shifts to cool herbal freshness, nutty sweetness, breezy bubbles, and a bold caffeinated finish. Nothing too challenging, nothing too obscure—just drinks that make everyone at the table happy.',
	cocktails: [LOGGY_CAB, MOJITO, AMARETTO_SOUR, SPRITZ, ESPRESSO_MARTINI]
};
