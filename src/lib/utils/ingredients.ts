import type {
	IngredientCategory,
	IngredientItem,
	IngredientSubcategory
} from '$lib/types/ingredients';
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
				// Fallback: use the label if available, otherwise skip
				if (ingredient?.label) {
					return ingredient.label;
				}
				return '';
			}
			const displayName = getIngredientDisplayName(ingredient);
			// A label overrides the whole line, amount included, as on the cocktail page
			if (ingredient.amount && !ingredient.label) {
				return `${ingredient.amount} ${displayName}`;
			}
			return displayName;
		})
		.filter((item) => item !== '') // Remove any empty strings
		.join(' ');
}

// Case-insensitive substring match; an empty term matches everything
function matchesSearch(text: string, term: string): boolean {
	if (!term) return true;
	return text.toLowerCase().includes(term.toLowerCase());
}

/**
 * Narrow ingredient categories to those matching a search term.
 * An ingredient matches on its title or group. A subcategory whose own name matches
 * (other than "Default") keeps all of its ingredients. Empty subcategories and
 * categories are dropped. A blank term returns the categories unchanged.
 */
export function filterIngredientCategoriesBySearch(
	categories: IngredientCategory[],
	search: string
): IngredientCategory[] {
	const term = search.trim();
	if (!term) {
		return categories;
	}

	return categories
		.map((category) => {
			const filteredSubcategories: IngredientSubcategory[] = [];

			for (const subcategory of category.subcategories) {
				// Skip "Default" subcategory when matching subcategory name
				const subcategoryMatches =
					subcategory.label.toLowerCase() !== 'default' && matchesSearch(subcategory.label, term);
				const filteredIngredients = subcategory.ingredients.filter((ingredient) => {
					const titleMatches = matchesSearch(ingredient.title, term);
					const groupMatches = ingredient.group ? matchesSearch(ingredient.group, term) : false;
					return titleMatches || groupMatches;
				});

				if (subcategoryMatches || filteredIngredients.length > 0) {
					filteredSubcategories.push({
						...subcategory,
						ingredients: subcategoryMatches ? subcategory.ingredients : filteredIngredients
					});
				}
			}

			if (filteredSubcategories.length > 0) {
				return { ...category, subcategories: filteredSubcategories };
			}

			return null;
		})
		.filter((category): category is IngredientCategory => category !== null);
}
