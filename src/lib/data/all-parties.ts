import type { CocktailParty } from '$lib/types/party';

// Import all party data
import TIKI_PARTY_2025 from '$lib/data/parties/tiki-party-2025';

// Create array of all parties
export const allParties: CocktailParty[] = [TIKI_PARTY_2025].sort(
	(a, b) => b.date.getTime() - a.date.getTime()
);

// Create a map of all parties by slug for quick lookups
export const partiesBySlug = new Map<string, CocktailParty>(
	allParties.map((party) => [party.slug, party])
);
