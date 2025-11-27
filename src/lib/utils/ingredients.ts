import type { IngredientItem } from '$lib/types/ingredients';
import type { Cocktail, CocktailVariant } from '$lib/types/cocktails';

/**
 * Get the display name for an ingredient item.
 * Priority: label > group (title) > title
 */
export function getIngredientDisplayName(ingredientItem: IngredientItem): string {
	if (ingredientItem.label) {
		return ingredientItem.label;
	}

	if (!ingredientItem.ingredient) {
		// Fallback if ingredient is missing
		return 'Unknown ingredient';
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

/**
 * Format variant ingredients as a space-separated sentence.
 * Similar to how Cocktail ingredients are displayed, but joined with spaces instead of bullets.
 */
export function formatVariantIngredients(variant: CocktailVariant): string {
	if (!variant.ingredients || variant.ingredients.length === 0) {
		return '';
	}

	return variant.ingredients
		.map((ingredient) => {
			if (typeof ingredient === 'string') {
				return ingredient;
			}
			// Validate that it's a proper IngredientItem with an ingredient property
			if (!ingredient || !ingredient.ingredient) {
				// Fallback: try to use label or amount if available, otherwise skip
				if (ingredient?.label) {
					return ingredient.amount ? `${ingredient.amount} ${ingredient.label}` : ingredient.label;
				}
				return '';
			}
			const displayName = getIngredientDisplayName(ingredient);
			if (ingredient.amount) {
				return `${ingredient.amount} ${displayName}`;
			}
			return displayName;
		})
		.filter((item) => item !== '') // Remove any empty strings
		.join(' ');
}
