import { describe, it, expect } from 'vitest';
import {
	getIngredientDisplayName,
	getCocktailIngredientSlugs,
	getIngredientUsageCounts,
	formatVariantIngredients
} from './ingredients';
import type { Cocktail, CocktailVariant } from '$lib/types/cocktails';
import type { Ingredient, IngredientItem } from '$lib/types/ingredients';

const RUM: Ingredient = { title: 'Appleton Estate Signature', slug: 'appleton-estate' };
const LIME: Ingredient = { title: 'Lime', slug: 'lime' };
const GROUPED: Ingredient = { title: 'Hamilton 151', slug: 'hamilton-151', group: 'Overproof Rum' };

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

describe('getIngredientDisplayName', () => {
	it('prefers an explicit label over the ingredient name', () => {
		expect(getIngredientDisplayName({ label: 'Garnish: mint sprig', ingredient: RUM })).toBe(
			'Garnish: mint sprig'
		);
	});

	it('renders a grouped ingredient as "Group (Specific brand)"', () => {
		expect(getIngredientDisplayName({ ingredient: GROUPED })).toBe('Overproof Rum (Hamilton 151)');
	});

	it('falls back to the plain title when there is no label or group', () => {
		expect(getIngredientDisplayName({ ingredient: RUM })).toBe('Appleton Estate Signature');
	});

	it('does not crash on a malformed entry with no ingredient', () => {
		const broken = { amount: '1oz' } as unknown as IngredientItem;
		expect(getIngredientDisplayName(broken)).toBe('Unknown ingredient');
	});
});

describe('getCocktailIngredientSlugs', () => {
	it('collects slugs from the main ingredient list', () => {
		const drink = cocktail({ ingredients: [{ ingredient: RUM }, { ingredient: LIME }] });
		expect([...getCocktailIngredientSlugs(drink)].sort()).toEqual(['appleton-estate', 'lime']);
	});

	it('includes variant ingredients and deduplicates across main and variants', () => {
		const drink = cocktail({
			ingredients: [{ ingredient: RUM }],
			variations: [
				{ name: 'V1', images: [], ingredients: [{ ingredient: RUM }, { ingredient: LIME }] }
			]
		});
		expect([...getCocktailIngredientSlugs(drink)].sort()).toEqual(['appleton-estate', 'lime']);
	});

	it('skips free-text ingredients', () => {
		const drink = cocktail({ ingredients: ['2oz aged rum', { ingredient: LIME }] });
		expect([...getCocktailIngredientSlugs(drink)]).toEqual(['lime']);
	});

	it('returns an empty set for a cocktail with no ingredients', () => {
		expect(getCocktailIngredientSlugs(cocktail()).size).toBe(0);
	});
});

describe('getIngredientUsageCounts', () => {
	it('counts how many cocktails use each ingredient', () => {
		const counts = getIngredientUsageCounts([
			cocktail({ slug: 'a', ingredients: [{ ingredient: RUM }, { ingredient: LIME }] }),
			cocktail({ slug: 'b', ingredients: [{ ingredient: LIME }] })
		]);
		expect(counts.get('appleton-estate')).toBe(1);
		expect(counts.get('lime')).toBe(2);
	});

	it('counts a cocktail once even when an ingredient appears in both the main list and a variant', () => {
		const counts = getIngredientUsageCounts([
			cocktail({
				slug: 'a',
				ingredients: [{ ingredient: RUM }],
				variations: [{ name: 'V1', images: [], ingredients: [{ ingredient: RUM }] }]
			})
		]);
		expect(counts.get('appleton-estate')).toBe(1);
	});

	it('leaves unused ingredients out of the map rather than storing 0', () => {
		const counts = getIngredientUsageCounts([cocktail({ ingredients: [{ ingredient: RUM }] })]);
		expect(counts.has('lime')).toBe(false);
	});
});

describe('formatVariantIngredients', () => {
	function variant(ingredients?: CocktailVariant['ingredients']): CocktailVariant {
		return { name: 'V', images: [], ingredients };
	}

	it('joins amounts and display names into one sentence', () => {
		expect(
			formatVariantIngredients(
				variant([
					{ amount: '2oz', ingredient: RUM },
					{ amount: '.75oz', ingredient: LIME }
				])
			)
		).toBe('2oz Appleton Estate Signature .75oz Lime');
	});

	it('passes free-text ingredients through unchanged', () => {
		expect(formatVariantIngredients(variant(['Swap gin for rum']))).toBe('Swap gin for rum');
	});

	it('omits the amount when there is none', () => {
		expect(formatVariantIngredients(variant([{ ingredient: LIME }]))).toBe('Lime');
	});

	it('falls back to the label when an entry has no ingredient object', () => {
		const broken = [
			{ amount: '1oz', label: 'Mystery syrup' }
		] as unknown as CocktailVariant['ingredients'];
		expect(formatVariantIngredients(variant(broken))).toBe('1oz Mystery syrup');
	});

	it('drops unusable entries instead of leaving stray spaces', () => {
		const broken = [
			{ ingredient: LIME },
			{ amount: '1oz' }
		] as unknown as CocktailVariant['ingredients'];
		expect(formatVariantIngredients(variant(broken))).toBe('Lime');
	});

	it('returns an empty string when the variant lists no ingredients', () => {
		expect(formatVariantIngredients(variant())).toBe('');
		expect(formatVariantIngredients(variant([]))).toBe('');
	});
});
