import type { CocktailPath } from '$lib/types/cocktail-path';
import BITTER_GIUSEPPE from '../cocktails/bitter-giuseppe';
import DEAR_LUKEY from '../cocktails/dear-lukey';
import JUNGLE_BIRD from '../cocktails/jungle-bird';
import NEGRONI from '../cocktails/negroni';
import FOREST_SPIRIT from '../cocktails/forest-spirit';

export const ROGUE: CocktailPath = {
	title: 'Rogue',
	subtitle: 'Bitter. Sharp. Uncompromising.',
	slug: 'rogue',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/rogue.jpeg',
	description:
		'Learn to love the bitter side. This path eases you in with floral brightness and a bitter tonic backbone, then balances it against tropical sweetness. From there the sweetness fades—amari take the lead, bitter becomes the backbone, and by the end there is nowhere to hide.',
	cocktails: [FOREST_SPIRIT, JUNGLE_BIRD, DEAR_LUKEY, NEGRONI, BITTER_GIUSEPPE]
};
