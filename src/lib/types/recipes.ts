import type { Tag } from './tags';

export interface Recipe {
	name: string;
	slug: string;
	description?: string;
	ingredients?: string[];
	instructions?: string;
	notes?: string;
	tag?: Tag;
}

export interface RecipeIngredient {
	amount: string;
	recipe: Recipe;
}
