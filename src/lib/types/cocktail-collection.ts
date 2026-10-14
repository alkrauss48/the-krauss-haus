import type { Cocktail } from './cocktails';
import type { SectionColor } from './colors';

/** A run of a collection's cocktails shown together under its own heading. */
export interface CocktailCollectionGroup {
	heading: string;
	/** Shown in exactly this order. */
	cocktails: Cocktail[];
}

interface CocktailCollectionBase {
	slug: string;
	title: string;
	description: string;
	/** Absolute URL to the collection's open graph image. Falls back to the site default when omitted. */
	imagePath?: string;
	/** Card colors for the collection's page. Falls back to the default collection palette when omitted. */
	bgColors?: SectionColor;
}

/**
 * A handpicked set of cocktails that belong together, shown in authored order — either as one
 * flat list, or split into headed groups. Use `collectionCocktails()` to read every cocktail
 * regardless of which shape a collection uses.
 */
export type CocktailCollection = CocktailCollectionBase &
	(
		| {
				/** Shown in exactly this order. */
				cocktails: Cocktail[];
				groups?: never;
		  }
		| {
				/** Shown in exactly this order, each under its heading. */
				groups: CocktailCollectionGroup[];
				cocktails?: never;
		  }
	);
