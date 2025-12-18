import type { CocktailPath } from '$lib/types/cocktail-path';

// Import all cocktail path data
import { ALCHEMIST } from '$lib/data/cocktail-paths/alchemist';
import { BARD } from '$lib/data/cocktail-paths/bard';
import { FISHERMAN } from '$lib/data/cocktail-paths/fisherman';
import { HUNTER } from '$lib/data/cocktail-paths/hunter';
import { MAGE } from '$lib/data/cocktail-paths/mage';
import { ROGUE } from '$lib/data/cocktail-paths/rogue';
import { WARRIOR } from '$lib/data/cocktail-paths/warrior';
import { INNKEEPER } from './cocktail-paths/innkeeper';
import { ROYAL } from './cocktail-paths/royal';

// Create array of all cocktail paths
export const allPaths: CocktailPath[] = [
	WARRIOR,
	HUNTER,
	MAGE,
	BARD,
	ALCHEMIST,
	INNKEEPER,
	ROGUE,
	FISHERMAN,
	ROYAL
];

// Create a map of all paths by slug for quick lookups
export const pathsBySlug = new Map<string, CocktailPath>(allPaths.map((path) => [path.slug, path]));
