import type { Cocktail } from './cocktails';
import type { SectionColor } from './colors';

/** A handpicked set of cocktails that belong together, shown in authored order. */
export interface CocktailCollection {
	slug: string;
	title: string;
	description: string;
	/** Absolute URL to the collection's open graph image. Falls back to the site default when omitted. */
	imagePath?: string;
	/** Card colors for the collection's page. Falls back to the default collection palette when omitted. */
	bgColors?: SectionColor;
	/** Shown in exactly this order. */
	cocktails: Cocktail[];
}
