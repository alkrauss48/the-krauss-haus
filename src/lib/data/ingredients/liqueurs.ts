import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';
import LIMONCELLO_RECIPE from '$lib/data/recipes/limoncello';
import FALERNUM_RECIPE from '$lib/data/recipes/falernum';
import PERSIAN_SPICE_LIQUEUR_RECIPE from '$lib/data/recipes/persian-spice-liqueur';

// Amaro
const AMARO_LUCANO: Ingredient = {
	title: 'Amaro Lucano',
	slug: 'amaro-lucano'
};
const AMARO_NONINO: Ingredient = {
	title: 'Amaro Nonino',
	slug: 'amaro-nonino'
};
const APEROL: Ingredient = {
	title: 'Aperol',
	slug: 'aperol'
};
const CAMPARI: Ingredient = {
	title: 'Campari',
	slug: 'campari'
};
const FERNET_BRANCA: Ingredient = {
	title: 'Fernet Branca',
	slug: 'fernet-branca'
};

// Herbal
const BENEDICTINE: Ingredient = {
	title: 'Benedictine',
	slug: 'benedictine'
};
const GREEN_CHARTREUSE: Ingredient = {
	title: 'Green Chartreuse',
	slug: 'green-chartreuse'
};
const JAGERMEISTER: Ingredient = {
	title: 'Jägermeister Manifest',
	slug: 'jagermeister'
};
const PIMMS: Ingredient = {
	title: "Pimm's #1",
	slug: 'pimms'
};
const YELLOW_CHARTREUSE: Ingredient = {
	title: 'Yellow Chartreuse',
	slug: 'yellow-chartreuse'
};

// Fruit & Citrus
const APPLE_STRUDEL_LIQUEUER: Ingredient = {
	title: 'Apple Strudel Liqueuer',
	slug: 'apple-strudel-liqueuer'
};
const LIMONCELLO: Ingredient = {
	title: 'Limoncello',
	slug: 'limoncello',
	recipe: LIMONCELLO_RECIPE
};
const DRY_CURACAO: Ingredient = {
	title: 'Pierre Ferrand Dry Curaçao',
	slug: 'pf-dry-curacao'
};
const COINTREAU: Ingredient = {
	title: 'Cointreau',
	slug: 'cointreau'
};
const CHERRY_HEERING: Ingredient = {
	title: 'Cherry Heering',
	slug: 'cherry-heering'
};
const MARASCHINO_LIQUEUER: Ingredient = {
	title: 'Maraschino Liqueuer',
	slug: 'maraschino-liqueuer'
};

// Nut & Spice
const ALLSPICE_DRAM: Ingredient = {
	title: 'Allspice Dram',
	slug: 'allspice-dram'
};
const LAZZARONI: Ingredient = {
	title: 'Lazzaroni',
	slug: 'lazzaroni',
	group: 'Amaretto'
};
const FALERNUM: Ingredient = {
	title: 'Falernum',
	slug: 'falernum',
	recipe: FALERNUM_RECIPE
};
const FRANGELICO: Ingredient = {
	title: 'Frangelico',
	slug: 'frangelico'
};
const GOLDSCHLAGER: Ingredient = {
	title: 'Goldschläger',
	slug: 'goldschlager'
};

// Floral, Coffee & Specialty
const EGGNOG: Ingredient = {
	title: 'Eggnog',
	slug: 'eggnog'
};
const ELDERFLOWER_LIQUEUR: Ingredient = {
	title: 'Elderflower Liqueur',
	slug: 'elderflower-liqueur'
};
const ITALICUS: Ingredient = {
	title: 'Italicus',
	slug: 'italicus'
};
const MR_BLACK: Ingredient = {
	title: 'Mr. Black',
	slug: 'mr-black',
	group: 'Coffee Liqueur'
};
const PERSIAN_SPICE_LIQUEUR: Ingredient = {
	title: 'Persian Spice Liqueur',
	slug: 'persian-spice-liqueur',
	recipe: PERSIAN_SPICE_LIQUEUR_RECIPE
};

export const LIQUEURS: IngredientCategory = {
	label: 'Liqueurs',
	type: IngredientType.Alcoholic,
	color: '#0891b2', // softer teal blue (matching Style tag)
	subcategories: [
		{
			label: 'Amaro',
			ingredients: [AMARO_LUCANO, AMARO_NONINO, APEROL, CAMPARI, FERNET_BRANCA]
		},
		{
			label: 'Herbal',
			ingredients: [BENEDICTINE, GREEN_CHARTREUSE, JAGERMEISTER, PIMMS, YELLOW_CHARTREUSE]
		},
		{
			label: 'Fruit & Citrus',
			ingredients: [
				APPLE_STRUDEL_LIQUEUER,
				LIMONCELLO,
				DRY_CURACAO,
				COINTREAU,
				CHERRY_HEERING,
				MARASCHINO_LIQUEUER
			]
		},
		{
			label: 'Nut & Spice',
			ingredients: [ALLSPICE_DRAM, FALERNUM, FRANGELICO, GOLDSCHLAGER, LAZZARONI]
		},
		{
			label: 'Floral, Coffee & Specialty',
			ingredients: [EGGNOG, ELDERFLOWER_LIQUEUR, ITALICUS, MR_BLACK, PERSIAN_SPICE_LIQUEUR]
		}
	]
};

export const INGREDIENTS = {
	// Bitters & Herbal
	AMARO_LUCANO,
	AMARO_NONINO,
	APEROL,
	BENEDICTINE,
	CAMPARI,
	FERNET_BRANCA,
	GREEN_CHARTREUSE,
	JAGERMEISTER,
	PIMMS,
	YELLOW_CHARTREUSE,

	// Fruit & Citrus
	APPLE_STRUDEL_LIQUEUER,
	LIMONCELLO,
	DRY_CURACAO,
	COINTREAU,
	CHERRY_HEERING,
	MARASCHINO_LIQUEUER,

	// Nut & Spice
	ALLSPICE_DRAM,
	FALERNUM,
	FRANGELICO,
	GOLDSCHLAGER,
	LAZZARONI,

	// Floral, Coffee & Specialty
	EGGNOG,
	ELDERFLOWER_LIQUEUR,
	ITALICUS,
	MR_BLACK,
	PERSIAN_SPICE_LIQUEUR
};
