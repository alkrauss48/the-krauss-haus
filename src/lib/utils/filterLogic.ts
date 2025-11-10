import type { Tag } from '$lib/types/tags';
import type { Ingredient } from '$lib/types/ingredients';
import type { Cocktail } from '$lib/types/cocktails';
import type { LogicMode } from '$lib/types/filters';

/**
 * Check if a cocktail matches tags based on logic mode
 */
export function matchesTagsLogic(cocktail: Cocktail, tags: Tag[], mode: LogicMode): boolean {
	if (tags.length === 0) return true;

	const cocktailTagLabels = new Set((cocktail.tags || []).map((tag) => tag.label));
	const selectedTagLabels = tags.map((tag) => tag.label);

	switch (mode) {
		case 'AND':
			// All selected tags must be present
			return selectedTagLabels.every((label) => cocktailTagLabels.has(label));
		case 'OR':
			// At least one selected tag must be present
			return selectedTagLabels.some((label) => cocktailTagLabels.has(label));
		case 'NOT AND':
			// Exclude if all selected tags are present (include if at least one is missing)
			return !selectedTagLabels.every((label) => cocktailTagLabels.has(label));
		case 'NOT OR':
			// Exclude if any selected tag is present
			return !selectedTagLabels.some((label) => cocktailTagLabels.has(label));
		default:
			return true;
	}
}

/**
 * Check if a cocktail matches ingredients based on logic mode
 */
export function matchesIngredientsLogic(
	cocktail: Cocktail,
	ingredients: Ingredient[],
	mode: LogicMode
): boolean {
	if (ingredients.length === 0) return true;

	// If cocktail has no ingredients, it can't match any selected ingredients
	// For NOT modes, this means it should be included (doesn't match exclusion criteria)
	if (!cocktail.ingredients) {
		return mode === 'NOT AND' || mode === 'NOT OR';
	}

	const cocktailIngredientSlugs = new Set<string>();
	for (const item of cocktail.ingredients) {
		if (typeof item === 'string') continue;
		if ('ingredient' in item && item.ingredient?.slug) {
			cocktailIngredientSlugs.add(item.ingredient.slug);
		}
	}

	const selectedIngredientSlugs = ingredients.map((ingredient) => ingredient.slug);

	switch (mode) {
		case 'AND':
			// All selected ingredients must be present
			return selectedIngredientSlugs.every((slug) => cocktailIngredientSlugs.has(slug));
		case 'OR':
			// At least one selected ingredient must be present
			return selectedIngredientSlugs.some((slug) => cocktailIngredientSlugs.has(slug));
		case 'NOT AND':
			// Exclude if all selected ingredients are present (include if at least one is missing)
			return !selectedIngredientSlugs.every((slug) => cocktailIngredientSlugs.has(slug));
		case 'NOT OR':
			// Exclude if any selected ingredient is present
			return !selectedIngredientSlugs.some((slug) => cocktailIngredientSlugs.has(slug));
		default:
			return true;
	}
}
