import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';

// Beer
const FULLERS_LONDON_PORTER: Ingredient = {
	title: "Fuller's London Porter",
	slug: 'fullers-london-porter',
	costPerOz: 0.21
};
const MILLER_HIGH_LIFE: Ingredient = {
	title: 'Miller High Life',
	slug: 'miller-high-life',
	costPerOz: 0.1
};
const TECATE_MEXICAN_LAGER: Ingredient = {
	title: 'Tecate Mexican Lager',
	slug: 'tecate-mexican-lager',
	costPerOz: 0.08
};
const WARSTEINER_PILSENER: Ingredient = {
	title: 'Warsteiner Pilsener',
	slug: 'warsteiner-pilsener',
	costPerOz: 0.085
};

// Wine
const CABERNET_SAUVIGNON: Ingredient = {
	title: 'Cabernet Sauvignon',
	slug: 'cabernet-sauvignon',
	costPerOz: 0.16
};
const COCCHI_VERMOUTH_DI_TORINO: Ingredient = {
	title: 'Cocchi Vermouth di Torino',
	slug: 'cocchi-vermouth-di-torino',
	group: 'Sweet Vermouth',
	costPerOz: 24 / 25
};
const DOLIN_VERMOUTH_DRY: Ingredient = {
	title: 'Dolin Vermouth Dry',
	slug: 'dolin-vermouth-dry',
	group: 'Dry Vermouth',
	costPerOz: 18 / 25
};
const TEMPRANILLO: Ingredient = {
	title: 'Tempranillo',
	slug: 'tempranillo',
	costPerOz: 12 / 25
};

// Sparkling
const CHAMPAGNE: Ingredient = {
	title: 'Champagne',
	slug: 'champagne',
	costPerOz: 5 / 25
};
const PROSECCO: Ingredient = {
	title: 'Prosecco',
	slug: 'prosecco',
	costPerOz: 5 / 25
};

export const BEER_AND_WINE: IngredientCategory = {
	label: 'Beer & Wine',
	type: IngredientType.Alcoholic,
	color: '#10b981', // softer emerald green (matching Flavor Profile tag)
	subcategories: [
		{
			label: 'Beer',
			ingredients: [
				FULLERS_LONDON_PORTER,
				MILLER_HIGH_LIFE,
				TECATE_MEXICAN_LAGER,
				WARSTEINER_PILSENER
			]
		},
		{
			label: 'Wine',
			ingredients: [CABERNET_SAUVIGNON, COCCHI_VERMOUTH_DI_TORINO, DOLIN_VERMOUTH_DRY, TEMPRANILLO]
		},
		{
			label: 'Sparkling',
			ingredients: [CHAMPAGNE, PROSECCO]
		}
	]
};

export const INGREDIENTS = {
	// Beer
	FULLERS_LONDON_PORTER,
	MILLER_HIGH_LIFE,
	TECATE_MEXICAN_LAGER,
	WARSTEINER_PILSENER,

	// Wine
	CABERNET_SAUVIGNON,
	COCCHI_VERMOUTH_DI_TORINO,
	DOLIN_VERMOUTH_DRY,
	TEMPRANILLO,

	// Sparkling
	CHAMPAGNE,
	PROSECCO
};
