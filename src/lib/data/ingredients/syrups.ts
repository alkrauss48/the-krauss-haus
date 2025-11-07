import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';
import CINNAMON_SYRUP_RECIPE from '$lib/data/recipes/cinnamon-syrup';
import DEMERARA_SYRUP_RECIPE from '$lib/data/recipes/demerara-syrup';
import FASSIONOLA_RECIPE from '$lib/data/recipes/fassionola';
import GRENADINE_RECIPE from '$lib/data/recipes/grenadine';
import HONEY_SYRUP_RECIPE from '$lib/data/recipes/honey-syrup';
import HONEY_GINGER_SYRUP_RECIPE from '$lib/data/recipes/honey-ginger-syrup';
import ORGEAT_RECIPE from '$lib/data/recipes/orgeat';
import PASSIONFRUIT_SYRUP_RECIPE from '$lib/data/recipes/passionfruit-syrup';
import RICH_SIMPLE_SYRUP_RECIPE from '$lib/data/recipes/rich-simple-syrup';

const CINNAMON_SYRUP: Ingredient = {
	title: 'Cinnamon Syrup',
	slug: 'cinnamon-syrup',
	recipe: CINNAMON_SYRUP_RECIPE
};
const DEMERARA_SYRUP: Ingredient = {
	title: 'Demerara Syrup',
	slug: 'demerara-syrup',
	recipe: DEMERARA_SYRUP_RECIPE
};
const AGAVE_NECTAR: Ingredient = {
	title: 'Agave Nectar',
	slug: 'agave-nectar'
};
const FASSIONOLA: Ingredient = {
	title: 'Fassionola',
	slug: 'fassionola',
	recipe: FASSIONOLA_RECIPE
};
const GRENADINE: Ingredient = {
	title: 'Grenadine',
	slug: 'grenadine',
	recipe: GRENADINE_RECIPE
};
const HONEY_SYRUP: Ingredient = {
	title: 'Honey Syrup',
	slug: 'honey-syrup',
	recipe: HONEY_SYRUP_RECIPE
};
const HONEY_GINGER_SYRUP: Ingredient = {
	title: 'Honey-Ginger Syrup',
	slug: 'honey-ginger-syrup',
	recipe: HONEY_GINGER_SYRUP_RECIPE
};
const ORGEAT: Ingredient = {
	title: 'Orgeat',
	slug: 'orgeat',
	recipe: ORGEAT_RECIPE
};
const PASSIONFRUIT_SYRUP: Ingredient = {
	title: 'Passionfruit Syrup',
	slug: 'passionfruit-syrup',
	recipe: PASSIONFRUIT_SYRUP_RECIPE
};
const RICH_SIMPLE_SYRUP: Ingredient = {
	title: 'Rich Simple Syrup',
	slug: 'rich-simple-syrup',
	recipe: RICH_SIMPLE_SYRUP_RECIPE
};

export const SYRUPS: IngredientCategory = {
	label: 'Syrups',
	type: IngredientType.NonAlcoholic,
	subcategories: [
		{
			label: 'Default',
			ingredients: [
				AGAVE_NECTAR,
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
	AGAVE_NECTAR,
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
