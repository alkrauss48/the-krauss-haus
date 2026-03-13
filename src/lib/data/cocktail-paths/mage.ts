import type { CocktailPath } from '$lib/types/cocktail-path';
import ANCIENT_MARINER from '../cocktails/ancient-mariner';
import MANHATTAN from '../cocktails/manhattan';
import MARTINI from '../cocktails/martini';
import MOONWELL from '../cocktails/moonwell';
import PAPER_PLANE from '../cocktails/paper-plane';

export const MAGE: CocktailPath = {
	title: 'Mage',
	subtitle: 'Complex. Aromatic. Masterful.',
	slug: 'mage',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/mage.jpeg',
	description:
		'Study the craft of balance and sophistication. This path begins with light, floral brightness, moves through spiced maritime depth, then sharpens into precise equal-parts harmony before arriving at stirred elegance and iconic minimalism. Each step teaches you to find more flavor in fewer ingredients.',
	cocktails: [MOONWELL, ANCIENT_MARINER, PAPER_PLANE, MANHATTAN, MARTINI]
};
