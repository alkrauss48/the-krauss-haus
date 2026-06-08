import type { CocktailPath } from '$lib/types/cocktail-path';
import DAIQUIRI from '../cocktails/daiquiri';
import DONGA_PUNCH from '../cocktails/donga-punch';
import GILDA from '../cocktails/gilda';
import HURRICANE from '../cocktails/hurricane';
import IRON_RANGER from '../cocktails/iron-ranger';

export const HUNTER: CocktailPath = {
	title: 'Hunter',
	subtitle: 'Tropical. Rum-soaked. Sun-chasing.',
	slug: 'hunter',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/hunter.jpeg',
	description:
		'Chase the sun through tropical fruit and unexpected spirits. This path opens with spiced tequila, pineapple, and lime, settles into clean rum-and-citrus balance, builds into easy fruity sweetness, then layers in agricole funk and warm cinnamon before landing on a bourbon-and-falernum tiki swap. The deeper you go, the more the tropics reveal.',
	cocktails: [GILDA, DAIQUIRI, HURRICANE, DONGA_PUNCH, IRON_RANGER]
};
