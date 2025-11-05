import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';

// Beer
const FULLERS_LONDON_PORTER: Ingredient = {
	title: "Fuller's London Porter",
	slug: 'fullers-london-porter'
};
const TECATE_MEXICAN_LAGER: Ingredient = {
	title: 'Tecate Mexican Lager',
	slug: 'tecate-mexican-lager'
};
const WARSTEINER_HELLES_LAGER: Ingredient = {
	title: 'Warsteiner Helles Lager',
	slug: 'warsteiner-helles-lager'
};

// Wine
const CABERNET_SAUVIGNON: Ingredient = {
	title: 'Cabernet Sauvignon',
	slug: 'cabernet-sauvignon'
};
const COCCHI_VERMOUTH_DI_TORINO: Ingredient = {
	title: 'Cocchi Vermouth di Torino',
	slug: 'cocchi-vermouth-di-torino',
	group: 'Sweet Vermouth'
};
const DOLIN_VERMOUTH_DRY: Ingredient = {
	title: 'Dolin Vermouth Dry',
	slug: 'dolin-vermouth-dry',
	group: 'Dry Vermouth'
};
const TEMPRANILLO: Ingredient = {
	title: 'Tempranillo',
	slug: 'tempranillo'
};

// Sparkling
const PROSECCO: Ingredient = {
	title: 'Prosecco',
	slug: 'prosecco'
};

export const BEER_AND_WINE: IngredientCategory = {
	label: 'Beer & Wine',
	type: IngredientType.Alcoholic,
	subcategories: [
		{
			label: 'Beer',
			ingredients: [FULLERS_LONDON_PORTER, TECATE_MEXICAN_LAGER, WARSTEINER_HELLES_LAGER]
		},
		{
			label: 'Wine',
			ingredients: [CABERNET_SAUVIGNON, COCCHI_VERMOUTH_DI_TORINO, DOLIN_VERMOUTH_DRY, TEMPRANILLO]
		},
		{
			label: 'Sparkling',
			ingredients: [PROSECCO]
		}
	]
};

export const INGREDIENTS = {
	// Beer
	FULLERS_LONDON_PORTER,
	TECATE_MEXICAN_LAGER,
	WARSTEINER_HELLES_LAGER,

	// Wine
	CABERNET_SAUVIGNON,
	COCCHI_VERMOUTH_DI_TORINO,
	DOLIN_VERMOUTH_DRY,
	TEMPRANILLO,

	// Sparkling
	PROSECCO
};
