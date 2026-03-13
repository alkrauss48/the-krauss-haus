import type { CocktailPath } from '$lib/types/cocktail-path';
import NORWEGIAN_PARALYSIS from '../cocktails/norwegian-paralysis';
import COBRAS_FANG from '../cocktails/cobras-fang';
import SATURN from '../cocktails/saturn';
import THREE_DOTS_AND_A_DASH from '../cocktails/three-dots-and-a-dash';
import ZOMBIE from '../cocktails/zombie';

export const WARLOCK: CocktailPath = {
	title: 'Warlock',
	subtitle: 'Exotic. Potent. Otherworldly.',
	slug: 'warlock',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/warlock.jpeg',
	description:
		'Unusual ingredients, technical builds, and escalating power. This path opens with approachable tropical intrigue, veers into unfamiliar spirit territory, then descends through honeyed multi-rum depth and overproof bite before something truly legendary claims the final word.',
	cocktails: [SATURN, NORWEGIAN_PARALYSIS, THREE_DOTS_AND_A_DASH, COBRAS_FANG, ZOMBIE]
};
