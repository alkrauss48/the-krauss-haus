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
	costPerOz?: number;
	/** Fizzy (soda, beer, sparkling wine): added at service, never batched or frozen. */
	carbonated?: boolean;
}

export interface IngredientItem {
	amount?: string;
	label?: string;
	ingredient: Ingredient;
}
