/**
 * `npm run export:data` flattens these TypeScript modules into static/data/*.json, and once that
 * is committed it is what the site serves and what any downstream consumer reads. Two things can
 * go wrong in between, and neither the compiler nor data-integrity.test.ts can see either: the
 * export can quietly fall behind the data it was generated from, and a flattened slug reference
 * can point at a record that is no longer there. These tests cover exactly those failures — they
 * are the export's own `--verify`.
 */
import { describe, it, expect } from 'vitest';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { allCocktails } from './all-cocktails';
import { allIngredientCategories } from './all-ingredients';
import { allRecipes, RECIPE_CATEGORIES } from './all-recipes';
import { allBartenders } from './all-bartenders';
import { allPaths } from './all-paths';
import { allTagCategories, Tags } from './all-tags';
import { menuConfig } from './menu-config';
import {
	DATASET_NAMES,
	buildDatasets,
	canonicalString,
	countsOf,
	type DatasetName,
	type Datasets,
	type ExportedCocktail,
	type Manifest
} from './export';

const DATA_DIR = fileURLToPath(new URL('../../../static/data', import.meta.url));

function read<T>(name: string): T {
	return JSON.parse(fs.readFileSync(path.join(DATA_DIR, `${name}.json`), 'utf8'));
}

/** What the export would produce right now, straight from the TypeScript. */
const built = buildDatasets({
	allCocktails,
	allIngredientCategories,
	allRecipes,
	RECIPE_CATEGORIES,
	allBartenders,
	allPaths,
	allTagCategories,
	Tags,
	menuConfig
});

/** What is actually committed under static/data. */
const exported = Object.fromEntries(
	DATASET_NAMES.map((name) => [name, read(name)])
) as unknown as Datasets;

const manifest = read<Manifest>('manifest');

const cocktailSlugs = new Set(exported.cocktails.map((c) => c.slug));
const ingredientSlugs = new Set(exported.ingredients.map((i) => i.slug));
const recipeSlugs = new Set(exported.recipes.map((r) => r.slug));
const bartenderSlugs = new Set(exported.bartenders.map((b) => b.slug));

const tagVocabulary = new Set(
	exported.tags.flatMap((category) =>
		category.tags.map((tag) => `${category.label} / ${tag.label}`)
	)
);

/** Every ingredient slug a cocktail names, in its main list and in each of its variations. */
function ingredientRefs(cocktail: ExportedCocktail): string[] {
	return [cocktail.ingredients, ...cocktail.variations.map((v) => v.ingredients)]
		.flat()
		.flatMap((entry) => (entry.kind === 'ingredient' ? [entry.slug] : []));
}

describe('exported data', () => {
	it.each(DATASET_NAMES)('has %s.json regenerated from the current TypeScript', (name) => {
		// Fails the moment someone edits a cocktail without re-running `npm run export:data`.
		expect(exported[name]).toEqual(built[name]);
	});

	it('records the counts it actually emitted', () => {
		expect(manifest.counts).toEqual(countsOf(exported));
	});

	it('records a checksum over the files on disk', () => {
		// The checksum is how a consumer decides an import is a no-op, so it has to describe the
		// committed bytes rather than whatever the last run happened to hold in memory.
		const checksum = crypto.createHash('sha256').update(canonicalString(exported)).digest('hex');

		expect(manifest.checksum).toBe(checksum);
	});

	it.each(DATASET_NAMES.filter((name): name is Exclude<DatasetName, 'tags'> => name !== 'tags'))(
		'sorts %s.json by slug with no duplicates',
		(name) => {
			// Tags carry no slug; every other collection is sorted so a re-export is byte-identical.
			const slugs = exported[name].map((record) => record.slug);

			expect(slugs).toEqual([...slugs].sort());
			expect(new Set(slugs).size).toBe(slugs.length);
		}
	);
});

describe('exported references', () => {
	it('points every cocktail ingredient at a real ingredient', () => {
		const missing: string[] = [];

		for (const cocktail of exported.cocktails) {
			for (const slug of ingredientRefs(cocktail)) {
				if (!ingredientSlugs.has(slug)) missing.push(`${cocktail.slug} → ${slug}`);
			}
		}

		expect(missing).toEqual([]);
	});

	it('keeps free-text ingredient entries as text rather than inventing an ingredient', () => {
		// `(string | IngredientItem)[]` is a real union in the source data. Collapsing the string
		// half into a fake catalog entry would invent an ingredient the site does not have.
		for (const cocktail of exported.cocktails) {
			for (const entry of cocktail.ingredients) {
				if (entry.kind === 'text') {
					expect(entry.text, `${cocktail.slug} has an empty text entry`).toBeTruthy();
				} else {
					expect(entry.slug, `${cocktail.slug} has an ingredient entry with no slug`).toBeTruthy();
				}
			}
		}
	});

	it('credits only bartenders that were exported', () => {
		const missing = exported.cocktails
			.filter((c) => c.bartender_slug !== null && !bartenderSlugs.has(c.bartender_slug))
			.map((c) => `${c.slug} → ${c.bartender_slug}`);

		expect(missing).toEqual([]);
	});

	it('tags cocktails only from the exported tag vocabulary', () => {
		const missing: string[] = [];

		for (const cocktail of exported.cocktails) {
			for (const tag of cocktail.tags) {
				const key = `${tag.category} / ${tag.label}`;

				if (!tagVocabulary.has(key)) missing.push(`${cocktail.slug} → ${key}`);
			}
		}

		expect(missing).toEqual([]);
	});

	it('points every ingredient recipe at a real recipe', () => {
		const missing = exported.ingredients
			.filter((i) => i.recipe_slug !== null && !recipeSlugs.has(i.recipe_slug))
			.map((i) => `${i.slug} → ${i.recipe_slug}`);

		expect(missing).toEqual([]);
	});

	it('lists only real cocktails on a menu', () => {
		const missing: string[] = [];

		for (const menu of exported.menus) {
			const slugs = [
				...menu.sections.flatMap((section) => section.cocktail_slugs),
				...menu.featured_slugs
			];

			for (const slug of slugs) {
				if (!cocktailSlugs.has(slug)) missing.push(`${menu.slug} → ${slug}`);
			}
		}

		expect(missing).toEqual([]);
	});

	it('lists only real cocktails on a path', () => {
		const missing: string[] = [];

		for (const cocktailPath of exported.paths) {
			for (const slug of cocktailPath.cocktail_slugs) {
				if (!cocktailSlugs.has(slug)) missing.push(`${cocktailPath.slug} → ${slug}`);
			}
		}

		expect(missing).toEqual([]);
	});
});
