import type { CocktailPath } from '$lib/types/cocktail-path';
import ANCIENT_MARINER from '../cocktails/ancient-mariner';
import MANHATTAN from '../cocktails/manhattan';
import MARTINI from '../cocktails/martini';
import MOONWELL from '../cocktails/moonwell';
import PAPER_PLANE from '../cocktails/paper-plane';

export const MAGE: CocktailPath = {
	title: 'Mage',
	subtitle: 'Layered. Thoughtful. Transformative.',
	slug: 'mage',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/mage.jpeg',
	description:
		'You appreciate depth—herbs, aromatics, infusions, and old-world structure. This path builds from approachable complexity to iconic minimalism.',
	cocktails: [MOONWELL, ANCIENT_MARINER, PAPER_PLANE, MANHATTAN, MARTINI]
};
