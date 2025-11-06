import type { IngredientCategory } from '$lib/types/ingredients';

// Import all ingredient categories
import {
	BASE_SPIRITS,
	INGREDIENTS as BASE_SPIRITS_INGREDIENTS
} from '$lib/data/ingredients/base-spirits';
import {
	BEER_AND_WINE,
	INGREDIENTS as BEER_AND_WINE_INGREDIENTS
} from '$lib/data/ingredients/beer-and-wine';
import { BITTERS, INGREDIENTS as BITTERS_INGREDIENTS } from '$lib/data/ingredients/bitters';
import { CITRUS, INGREDIENTS as CITRUS_INGREDIENTS } from '$lib/data/ingredients/citrus';
import { LIQUEURS, INGREDIENTS as LIQUEURS_INGREDIENTS } from '$lib/data/ingredients/liqueurs';
import {
	HERBS_AND_SPICES,
	INGREDIENTS as HERBS_AND_SPICES_INGREDIENTS
} from '$lib/data/ingredients/herbs-and-spices';
import { MIXERS, INGREDIENTS as MIXERS_INGREDIENTS } from '$lib/data/ingredients/mixers';
import { OTHER, INGREDIENTS as OTHER_INGREDIENTS } from '$lib/data/ingredients/other';
import { SYRUPS, INGREDIENTS as SYRUPS_INGREDIENTS } from '$lib/data/ingredients/syrups';

// Structured namespace for easy access
export const Ingredients = {
	BaseSpirits: BASE_SPIRITS_INGREDIENTS,
	BeerAndWine: BEER_AND_WINE_INGREDIENTS,
	Bitters: BITTERS_INGREDIENTS,
	Citrus: CITRUS_INGREDIENTS,
	HerbsAndSpices: HERBS_AND_SPICES_INGREDIENTS,
	Liqueurs: LIQUEURS_INGREDIENTS,
	Mixers: MIXERS_INGREDIENTS,
	Other: OTHER_INGREDIENTS,
	Syrups: SYRUPS_INGREDIENTS
} as const;

// Create arrays of all ingredient categories for convenience
export const allIngredientCategories: IngredientCategory[] = [
	BASE_SPIRITS,
	LIQUEURS,
	BITTERS,
	BEER_AND_WINE,
	SYRUPS,
	MIXERS,
	CITRUS,
	HERBS_AND_SPICES,
	OTHER
];
