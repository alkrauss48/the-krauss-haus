import type { IngredientType } from '$lib/enums/ingredientType';
import type { Recipe } from './recipes';

export interface IngredientCategory {
	label: string;
	type: IngredientType;
	color: string;
	subcategories: IngredientSubcategory[];
}

export interface IngredientSubcategory {
	label: string;
	ingredients: Ingredient[];
}

export interface Ingredient {
	title: string;
	slug: string;
	group?: string;
	recipe?: Recipe;
}

export interface IngredientItem {
	amount?: string;
	label?: string;
	ingredient: Ingredient;
}
