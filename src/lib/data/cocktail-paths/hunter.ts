import type { CocktailPath } from '$lib/types/cocktail-path';
import DAIQUIRI from '../cocktails/daiquiri';
import GILDA from '../cocktails/gilda';
import HURRICANE from '../cocktails/hurricane';
import IRON_RANGER from '../cocktails/iron-ranger';
import PLANTERS_PUNCH from '../cocktails/planters-punch';

export const HUNTER: CocktailPath = {
	title: 'Hunter',
	subtitle: 'Tropical. Rum-soaked. Sun-chasing.',
	slug: 'hunter',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/hunter.jpeg',
	description:
		'Chase the sun through tropical fruit and unexpected spirits. This path opens with a bourbon-and-falernum tiki swap, trades it for cinnamon-spiced tequila and pineapple, settles into clean rum-and-citrus balance, deepens into dark Jamaican rum and demerara, and lands on a fruity, full-tilt Jamaican rum blend. The deeper you go, the more the tropics reveal.',
	cocktails: [IRON_RANGER, GILDA, DAIQUIRI, PLANTERS_PUNCH, HURRICANE]
};
