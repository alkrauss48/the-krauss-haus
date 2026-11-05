import type { CocktailPath } from '$lib/types/cocktail-path';
import GILDED_ROSE from '../cocktails/gilded-rose';
import HOT_TODDY from '../cocktails/hot-toddy';
import KOLAWEIZEN from '../cocktails/kolaweizen';
import RATTLE_SKULL from '../cocktails/rattle-skull';
import RUM_BARREL from '../cocktails/rum-barrel';

export const INNKEEPER: CocktailPath = {
	title: 'Innkeeper',
	subtitle: 'Hearty. Comforting. Generous.',
	slug: 'innkeeper',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/innkeeper.jpeg',
	description:
		'Pull up a chair and stay a while. This path greets you with literal warmth, adds a touch of bubbly elegance, pulls a German beer-hall pint of hefeweizen and cola, pours a heavy, generous measure of rum, then settles in by the fire with a centuries-old tavern tradition of porter, rum, and cognac. The longer you stay, the stronger the drinks get.',
	cocktails: [HOT_TODDY, GILDED_ROSE, KOLAWEIZEN, RUM_BARREL, RATTLE_SKULL]
};
