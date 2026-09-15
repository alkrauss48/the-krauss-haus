import { describe, it, expect } from 'vitest';
import { buildServingSentence } from './serving';
import { CocktailMethod, methodLabels } from '$lib/enums/methods';
import { Ice, iceLabels } from '$lib/enums/ice';
import { ServedIn, servedInLabels } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';

function cocktail(overrides: Partial<Cocktail> = {}): Cocktail {
	return {
		title: 'Test',
		description: '',
		imagePath: '',
		thumbnailImagePath: '',
		slug: 'test',
		...overrides
	};
}

describe('buildServingSentence', () => {
	it('combines method, ice, glass and straw into one sentence', () => {
		const sentence = buildServingSentence(
			cocktail({
				method: CocktailMethod.FlashBlended,
				ice: Ice.Crushed,
				servedIn: ServedIn.DoubleRocksGlass,
				hasStraw: true
			})
		);
		expect(sentence).toBe(
			'Flash blended, served over crushed ice in a double rocks glass with a straw.'
		);
	});

	it('capitalizes the first letter and ends with a period', () => {
		const sentence = buildServingSentence(cocktail({ method: CocktailMethod.Shaken }));
		expect(sentence).toBe('Shaken.');
	});

	it('omits the serving clause when there is no ice or glass', () => {
		expect(buildServingSentence(cocktail({ method: CocktailMethod.Stirred }))).toBe('Stirred.');
	});

	it('omits the method when there is none', () => {
		expect(buildServingSentence(cocktail({ servedIn: ServedIn.CoupeGlass }))).toBe(
			'Served in a coupe glass.'
		);
	});

	it('handles a straw with no other serving detail', () => {
		expect(buildServingSentence(cocktail({ hasStraw: true }))).toBe('Served with a straw.');
		expect(buildServingSentence(cocktail({ method: CocktailMethod.Shaken, hasStraw: true }))).toBe(
			'Shaken, served with a straw.'
		);
	});

	it('returns null when the cocktail carries no serving information at all', () => {
		expect(buildServingSentence(cocktail())).toBeNull();
	});

	it('has a label for every method, ice and glass enum value', () => {
		// A new enum member without a label would render "undefined" in the sentence.
		for (const method of Object.values(CocktailMethod)) {
			expect(methodLabels[method], `missing label for method ${method}`).toBeTruthy();
		}
		for (const ice of Object.values(Ice)) {
			expect(iceLabels[ice], `missing label for ice ${ice}`).toBeTruthy();
		}
		for (const glass of Object.values(ServedIn)) {
			expect(servedInLabels[glass], `missing label for glass ${glass}`).toBeTruthy();
		}
	});
});
