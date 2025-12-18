import type { CocktailPath } from '$lib/types/cocktail-path';
import HOT_TODDY from '../cocktails/hot-toddy';
import LOST_LAKE from '../cocktails/lost-lake';
import RADLER from '../cocktails/radler';
import RATTLE_SKULL from '../cocktails/rattle-skull';

export const INNKEEPER: CocktailPath = {
	title: 'Innkeeper',
	subtitle: 'Warm. Welcoming. Restorative.',
	slug: 'innkeeper',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/innkeeper.jpeg',
	description:
		'For travelers in need of warmth, rest, and a generous pour. The Innkeeper serves comforting, low-effort drinks that soothe the body and steady the spirit—some literally warm, others simply strong enough to do the job. Stay long enough, and you might just be offered a story… or a quest.',
	cocktails: [HOT_TODDY, RADLER, RATTLE_SKULL, LOST_LAKE]
};
