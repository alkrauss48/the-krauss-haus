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
