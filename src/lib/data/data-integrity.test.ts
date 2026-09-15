/**
 * All site content is hand-authored TypeScript, so the compiler catches shape errors
 * but nothing catches a broken cross-reference: a menu pointing at a cocktail that was
 * renamed, a duplicate slug that silently swallows a page, an ingredient that no filter
 * can ever select. These tests cover exactly those failures.
 */
import { describe, it, expect } from 'vitest';
import { allCocktails, cocktailsBySlug } from './all-cocktails';
import { allRecipes, recipesBySlug } from './all-recipes';
import { allPaths, pathsBySlug } from './all-paths';
import { allParties, partiesBySlug } from './all-parties';
import { allBartenders, bartendersBySlug } from './all-bartenders';
import { allIngredientCategories } from './all-ingredients';
import { allTagCategories, tagCategoriesByLabel } from './all-tags';
import { menuConfig } from './menu-config';
import { getCocktailIngredientSlugs } from '$lib/utils/ingredients';
import type { Cocktail } from '$lib/types/cocktails';
import type { Ingredient } from '$lib/types/ingredients';

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function duplicates(values: string[]): string[] {
	const seen = new Set<string>();
	const dupes = new Set<string>();
	for (const value of values) {
		if (seen.has(value)) dupes.add(value);
		seen.add(value);
	}
	return [...dupes];
}

const cocktailSlugs = new Set(allCocktails.map((c) => c.slug));

const registeredIngredients: Ingredient[] = allIngredientCategories.flatMap((category) =>
	category.subcategories.flatMap((subcategory) => subcategory.ingredients)
);

function menuCocktails(menu: (typeof menuConfig)[string]): Cocktail[] {
	return [...(menu.featuredDrinks ?? []), ...menu.categories.flatMap((c) => c.cocktails)];
}

describe('slugs', () => {
	it.each([
		['cocktail', () => allCocktails.map((c) => c.slug)],
		['recipe', () => allRecipes.map((r) => r.slug)],
		['path', () => allPaths.map((p) => p.slug)],
		['party', () => allParties.map((p) => p.slug)],
		['bartender', () => allBartenders.map((b) => b.slug)],
		['ingredient', () => registeredIngredients.map((i) => i.slug)]
	])('has no duplicate %s slugs', (_label, getSlugs) => {
		// A duplicate slug makes one of the two entries unreachable by URL.
		expect(duplicates(getSlugs())).toEqual([]);
	});

	it.each([
		['cocktail', () => allCocktails.map((c) => c.slug)],
		['recipe', () => allRecipes.map((r) => r.slug)],
		['path', () => allPaths.map((p) => p.slug)],
		['party', () => allParties.map((p) => p.slug)],
		['bartender', () => allBartenders.map((b) => b.slug)],
		['ingredient', () => registeredIngredients.map((i) => i.slug)]
	])('uses lowercase kebab-case %s slugs', (_label, getSlugs) => {
		const invalid = getSlugs().filter((slug) => !SLUG_PATTERN.test(slug));
		expect(invalid).toEqual([]);
	});

	it.each([
		['cocktail', () => allCocktails.length, () => cocktailsBySlug.size],
		['recipe', () => allRecipes.length, () => recipesBySlug.size],
		['path', () => allPaths.length, () => pathsBySlug.size],
		['party', () => allParties.length, () => partiesBySlug.size],
		['bartender', () => allBartenders.length, () => bartendersBySlug.size]
	])('exposes every %s through its lookup map', (_label, listSize, mapSize) => {
		expect(mapSize()).toBe(listSize());
	});
});

describe('cocktails', () => {
	it('gives every cocktail the fields its page and cards render', () => {
		for (const cocktail of allCocktails) {
			expect(cocktail.title, `${cocktail.slug} has no title`).toBeTruthy();
			expect(cocktail.description, `${cocktail.slug} has no description`).toBeTruthy();
			expect(cocktail.imagePath, `${cocktail.slug} has no image`).toBeTruthy();
			expect(cocktail.thumbnailImagePath, `${cocktail.slug} has no thumbnail`).toBeTruthy();
		}
	});

	it('has no duplicate cocktail titles, which would make search results ambiguous', () => {
		expect(duplicates(allCocktails.map((c) => c.title))).toEqual([]);
	});

	it('keeps the list sorted by title', () => {
		const titles = allCocktails.map((c) => c.title);
		expect(titles).toEqual([...titles].sort((a, b) => a.localeCompare(b)));
	});

	it('does not tag the same cocktail twice with one tag', () => {
		// Duplicate tags render duplicate pills and inflate filter sidebar counts.
		for (const cocktail of allCocktails) {
			expect(
				duplicates((cocktail.tags ?? []).map((t) => t.label)),
				`${cocktail.slug} has duplicate tags`
			).toEqual([]);
		}
	});

	it('only uses tags from a registered tag category', () => {
		for (const cocktail of allCocktails) {
			for (const tag of cocktail.tags ?? []) {
				expect(
					tagCategoriesByLabel.has(tag.category.label),
					`${cocktail.slug} uses tag "${tag.label}" from unknown category "${tag.category.label}"`
				).toBe(true);
			}
		}
	});

	it('credits only bartenders that have their own page', () => {
		for (const cocktail of allCocktails) {
			if (!cocktail.createdBy) continue;
			expect(
				bartendersBySlug.has(cocktail.createdBy.slug),
				`${cocktail.slug} credits unknown bartender "${cocktail.createdBy.slug}"`
			).toBe(true);
		}
	});

	it('names every variant, since the table keys variants by name', () => {
		for (const cocktail of allCocktails) {
			const names = (cocktail.variations ?? []).map((v) => v.name);
			for (const name of names) {
				expect(name, `${cocktail.slug} has an unnamed variant`).toBeTruthy();
			}
			expect(duplicates(names), `${cocktail.slug} has duplicate variant names`).toEqual([]);
		}
	});
});

describe('ingredients', () => {
	it('registers every ingredient used by a cocktail in an ingredient category', () => {
		// An unregistered ingredient never appears in the filter sidebar or on
		// /ingredients, so those cocktails become unfilterable by it.
		const registered = new Set(registeredIngredients.map((i) => i.slug));
		const missing: string[] = [];

		for (const cocktail of allCocktails) {
			for (const slug of getCocktailIngredientSlugs(cocktail)) {
				if (!registered.has(slug)) missing.push(`${cocktail.slug} → ${slug}`);
			}
		}

		expect(missing).toEqual([]);
	});

	it('points every ingredient recipe at a recipe with its own page', () => {
		const missing: string[] = [];
		for (const ingredient of registeredIngredients) {
			if (ingredient.recipe && !recipesBySlug.has(ingredient.recipe.slug)) {
				missing.push(`${ingredient.slug} → ${ingredient.recipe.slug}`);
			}
		}
		expect(missing).toEqual([]);
	});

	it('gives every ingredient a title and non-negative cost, when priced', () => {
		for (const ingredient of registeredIngredients) {
			expect(ingredient.title, `${ingredient.slug} has no title`).toBeTruthy();
			if (ingredient.costPerOz !== undefined) {
				expect(ingredient.costPerOz, `${ingredient.slug} has a bad cost`).toBeGreaterThanOrEqual(0);
				expect(Number.isFinite(ingredient.costPerOz)).toBe(true);
			}
		}
	});

	it('gives every ingredient category a label and color', () => {
		for (const category of allIngredientCategories) {
			expect(category.label).toBeTruthy();
			expect(category.color).toMatch(/^#[0-9a-f]{3,8}$/i);
			expect(category.subcategories.length).toBeGreaterThan(0);
		}
	});
});

describe('tags', () => {
	it('has no duplicate tag category labels, which the URL keys depend on', () => {
		expect(duplicates(allTagCategories.map((c) => c.label))).toEqual([]);
	});

	it('gives each tag category a distinct URL key', () => {
		// Filters are serialized to query params keyed by the slugified category label.
		const keys = allTagCategories.map((c) =>
			c.label.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-')
		);
		expect(duplicates(keys)).toEqual([]);
	});

	it('gives each tag category a color', () => {
		for (const category of allTagCategories) {
			expect(category.color, `${category.label} has no color`).toMatch(/^#[0-9a-f]{3,8}$/i);
		}
	});
});

describe('menus', () => {
	it.each(Object.keys(menuConfig))('links %s menu drinks to real cocktail pages', (menuSlug) => {
		const missing = menuCocktails(menuConfig[menuSlug])
			.filter((c) => !cocktailSlugs.has(c.slug))
			.map((c) => c.slug);
		expect(missing).toEqual([]);
	});

	it.each(Object.keys(menuConfig))('does not list a drink twice on the %s menu', (menuSlug) => {
		const categorySlugs = menuConfig[menuSlug].categories.flatMap((cat) =>
			cat.cocktails.map((c) => c.slug)
		);
		expect(duplicates(categorySlugs)).toEqual([]);
	});

	it.each(Object.keys(menuConfig))('gives the %s menu a title and populated categories', (slug) => {
		const menu = menuConfig[slug];
		expect(menu.title).toBeTruthy();
		expect(menu.categories.length).toBeGreaterThan(0);
		for (const category of menu.categories) {
			expect(category.title, `${slug} has an untitled category`).toBeTruthy();
			expect(category.cocktails.length, `${slug} / ${category.title} is empty`).toBeGreaterThan(0);
		}
	});
});

describe('paths', () => {
	it('links every path cocktail to a real cocktail page', () => {
		const missing: string[] = [];
		for (const path of allPaths) {
			for (const cocktail of path.cocktails) {
				if (!cocktailSlugs.has(cocktail.slug)) missing.push(`${path.slug} → ${cocktail.slug}`);
			}
		}
		expect(missing).toEqual([]);
	});

	it('gives every path the fields its card and page render', () => {
		for (const path of allPaths) {
			expect(path.title, `${path.slug} has no title`).toBeTruthy();
			expect(path.description, `${path.slug} has no description`).toBeTruthy();
			expect(path.imagePath, `${path.slug} has no image`).toBeTruthy();
			expect(path.cocktails.length, `${path.slug} has no cocktails`).toBeGreaterThan(0);
		}
	});

	it('does not repeat a cocktail within one path', () => {
		for (const path of allPaths) {
			expect(duplicates(path.cocktails.map((c) => c.slug)), `${path.slug} repeats`).toEqual([]);
		}
	});
});

describe('parties', () => {
	it('links every scheduled drink to a real cocktail page', () => {
		const missing: string[] = [];
		for (const party of allParties) {
			for (const slot of party.schedule) {
				if (!cocktailSlugs.has(slot.cocktail.slug))
					missing.push(`${party.slug} → ${slot.cocktail.slug}`);
			}
		}
		expect(missing).toEqual([]);
	});

	it('gives every party a valid date and a non-empty schedule', () => {
		for (const party of allParties) {
			expect(party.name, `${party.slug} has no name`).toBeTruthy();
			expect(Number.isNaN(party.date.getTime()), `${party.slug} has an invalid date`).toBe(false);
			expect(party.schedule.length, `${party.slug} has no schedule`).toBeGreaterThan(0);
			for (const slot of party.schedule) {
				expect(slot.time, `${party.slug} has a slot with no time`).toBeTruthy();
			}
		}
	});

	it('lists parties newest first', () => {
		const times = allParties.map((p) => p.date.getTime());
		expect(times).toEqual([...times].sort((a, b) => b - a));
	});
});

describe('recipes', () => {
	it('gives every recipe a name and something to render', () => {
		for (const recipe of allRecipes) {
			expect(recipe.name, `${recipe.slug} has no name`).toBeTruthy();
			expect(
				Boolean(recipe.instructions) || Boolean(recipe.ingredients?.length),
				`${recipe.slug} has neither ingredients nor instructions`
			).toBe(true);
		}
	});

	it('keeps the list sorted by name', () => {
		const names = allRecipes.map((r) => r.name);
		expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)));
	});
});

describe('bartenders', () => {
	it('gives every bartender a name and a sensible lifespan', () => {
		for (const bartender of allBartenders) {
			expect(bartender.name, `${bartender.slug} has no name`).toBeTruthy();
			if (bartender.birthYear && bartender.deathYear) {
				expect(
					bartender.deathYear,
					`${bartender.slug} dies before being born`
				).toBeGreaterThanOrEqual(bartender.birthYear);
			}
		}
	});
});
