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
 * Extract ingredient slugs from an array of ingredients (string | IngredientItem)[]
 * Returns a Set of unique ingredient slugs
 */
function extractIngredientSlugs(ingredients: (string | IngredientItem)[] | undefined): Set<string> {
	const slugs = new Set<string>();
	if (!ingredients) return slugs;

	for (const ingredient of ingredients) {
		// Skip string ingredients
		if (typeof ingredient === 'string') continue;

		// Only add if it's an IngredientItem with an ingredient slug
		if ('ingredient' in ingredient && ingredient.ingredient?.slug) {
			slugs.add(ingredient.ingredient.slug);
		}
	}

	return slugs;
}

/**
 * Get all ingredient slugs from a cocktail (including variants).
 * Returns a Set of unique ingredient slugs.
 * This ensures we don't double count an ingredient if it appears in both
 * the main ingredients and a variant.
 */
export function getCocktailIngredientSlugs(cocktail: Cocktail): Set<string> {
	const slugs = new Set<string>();

	// Add slugs from main ingredients
	const mainSlugs = extractIngredientSlugs(cocktail.ingredients);
	mainSlugs.forEach((slug) => slugs.add(slug));

	// Add slugs from variant ingredients
	if (cocktail.variations) {
		for (const variant of cocktail.variations) {
			const variantSlugs = extractIngredientSlugs(variant.ingredients);
			variantSlugs.forEach((slug) => slugs.add(slug));
		}
	}

	return slugs;
}

/**
 * Count how many cocktails use each ingredient (by slug).
 * Includes ingredients from both main cocktail ingredients and variants.
 * Each cocktail is only counted once per ingredient, even if the ingredient
 * appears in both main ingredients and variants.
 * Returns a Map of ingredient slug -> count.
 */
export function getIngredientUsageCounts(cocktails: Cocktail[]): Map<string, number> {
	const counts = new Map<string, number>();

	for (const cocktail of cocktails) {
		// Get all unique ingredient slugs from this cocktail (including variants)
		const cocktailSlugs = getCocktailIngredientSlugs(cocktail);

		// Count each slug once per cocktail
		for (const slug of cocktailSlugs) {
			counts.set(slug, (counts.get(slug) || 0) + 1);
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
