import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';

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
const TONIC_WATER: Ingredient = {
	title: 'Tonic Water',
	slug: 'tonic-water'
};

export const MIXERS: IngredientCategory = {
	label: 'Mixers',
	type: IngredientType.NonAlcoholic,
	subcategories: [
		{
			label: 'Default',
			ingredients: [
				COCA_COLA,
				GINGER_BEER,
				GRAPEFRUIT_SODA,
				SANPELLEGRINO_LIMONATA,
				SODA_WATER,
				TONIC_WATER
			]
		}
	]
};

export const INGREDIENTS = {
	COCA_COLA,
	GINGER_BEER,
	GRAPEFRUIT_SODA,
	SANPELLEGRINO_LIMONATA,
	SODA_WATER,
	TONIC_WATER
};
