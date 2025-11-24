import type { CocktailPath } from '$lib/types/cocktail-path';
import MINT_JULEP from '../cocktails/mint-julep';
import OAXACA_OLD_FASHIONED from '../cocktails/oaxaca-old-fashioned';
import OLD_FASHIONED from '../cocktails/old-fashioned';
import SAZERAC from '../cocktails/sazerac';

export const WARRIOR: CocktailPath = {
	title: 'Warrior',
	subtitle: 'Direct. Powerful. Classic.',
	slug: 'warrior',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/warrior.jpeg',
	description:
		'You prefer cocktails where the base spirit stays in command—unmistakable, confident, and clean. This path builds your appreciation of spirit- forward balance, moving from sweetened structure to bold minimalism.',
	cocktails: [OLD_FASHIONED, MINT_JULEP, OAXACA_OLD_FASHIONED, SAZERAC]
};
