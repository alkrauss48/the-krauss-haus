import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';

const ANGOSTURA: Ingredient = {
	title: 'Angostura',
	slug: 'angostura'
};
const PEYCHAUDS: Ingredient = {
	title: "Peychaud's",
	slug: 'peychauds'
};
const ORANGE: Ingredient = {
	title: 'Orange',
	slug: 'orange'
};
const CELERY: Ingredient = {
	title: 'Celery',
	slug: 'celery'
};
const BLACK_WALNUT: Ingredient = {
	title: 'Black Walnut',
	slug: 'black-walnut'
};
const XOCOLATL: Ingredient = {
	title: 'Xocolatl',
	slug: 'xocolatl'
};
const HERBSTURA: Ingredient = {
	title: 'Herbstura',
	slug: 'herbstura'
};
const CHILI: Ingredient = {
	title: 'Chili',
	slug: 'chili'
};

export const BITTERS: IngredientCategory = {
	label: 'Bitters',
	type: IngredientType.Alcoholic,
	subcategories: [
		{
			label: 'Default',
			ingredients: [ANGOSTURA, PEYCHAUDS, ORANGE, CELERY, BLACK_WALNUT, XOCOLATL, HERBSTURA, CHILI]
		}
	]
};

export const INGREDIENTS = {
	ANGOSTURA,
	PEYCHAUDS,
	ORANGE,
	CELERY,
	BLACK_WALNUT,
	XOCOLATL,
	HERBSTURA,
	CHILI
};
