export interface Recipe {
	name: string;
	slug: string;
	description?: string;
	ingredients?: string[];
	instructions?: string;
	notes?: string;
}

export interface RecipeIngredient {
	amount: string;
	recipe: Recipe;
}

/**
 * Recipe categories for filtering
 */
export interface RecipeCategory {
	label: string;
	color: string;
	recipes: Recipe[];
}
