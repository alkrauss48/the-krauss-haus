import { describe, it, expect } from 'vitest';
import { load } from './+page';
import { allCocktails } from '$lib/data/all-cocktails';
import { allPaths } from '$lib/data/all-paths';
import { menuConfig } from '$lib/data/menu-config';
import type { Cocktail } from '$lib/types/cocktails';

// The load signature is wider than what this function actually reads.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const run = (slug: string) => (load as any)({ params: { slug } });

function menuDrinks(menuSlug: string): Cocktail[] {
	const menu = menuConfig[menuSlug];
	return [...(menu.featuredDrinks ?? []), ...menu.categories.flatMap((c) => c.cocktails)];
}

describe('/cocktails/[slug] load', () => {
	it('returns the cocktail for a known slug', () => {
		const expected = allCocktails[0];
		expect(run(expected.slug).cocktail).toBe(expected);
	});

	it('throws a 404 for an unknown slug', () => {
		expect(() => run('not-a-real-cocktail')).toThrowError(expect.objectContaining({ status: 404 }));
	});

	it('throws a 404 rather than matching a slug case-insensitively', () => {
		expect(() => run(allCocktails[0].slug.toUpperCase())).toThrowError(
			expect.objectContaining({ status: 404 })
		);
	});

	it.each(['summer', 'winter', 'tiki'])('flags a drink that is on the %s menu', (menuSlug) => {
		const drink = menuDrinks(menuSlug)[0];
		const flag = { summer: 'onSummer', winter: 'onWinter', tiki: 'onTiki' }[menuSlug]!;
		expect(run(drink.slug)[flag]).toBe(true);
	});

	it('flags a featured drink as being on the menu, not just categorized ones', () => {
		const featured = menuConfig.summer.featuredDrinks?.[0];
		expect(featured).toBeDefined();
		expect(run(featured!.slug).onSummer).toBe(true);
	});

	it('leaves the menu flags false for a drink on no menu', () => {
		const onAnyMenu = new Set(
			Object.keys(menuConfig).flatMap((key) => menuDrinks(key).map((c) => c.slug))
		);
		const offMenu = allCocktails.find((c) => !onAnyMenu.has(c.slug));
		expect(offMenu, 'every cocktail is on a menu — adjust this test').toBeDefined();

		const data = run(offMenu!.slug);
		expect([data.onSummer, data.onWinter, data.onTiki]).toEqual([false, false, false]);
	});

	it('returns every path that contains the cocktail', () => {
		const path = allPaths[0];
		const drink = path.cocktails[0];
		const expected = allPaths
			.filter((p) => p.cocktails.some((c) => c.slug === drink.slug))
			.map((p) => p.slug);

		expect(run(drink.slug).pathsContainingCocktail.map((p: { slug: string }) => p.slug)).toEqual(
			expected
		);
	});

	it('returns no paths for a cocktail that is on none', () => {
		const onAPath = new Set(allPaths.flatMap((p) => p.cocktails.map((c) => c.slug)));
		const offPath = allCocktails.find((c) => !onAPath.has(c.slug));
		expect(offPath, 'every cocktail is on a path — adjust this test').toBeDefined();
		expect(run(offPath!.slug).pathsContainingCocktail).toEqual([]);
	});
});
