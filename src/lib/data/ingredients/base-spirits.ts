import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';
import JALAPENO_TEQUILA_RECIPE from '$lib/data/recipes/jalapeno-tequila';
import CARAMEL_VODKA_RECIPE from '$lib/data/recipes/caramel-vodka';
import PEPPERMINT_VODKA_RECIPE from '$lib/data/recipes/peppermint-vodka';

// Rum
const APPLETON_ESTATE_SIGNATURE: Ingredient = {
	title: 'Appleton Estate Signature',
	slug: 'appleton-estate-signature',
	group: 'Jamaican Rum'
};
const CLEMENT_BARREL_SELECT: Ingredient = {
	title: 'Clement Barrel Select',
	slug: 'clement-barrel-select',
	group: 'Élevé sous bois Rhum Agricole'
};
const CORUBA: Ingredient = {
	title: 'Coruba',
	slug: 'coruba',
	group: 'Jamaican Rum'
};
const HAMILTON_151: Ingredient = {
	title: 'Hamilton 151',
	slug: 'hamilton-151',
	group: 'Overproof Demerara Rum'
};
const HAMILTON_86: Ingredient = {
	title: 'Hamilton 86',
	slug: 'hamilton-86',
	group: 'Demerara Rum'
};
const LEBLON: Ingredient = {
	title: 'Leblon',
	slug: 'leblon',
	group: 'Cachaça'
};
const NEISSON_BLANC: Ingredient = {
	title: 'Neisson Blanc',
	slug: 'neisson-blanc',
	group: 'Blanc Rhum Agricole'
};
const PLANTERAY_3_STARS: Ingredient = {
	title: 'Planteray 3 Stars',
	slug: 'planteray-3-stars',
	group: 'Blended Light Rum'
};
const PLANTERAY_OFTD: Ingredient = {
	title: 'Planteray OFTD',
	slug: 'planteray-oftd',
	group: 'Overproof Blended Rum'
};
const PROBITAS: Ingredient = {
	title: 'Probitas',
	slug: 'probitas',
	group: 'Blended Light Rum'
};
const SMITH_AND_CROSS: Ingredient = {
	title: 'Smith and Cross',
	slug: 'smith-and-cross',
	group: 'Overproof Jamaican Rum'
};

// Whiskey
const ELIJAH_CRAIG: Ingredient = {
	title: 'Elijah Craig',
	slug: 'elijah-craig',
	group: 'Bourbon'
};
const EVAN_WILLIAMS_BIB: Ingredient = {
	title: 'Evan Williams Bottled-in-Bond',
	slug: 'evan-williams-bib',
	group: 'Bourbon'
};
const LAPHROIG: Ingredient = {
	title: 'Laphroaig',
	slug: 'laphroaig',
	group: 'Single Malt Scotch Whisky'
};
const MONKEY_SHOULDER: Ingredient = {
	title: 'Monkey Shoulder',
	slug: 'monkey-shoulder',
	group: 'Blended Scotch Whisky'
};
const RITTENHOUSE_RYE: Ingredient = {
	title: 'Rittenhouse Rye',
	slug: 'rittenhouse-rye',
	group: 'Rye Whiskey'
};

// Brandy
const BOULARD_VSOP: Ingredient = {
	title: 'Boulard VSOP',
	slug: 'boulard-vsop',
	group: 'Calvados'
};
const LAIRDS_BIB: Ingredient = {
	title: "Laird's Bottled-in-Bond",
	slug: 'lairds-bib',
	group: 'Apple Brandy'
};
const ST_REMY_VSOP: Ingredient = {
	title: 'St-Rémy VSOP',
	slug: 'st-remy-vsop',
	group: 'Cognac'
};

// Agave
const CIMARRON_BLANCO: Ingredient = {
	title: 'Cimarron Blanco',
	slug: 'cimarron-blanco',
	group: 'Blanco Tequila'
};
const JALAPENO_TEQUILA: Ingredient = {
	title: 'Jalapeño Tequila',
	slug: 'jalapeño-tequila',
	recipe: JALAPENO_TEQUILA_RECIPE
};
const CIMARRON_REPOSADO: Ingredient = {
	title: 'Cimarron Reposado',
	slug: 'cimarron-reposado',
	group: 'Reposado Tequila'
};
const DEL_MAGUY_VIDA: Ingredient = {
	title: 'Del Maguey Vida',
	slug: 'del-maguey-vida',
	group: 'Mezcal'
};

// Gin
const FORDS: Ingredient = {
	title: 'Fords',
	slug: 'fords',
	group: 'London Dry Gin'
};

// Neutral Spirits
const MONOPOLOWA: Ingredient = {
	title: 'Monopolowa',
	slug: 'monopolowa',
	group: 'Vodka'
};
const CARAMEL_VODKA: Ingredient = {
	title: 'Caramel Vodka',
	slug: 'caramel-vodka',
	recipe: CARAMEL_VODKA_RECIPE
};
const PEPPERMINT_VODKA: Ingredient = {
	title: 'Peppermint Vodka',
	slug: 'peppermint-vodka',
	recipe: PEPPERMINT_VODKA_RECIPE
};
const ABSINTHE: Ingredient = {
	title: 'Absinthe',
	slug: 'absinthe'
};

export const BASE_SPIRITS: IngredientCategory = {
	label: 'Base Spirits',
	type: IngredientType.Alcoholic,
	subcategories: [
		{
			label: 'Rum',
			ingredients: [
				APPLETON_ESTATE_SIGNATURE,
				CLEMENT_BARREL_SELECT,
				CORUBA,
				HAMILTON_151,
				HAMILTON_86,
				LEBLON,
				NEISSON_BLANC,
				PLANTERAY_3_STARS,
				PLANTERAY_OFTD,
				PROBITAS,
				SMITH_AND_CROSS
			]
		},
		{
			label: 'Whiskey',
			ingredients: [ELIJAH_CRAIG, EVAN_WILLIAMS_BIB, LAPHROIG, MONKEY_SHOULDER, RITTENHOUSE_RYE]
		},
		{
			label: 'Brandy',
			ingredients: [BOULARD_VSOP, LAIRDS_BIB, ST_REMY_VSOP]
		},
		{
			label: 'Agave',
			ingredients: [CIMARRON_BLANCO, JALAPENO_TEQUILA, CIMARRON_REPOSADO, DEL_MAGUY_VIDA]
		},
		{
			label: 'Gin',
			ingredients: [FORDS]
		},
		{
			label: 'Neutral Spirits',
			ingredients: [MONOPOLOWA, CARAMEL_VODKA, PEPPERMINT_VODKA, ABSINTHE]
		}
	]
};

export const INGREDIENTS = {
	// Rum
	APPLETON_ESTATE_SIGNATURE,
	CLEMENT_BARREL_SELECT,
	CORUBA,
	HAMILTON_151,
	HAMILTON_86,
	LEBLON,
	NEISSON_BLANC,
	PLANTERAY_3_STARS,
	PLANTERAY_OFTD,
	PROBITAS,
	SMITH_AND_CROSS,

	// Whiskey
	ELIJAH_CRAIG,
	EVAN_WILLIAMS_BIB,
	LAPHROIG,
	MONKEY_SHOULDER,
	RITTENHOUSE_RYE,

	// Brandy
	BOULARD_VSOP,
	LAIRDS_BIB,
	ST_REMY_VSOP,

	// Agave
	CIMARRON_BLANCO,
	JALAPENO_TEQUILA,
	CIMARRON_REPOSADO,
	DEL_MAGUY_VIDA,

	// Gin
	FORDS,

	// Neutral Spirits
	MONOPOLOWA,
	CARAMEL_VODKA,
	PEPPERMINT_VODKA,
	ABSINTHE
};
