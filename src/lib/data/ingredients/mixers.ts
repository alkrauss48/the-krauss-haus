import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';
import SPICED_TEA_RECIPE from '$lib/data/recipes/spiced-tea';

const APPLE_CIDER: Ingredient = {
	title: 'Apple Cider',
	slug: 'apple-cider'
};
const COCA_COLA: Ingredient = {
	title: 'Coca-Cola',
	slug: 'coca-cola'
};
const GINGER_BEER: Ingredient = {
	title: 'Ginger Beer',
	slug: 'ginger-beer'
};
const GRAPEFRUIT_SODA: Ingredient = {
	title: 'Grapefruit Soda',
	slug: 'grapefruit-soda'
};
const SANPELLEGRINO_LIMONATA: Ingredient = {
	title: 'Sanpellegrino Limonata',
	slug: 'sanpellegrino-limonata'
};
const SODA_WATER: Ingredient = {
	title: 'Soda Water',
	slug: 'soda-water'
};
const SPICED_TEA: Ingredient = {
	title: 'Spiced Tea',
	slug: 'spiced-tea',
	recipe: SPICED_TEA_RECIPE
};
const TONIC_WATER: Ingredient = {
	title: 'Tonic Water',
	slug: 'tonic-water'
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
