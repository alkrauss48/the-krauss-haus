import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';

const BASIL: Ingredient = {
	title: 'Basil',
	slug: 'basil'
};
const CINNAMON: Ingredient = {
	title: 'Cinnamon',
	slug: 'cinnamon'
};
const MINT: Ingredient = {
	title: 'Mint',
	slug: 'mint'
};
const NUTMEG: Ingredient = {
	title: 'Nutmeg',
	slug: 'nutmeg'
};

export const HERBS_AND_SPICES: IngredientCategory = {
	label: 'Herbs & Spices',
	type: IngredientType.NonAlcoholic,
	subcategories: [
		{
			label: 'Default',
			ingredients: [BASIL, CINNAMON, MINT, NUTMEG]
		}
	]
};

export const INGREDIENTS = {
	BASIL,
	CINNAMON,
	MINT,
	NUTMEG
};
