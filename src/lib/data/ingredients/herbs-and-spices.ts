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
const CLOVE: Ingredient = {
	title: 'Clove',
	slug: 'clove'
};
const MINT: Ingredient = {
	title: 'Mint',
	slug: 'mint',
	costPerOz: 0.25
};
const NUTMEG: Ingredient = {
	title: 'Nutmeg',
	slug: 'nutmeg'
};

export const HERBS_AND_SPICES: IngredientCategory = {
	label: 'Herbs & Spices',
	type: IngredientType.NonAlcoholic,
	color: '#8b5cf6', // violet purple (complementary to existing palette)
	subcategories: [
		{
			label: 'Default',
			ingredients: [BASIL, CINNAMON, CLOVE, MINT, NUTMEG]
		}
	]
};

export const INGREDIENTS = {
	BASIL,
	CINNAMON,
	CLOVE,
	MINT,
	NUTMEG
};
