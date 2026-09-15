import { describe, it, expect } from 'vitest';
import { allSearchable, searchAll, type SearchableItem } from './all-searchable';
import { allCocktails } from './all-cocktails';
import { allRecipes } from './all-recipes';
import { allPaths } from './all-paths';
import { allParties } from './all-parties';
import { allBartenders } from './all-bartenders';
import { menuConfig } from './menu-config';

function haystack(item: SearchableItem): string {
	return [item.title, item.description, ...(item.keywords ?? [])]
		.filter(Boolean)
		.join(' ')
		.toLowerCase();
}

describe('allSearchable', () => {
	it('indexes every cocktail, recipe, path, party, bartender and menu', () => {
		const counts = allSearchable.reduce<Record<string, number>>((acc, item) => {
			acc[item.type] = (acc[item.type] ?? 0) + 1;
			return acc;
		}, {});

		expect(counts.cocktail).toBe(allCocktails.length);
		expect(counts.recipe).toBe(allRecipes.length);
		expect(counts.path).toBe(allPaths.length);
		expect(counts.party).toBe(allParties.length);
		expect(counts.bartender).toBe(allBartenders.length);
		expect(counts.menu).toBe(Object.keys(menuConfig).length);
	});

	it('gives every entry a title and an href', () => {
		for (const item of allSearchable) {
			expect(item.title, `${item.type} entry with no title`).toBeTruthy();
			expect(item.href, `"${item.title}" has no href`).toMatch(/^\//);
		}
	});

	it('does not index the same href twice', () => {
		const hrefs = allSearchable.map((item) => item.href);
		expect(new Set(hrefs).size).toBe(hrefs.length);
	});

	it('indexes cocktails by their ingredients and tags, not just their name', () => {
		const entry = allSearchable.find((item) => item.href === `/cocktails/${allCocktails[0].slug}`);
		expect(entry?.keywords?.length).toBeGreaterThan(0);
	});
});

describe('searchAll', () => {
	it('returns nothing for an empty or whitespace query', () => {
		expect(searchAll('')).toEqual([]);
		expect(searchAll('   ')).toEqual([]);
	});

	it('returns nothing when the query matches no entry', () => {
		expect(searchAll('qqqzzzxxnotathing')).toEqual([]);
	});

	it('requires every token to match (AND), not just one', () => {
		const first = allCocktails[0];
		const firstWord = first.title.split(' ')[0];
		expect(searchAll(firstWord).length).toBeGreaterThan(0);
		// Same query plus a token nothing contains must return nothing.
		expect(searchAll(`${firstWord} qqqzzzxxnotathing`)).toEqual([]);
	});

	it('only returns entries whose searchable text contains every token', () => {
		for (const query of ['rum lime', 'gin', 'tiki menu', 'syrup']) {
			const tokens = query.split(' ');
			for (const { item } of searchAll(query)) {
				const text = haystack(item);
				for (const token of tokens) {
					expect(text, `"${item.title}" matched "${query}" without "${token}"`).toContain(token);
				}
			}
		}
	});

	it('matches case-insensitively', () => {
		const title = allCocktails[0].title;
		expect(searchAll(title.toUpperCase()).length).toBe(searchAll(title.toLowerCase()).length);
	});

	it('finds a cocktail by its exact title', () => {
		for (const cocktail of allCocktails) {
			const hrefs = searchAll(cocktail.title).map((result) => result.item.href);
			expect(hrefs, `"${cocktail.title}" is not findable by name`).toContain(
				`/cocktails/${cocktail.slug}`
			);
		}
	});

	it('ranks a title match above an entry that only mentions the term in its keywords', () => {
		const cocktail = allCocktails[0];
		const results = searchAll(cocktail.title);
		const target = results.findIndex((r) => r.item.href === `/cocktails/${cocktail.slug}`);
		expect(target).toBe(0);
	});

	it('returns results in descending score order', () => {
		const results = searchAll('rum');
		const scores = results.map((r) => r.score);
		expect(scores).toEqual([...scores].sort((a, b) => b - a));
	});

	it('breaks score ties by type, with cocktails first', () => {
		const results = searchAll('rum');
		const tied = results.filter((r) => r.score === results[0].score);
		if (tied.length > 1) {
			expect(tied[0].item.type).toBe('cocktail');
		}
	});

	it('respects the result limit', () => {
		expect(searchAll('a', 5).length).toBeLessThanOrEqual(5);
		expect(searchAll('a', 1).length).toBeLessThanOrEqual(1);
	});

	it('defaults to a capped number of results', () => {
		expect(searchAll('a').length).toBeLessThanOrEqual(40);
	});
});
