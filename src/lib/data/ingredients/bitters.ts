import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';

const ANGOSTURA: Ingredient = {
	title: 'Angostura Bitters',
	slug: 'angostura-bitters',
	costPerOz: 3
};
const PEYCHAUDS: Ingredient = {
	title: "Peychaud's Bitters",
	slug: 'peychauds-bitters',
	costPerOz: 4
};
const ORANGE: Ingredient = {
	title: 'Orange Bitters',
	slug: 'orange-bitters',
	costPerOz: 4
};
const CELERY: Ingredient = {
	title: 'Celery Bitters',
	slug: 'celery-bitters',
	costPerOz: 4
};
const BLACK_WALNUT: Ingredient = {
	title: 'Black Walnut Bitters',
	slug: 'black-walnut-bitters',
	costPerOz: 4
};
const XOCOLATL: Ingredient = {
	title: 'Xocolatl Bitters',
	slug: 'xocolatl-bitters',
	costPerOz: 4
};
const HERBSTURA: Ingredient = {
	title: 'Herbstura',
	slug: 'herbstura',
	costPerOz: 3
};
const CHILI: Ingredient = {
	title: 'Chili Bitters',
	slug: 'chili-bitters',
	costPerOz: 4
};

export const BITTERS: IngredientCategory = {
	label: 'Bitters',
	type: IngredientType.Alcoholic,
	color: '#a3a3a3', // soft warm gray (matching Origin tag)
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
