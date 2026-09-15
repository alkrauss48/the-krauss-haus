import { describe, it, expect } from 'vitest';
import { load } from './+page';
import { allCocktails } from '$lib/data/all-cocktails';
import { allIngredientCategories } from '$lib/data/all-ingredients';
import { Tags } from '$lib/data/all-tags';

/**
 * Filter state round-trips through the query string, so this load function is the
 * read half of a contract whose write half lives in CocktailsTable.updateURL().
 * The key shape is the slugified category label, e.g. "Base Alcohol" -> ?base-alcohol=
 * and "Herbs & Spices" -> ?ingredient-herbs-and-spices=
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const run = (search = '') => (load as any)({ url: new URL(`https://x.test/cocktails${search}`) });

describe('/cocktails load', () => {
	it('returns every cocktail', () => {
		expect(run().cocktails).toBe(allCocktails);
	});

	it('defaults to no filters and AND logic', () => {
		const data = run();
		expect(data.selectedTags).toEqual([]);
		expect(data.selectedIngredients).toEqual([]);
		expect(data.logicMode).toBe('AND');
		expect(data.searchTerm).toBe('');
	});

	describe('tags', () => {
		it('resolves a tag from its category query key', () => {
			const data = run('?base-alcohol=Rum');
			expect(data.selectedTags).toEqual([Tags.BaseAlcohol.RUM]);
		});

		it('resolves several comma-separated tags, tolerating spaces', () => {
			const data = run('?base-alcohol=Rum, Gin');
			expect(data.selectedTags).toEqual([Tags.BaseAlcohol.RUM, Tags.BaseAlcohol.GIN]);
		});

		it('resolves tags across multiple categories at once', () => {
			const data = run('?base-alcohol=Rum&style=Tiki');
			expect(data.selectedTags).toContainEqual(Tags.BaseAlcohol.RUM);
			expect(data.selectedTags).toContainEqual(Tags.Style.TIKI);
		});

		it('matches tag labels case-insensitively', () => {
			expect(run('?base-alcohol=rum').selectedTags).toEqual([Tags.BaseAlcohol.RUM]);
		});

		it('drops a tag label that does not exist', () => {
			expect(run('?base-alcohol=Absinthe-Flavored-Nonsense').selectedTags).toEqual([]);
		});

		it('drops a real tag requested under the wrong category', () => {
			// "Tiki" is a Style tag, not a Base Alcohol one.
			expect(run('?base-alcohol=Tiki').selectedTags).toEqual([]);
		});

		it('ignores an unknown category key', () => {
			expect(run('?not-a-category=Rum').selectedTags).toEqual([]);
		});
	});

	describe('ingredients', () => {
		const category = allIngredientCategories[0];
		const categoryKey = category.label.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');
		const ingredient = category.subcategories[0].ingredients[0];

		it('resolves an ingredient from its prefixed category query key', () => {
			const data = run(`?ingredient-${categoryKey}=${ingredient.slug}`);
			expect(data.selectedIngredients).toEqual([ingredient]);
		});

		it('maps an ampersand in the category label to "and" in the query key', () => {
			// e.g. "Herbs & Spices" -> ingredient-herbs-and-spices
			const ampersandCategory = allIngredientCategories.find((c) => c.label.includes('&'));
			expect(ampersandCategory, 'no category with an ampersand — adjust this test').toBeDefined();

			const key = ampersandCategory!.label.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');
			const target = ampersandCategory!.subcategories[0].ingredients[0];
			expect(run(`?ingredient-${key}=${target.slug}`).selectedIngredients).toEqual([target]);
		});

		it('drops an ingredient slug that does not exist in that category', () => {
			expect(run(`?ingredient-${categoryKey}=not-a-real-ingredient`).selectedIngredients).toEqual(
				[]
			);
		});

		it('does not resolve a tag key as an ingredient key', () => {
			expect(run(`?${categoryKey}=${ingredient.slug}`).selectedIngredients).toEqual([]);
		});
	});

	describe('logic mode', () => {
		it.each(['AND', 'OR'])('accepts %s verbatim', (mode) => {
			expect(run(`?logic=${mode}`).logicMode).toBe(mode);
		});

		it.each(['NOT AND', 'NOT OR'])(
			'round-trips the double-encoded %s written by the UI',
			(mode) => {
				// updateURL() calls encodeURIComponent before searchParams.set, which encodes
				// again — so the stored value is double-encoded and must be decoded on read.
				const url = new URL('https://x.test/cocktails');
				url.searchParams.set('logic', encodeURIComponent(mode));
				expect(run(url.search).logicMode).toBe(mode);
			}
		);

		it('falls back to AND for an unrecognized mode', () => {
			expect(run('?logic=XOR').logicMode).toBe('AND');
			expect(run('?logic=').logicMode).toBe('AND');
			expect(run('?logic=and').logicMode).toBe('AND');
		});
	});

	describe('search term', () => {
		it('passes the search term through', () => {
			expect(run('?search=mai%20tai').searchTerm).toBe('mai tai');
		});

		it('uses an empty string when absent', () => {
			expect(run('?search=').searchTerm).toBe('');
		});
	});
});
