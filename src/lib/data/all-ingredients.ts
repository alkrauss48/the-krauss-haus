import type { IngredientCategory } from '$lib/types/ingredients';

// Import all ingredient categories
import {
	BASE_SPIRITS,
	INGREDIENTS as BASE_SPIRITS_INGREDIENTS
} from '$lib/data/ingredients/base-spirits';

// Structured namespace for easy access
export const Ingredients = {
	BaseSpirits: BASE_SPIRITS_INGREDIENTS
} as const;

// Create arrays of all ingredient categories for convenience
export const allIngredientCategories: IngredientCategory[] = [BASE_SPIRITS];

// Create a map of all ingredient categories by label for quick lookups
export const ingredientCategoriesByLabel = new Map<string, IngredientCategory>(
	allIngredientCategories.map((category) => [category.label, category])
);
