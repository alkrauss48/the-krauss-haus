import { describe, it, expect } from 'vitest';
import { densityForABV, calculateDilution, ML_PER_FL_OZ } from './spirit-dilution';

describe('densityForABV', () => {
	it('returns the exact table value at a table point', () => {
		expect(densityForABV(20)).toBe(0.974);
		expect(densityForABV(50)).toBe(0.93);
		expect(densityForABV(100)).toBe(0.789);
	});

	it('interpolates linearly between table points', () => {
		// Halfway between 40 (0.948) and 45 (0.94).
		expect(densityForABV(42.5)).toBeCloseTo(0.944, 10);
		// 40% of the way from 70 (0.886) to 95 (0.811).
		expect(densityForABV(80)).toBeCloseTo(0.856, 10);
	});

	it('clamps below and above the table rather than extrapolating', () => {
		expect(densityForABV(0)).toBe(0.974);
		expect(densityForABV(-10)).toBe(0.974);
		expect(densityForABV(120)).toBe(0.789);
	});

	it('decreases monotonically as ABV rises', () => {
		let previous = Infinity;
		for (let abv = 0; abv <= 100; abv += 0.5) {
			const density = densityForABV(abv);
			expect(density).toBeLessThanOrEqual(previous);
			previous = density;
		}
	});
});

describe('calculateDilution', () => {
	it('splits the final volume between spirit and water', () => {
		const result = calculateDilution({
			targetABV: 40,
			sourceABV: 80,
			finalVolume: 1000,
			unit: 'mL'
		});
		expect(result.sourceVolume).toBeCloseTo(500, 10);
		expect(result.waterVolume).toBeCloseTo(500, 10);
	});

	it('preserves the alcohol, so the blend lands on the target ABV', () => {
		const finalVolume = 750;
		const result = calculateDilution({
			targetABV: 42,
			sourceABV: 57.5,
			finalVolume,
			unit: 'mL'
		});
		expect(result.sourceVolume + result.waterVolume).toBeCloseTo(finalVolume, 10);
		expect((result.sourceVolume * 57.5) / finalVolume).toBeCloseTo(42, 10);
	});

	it('reports volumes in the requested unit', () => {
		const ml = calculateDilution({ targetABV: 40, sourceABV: 80, finalVolume: 1000, unit: 'mL' });
		const oz = calculateDilution({
			targetABV: 40,
			sourceABV: 80,
			finalVolume: 1000 / ML_PER_FL_OZ,
			unit: 'fl oz'
		});
		expect(oz.sourceVolume).toBeCloseTo(ml.sourceVolume / ML_PER_FL_OZ, 10);
		expect(oz.waterVolume).toBeCloseTo(ml.waterVolume / ML_PER_FL_OZ, 10);
	});

	it('always reports weights in grams, whichever volume unit is chosen', () => {
		// Scales sit in grams — the unit toggle must not silently change the weight numbers.
		const ml = calculateDilution({ targetABV: 40, sourceABV: 80, finalVolume: 1000, unit: 'mL' });
		const oz = calculateDilution({
			targetABV: 40,
			sourceABV: 80,
			finalVolume: 1000 / ML_PER_FL_OZ,
			unit: 'fl oz'
		});
		expect(oz.sourceWeight).toBeCloseTo(ml.sourceWeight, 8);
		expect(oz.waterWeight).toBeCloseTo(ml.waterWeight, 8);
	});

	it('weighs the spirit at the density for its ABV, and water at 1 g/mL', () => {
		const result = calculateDilution({
			targetABV: 40,
			sourceABV: 80,
			finalVolume: 1000,
			unit: 'mL'
		});
		expect(result.sourceWeight).toBeCloseTo(500 * densityForABV(80), 8);
		expect(result.waterWeight).toBeCloseTo(500, 10);
	});

	it('calls for no water when the target already equals the source', () => {
		const result = calculateDilution({
			targetABV: 50,
			sourceABV: 50,
			finalVolume: 500,
			unit: 'mL'
		});
		expect(result.sourceVolume).toBeCloseTo(500, 10);
		expect(result.waterVolume).toBeCloseTo(0, 10);
	});
});
