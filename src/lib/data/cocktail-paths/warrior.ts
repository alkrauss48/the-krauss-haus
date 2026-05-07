import type { CocktailPath } from '$lib/types/cocktail-path';
import MINT_JULEP from '../cocktails/mint-julep';
import NAVY_GROG from '../cocktails/navy-grog';
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
		'The spirit leads and everything else falls in line. This path opens on a sweetened bourbon foundation, escalates into three-rum tropical strength, cools through crushed-ice mint and bourbon, warms again with smoke and honeyed ginger, and arrives at austere, anise-tinged power. Each step strips away a little more, demanding respect for the base spirit.',
	cocktails: [OLD_FASHIONED, NAVY_GROG, MINT_JULEP, PENICILLIN, SAZERAC]
};
