/**
 * Every detail page looks its content up by slug and 404s otherwise. These tests pin
 * that behavior so a refactor of the lookup maps cannot turn a missing record into a
 * blank page — or, worse, a crash.
 */
import { describe, it, expect } from 'vitest';
import { load as loadBartender } from './bartenders/[slug]/+page';
import { load as loadBartenders } from './bartenders/+page';
import { load as loadRecipe } from './recipes/[slug]/+page';
import { load as loadPath } from './paths/[slug]/+page';
import { load as loadPaths } from './paths/+page';
import { load as loadParty } from './parties/[slug]/+page';
import { load as loadParties } from './parties/+page';
import { load as loadMenu } from './menu/[slug]/+page';
import { load as loadMenuIndex } from './menu/+page';
import { allCocktails } from '$lib/data/all-cocktails';
import { allRecipes } from '$lib/data/all-recipes';
import { allPaths } from '$lib/data/all-paths';
import { allParties } from '$lib/data/all-parties';
import { allBartenders } from '$lib/data/all-bartenders';
import { menuConfig } from '$lib/data/menu-config';

// These load functions only read `params`; the full event type is not needed.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withSlug = (load: any) => (slug: string) => load({ params: { slug } });

const notFound = expect.objectContaining({ status: 404 });

describe.each([
	['recipe', withSlug(loadRecipe), () => allRecipes[0].slug, 'recipe'],
	['path', withSlug(loadPath), () => allPaths[0].slug, 'path'],
	['party', withSlug(loadParty), () => allParties[0].slug, 'party'],
	['bartender', withSlug(loadBartender), () => allBartenders[0].slug, 'bartender']
])('/%ss/[slug] load', (label, run, knownSlug, key) => {
	it(`returns the ${label} for a known slug`, () => {
		const slug = knownSlug();
		expect(run(slug)[key].slug).toBe(slug);
	});

	it('throws a 404 for an unknown slug', () => {
		expect(() => run('definitely-not-a-real-slug')).toThrowError(notFound);
	});

	it('throws a 404 for an empty slug', () => {
		expect(() => run('')).toThrowError(notFound);
	});
});

describe('/bartenders/[slug] load', () => {
	it('returns exactly the cocktails credited to that bartender', () => {
		const credited = allCocktails.find((c) => c.createdBy);
		expect(credited, 'no cocktail credits a bartender — adjust this test').toBeDefined();

		const slug = credited!.createdBy!.slug;
		const expected = allCocktails.filter((c) => c.createdBy?.slug === slug).map((c) => c.slug);

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const data = withSlug(loadBartender)(slug) as any;
		expect(data.cocktails.map((c: { slug: string }) => c.slug)).toEqual(expected);
		expect(data.cocktails.length).toBeGreaterThan(0);
	});

	it('returns an empty list for a bartender with no credited cocktails', () => {
		const credited = new Set(
			allCocktails.map((c) => c.createdBy?.slug).filter((s): s is string => Boolean(s))
		);
		const uncredited = allBartenders.find((b) => !credited.has(b.slug));
		if (!uncredited) return; // every bartender has a drink; nothing to assert

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		expect((withSlug(loadBartender)(uncredited.slug) as any).cocktails).toEqual([]);
	});
});

describe('/bartenders load', () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const data = (loadBartenders as any)();

	it('returns every bartender', () => {
		expect(data.bartenders).toBe(allBartenders);
	});

	it('counts each bartender’s cocktails', () => {
		for (const bartender of allBartenders) {
			const expected = allCocktails.filter((c) => c.createdBy?.slug === bartender.slug).length;
			const actual = data.cocktailCountBySlug.get(bartender.slug) ?? 0;
			expect(actual, `wrong count for ${bartender.slug}`).toBe(expected);
		}
	});

	it('totals to the number of credited cocktails', () => {
		const total = [...data.cocktailCountBySlug.values()].reduce((a: number, b: number) => a + b, 0);
		expect(total).toBe(allCocktails.filter((c) => c.createdBy).length);
	});
});

describe('/menu/[slug] load', () => {
	it.each(Object.keys(menuConfig))('returns the %s menu', (slug) => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		expect((loadMenu as any)({ params: { slug } }).menu).toBe(menuConfig[slug]);
	});

	it('throws a 404 for an unknown menu', () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		expect(() => (loadMenu as any)({ params: { slug: 'autumn' } })).toThrowError(notFound);
	});

	it('does not resolve inherited Object properties as menus', () => {
		// menuConfig is a plain object, so `menuConfig['constructor']` is truthy
		// and would sail past the existence check.
		for (const key of ['constructor', 'toString', '__proto__']) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			expect(() => (loadMenu as any)({ params: { slug: key } }), key).toThrowError(notFound);
		}
	});
});

describe('/menu load', () => {
	it('redirects to the home page', () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		expect(() => (loadMenuIndex as any)()).toThrowError(
			expect.objectContaining({ status: 307, location: '/' })
		);
	});
});

describe('index loads', () => {
	it('/paths returns every path', () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		expect((loadPaths as any)().paths).toBe(allPaths);
	});

	it('/parties returns every party, newest first', () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const { parties } = (loadParties as any)();
		expect(parties).toBe(allParties);
		const times = parties.map((p: { date: Date }) => p.date.getTime());
		expect(times).toEqual([...times].sort((a: number, b: number) => b - a));
	});
});
