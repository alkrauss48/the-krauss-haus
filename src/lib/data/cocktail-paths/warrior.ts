import type { CocktailPath } from '$lib/types/cocktail-path';
import MINT_JULEP from '../cocktails/mint-julep';
import OAXACA_OLD_FASHIONED from '../cocktails/oaxaca-old-fashioned';
import OLD_FASHIONED from '../cocktails/old-fashioned';
import PENICILLIN from '../cocktails/penicillin';
import SAZERAC from '../cocktails/sazerac';

export const WARRIOR: CocktailPath = {
	title: 'Warrior',
	subtitle: 'Bold. Spirit-forward. Unyielding.',
	slug: 'warrior',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/warrior.jpeg',
	description:
		'The spirit leads and everything else falls in line. This path starts with sweetened structure and familiar warmth, then pushes through smoky heat and honeyed spice before arriving at raw, unadorned intensity. Each step strips away a little more, demanding respect for the base spirit.',
	cocktails: [OLD_FASHIONED, MINT_JULEP, OAXACA_OLD_FASHIONED, PENICILLIN, SAZERAC]
};
