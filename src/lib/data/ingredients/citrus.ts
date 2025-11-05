import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';

const GRAPEFRUIT: Ingredient = {
	title: 'Grapefruit',
	slug: 'grapefruit'
};
const LIME: Ingredient = {
	title: 'Lime',
	slug: 'lime'
};
const LEMON: Ingredient = {
	title: 'Lemon',
	slug: 'lemon'
};
const ORANGE: Ingredient = {
	title: 'Orange',
	slug: 'orange'
};
const PINEAPPLE: Ingredient = {
	title: 'Pineapple',
	slug: 'pineapple'
};

export const CITRUS: IngredientCategory = {
	label: 'Citrus',
	type: IngredientType.NonAlcoholic,
	subcategories: [
		{
			label: 'Default',
			ingredients: [GRAPEFRUIT, LIME, LEMON, ORANGE, PINEAPPLE]
		}
	]
};

export const INGREDIENTS = {
	GRAPEFRUIT,
	LIME,
	LEMON,
	ORANGE,
	PINEAPPLE
};
