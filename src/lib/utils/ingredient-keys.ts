import type { Cocktail } from '$lib/types/cocktails';
import type { Ingredient, IngredientItem } from '$lib/types/ingredients';

function slugify(text: string): string {
	return text
		.normalize('NFKD')
		.replace(/[̀-ͯ]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}

/**
 * A key that treats interchangeable bottles as one: every ingredient in a group (Appleton
 * Signature and Coruba are both "Jamaican Rum") shares the group's key, and an ungrouped
 * ingredient is keyed by its own slug.
 */
export function ingredientKey(ingredient: Ingredient): string {
	return ingredient.group ? `group:${slugify(ingredient.group)}` : `ingredient:${ingredient.slug}`;
}

/** The name a key goes by: the group when there is one, otherwise the ingredient's title. */
export function ingredientKeyLabel(ingredient: Ingredient): string {
	return ingredient.group ?? ingredient.title;
}

/** Recipes write garnishes as `label: 'Garnish: Lime wheel'`. */
export function isGarnish(item: IngredientItem): boolean {
	return /^garnish\b/i.test(item.label ?? '');
}

/**
 * The catalog ingredients the main spec can't be made without. Free-text lines, garnishes and
 * variations are left out.
 */
export function requiredItems(cocktail: Cocktail): IngredientItem[] {
	return (cocktail.ingredients ?? []).filter(
		(item): item is IngredientItem =>
			typeof item !== 'string' && !!item.ingredient?.slug && !isGarnish(item)
	);
}
