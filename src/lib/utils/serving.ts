import { iceLabels } from '$lib/enums/ice';
import { methodLabels } from '$lib/enums/methods';
import { servedInLabels } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';

export function buildServingSentence(cocktail: Cocktail): string | null {
	const parts: string[] = [];

	if (cocktail.method) {
		parts.push(methodLabels[cocktail.method]);
	}

	const servingPieces: string[] = [];
	if (cocktail.ice) {
		servingPieces.push(iceLabels[cocktail.ice]);
	}
	if (cocktail.servedIn) {
		servingPieces.push(`in ${servedInLabels[cocktail.servedIn]}`);
	}

	let servingClause = '';
	if (servingPieces.length > 0) {
		servingClause = `served ${servingPieces.join(' ')}`;
	}
	if (cocktail.hasStraw) {
		servingClause = servingClause ? `${servingClause} with a straw` : 'served with a straw';
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
