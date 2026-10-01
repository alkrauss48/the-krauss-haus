import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';
import VANILLA_EXTRACT_RECIPE from '$lib/data/recipes/vanilla-extract';

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
	costPerOz: 0.15
};
const NUTMEG: Ingredient = {
	title: 'Nutmeg',
	slug: 'nutmeg'
};
const VANILLA_EXTRACT: Ingredient = {
	title: 'Vanilla Extract',
	slug: 'vanilla-extract',
	recipe: VANILLA_EXTRACT_RECIPE
};

export const HERBS_AND_SPICES: IngredientCategory = {
	label: 'Herbs & Spices',
	type: IngredientType.NonAlcoholic,
	color: '#8b5cf6', // violet purple (complementary to existing palette)
	subcategories: [
		{
			label: 'Default',
			ingredients: [BASIL, CINNAMON, CLOVE, MINT, NUTMEG, VANILLA_EXTRACT]
		}
	]
};

export const INGREDIENTS = {
	BASIL,
	CINNAMON,
	CLOVE,
	MINT,
	NUTMEG,
	VANILLA_EXTRACT
};
