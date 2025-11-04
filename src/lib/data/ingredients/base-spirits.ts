import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';

// Rum
const PROBITAS: Ingredient = {
	title: 'Probitas',
	slug: 'probitas',
	group: 'Blended Light Rum'
};

export const BASE_SPIRITS: IngredientCategory = {
	label: 'Base Spirits',
	type: IngredientType.Alcoholic,
	subcategories: [
		{
			label: 'Rum',
			ingredients: [PROBITAS]
		}
	]
};

export const INGREDIENTS = {
	PROBITAS
};
