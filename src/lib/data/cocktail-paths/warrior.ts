import type { CocktailPath } from '$lib/types/cocktail-path';
import MAI_TAI from '../cocktails/mai-tai';
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
		'The spirit leads and everything else falls in line. This path opens on a sweetened bourbon foundation, sharpens into austere, anise-tinged rye and cognac, mellows through smoke and honeyed ginger, swings into honey-tempered high-proof rum, and lands on three-rum tropical strength. Each step demands a little more respect for the base spirit.',
	cocktails: [OLD_FASHIONED, SAZERAC, PENICILLIN, NAVY_GROG, MAI_TAI]
};
