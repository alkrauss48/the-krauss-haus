import type { Recipe, RecipeCategory } from '$lib/types/recipes';

// Import all syrup recipes
import CARAMEL_SYRUP from '$lib/data/recipes/caramel-syrup';
import CINNAMON_SYRUP from '$lib/data/recipes/cinnamon-syrup';
import DEMERARA_SYRUP from '$lib/data/recipes/demerara-syrup';
import FASSIONOLA from '$lib/data/recipes/fassionola';
import GRENADINE from '$lib/data/recipes/grenadine';
import HONEY_GINGER_SYRUP from '$lib/data/recipes/honey-ginger-syrup';
import HONEY_SYRUP from '$lib/data/recipes/honey-syrup';
import MINT_SYRUP from '$lib/data/recipes/mint-syrup';
import ORGEAT from '$lib/data/recipes/orgeat';
import PASSIONFRUIT_SYRUP from '$lib/data/recipes/passionfruit-syrup';
import RICH_SIMPLE_SYRUP from '$lib/data/recipes/rich-simple-syrup';
import TOM_AND_JERRY_BATTER from '$lib/data/recipes/tom-and-jerry-batter';

// Import all infusion recipes
import AQUAVIT from '$lib/data/recipes/aquavit';
import CARAMEL_VODKA from '$lib/data/recipes/caramel-vodka';
import CITRON_VODKA from '$lib/data/recipes/citron-vodka';
import CREME_DE_CACAO from '$lib/data/recipes/creme-de-cacao';
import DRY_CURACAO from '$lib/data/recipes/dry-curacao';
import FALERNUM from '$lib/data/recipes/falernum';
import JALAPENO_TEQUILA from '$lib/data/recipes/jalapeno-tequila';
import LIMONCELLO from '$lib/data/recipes/limoncello';
import PEPPERMINT_VODKA from '$lib/data/recipes/peppermint-vodka';
import PERSIAN_SPICE_LIQUEUR from '$lib/data/recipes/persian-spice-liqueur';
import SPICED_TEA from '$lib/data/recipes/spiced-tea';
import CRANBERRY_CORDIAL from '$lib/data/recipes/cranberry-cordial';

// Syrups (excluding Caramel Syrup and Tom and Jerry Batter which go to "Other")
export const syrups: Recipe[] = [
	CARAMEL_SYRUP,
	CINNAMON_SYRUP,
	DEMERARA_SYRUP,
	FASSIONOLA,
	GRENADINE,
	HONEY_GINGER_SYRUP,
	HONEY_SYRUP,
	MINT_SYRUP,
	ORGEAT,
	PASSIONFRUIT_SYRUP,
	RICH_SIMPLE_SYRUP
];

// Infusions
export const infusions: Recipe[] = [
	AQUAVIT,
	CARAMEL_VODKA,
	CITRON_VODKA,
	CREME_DE_CACAO,
	DRY_CURACAO,
	FALERNUM,
	JALAPENO_TEQUILA,
	LIMONCELLO,
	PEPPERMINT_VODKA,
	PERSIAN_SPICE_LIQUEUR
];

// Other recipes (special category for Caramel Syrup and Tom and Jerry Batter)
export const other: Recipe[] = [CRANBERRY_CORDIAL, SPICED_TEA, TOM_AND_JERRY_BATTER];

/**
 * Recipe filter categories
 */
export const RECIPE_CATEGORIES: RecipeCategory[] = [
	{
		label: 'Syrups',
		color: '#eab308', // golden yellow
		recipes: syrups
	},
	{
		label: 'Infusions',
		color: '#8b5cf6', // violet purple
		recipes: infusions
	},
	{
		label: 'Other',
		color: '#6b7280', // neutral gray
		recipes: other
	}
];

// Combine all recipes and sort alphabetically
export const allRecipes: Recipe[] = [...syrups, ...infusions, ...other].sort((a, b) =>
	a.name.localeCompare(b.name)
);

// Create a map of all recipes by slug for quick lookups
export const recipesBySlug = new Map<string, Recipe>(
	allRecipes.map((recipe) => [recipe.slug, recipe])
);
