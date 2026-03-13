import type { CocktailPath } from '$lib/types/cocktail-path';
import GILDED_ROSE from '../cocktails/gilded-rose';
import HOT_TODDY from '../cocktails/hot-toddy';
import RADLER from '../cocktails/radler';
import RATTLE_SKULL from '../cocktails/rattle-skull';
import RUM_BARREL from '../cocktails/rum-barrel';

export const INNKEEPER: CocktailPath = {
	title: 'Innkeeper',
	subtitle: 'Hearty. Comforting. Generous.',
	slug: 'innkeeper',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/innkeeper.jpeg',
	description:
		'Pull up a chair and stay a while. This path greets you with literal warmth, eases into crisp, easy refreshment, adds a touch of bubbly elegance, then dips into centuries-old tradition and finishes with a heavy, generous pour. The longer you stay, the stronger the drinks get.',
	cocktails: [HOT_TODDY, RADLER, GILDED_ROSE, RATTLE_SKULL, RUM_BARREL]
};
