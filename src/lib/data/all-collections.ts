import type { CocktailCollection } from '$lib/types/cocktail-collection';

// Import all cocktail collection data
import TIKI_MUGS from '$lib/data/cocktail-collections/tiki-mugs';
import OLD_FASHIONEDS from '$lib/data/cocktail-collections/old-fashioneds';

// Create array of all cocktail collections, in the order they appear on /collections
export const allCollections: CocktailCollection[] = [TIKI_MUGS, OLD_FASHIONEDS];

// Create a map of all collections by slug for quick lookups
export const collectionsBySlug = new Map<string, CocktailCollection>(
	allCollections.map((collection) => [collection.slug, collection])
);
