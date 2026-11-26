import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import type { IngredientItem } from '$lib/types/ingredients';
import { parseAmountToOz } from '$lib/utils/cost';
import { getIngredientDisplayName } from '$lib/utils/ingredients';
import { isGarnish } from '$lib/utils/ingredient-keys';
import { ML_PER_FL_OZ } from '$lib/utils/spirit-dilution';

/** Water added to a freezer batch, as a share of its volume: shaking dilutes more than stirring. */
export const SHAKEN_DILUTION = 0.25;
export const DEFAULT_DILUTION = 0.2;

export interface BatchLiquid {
	name: string;
	/** The spec's own amount for one drink, e.g. `.75oz` or `2 dashes`. */
	perDrink: string;
	totalOz: number;
	/** Scaled from the spec's own mL when it's written in mL, so `750ml` × 2 is exactly 1500. */
	totalMl: number;
	/** The scaled count for amounts that aren't measured in oz or mL, e.g. `20 dashes`. */
	totalCount: string | null;
}

export interface BatchOther {
	name: string;
	perDrink: string | null;
	/** The scaled quantity when the amount or label starts with a number. */
	total: string | null;
}

export interface Batch {
	servings: number;
	liquids: BatchLiquid[];
	/** Carbonated ingredients: poured at service, so outside the batch and its dilution. */
	toppers: BatchLiquid[];
	/** Things that can't be poured into a bottle: egg white, leaves, fruit, sugar by the cup. */
	other: BatchOther[];
	batchOz: number;
	batchMl: number;
	dilutionPct: number;
	waterOz: number;
	waterMl: number;
	/** The batch plus its dilution water. */
	totalOz: number;
	totalMl: number;
	/** Every measurable topper, scaled to the whole batch. */
	toppersOz: number;
	toppersMl: number;
	/** Everything that ends up in the glasses: the batch, its water and the toppers. */
	servedOz: number;
	servedMl: number;
}

export function dilutionFor(cocktail: Cocktail): number {
	return cocktail.method === CocktailMethod.Shaken ? SHAKEN_DILUTION : DEFAULT_DILUTION;
}

export function ozToMl(oz: number): number {
	return oz * ML_PER_FL_OZ;
}

/** Trims to at most two decimals: 1.5 → "1.5", 0.4166 → "0.42", 8 → "8". */
export function formatNumber(n: number): string {
	return String(Number(n.toFixed(2)));
}

const NUMBER = String.raw`(\d+\/\d+|\d*\.\d+|\d+)`;
const LEADING_QUANTITY = new RegExp(String.raw`^\s*${NUMBER}(?:\s*-\s*${NUMBER})?`);

function parseNumber(text: string): number {
	if (text.includes('/')) {
		const [numerator, denominator] = text.split('/').map(Number);
		return numerator / denominator;
	}
	return parseFloat(text);
}

/**
 * Multiplies the number (or range) an amount starts with, leaving the rest of the text alone:
 * `6-10 leaves` × 6 → `36–60 leaves`, `1/4 Lemon, juiced` × 8 → `2 Lemon, juiced`.
 * Returns null when the text doesn't start with a number.
 */
export function scaleAmountText(text: string, factor: number): string | null {
	const match = text.match(LEADING_QUANTITY);
	if (!match) return null;

	const low = parseNumber(match[1]) * factor;
	const high = match[2] ? parseNumber(match[2]) * factor : null;
	const quantity = high === null ? formatNumber(low) : `${formatNumber(low)}–${formatNumber(high)}`;
	let rest = text.slice(match[0].length);

	// "1 dash" × 8 reads "8 dashes"
	if (high !== null || low !== 1) {
		rest = rest.replace(/^(\s*)dash\b/i, '$1dashes').replace(/^(\s*)drop\b/i, '$1drops');
	}

	return `${quantity}${rest}`;
}

function isMeasuredInOzOrMl(amount: string): boolean {
	return /^\s*[\d.]+\s*(oz|ml)\b/i.test(amount);
}

/** The amount in mL when the spec is written in mL (`750ml`), otherwise null. */
function parseMl(amount: string): number | null {
	const match = amount.match(/^\s*([\d.]+)\s*ml\b/i);
	return match ? parseFloat(match[1]) : null;
}

function toLiquid(item: IngredientItem, name: string, factor: number): BatchLiquid | null {
	const amount = item.amount ?? '';
	const perDrinkOz = parseAmountToOz(amount);
	if (perDrinkOz <= 0) return null;

	// parseAmountToOz rounds mL at 30 to the oz, so an mL spec scales in mL and converts once.
	const perDrinkMl = parseMl(amount);
	const totalMl = perDrinkMl !== null ? perDrinkMl * factor : ozToMl(perDrinkOz * factor);
	const totalOz = perDrinkMl !== null ? totalMl / ML_PER_FL_OZ : perDrinkOz * factor;
	return {
		name,
		perDrink: amount,
		totalOz,
		totalMl,
		totalCount: isMeasuredInOzOrMl(amount) ? null : scaleAmountText(amount, factor)
	};
}

/**
 * Scales a cocktail's main spec to `servings` drinks. A recipe that already yields several
 * servings (a punch) scales from that yield. Garnishes and free-text lines are skipped.
 */
export function buildBatch(
	cocktail: Cocktail,
	servings: number,
	options: { freezerDilution?: boolean } = {}
): Batch {
	const factor = servings / (cocktail.servings ?? 1);
	const liquids: BatchLiquid[] = [];
	const toppers: BatchLiquid[] = [];
	const other: BatchOther[] = [];

	for (const item of cocktail.ingredients ?? []) {
		if (typeof item === 'string' || !item.ingredient || isGarnish(item)) continue;

		// A label is what the guest reads on the page, so it names the line here too.
		const name = item.label ?? getIngredientDisplayName(item);

		if (item.ingredient.carbonated) {
			toppers.push(
				toLiquid(item, name, factor) ?? {
					name,
					perDrink: item.amount ?? '',
					totalOz: 0,
					totalMl: 0,
					totalCount: null
				}
			);
			continue;
		}

		const liquid = toLiquid(item, name, factor);
		if (liquid) {
			liquids.push(liquid);
		} else if (item.amount) {
			other.push({ name, perDrink: item.amount, total: scaleAmountText(item.amount, factor) });
		} else {
			// The label carries the quantity ("1/2 orange, juiced"), so scale the label itself.
			other.push({ name, perDrink: null, total: scaleAmountText(name, factor) });
		}
	}

	const batchOz = liquids.reduce((sum, line) => sum + line.totalOz, 0);
	const batchMl = liquids.reduce((sum, line) => sum + line.totalMl, 0);
	const dilutionPct = dilutionFor(cocktail);
	const waterShare = options.freezerDilution ? dilutionPct : 0;
	const waterOz = batchOz * waterShare;
	const waterMl = batchMl * waterShare;
	const totalOz = batchOz + waterOz;
	const totalMl = batchMl + waterMl;
	const toppersOz = toppers.reduce((sum, line) => sum + line.totalOz, 0);
	const toppersMl = toppers.reduce((sum, line) => sum + line.totalMl, 0);

	return {
		servings,
		liquids,
		toppers,
		other,
		batchOz,
		batchMl,
		dilutionPct,
		waterOz,
		waterMl,
		totalOz,
		totalMl,
		toppersOz,
		toppersMl,
		servedOz: totalOz + toppersOz,
		servedMl: totalMl + toppersMl
	};
}

/** Whether a cocktail has anything pourable to batch. */
export function canBatch(cocktail: Cocktail): boolean {
	return buildBatch(cocktail, 1).liquids.length > 0;
}
