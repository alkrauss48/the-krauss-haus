import { iceLabels } from '$lib/enums/ice';
import { CocktailMethod, methodLabels } from '$lib/enums/methods';
import { servedInLabels } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';

export function buildServingSentence(cocktail: Cocktail): string | null {
	const parts: string[] = [];

	if (cocktail.method) {
		parts.push(methodLabels[cocktail.method]);
	}

	// A blended drink's ice goes into the blender, so the method label already covers it and
	// the glass reads as a continuation of it ("Fully blended with ice, in a tiki mug").
	const isBlended = cocktail.method === CocktailMethod.Blended;

	const servingPieces: string[] = [];
	if (cocktail.ice && !isBlended) {
		servingPieces.push(iceLabels[cocktail.ice]);
	}
	if (cocktail.servedIn) {
		servingPieces.push(`in ${servedInLabels[cocktail.servedIn]}`);
	}

	if (cocktail.hasStraw) {
		servingPieces.push('with a straw');
	}

	let servingClause = '';
	if (servingPieces.length > 0) {
		const pieces = servingPieces.join(' ');
		servingClause = isBlended ? pieces : `served ${pieces}`;
	}

	if (servingClause) {
		parts.push(servingClause);
	}

	if (parts.length === 0) {
		return null;
	}

	const sentence = parts.join(', ');
	return `${sentence.charAt(0).toUpperCase()}${sentence.slice(1)}.`;
}
