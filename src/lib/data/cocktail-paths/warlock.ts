import type { CocktailPath } from '$lib/types/cocktail-path';
import NORWEGIAN_PARALYSIS from '../cocktails/norwegian-paralysis';
import QUEENS_PARK_SWIZZLE from '../cocktails/queens-park-swizzle';
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
		'Unusual ingredients, technical builds, and escalating power. This path opens with approachable tropical intrigue, veers into unfamiliar spirit territory, then descends through a mint-chilled demerara swizzle and honeyed multi-rum depth before something truly legendary, overproof and all, claims the final word.',
	cocktails: [SATURN, NORWEGIAN_PARALYSIS, QUEENS_PARK_SWIZZLE, THREE_DOTS_AND_A_DASH, ZOMBIE]
};
