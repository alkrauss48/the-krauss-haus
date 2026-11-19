import { describe, it, expect } from 'vitest';
import { CocktailMethod } from '$lib/enums/methods';
import { Ingredients } from '$lib/data/all-ingredients';
import type { Cocktail } from '$lib/types/cocktails';
import { buildBatch, canBatch, formatNumber, scaleAmountText } from './batch';

function cocktail(overrides: Partial<Cocktail>): Cocktail {
	return {
		title: 'Test',
		slug: 'test',
		description: '',
		imagePath: '',
		thumbnailImagePath: '',
		...overrides
	};
}

const daiquiri = cocktail({
	method: CocktailMethod.Shaken,
	ingredients: [
		{ amount: '2oz', ingredient: Ingredients.BaseSpirits.PROBITAS },
		{ amount: '.75oz', ingredient: Ingredients.Citrus.LIME },
		{ amount: '.5oz', ingredient: Ingredients.Syrups.RICH_SIMPLE_SYRUP },
		{ label: 'Garnish: Lime wedge', ingredient: Ingredients.Citrus.LIME_GARNISH }
	]
});

const highball = cocktail({
	method: CocktailMethod.Built,
	ingredients: [
		{ amount: '2oz', ingredient: Ingredients.BaseSpirits.CORUBA },
		{ amount: '4oz', ingredient: Ingredients.Mixers.GINGER_BEER },
		{ amount: '.5oz', ingredient: Ingredients.Citrus.LIME }
	]
});

describe('buildBatch', () => {
	it('scales each liquid and totals the batch, skipping garnishes', () => {
		const batch = buildBatch(daiquiri, 10);

		expect(batch.liquids.map((line) => [line.name, line.totalOz])).toEqual([
			['Blended Light Rum (Probitas)', 20],
			['Lime Juice', 7.5],
			['Rich Simple Syrup', 5]
		]);
		expect(batch.batchOz).toBe(32.5);
		expect(batch.waterOz).toBe(0);
		expect(batch.totalOz).toBe(32.5);
		expect(batch.liquids[0].totalMl).toBeCloseTo(591.5, 1);
	});

	it('adds 25% water to a shaken freezer batch', () => {
		const batch = buildBatch(daiquiri, 10, { freezerDilution: true });
		expect(batch.dilutionPct).toBe(0.25);
		expect(batch.waterOz).toBeCloseTo(8.125);
		expect(batch.totalOz).toBeCloseTo(40.625);
	});

	it('adds 20% water to anything that is not shaken', () => {
		const stirred = cocktail({ ...daiquiri, method: CocktailMethod.Stirred });
		const batch = buildBatch(stirred, 10, { freezerDilution: true });
		expect(batch.dilutionPct).toBe(0.2);
		expect(batch.waterOz).toBeCloseTo(6.5);
	});

	it('keeps carbonated toppers out of the batch and its dilution', () => {
		const batch = buildBatch(highball, 4, { freezerDilution: true });

		expect(batch.toppers).toHaveLength(1);
		expect(batch.toppers[0]).toMatchObject({ name: 'Ginger Beer', totalOz: 16 });
		expect(batch.liquids.map((line) => line.name)).not.toContain('Ginger Beer');
		expect(batch.batchOz).toBe(10);
		expect(batch.waterOz).toBeCloseTo(2);
	});

	it('totals the batch, its water and the toppers poured at service', () => {
		const batch = buildBatch(highball, 4, { freezerDilution: true });
		expect(batch.toppersOz).toBe(16);
		expect(batch.servedOz).toBeCloseTo(28);
		expect(buildBatch(daiquiri, 10).toppersOz).toBe(0);
	});

	it('shows dashes as a scaled count alongside their volume', () => {
		const drink = cocktail({
			ingredients: [
				{ amount: '2oz', ingredient: Ingredients.BaseSpirits.RITTENHOUSE },
				{ amount: '2 dashes', ingredient: Ingredients.Bitters.ANGOSTURA }
			]
		});
		const bitters = buildBatch(drink, 10).liquids[1];
		expect(bitters.totalCount).toBe('20 dashes');
		expect(bitters.totalOz).toBeCloseTo(20 / 48);
		expect(buildBatch(drink, 10).liquids[0].totalCount).toBeNull();
	});

	it('scales an mL spec in mL instead of round-tripping through oz', () => {
		const mulled = cocktail({
			servings: 4,
			ingredients: [
				{ amount: '750ml', ingredient: Ingredients.BeerAndWine.CABERNET_SAUVIGNON },
				{ amount: '2oz', ingredient: Ingredients.BaseSpirits.CORUBA }
			]
		});
		const batch = buildBatch(mulled, 8, { freezerDilution: true });
		expect(batch.liquids[0].totalMl).toBe(1500);
		expect(batch.liquids[0].totalOz).toBeCloseTo(1500 / 29.575);
		expect(batch.batchMl).toBeCloseTo(1500 + 4 * 29.575);
		expect(batch.batchOz).toBeCloseTo(1500 / 29.575 + 4);
		expect(batch.waterMl).toBeCloseTo(batch.batchMl * 0.2);
	});

	it('scales a multi-serving recipe from its own yield', () => {
		const punch = cocktail({
			servings: 4,
			ingredients: [{ amount: '12oz', ingredient: Ingredients.BaseSpirits.CORUBA }]
		});
		expect(buildBatch(punch, 8).liquids[0].totalOz).toBe(24);
	});

	it('scales things that cannot be poured as prep-by-hand items', () => {
		const drink = cocktail({
			ingredients: [
				{ amount: '2oz', ingredient: Ingredients.BaseSpirits.CORUBA },
				{ amount: '6-10 leaves', ingredient: Ingredients.HerbsAndSpices.MINT },
				{ label: '1/2 orange, juiced', ingredient: Ingredients.Citrus.ORANGE },
				{ label: 'Pinch of salt', ingredient: Ingredients.Other.SALT }
			]
		});
		expect(buildBatch(drink, 6).other).toEqual([
			{ name: 'Mint', perDrink: '6-10 leaves', total: '36–60 leaves' },
			{ name: '1/2 orange, juiced', perDrink: null, total: '3 orange, juiced' },
			{ name: 'Pinch of salt', perDrink: null, total: null }
		]);
	});
});

describe('canBatch', () => {
	it('is false for a recipe written entirely in free text', () => {
		expect(canBatch(cocktail({ ingredients: ['Rum, lime, sugar.'] }))).toBe(false);
		expect(canBatch(daiquiri)).toBe(true);
	});
});

describe('scaleAmountText', () => {
	it('scales the leading number or range and pluralizes dashes', () => {
		expect(scaleAmountText('1 dash', 8)).toBe('8 dashes');
		expect(scaleAmountText('1 dash', 1)).toBe('1 dash');
		expect(scaleAmountText('.5oz', 3)).toBe('1.5oz');
		expect(scaleAmountText('Cloves', 3)).toBeNull();
	});
});

describe('formatNumber', () => {
	it('trims to two decimals', () => {
		expect(formatNumber(8)).toBe('8');
		expect(formatNumber(1.5)).toBe('1.5');
		expect(formatNumber(20 / 48)).toBe('0.42');
	});
});
