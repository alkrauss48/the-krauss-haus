#!/usr/bin/env node
/**
 * Writes every hand-authored data module under src/lib/data out as flat JSON in static/data.
 *
 * The site's content is TypeScript, and records point at each other by live object reference
 * (`ingredient: Ingredients.BaseSpirits.SMITH_AND_CROSS`), so the data cannot be parsed — it has
 * to be evaluated. Each aggregator is loaded through Vite's `ssrLoadModule` so `$lib` aliases,
 * enums and shared objects all resolve into plain values, exactly as scripts/images-prompt.js
 * already does for a single cocktail.
 *
 * The flattening itself lives in src/lib/data/export.ts, where the compiler can check it against
 * the source types. This file only boots Vite, hashes the result and writes the files.
 *
 * Usage:
 *   npm run export:data
 */
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'static/data');

/** The aggregators to evaluate, and the named exports each one supplies. */
const SOURCES = {
	'all-cocktails': ['allCocktails'],
	'all-ingredients': ['allIngredientCategories'],
	'all-recipes': ['allRecipes', 'RECIPE_CATEGORIES'],
	'all-bartenders': ['allBartenders'],
	'all-paths': ['allPaths'],
	// `allTagCategories` holds only the nine categories; the tags live in the `Tags` namespace.
	'all-tags': ['allTagCategories', 'Tags'],
	'menu-config': ['menuConfig']
};

/**
 * Boots one Vite server, evaluates every aggregator plus the flattening module through it, and
 * closes it once.
 */
async function load() {
	const { createServer } = await import('vite');
	const server = await createServer({
		root: ROOT,
		configFile: false,
		logLevel: 'silent',
		server: { middlewareMode: true, hmr: false },
		resolve: { alias: { $lib: path.join(ROOT, 'src/lib') } }
	});

	try {
		const modules = {};

		for (const [file, names] of Object.entries(SOURCES)) {
			const loaded = await server.ssrLoadModule(`/src/lib/data/${file}.ts`);

			for (const name of names) {
				if (loaded[name] === undefined) {
					throw new Error(`src/lib/data/${file}.ts does not export "${name}".`);
				}

				modules[name] = loaded[name];
			}
		}

		return { modules, exporter: await server.ssrLoadModule('/src/lib/data/export.ts') };
	} finally {
		await server.close();
	}
}

function readManifest() {
	try {
		return JSON.parse(fs.readFileSync(path.join(OUT_DIR, 'manifest.json'), 'utf8'));
	} catch {
		// No manifest yet, or an unreadable one — either way this run writes a fresh timestamp.
		return null;
	}
}

const { modules, exporter } = await load();
const datasets = exporter.buildDatasets(modules);
const checksum = crypto
	.createHash('sha256')
	.update(exporter.canonicalString(datasets))
	.digest('hex');
const manifest = exporter.buildManifest(datasets, checksum, readManifest());

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const name of exporter.DATASET_NAMES) {
	fs.writeFileSync(path.join(OUT_DIR, `${name}.json`), exporter.serialize(datasets[name]));
}

fs.writeFileSync(path.join(OUT_DIR, 'manifest.json'), exporter.serialize(manifest));

for (const [name, count] of Object.entries(manifest.counts)) {
	console.log(`  ${String(count).padStart(4)}  ${name}`);
}

console.log(`\nWrote static/data — checksum ${manifest.checksum.slice(0, 12)}…`);
