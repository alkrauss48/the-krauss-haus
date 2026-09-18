/**
 * Flattens the hand-authored data modules into the JSON that `npm run export:data` writes to
 * static/data.
 *
 * Site content points at itself by live object reference (`ingredient:
 * Ingredients.BaseSpirits.SMITH_AND_CROSS`), which is right for rendering and wrong for a file:
 * `JSON.stringify(menuConfig)` alone would inline three copies of every cocktail on a menu. So
 * each record here is emitted once and referred to everywhere else by *slug*.
 *
 * The transforms live in TypeScript rather than in the script so the compiler checks them against
 * the source types — a renamed field on `Cocktail` should fail `npm run check`, not silently
 * export `null`. scripts/export-data.js evaluates this module through Vite and writes the result;
 * exported-data.test.ts re-runs it and compares against what is committed.
 */
import type { Cocktail, Category } from '$lib/types/cocktails';
import type { IngredientCategory, IngredientItem } from '$lib/types/ingredients';
import type { Recipe, RecipeCategory } from '$lib/types/recipes';
import type { Bartender } from '$lib/types/bartenders';
import type { CocktailPath } from '$lib/types/cocktail-path';
import type { Tag, TagCategory } from '$lib/types/tags';

/** Written in this order, and concatenated in this order to form the checksum. */
export const DATASET_NAMES = [
	'cocktails',
	'ingredients',
	'recipes',
	'bartenders',
	'paths',
	'tags',
	'menus'
] as const;

export type DatasetName = (typeof DATASET_NAMES)[number];

/**
 * `(string | IngredientItem)[]` is a real union in the source data — `'Garnish: 3 Olives'` and
 * `'4 cups water'` sit beside measured pours — so the export tags each entry and keeps the order
 * rather than collapsing the two. Flattening the free text into an ingredient would invent a
 * catalog member the site does not have.
 */
export type ExportedIngredientEntry =
	| { kind: 'text'; text: string }
	| { kind: 'ingredient'; slug: string; amount: string | null; label: string | null };

export interface ExportedCocktail {
	slug: string;
	title: string;
	subtitle: string | null;
	description: string;
	url: string;
	image_url: string | null;
	thumbnail_url: string | null;
	method: string | null;
	served_in: string | null;
	ice: string | null;
	has_straw: boolean;
	servings: number | null;
	notes: string | null;
	bartender_slug: string | null;
	ingredients: ExportedIngredientEntry[];
	tags: { label: string; category: string }[];
	variations: { name: string; ingredients: ExportedIngredientEntry[] }[];
}

export interface ExportedIngredient {
	slug: string;
	title: string;
	url: string;
	group: string | null;
	category: string;
	subcategory: string;
	type: string;
	recipe_slug: string | null;
}

export interface ExportedRecipe {
	slug: string;
	name: string;
	url: string;
	category: string | null;
	description: string | null;
	ingredients: string[];
	instructions: string | null;
	notes: string | null;
}

export interface ExportedBartender {
	slug: string;
	name: string;
	url: string;
	description: string | null;
	birth_year: number | null;
	death_year: number | null;
	image_url: string | null;
}

export interface ExportedPath {
	slug: string;
	title: string;
	subtitle: string | null;
	description: string;
	url: string;
	image_url: string | null;
	cocktail_slugs: string[];
}

export interface ExportedTagCategory {
	label: string;
	tags: { label: string; order: number }[];
}

export interface ExportedMenu {
	slug: string;
	title: string;
	subtitle: string | null;
	url: string;
	sections: { title: string; cocktail_slugs: string[] }[];
	featured_slugs: string[];
}

export interface Datasets {
	cocktails: ExportedCocktail[];
	ingredients: ExportedIngredient[];
	recipes: ExportedRecipe[];
	bartenders: ExportedBartender[];
	paths: ExportedPath[];
	tags: ExportedTagCategory[];
	menus: ExportedMenu[];
}

export interface Manifest {
	generated_at: string;
	counts: Record<string, number>;
	checksum: string;
}

/** The named exports the aggregators supply, as scripts/export-data.js loads them. */
export interface SourceModules {
	allCocktails: Cocktail[];
	allIngredientCategories: IngredientCategory[];
	allRecipes: Recipe[];
	RECIPE_CATEGORIES: RecipeCategory[];
	allBartenders: Bartender[];
	allPaths: CocktailPath[];
	allTagCategories: TagCategory[];
	Tags: Record<string, Record<string, Tag>>;
	menuConfig: Record<string, { title: string; subtitle?: string; categories: Category[] }>;
}

/** Code-unit ordering, so the sort does not depend on the exporting machine's locale. */
function bySlug(a: { slug: string }, b: { slug: string }): number {
	if (a.slug === b.slug) return 0;

	return a.slug < b.slug ? -1 : 1;
}

function assertUniqueSlugs<T extends { slug: string }>(records: T[], label: string): T[] {
	const seen = new Set<string>();

	for (const record of records) {
		if (seen.has(record.slug)) {
			throw new Error(`Duplicate ${label} slug "${record.slug}" — one of the two would be lost.`);
		}

		seen.add(record.slug);
	}

	return records;
}

function normalizeIngredients(
	entries: (string | IngredientItem)[] | undefined,
	context: string
): ExportedIngredientEntry[] {
	return (entries ?? []).map((entry, index) => {
		if (typeof entry === 'string') {
			return { kind: 'text', text: entry };
		}

		const slug = entry?.ingredient?.slug;

		if (!slug) {
			throw new Error(
				`${context}: ingredient #${index + 1} is neither free text nor a catalog ingredient.`
			);
		}

		return {
			kind: 'ingredient',
			slug,
			amount: entry.amount ?? null,
			label: entry.label ?? null
		};
	});
}

function buildCocktails(allCocktails: Cocktail[]): ExportedCocktail[] {
	const records = allCocktails.map((cocktail) => ({
		slug: cocktail.slug,
		title: cocktail.title,
		subtitle: cocktail.subtitle ?? null,
		description: cocktail.description,
		url: `/cocktails/${cocktail.slug}`,
		image_url: cocktail.imagePath ?? null,
		thumbnail_url: cocktail.thumbnailImagePath ?? null,
		method: cocktail.method ?? null,
		served_in: cocktail.servedIn ?? null,
		ice: cocktail.ice ?? null,
		has_straw: cocktail.hasStraw ?? false,
		servings: cocktail.servings ?? null,
		notes: cocktail.notes ?? null,
		bartender_slug: cocktail.createdBy?.slug ?? null,
		ingredients: normalizeIngredients(cocktail.ingredients, `cocktail ${cocktail.slug}`),
		// A tag has no slug; its identity is its label plus its category's. Colors are UI.
		tags: (cocktail.tags ?? []).map((tag) => ({ label: tag.label, category: tag.category.label })),
		// `images` is dropped: a variation's photos have no role outside the cocktail's own page.
		variations: (cocktail.variations ?? []).map((variant) => ({
			name: variant.name,
			ingredients: normalizeIngredients(
				variant.ingredients,
				`cocktail ${cocktail.slug} variation "${variant.name}"`
			)
		}))
	}));

	return assertUniqueSlugs(records.sort(bySlug), 'cocktail');
}

/**
 * Ingredients are authored as a category → subcategory → ingredient tree, so both labels ride
 * along on each record and the list can flatten without losing the grouping. `costPerOz` is
 * deliberately dropped: it is inventory bookkeeping with no role outside this site.
 */
function buildIngredients(allIngredientCategories: IngredientCategory[]): ExportedIngredient[] {
	const records = allIngredientCategories.flatMap((category) =>
		category.subcategories.flatMap((subcategory) =>
			subcategory.ingredients.map((ingredient) => ({
				slug: ingredient.slug,
				title: ingredient.title,
				// `/ingredients` is an index page with no `[slug]` route, so every ingredient cites it.
				url: '/ingredients',
				group: ingredient.group ?? null,
				category: category.label,
				subcategory: subcategory.label,
				type: category.type as string,
				recipe_slug: ingredient.recipe?.slug ?? null
			}))
		)
	);

	return assertUniqueSlugs(records.sort(bySlug), 'ingredient');
}

/**
 * `Recipe.ingredients` is free text (`'8 oz overproof rum (like Planteray OFTD)'`) and stays that
 * way — there is no structured link back to the ingredient catalog, and inferring one would merge
 * records that only look alike.
 */
function buildRecipes(allRecipes: Recipe[], recipeCategories: RecipeCategory[]): ExportedRecipe[] {
	const categoryBySlug = new Map<string, string>();

	for (const category of recipeCategories) {
		for (const recipe of category.recipes) {
			categoryBySlug.set(recipe.slug, category.label);
		}
	}

	const records = allRecipes.map((recipe) => ({
		slug: recipe.slug,
		// Recipes are the one type keyed by `name`; every other type uses `title`.
		name: recipe.name,
		url: `/recipes/${recipe.slug}`,
		category: categoryBySlug.get(recipe.slug) ?? null,
		description: recipe.description ?? null,
		ingredients: recipe.ingredients ?? [],
		instructions: recipe.instructions ?? null,
		notes: recipe.notes ?? null
	}));

	return assertUniqueSlugs(records.sort(bySlug), 'recipe');
}

function buildBartenders(allBartenders: Bartender[]): ExportedBartender[] {
	const records = allBartenders.map((bartender) => ({
		slug: bartender.slug,
		name: bartender.name,
		url: `/bartenders/${bartender.slug}`,
		description: bartender.description ?? null,
		birth_year: bartender.birthYear ?? null,
		death_year: bartender.deathYear ?? null,
		image_url: bartender.imageUrl ?? null
	}));

	return assertUniqueSlugs(records.sort(bySlug), 'bartender');
}

function buildPaths(allPaths: CocktailPath[]): ExportedPath[] {
	const records = allPaths.map((cocktailPath) => ({
		slug: cocktailPath.slug,
		title: cocktailPath.title,
		subtitle: cocktailPath.subtitle ?? null,
		description: cocktailPath.description,
		url: `/paths/${cocktailPath.slug}`,
		image_url: cocktailPath.imagePath ?? null,
		cocktail_slugs: cocktailPath.cocktails.map((cocktail) => cocktail.slug)
	}));

	return assertUniqueSlugs(records.sort(bySlug), 'path');
}

/**
 * `allTagCategories` carries only the nine categories — the tags themselves live in the `Tags`
 * namespace and name their category by reference. Categories keep their authored order, and each
 * category's tags are ordered by the `order` they declare, since neither has a slug to sort on.
 */
function buildTags(
	allTagCategories: TagCategory[],
	tagNamespace: Record<string, Record<string, Tag>>
): ExportedTagCategory[] {
	const byCategory = new Map<string, Tag[]>(
		allTagCategories.map((category) => [category.label, []])
	);

	for (const group of Object.values(tagNamespace)) {
		for (const tag of Object.values(group)) {
			const tags = byCategory.get(tag.category.label);

			if (!tags) {
				throw new Error(
					`Tag "${tag.label}" belongs to unregistered category "${tag.category.label}".`
				);
			}

			tags.push(tag);
		}
	}

	return allTagCategories.map((category) => ({
		label: category.label,
		tags: (byCategory.get(category.label) ?? [])
			.slice()
			.sort((a, b) => a.order - b.order || (a.label < b.label ? -1 : 1))
			.map((tag) => ({ label: tag.label, order: tag.order }))
	}));
}

/**
 * `MenuConfig` has no slug field — the key it hangs off in `menuConfig` is the slug, and nothing
 * else supplies one.
 */
function buildMenus(menuConfig: SourceModules['menuConfig']): ExportedMenu[] {
	const records = Object.entries(menuConfig).map(([slug, menu]) => ({
		slug,
		title: menu.title,
		subtitle: menu.subtitle ?? null,
		url: `/menu/${slug}`,
		sections: menu.categories.map((category) => ({
			title: category.title,
			cocktail_slugs: category.cocktails.map((cocktail) => cocktail.slug)
		})),
		featured_slugs: ((menu as { featuredDrinks?: Cocktail[] }).featuredDrinks ?? []).map(
			(cocktail) => cocktail.slug
		)
	}));

	return assertUniqueSlugs(records.sort(bySlug), 'menu');
}

/** Flattens the resolved modules into the seven slug-referenced datasets. */
export function buildDatasets(modules: SourceModules): Datasets {
	return {
		cocktails: buildCocktails(modules.allCocktails),
		ingredients: buildIngredients(modules.allIngredientCategories),
		recipes: buildRecipes(modules.allRecipes, modules.RECIPE_CATEGORIES),
		bartenders: buildBartenders(modules.allBartenders),
		paths: buildPaths(modules.allPaths),
		tags: buildTags(modules.allTagCategories, modules.Tags),
		menus: buildMenus(modules.menuConfig)
	};
}

/** Tab-indented with a trailing newline, matching the repo's formatting. */
export function serialize(value: unknown): string {
	return `${JSON.stringify(value, null, '\t')}\n`;
}

/** The bytes the checksum is taken over: every dataset, serialized, in `DATASET_NAMES` order. */
export function canonicalString(datasets: Datasets): string {
	return DATASET_NAMES.map((name) => serialize(datasets[name])).join('');
}

export function countsOf(datasets: Datasets): Record<string, number> {
	return {
		cocktails: datasets.cocktails.length,
		ingredients: datasets.ingredients.length,
		recipes: datasets.recipes.length,
		bartenders: datasets.bartenders.length,
		paths: datasets.paths.length,
		tag_categories: datasets.tags.length,
		tags: datasets.tags.reduce((total, category) => total + category.tags.length, 0),
		menus: datasets.menus.length
	};
}

/**
 * `generated_at` is carried over whenever the checksum matches, so a re-export with no content
 * change leaves an empty `git diff`. A moving timestamp would make every run a commit, and a
 * consumer could never tell a real change from a re-run.
 */
export function buildManifest(
	datasets: Datasets,
	checksum: string,
	previous: Manifest | null,
	now: Date = new Date()
): Manifest {
	const unchanged = previous?.checksum === checksum && typeof previous.generated_at === 'string';

	return {
		generated_at: unchanged ? previous.generated_at : now.toISOString(),
		counts: countsOf(datasets),
		checksum
	};
}
