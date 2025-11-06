import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';
import SPICED_TEA_RECIPE from '$lib/data/recipes/spiced-tea';
import TOM_AND_JERRY_BATTER_RECIPE from '$lib/data/recipes/tom-and-jerry-batter';

const CREAM_OF_COCONUT: Ingredient = {
	title: 'Cream of Coconut',
	slug: 'cream-of-coconut'
};
const EGG: Ingredient = {
	title: 'Egg',
	slug: 'egg'
};
const HEAVY_CREAM: Ingredient = {
	title: 'Heavy Cream',
	slug: 'heavy-cream'
};
const MARASCHINO_CHERRY: Ingredient = {
	title: 'Maraschino Cherry',
	slug: 'maraschino-cherry'
};
const ORANGE_BLOSSOM_WATER: Ingredient = {
	title: 'Orange Blossom Water',
	slug: 'orange-blossom-water'
};
const SPICED_TEA: Ingredient = {
	title: 'Spiced Tea',
	slug: 'spiced-tea',
	recipe: SPICED_TEA_RECIPE
};
const TOM_AND_JERRY_BATTER: Ingredient = {
	title: 'Tom and Jerry Batter',
	slug: 'tom-and-jerry-batter',
	recipe: TOM_AND_JERRY_BATTER_RECIPE
};

export const OTHER: IngredientCategory = {
	label: 'Other',
	type: IngredientType.NonAlcoholic,
	subcategories: [
		{
			label: 'Default',
			ingredients: [
				CREAM_OF_COCONUT,
				EGG,
				HEAVY_CREAM,
				MARASCHINO_CHERRY,
				ORANGE_BLOSSOM_WATER,
				SPICED_TEA,
				TOM_AND_JERRY_BATTER
			]
		}
	]
};

export const INGREDIENTS = {
	CREAM_OF_COCONUT,
	EGG,
	HEAVY_CREAM,
	MARASCHINO_CHERRY,
	ORANGE_BLOSSOM_WATER,
	SPICED_TEA,
	TOM_AND_JERRY_BATTER
};
