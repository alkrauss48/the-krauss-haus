import type { IngredientItem } from '$lib/types/ingredients';
import type { Cocktail } from '$lib/types/cocktails';

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

/**
 * Count how many cocktails use each ingredient (by slug).
 * Returns a Map of ingredient slug -> count.
 */
export function getIngredientUsageCounts(cocktails: Cocktail[]): Map<string, number> {
	const counts = new Map<string, number>();

	for (const cocktail of cocktails) {
		if (!cocktail.ingredients) continue;

		const seenSlugs = new Set<string>(); // Track unique slugs per cocktail

		for (const ingredient of cocktail.ingredients) {
			// Skip string ingredients
			if (typeof ingredient === 'string') continue;

			// Only count if it's an IngredientItem with an ingredient slug
			if ('ingredient' in ingredient && ingredient.ingredient?.slug) {
				const slug = ingredient.ingredient.slug;
				// Only count once per cocktail (in case ingredient appears multiple times)
				if (!seenSlugs.has(slug)) {
					seenSlugs.add(slug);
					counts.set(slug, (counts.get(slug) || 0) + 1);
				}
			}
		}
	}

	return counts;
}
