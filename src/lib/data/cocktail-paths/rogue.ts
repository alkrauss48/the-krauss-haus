import type { CocktailPath } from '$lib/types/cocktail-path';
import BITTER_GIUSEPPE from '../cocktails/bitter-giuseppe';
import COBRAS_FANG from '../cocktails/cobras-fang';
import JUNGLE_BIRD from '../cocktails/jungle-bird';
import NEGRONI from '../cocktails/negroni';
import SINGAPORE_SLING from '../cocktails/singapore-sling';

export const ROGUE: CocktailPath = {
	title: 'Rogue',
	subtitle: 'Dark. Bitter. Adventurous.',
	slug: 'rogue',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/rogue.jpeg',
	description:
		'This path thrives on sharp contrasts—bright citrus against bitter liqueurs, deep aromatics, and unconventional profiles.',
	cocktails: [SINGAPORE_SLING, COBRAS_FANG, JUNGLE_BIRD, NEGRONI, BITTER_GIUSEPPE]
};
