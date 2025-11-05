import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';

const CINNAMON_SYRUP: Ingredient = {
	title: 'Cinnamon Syrup',
	slug: 'cinnamon-syrup'
};
const DEMERARA_SYRUP: Ingredient = {
	title: 'Demerara Syrup',
	slug: 'demerara-syrup'
};
const FASSIONOLA: Ingredient = {
	title: 'Fassionola',
	slug: 'fassionola'
};
const GRENADINE: Ingredient = {
	title: 'Grenadine',
	slug: 'grenadine'
};
const HONEY_SYRUP: Ingredient = {
	title: 'Honey Syrup',
	slug: 'honey-syrup'
};
const HONEY_GINGER_SYRUP: Ingredient = {
	title: 'Honey-Ginger Syrup',
	slug: 'honey-ginger-syrup'
};
const ORGEAT: Ingredient = {
	title: 'Orgeat',
	slug: 'orgeat'
};
const PASSIONFRUIT_SYRUP: Ingredient = {
	title: 'Passionfruit Syrup',
	slug: 'passionfruit-syrup'
};
const RICH_SIMPLE_SYRUP: Ingredient = {
	title: 'Rich Simple Syrup',
	slug: 'rich-simple-syrup'
};

export const SYRUPS: IngredientCategory = {
	label: 'Syrups',
	type: IngredientType.NonAlcoholic,
	subcategories: [
		{
			label: 'Default',
			ingredients: [
				CINNAMON_SYRUP,
				DEMERARA_SYRUP,
				FASSIONOLA,
				GRENADINE,
				HONEY_SYRUP,
				HONEY_GINGER_SYRUP,
				ORGEAT,
				PASSIONFRUIT_SYRUP,
				RICH_SIMPLE_SYRUP
			]
		}
	]
};

export const INGREDIENTS = {
	CINNAMON_SYRUP,
	DEMERARA_SYRUP,
	FASSIONOLA,
	GRENADINE,
	HONEY_SYRUP,
	HONEY_GINGER_SYRUP,
	ORGEAT,
	PASSIONFRUIT_SYRUP,
	RICH_SIMPLE_SYRUP
};
