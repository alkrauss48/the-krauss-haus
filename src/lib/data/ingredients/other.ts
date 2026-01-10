import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';
import CRANBERRY_CORDIAL_RECIPE from '$lib/data/recipes/cranberry-cordial';
import TOM_AND_JERRY_BATTER_RECIPE from '$lib/data/recipes/tom-and-jerry-batter';

const CRANBERRY_CORDIAL: Ingredient = {
	title: 'Cranberry Cordial',
	slug: 'cranberry-cordial',
	recipe: CRANBERRY_CORDIAL_RECIPE
};
const CREAM_OF_COCONUT: Ingredient = {
	title: 'Cream of Coconut',
	slug: 'cream-of-coconut'
};
const CUCUMBER: Ingredient = {
	title: 'Cucumber',
	slug: 'cucumber'
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
const SALT: Ingredient = {
	title: 'Salt',
	slug: 'salt'
};
const SUGAR: Ingredient = {
	title: 'Sugar',
	slug: 'sugar'
};
const ESPRESSO: Ingredient = {
	title: 'Espresso',
	slug: 'espresso'
};
const TOM_AND_JERRY_BATTER: Ingredient = {
	title: 'Tom and Jerry Batter',
	slug: 'tom-and-jerry-batter',
	recipe: TOM_AND_JERRY_BATTER_RECIPE
};

export const OTHER: IngredientCategory = {
	label: 'Other',
	type: IngredientType.NonAlcoholic,
	color: '#6b7280', // neutral gray (complementary to existing palette)
	subcategories: [
		{
			label: 'Default',
			ingredients: [
				CRANBERRY_CORDIAL,
				CREAM_OF_COCONUT,
				CUCUMBER,
				EGG,
				ESPRESSO,
				HEAVY_CREAM,
				MARASCHINO_CHERRY,
				ORANGE_BLOSSOM_WATER,
				SALT,
				SUGAR,
				TOM_AND_JERRY_BATTER
			]
		}
	]
};

export const INGREDIENTS = {
	CRANBERRY_CORDIAL,
	CREAM_OF_COCONUT,
	CUCUMBER,
	EGG,
	ESPRESSO,
	HEAVY_CREAM,
	MARASCHINO_CHERRY,
	ORANGE_BLOSSOM_WATER,
	SALT,
	SUGAR,
	TOM_AND_JERRY_BATTER
};
