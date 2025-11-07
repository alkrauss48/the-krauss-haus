import type { IngredientItem } from '$lib/types/ingredients';

/**
 * Get the display name for an ingredient item.
 * Priority: label > group (title) > title
 */
export function getIngredientDisplayName(ingredientItem: IngredientItem): string {
	if (ingredientItem.label) {
		return ingredientItem.label;
	}

	const { group, title } = ingredientItem.ingredient;
	if (group) {
		return `${group} (${title})`;
	}

	return title;
}
