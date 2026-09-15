import { describe, it, expect } from 'vitest';
import {
	parseAmountToOz,
	calculateCocktailCost,
	applyTax,
	formatCost,
	getDisplayCost,
	getCocktailVolumeOz,
	getDisplayCostPerOz,
	getPathCost
} from './cost';
import type { Cocktail } from '$lib/types/cocktails';
import type { CocktailPath } from '$lib/types/cocktail-path';
import type { Ingredient, IngredientItem } from '$lib/types/ingredients';

const TAX = 1.085;

function ingredient(slug: string, costPerOz?: number): Ingredient {
	return { title: slug, slug, costPerOz };
}

function item(amount: string | undefined, costPerOz?: number, slug = 'x'): IngredientItem {
	return { amount, ingredient: ingredient(slug, costPerOz) };
}

function cocktail(overrides: Partial<Cocktail> = {}): Cocktail {
	return {
		title: 'Test',
		description: 'Test',
		imagePath: '',
		thumbnailImagePath: '',
		slug: 'test',
		...overrides
	};
}

describe('parseAmountToOz', () => {
	it.each([
		['1oz', 1],
		['1 oz', 1],
		['3 oz', 3],
		['.75oz', 0.75],
		['1.5oz', 1.5],
		['2OZ', 2]
	])('parses %s as %s oz', (amount, expected) => {
		expect(parseAmountToOz(amount)).toBe(expected);
	});

	it('converts dashes at 48 per oz', () => {
		expect(parseAmountToOz('1 dash')).toBeCloseTo(1 / 48, 10);
		expect(parseAmountToOz('4 dashes')).toBeCloseTo(4 / 48, 10);
	});

	it('converts tsp at 6 per oz, with or without a space', () => {
		expect(parseAmountToOz('1 tsp')).toBeCloseTo(1 / 6, 10);
		// The data files use both "1 tsp" and "1tsp" spellings.
		expect(parseAmountToOz('1tsp')).toBeCloseTo(1 / 6, 10);
		expect(parseAmountToOz('2 tsp')).toBeCloseTo(2 / 6, 10);
	});

	it('converts tbsp at 2 per oz', () => {
		expect(parseAmountToOz('1 tbsp')).toBe(0.5);
		expect(parseAmountToOz('2 tbsp')).toBe(1);
	});

	it('converts ml at 30 per oz, case-insensitively', () => {
		// Batched recipes are written as both "750ml" and "750mL".
		expect(parseAmountToOz('750ml')).toBe(25);
		expect(parseAmountToOz('750mL')).toBe(25);
	});

	it.each([
		[''],
		['   '],
		['12'],
		['6-10 leaves'],
		['3 drops'],
		['Garnish: lime wheel'],
		['a splash']
	])('returns 0 for unrecognized amount %j', (amount) => {
		expect(parseAmountToOz(amount)).toBe(0);
	});
});

describe('calculateCocktailCost', () => {
	it('multiplies cost per oz by the parsed volume', () => {
		const drink = cocktail({
			ingredients: [item('2oz', 1.5, 'rum'), item('.5oz', 0.2, 'syrup')]
		});
		expect(calculateCocktailCost(drink)).toBeCloseTo(2 * 1.5 + 0.5 * 0.2, 10);
	});

	it('charges the full cost per oz once when the amount has no parsable volume', () => {
		// e.g. "3 drops" or a garnish — priced as a flat per-unit cost, not scaled.
		const drink = cocktail({ ingredients: [item('3 drops', 0.4, 'bitters')] });
		expect(calculateCocktailCost(drink)).toBe(0.4);

		const noAmount = cocktail({ ingredients: [item(undefined, 0.4, 'bitters')] });
		expect(calculateCocktailCost(noAmount)).toBe(0.4);
	});

	it('ignores ingredients with no cost data instead of treating them as free', () => {
		const drink = cocktail({
			ingredients: [item('2oz', 1.5, 'rum'), item('1oz', undefined, 'mystery')]
		});
		expect(calculateCocktailCost(drink)).toBeCloseTo(3, 10);
	});

	it('ignores free-text string ingredients', () => {
		const drink = cocktail({ ingredients: ['Garnish: mint sprig', item('1oz', 2, 'rum')] });
		expect(calculateCocktailCost(drink)).toBe(2);
	});

	it('returns null when no ingredient carries cost data', () => {
		expect(calculateCocktailCost(cocktail({ ingredients: [item('1oz', undefined)] }))).toBeNull();
		expect(calculateCocktailCost(cocktail({ ingredients: ['just a string'] }))).toBeNull();
		expect(calculateCocktailCost(cocktail({ ingredients: [] }))).toBeNull();
		expect(calculateCocktailCost(cocktail())).toBeNull();
	});
});

describe('applyTax / formatCost', () => {
	it('applies the 8.5% tax rate', () => {
		expect(applyTax(100)).toBeCloseTo(108.5, 10);
		expect(applyTax(0)).toBe(0);
	});

	it('formats to two decimal places with a dollar sign', () => {
		expect(formatCost(1.5)).toBe('$1.50');
		expect(formatCost(0)).toBe('$0.00');
		expect(formatCost(2.006)).toBe('$2.01');
		expect(formatCost(1.0 / 3)).toBe('$0.33');
	});

	it('formats a missing cost as an empty string, not "$NaN"', () => {
		expect(formatCost(null)).toBe('');
	});
});

describe('getDisplayCost', () => {
	it('taxes the full cost when there is no servings count', () => {
		const drink = cocktail({ ingredients: [item('2oz', 1, 'rum')] });
		expect(getDisplayCost(drink)).toBeCloseTo(2 * TAX, 10);
	});

	it('divides a batch by its servings before taxing', () => {
		const batch = cocktail({ servings: 4, ingredients: [item('8oz', 1, 'rum')] });
		expect(getDisplayCost(batch)).toBeCloseTo((8 / 4) * TAX, 10);
	});

	it('returns null when the cocktail has no cost data', () => {
		expect(getDisplayCost(cocktail({ ingredients: [item('1oz')] }))).toBeNull();
	});
});

describe('getCocktailVolumeOz', () => {
	it('sums every ingredient volume, including ones with no cost data', () => {
		const drink = cocktail({
			ingredients: [item('2oz', 1, 'rum'), item('1oz', undefined, 'juice'), 'a string']
		});
		expect(getCocktailVolumeOz(drink)).toBeCloseTo(3, 10);
	});

	it('returns 0 when nothing has a measurable volume', () => {
		expect(getCocktailVolumeOz(cocktail({ ingredients: [item('1 pinch', 1)] }))).toBe(0);
		expect(getCocktailVolumeOz(cocktail())).toBe(0);
	});
});

describe('getDisplayCostPerOz', () => {
	it('divides taxed cost by total volume', () => {
		const drink = cocktail({ ingredients: [item('2oz', 1, 'rum'), item('2oz', 0, 'water')] });
		expect(getDisplayCostPerOz(drink)).toBeCloseTo((2 / 4) * TAX, 10);
	});

	it('is unaffected by servings, since cost and volume scale together', () => {
		const single = cocktail({ ingredients: [item('2oz', 1, 'rum')] });
		const batch = cocktail({ servings: 8, ingredients: [item('2oz', 1, 'rum')] });
		expect(getDisplayCostPerOz(batch)).toBeCloseTo(getDisplayCostPerOz(single)!, 10);
	});

	it('returns null rather than dividing by zero when nothing is measurable', () => {
		// Priced ingredient, but no parsable volume anywhere.
		expect(getDisplayCostPerOz(cocktail({ ingredients: [item('3 drops', 0.4)] }))).toBeNull();
	});

	it('returns null when the cocktail has no cost data', () => {
		expect(getDisplayCostPerOz(cocktail({ ingredients: [item('1oz')] }))).toBeNull();
	});
});

describe('getPathCost', () => {
	function path(cocktails: Cocktail[]): CocktailPath {
		return { title: 'P', subtitle: '', slug: 'p', imagePath: '', description: '', cocktails };
	}

	it('sums the per-serving display cost of every cocktail on the path', () => {
		const result = getPathCost(
			path([
				cocktail({ ingredients: [item('2oz', 1, 'rum')] }),
				cocktail({ ingredients: [item('1oz', 1, 'gin')] })
			])
		);
		expect(result).toBeCloseTo(3 * TAX, 10);
	});

	it('skips cocktails with no cost data instead of returning null for the whole path', () => {
		const result = getPathCost(
			path([cocktail({ ingredients: [item('2oz', 1, 'rum')] }), cocktail({ ingredients: [] })])
		);
		expect(result).toBeCloseTo(2 * TAX, 10);
	});

	it('returns null when no cocktail on the path has cost data', () => {
		expect(getPathCost(path([cocktail(), cocktail()]))).toBeNull();
		expect(getPathCost(path([]))).toBeNull();
	});
});
