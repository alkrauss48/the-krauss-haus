import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';

const GRAPEFRUIT: Ingredient = {
	title: 'Grapefruit Juice',
	slug: 'grapefruit',
	costPerOz: 0.35
};
const GRAPEFRUIT_GARNISH: Ingredient = {
	title: 'Grapefruit Garnish',
	slug: 'grapefruit-garnish'
};
const LIME: Ingredient = {
	title: 'Lime Juice',
	slug: 'lime',
	costPerOz: 0.35
};
const LIME_GARNISH: Ingredient = {
	title: 'Lime Garnish',
	slug: 'lime-garnish'
};
const LEMON: Ingredient = {
	title: 'Lemon Juice',
	slug: 'lemon',
	costPerOz: 0.5
};
const LEMON_GARNISH: Ingredient = {
	title: 'Lemon Garnish',
	slug: 'lemon-garnish'
};
const ORANGE: Ingredient = {
	title: 'Orange Juice',
	slug: 'orange',
	costPerOz: 0.5
};
const ORANGE_GARNISH: Ingredient = {
	title: 'Orange Garnish',
	slug: 'orange-garnish'
};
const PINEAPPLE: Ingredient = {
	title: 'Pineapple Juice',
	slug: 'pineapple',
	costPerOz: 1 / 8
};
const PINEAPPLE_GARNISH: Ingredient = {
	title: 'Pineapple Garnish',
	slug: 'pineapple-garnish'
};
export const CITRUS: IngredientCategory = {
	label: 'Citrus',
	type: IngredientType.NonAlcoholic,
	color: '#06b6d4', // softer cyan blue (matching Temperature tag)
	subcategories: [
		{
			label: 'Juice',
			ingredients: [GRAPEFRUIT, LIME, LEMON, ORANGE, PINEAPPLE]
		},
		{
			label: 'Garnish',
			ingredients: [
				GRAPEFRUIT_GARNISH,
				LIME_GARNISH,
				LEMON_GARNISH,
				ORANGE_GARNISH,
				PINEAPPLE_GARNISH
			]
		}
	]
};

export const INGREDIENTS = {
	GRAPEFRUIT,
	LIME,
	LEMON,
	ORANGE,
	PINEAPPLE,
	GRAPEFRUIT_GARNISH,
	LIME_GARNISH,
	LEMON_GARNISH,
	ORANGE_GARNISH,
	PINEAPPLE_GARNISH
};
