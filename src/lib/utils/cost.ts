import type { Cocktail } from '$lib/types/cocktails';

export function parseAmountToOz(amount: string): number {
	if (!amount) return 0;

	const a = amount.trim().toLowerCase();

	// oz: e.g. "1oz", ".75oz", "1.5oz"
	const ozMatch = a.match(/^([\d.]+)\s*oz$/);
	if (ozMatch) return parseFloat(ozMatch[1]);

	// dashes: e.g. "1 dash", "2 dashes"
	const dashMatch = a.match(/^([\d.]+)\s*dashes?$/);
	if (dashMatch) return parseFloat(dashMatch[1]) * (1 / 32);

	// barspoon: e.g. "1 barspoon"
	const barspoonMatch = a.match(/^([\d.]+)\s*barspoon(?:s)?$/);
	if (barspoonMatch) return parseFloat(barspoonMatch[1]) * (1 / 6);

	// tsp: e.g. "1 tsp", "2 tsp"
	const tspMatch = a.match(/^([\d.]+)\s*tsp$/);
	if (tspMatch) return parseFloat(tspMatch[1]) * (1 / 6);

	// tbsp: e.g. "1 tbsp"
	const tbspMatch = a.match(/^([\d.]+)\s*tbsp$/);
	if (tbspMatch) return parseFloat(tbspMatch[1]) * (1 / 2);

	return 0;
}

export function calculateCocktailCost(cocktail: Cocktail): number | null {
	if (!cocktail.ingredients || cocktail.ingredients.length === 0) return null;

	let total = 0;
	let hasCostData = false;

	for (const item of cocktail.ingredients) {
		if (typeof item === 'string') continue;
		const { ingredient, amount } = item;
		if (ingredient.costPerOz == null) continue;
		if (!amount) continue;

		const oz = parseAmountToOz(amount);
		if (oz === 0) continue;

		hasCostData = true;
		total += ingredient.costPerOz * oz;
	}

	return hasCostData ? total : null;
}

export function formatCost(cost: number | null): string {
	if (cost === null) return '';
	return `$${cost.toFixed(2)}`;
}
