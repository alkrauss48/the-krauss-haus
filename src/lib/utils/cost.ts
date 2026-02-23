import type { Cocktail } from '$lib/types/cocktails';

// Tax rate applied to all ingredient costs. Update this value to change the rate.
const TAX_RATE = 0.085;

export function parseAmountToOz(amount: string): number {
	if (!amount) return 0;

	const a = amount.trim().toLowerCase();

	// oz: e.g. "1oz", ".75oz", "1.5oz"
	const ozMatch = a.match(/^([\d.]+)\s*oz/i);
	if (ozMatch) return parseFloat(ozMatch[1]);

	// dashes: e.g. "1 dash", "2 dashes"
	const dashMatch = a.match(/^([\d.]+)\s*dash/i);
	if (dashMatch) return parseFloat(dashMatch[1]) * (1 / 48);

	// tsp: e.g. "1 tsp", "2 tsp"
	const tspMatch = a.match(/^([\d.]+)\s*tsp/i);
	if (tspMatch) return parseFloat(tspMatch[1]) * (1 / 6);

	// tbsp: e.g. "1 tbsp"
	const tbspMatch = a.match(/^([\d.]+)\s*tbsp/i);
	if (tbspMatch) return parseFloat(tbspMatch[1]) * (1 / 2);

	// ml: e.g. "1 ml", "2 ml"
	const mlMatch = a.match(/^([\d.]+)\s*ml/i);
	if (mlMatch) return parseFloat(mlMatch[1]) * (1 / 30);

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

		const oz = amount ? parseAmountToOz(amount) : 0;

		hasCostData = true;
		total += oz > 0 ? ingredient.costPerOz * oz : ingredient.costPerOz;
	}

	return hasCostData ? total : null;
}

export function applyTax(cost: number): number {
	return cost * (1 + TAX_RATE);
}

export function formatCost(cost: number | null): string {
	if (cost === null) return '';
	return `$${cost.toFixed(2)}`;
}

export function getDisplayCost(cocktail: Cocktail): number | null {
	const total = calculateCocktailCost(cocktail);
	if (total === null) return null;
	const perServing = cocktail.servings ? total / cocktail.servings : total;
	return perServing * (1 + TAX_RATE);
}
