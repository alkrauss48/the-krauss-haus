import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';
import SPICED_TEA_RECIPE from '$lib/data/recipes/spiced-tea';

const APPLE_CIDER: Ingredient = {
	title: 'Apple Cider',
	slug: 'apple-cider',
	costPerOz: 1 / 8
};
const COCA_COLA: Ingredient = {
	title: 'Coca-Cola',
	slug: 'coca-cola',
	costPerOz: 1 / 8
};
const GINGER_BEER: Ingredient = {
	title: 'Ginger Beer',
	slug: 'ginger-beer',
	costPerOz: 1 / 4
};
const GRAPEFRUIT_SODA: Ingredient = {
	title: 'Grapefruit Soda',
	slug: 'grapefruit-soda',
	costPerOz: 1 / 8
};
const SANPELLEGRINO_LIMONATA: Ingredient = {
	title: 'Sanpellegrino Limonata',
	slug: 'sanpellegrino-limonata',
	costPerOz: 1 / 6
};
const SODA_WATER: Ingredient = {
	title: 'Soda Water',
	slug: 'soda-water',
	costPerOz: 1 / 8
};
const SPICED_TEA: Ingredient = {
	title: 'Spiced Tea',
	slug: 'spiced-tea',
	recipe: SPICED_TEA_RECIPE,
	costPerOz: 0.1
};
const TONIC_WATER: Ingredient = {
	title: 'Tonic Water',
	slug: 'tonic-water',
	costPerOz: 1 / 4
};

export const MIXERS: IngredientCategory = {
	label: 'Mixers',
	type: IngredientType.NonAlcoholic,
	color: '#f59e0b', // softer amber orange (matching Technique tag)
	subcategories: [
		{
			label: 'Default',
			ingredients: [
				APPLE_CIDER,
				COCA_COLA,
				GINGER_BEER,
				GRAPEFRUIT_SODA,
				SANPELLEGRINO_LIMONATA,
				SODA_WATER,
				SPICED_TEA,
				TONIC_WATER
			]
		}
	]
};

export const INGREDIENTS = {
	APPLE_CIDER,
	COCA_COLA,
	GINGER_BEER,
	GRAPEFRUIT_SODA,
	SANPELLEGRINO_LIMONATA,
	SODA_WATER,
	SPICED_TEA,
	TONIC_WATER
};
