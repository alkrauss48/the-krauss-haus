import type { Cocktail } from '$lib/types/cocktails';
import type { CocktailCollection } from '$lib/types/cocktail-collection';

/** Every cocktail in a collection, in page order, whether or not it is split into groups. */
export function collectionCocktails(collection: CocktailCollection): Cocktail[] {
	return collection.groups
		? collection.groups.flatMap((group) => group.cocktails)
		: collection.cocktails;
}
