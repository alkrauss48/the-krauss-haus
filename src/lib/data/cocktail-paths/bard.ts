import type { CocktailPath } from '$lib/types/cocktail-path';
import AMARETTO_SOUR from '../cocktails/amaretto-sour';
import ESPRESSO_MARTINI from '../cocktails/espresso-martini';
import MOJITO from '../cocktails/mojito';
import SIDECAR from '../cocktails/sidecar';
import SPRITZ from '../cocktails/spritz';

export const BARD: CocktailPath = {
	title: 'Bard',
	subtitle: 'Vibrant. Approachable. Crowd-pleasing.',
	slug: 'bard',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/bard.jpeg',
	description:
		'The life of the party, one round at a time. This path opens with cool minty refreshment, shifts to breezy bubbles, refined citrus-brandy elegance, nutty sweetness, and a bold caffeinated finish. Nothing too challenging, nothing too obscure—just drinks that make everyone at the table happy.',
	cocktails: [MOJITO, SPRITZ, SIDECAR, AMARETTO_SOUR, ESPRESSO_MARTINI]
};
