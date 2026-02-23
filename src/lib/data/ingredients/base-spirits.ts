import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';
import AQUAVIT_RECIPE from '$lib/data/recipes/aquavit';
import CARAMEL_VODKA_RECIPE from '$lib/data/recipes/caramel-vodka';
import CITRON_VODKA_RECIPE from '$lib/data/recipes/citron-vodka';
import JALAPENO_TEQUILA_RECIPE from '$lib/data/recipes/jalapeno-tequila';
import PEPPERMINT_VODKA_RECIPE from '$lib/data/recipes/peppermint-vodka';

// Rum
const APPLETON_ESTATE_SIGNATURE: Ingredient = {
	title: 'Appleton Estate Signature',
	slug: 'appleton-estate-signature',
	group: 'Jamaican Rum',
	costPerOz: 25 / 25
};
const CLEMENT_SELECT_BARREL: Ingredient = {
	title: 'Clement Select Barrel',
	slug: 'clement-select-barrel',
	group: 'Élevé sous bois Rhum Agricole',
	costPerOz: 34 / 25
};
const CORUBA: Ingredient = {
	title: 'Coruba',
	slug: 'coruba',
	group: 'Jamaican Rum',
	costPerOz: 20 / 25
};
const HAMILTON_151: Ingredient = {
	title: 'Hamilton 151',
	slug: 'hamilton-151',
	group: 'Overproof Demerara Rum',
	costPerOz: 30 / 25
};
const HAMILTON_86: Ingredient = {
	title: 'Hamilton 86',
	slug: 'hamilton-86',
	group: 'Demerara Rum',
	costPerOz: 24 / 25
};
const LEBLON: Ingredient = {
	title: 'Leblon',
	slug: 'leblon',
	group: 'Cachaça',
	costPerOz: 28 / 25
};
const NEISSON_BLANC: Ingredient = {
	title: 'Neisson Blanc',
	slug: 'neisson-blanc',
	group: 'Blanc Rhum Agricole',
	costPerOz: 42 / 33
};
const PLANTERAY_3_STARS: Ingredient = {
	title: 'Planteray 3 Stars',
	slug: 'planteray-3-stars',
	group: 'Blended Light Rum',
	costPerOz: 22 / 25
};
const PLANTERAY_OFTD: Ingredient = {
	title: 'Planteray OFTD',
	slug: 'planteray-oftd',
	group: 'Overproof Blended Rum',
	costPerOz: 32 / 33
};
const PROBITAS: Ingredient = {
	title: 'Probitas',
	slug: 'probitas',
	group: 'Blended Light Rum',
	costPerOz: 30 / 25
};
const SMITH_AND_CROSS: Ingredient = {
	title: 'Smith and Cross',
	slug: 'smith-and-cross',
	group: 'Overproof Jamaican Rum',
	costPerOz: 30 / 25
};

// Whiskey
const ELIJAH_CRAIG: Ingredient = {
	title: 'Elijah Craig',
	slug: 'elijah-craig',
	group: 'Bourbon',
	costPerOz: 30 / 25
};
const EVAN_WILLIAMS_BIB: Ingredient = {
	title: 'Evan Williams Bottled-in-Bond',
	slug: 'evan-williams-bib',
	group: 'Bourbon',
	costPerOz: 18 / 25
};
const LAPHROIG: Ingredient = {
	title: 'Laphroaig',
	slug: 'laphroaig',
	group: 'Single Malt Scotch Whisky',
	costPerOz: 65 / 25
};
const MONKEY_SHOULDER: Ingredient = {
	title: 'Monkey Shoulder',
	slug: 'monkey-shoulder',
	group: 'Blended Scotch Whisky',
	costPerOz: 37 / 25
};
const RITTENHOUSE: Ingredient = {
	title: 'Rittenhouse',
	slug: 'rittenhouse',
	group: 'Rye Whiskey',
	costPerOz: 26 / 25
};

// Brandy
const BOULARD_VSOP: Ingredient = {
	title: 'Boulard VSOP',
	slug: 'boulard-vsop',
	group: 'Calvados',
	costPerOz: 53 / 25
};
const LAIRDS_BIB: Ingredient = {
	title: "Laird's Bottled-in-Bond",
	slug: 'lairds-bib',
	group: 'Apple Brandy',
	costPerOz: 30 / 25
};
const ST_REMY_VSOP: Ingredient = {
	title: 'St-Rémy VSOP',
	slug: 'st-remy-vsop',
	group: 'Cognac',
	costPerOz: 20 / 33
};

// Agave
const CIMARRON_BLANCO: Ingredient = {
	title: 'Cimarron Blanco',
	slug: 'cimarron-blanco',
	group: 'Blanco Tequila',
	costPerOz: 28 / 33
};
const JALAPENO_TEQUILA: Ingredient = {
	title: 'Jalapeño Tequila',
	slug: 'jalapeño-tequila',
	recipe: JALAPENO_TEQUILA_RECIPE,
	costPerOz: 28 / 33
};
const CIMARRON_REPOSADO: Ingredient = {
	title: 'Cimarron Reposado',
	slug: 'cimarron-reposado',
	group: 'Reposado Tequila',
	costPerOz: 30 / 33
};
const DEL_MAGUY_VIDA: Ingredient = {
	title: 'Del Maguey Vida',
	slug: 'del-maguey-vida',
	group: 'Mezcal',
	costPerOz: 42 / 25
};

// Gin
const FORDS: Ingredient = {
	title: 'Fords',
	slug: 'fords',
	group: 'London Dry Gin',
	costPerOz: 28 / 25
};

// Neutral Spirits
const MONOPOLOWA: Ingredient = {
	title: 'Monopolowa',
	slug: 'monopolowa',
	group: 'Vodka',
	costPerOz: 16 / 25
};
const CARAMEL_VODKA: Ingredient = {
	title: 'Caramel Vodka',
	slug: 'caramel-vodka',
	recipe: CARAMEL_VODKA_RECIPE,
	costPerOz: 13 / 25
};
const CITRON_VODKA: Ingredient = {
	title: 'Citron Vodka',
	slug: 'citron-vodka',
	recipe: CITRON_VODKA_RECIPE,
	costPerOz: 16 / 25
};
const PEPPERMINT_VODKA: Ingredient = {
	title: 'Peppermint Vodka',
	slug: 'peppermint-vodka',
	recipe: PEPPERMINT_VODKA_RECIPE,
	costPerOz: 16 / 25
};
const ABSINTHE: Ingredient = {
	title: 'Absinthe',
	slug: 'absinthe',
	costPerOz: 70 / 25
};
const AQUAVIT: Ingredient = {
	title: 'Aquavit',
	slug: 'aquavit',
	recipe: AQUAVIT_RECIPE,
	costPerOz: 9 / 33
};

export const BASE_SPIRITS: IngredientCategory = {
	label: 'Base Spirits',
	type: IngredientType.Alcoholic,
	color: '#a16207', // softer amber brown (matching Base Alcohol tag)
	subcategories: [
		{
			label: 'Rum',
			ingredients: [
				APPLETON_ESTATE_SIGNATURE,
				CLEMENT_SELECT_BARREL,
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
			ingredients: [ELIJAH_CRAIG, EVAN_WILLIAMS_BIB, LAPHROIG, MONKEY_SHOULDER, RITTENHOUSE]
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
			ingredients: [MONOPOLOWA, CARAMEL_VODKA, CITRON_VODKA, PEPPERMINT_VODKA, ABSINTHE, AQUAVIT]
		}
	]
};

export const INGREDIENTS = {
	// Rum
	APPLETON_ESTATE_SIGNATURE,
	CLEMENT_SELECT_BARREL,
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
	RITTENHOUSE,

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
	CITRON_VODKA,
	PEPPERMINT_VODKA,
	ABSINTHE,
	AQUAVIT
};
