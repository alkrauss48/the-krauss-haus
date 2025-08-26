import type { Recipe } from '$lib/types/recipes';
import { syrups } from './syrups';
import { infusions } from './infusions';

// Combine all recipes (syrups and infusions) and sort alphabetically
export const allRecipes: Recipe[] = [...syrups, ...infusions].sort((a, b) =>
	a.name.localeCompare(b.name)
);

// Create a map of all recipes by slug for quick lookups
export const recipesBySlug = new Map<string, Recipe>(
	allRecipes.map((recipe) => [recipe.slug, recipe])
);
