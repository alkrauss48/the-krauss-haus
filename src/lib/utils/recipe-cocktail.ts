import type { Cocktail } from '$lib/types/cocktails';
import type { Recipe, RecipeIngredient, RecipeCategory } from '$lib/types/recipes';
import { RECIPE_CATEGORIES } from '$lib/data/all-recipes';

/**
 * Extract all recipes used in a cocktail
 */
export function getRecipesFromCocktail(cocktail: Cocktail): Recipe[] {
	if (!cocktail.ingredients) return [];

	return cocktail.ingredients
		.filter(
			(ingredient): ingredient is RecipeIngredient =>
				typeof ingredient === 'object' && 'recipe' in ingredient
		)
		.map((ingredient) => ingredient.recipe);
}

/**
 * Check if a cocktail uses a specific recipe
 */
export function cocktailUsesRecipe(cocktail: Cocktail, targetRecipe: Recipe): boolean {
	const recipes = getRecipesFromCocktail(cocktail);
	return recipes.some((recipe) => recipe.slug === targetRecipe.slug);
}

/**
 * Filter cocktails by selected recipes
 */
export function filterCocktailsByRecipes(
	cocktails: Cocktail[],
	selectedRecipes: Recipe[]
): Cocktail[] {
	if (selectedRecipes.length === 0) return cocktails;

	return cocktails.filter((cocktail) =>
		selectedRecipes.every((selectedRecipe) => cocktailUsesRecipe(cocktail, selectedRecipe))
	);
}

/**
 * Get all unique recipes used across all cocktails, grouped by category
 */
export function getUsedRecipesByCategory(
	cocktails: Cocktail[]
): { category: RecipeCategory; usedRecipes: Recipe[] }[] {
	const allUsedRecipes = cocktails.flatMap(getRecipesFromCocktail);
	const uniqueUsedRecipes = Array.from(
		new Map(allUsedRecipes.map((recipe) => [recipe.slug, recipe])).values()
	);

	return RECIPE_CATEGORIES.map((category) => ({
		category,
		usedRecipes: category.recipes.filter((recipe) =>
			uniqueUsedRecipes.some((usedRecipe) => usedRecipe.slug === recipe.slug)
		)
	})).filter(({ usedRecipes }) => usedRecipes.length > 0);
}

/**
 * Count cocktails that would match if a recipe were added to the selection
 */
export function getCocktailCountForRecipe(
	cocktails: Cocktail[],
	recipe: Recipe,
	currentlySelectedRecipes: Recipe[]
): number {
	const hypotheticalRecipes = [...currentlySelectedRecipes, recipe];
	return filterCocktailsByRecipes(cocktails, hypotheticalRecipes).length;
}
