import { IngredientType } from '$lib/enums/ingredientType';
import type { IngredientCategory, Ingredient } from '$lib/types/ingredients';
import CREME_DE_CACAO_RECIPE from '$lib/data/recipes/creme-de-cacao';
import LIMONCELLO_RECIPE from '$lib/data/recipes/limoncello';
import FALERNUM_RECIPE from '$lib/data/recipes/falernum';
import PERSIAN_SPICE_LIQUEUR_RECIPE from '$lib/data/recipes/persian-spice-liqueur';
import DRY_CURACAO_RECIPE from '$lib/data/recipes/dry-curacao';

// Amaro
const AMARO_LUCANO: Ingredient = {
	title: 'Amaro Lucano',
	slug: 'amaro-lucano',
	costPerOz: 30 / 25
};
const AMARO_NONINO: Ingredient = {
	title: 'Amaro Nonino',
	slug: 'amaro-nonino',
	costPerOz: 50 / 25
};
const APEROL: Ingredient = {
	title: 'Aperol',
	slug: 'aperol',
	costPerOz: 30 / 25
};
const CAMPARI: Ingredient = {
	title: 'Campari',
	slug: 'campari',
	costPerOz: 35 / 25
};
const FERNET_BRANCA: Ingredient = {
	title: 'Fernet Branca',
	slug: 'fernet-branca',
	costPerOz: 32 / 25
};

// Herbal
const BENEDICTINE: Ingredient = {
	title: 'Benedictine',
	slug: 'benedictine',
	costPerOz: 30 / 25
};
const GREEN_CHARTREUSE: Ingredient = {
	title: 'Green Chartreuse',
	slug: 'green-chartreuse',
	costPerOz: 70 / 25
};
const JAGERMEISTER: Ingredient = {
	title: 'Jägermeister Manifest',
	slug: 'jagermeister',
	costPerOz: 22 / 25
};
const PIMMS: Ingredient = {
	title: "Pimm's #1",
	slug: 'pimms',
	costPerOz: 30 / 33
};
const YELLOW_CHARTREUSE: Ingredient = {
	title: 'Yellow Chartreuse',
	slug: 'yellow-chartreuse',
	costPerOz: 70 / 25
};

// Fruit & Citrus
const APPLE_STRUDEL_LIQUEUER: Ingredient = {
	title: 'Apple Strudel Liqueuer',
	slug: 'apple-strudel-liqueuer',
	costPerOz: 25 / 25
};
const LIMONCELLO: Ingredient = {
	title: 'Limoncello',
	slug: 'limoncello',
	recipe: LIMONCELLO_RECIPE,
	costPerOz: 10 / 33
};
const DRY_CURACAO: Ingredient = {
	title: 'Dry Curaçao',
	slug: 'dry-curacao',
	recipe: DRY_CURACAO_RECIPE,
	costPerOz: 14 / 33
};
const COINTREAU: Ingredient = {
	title: 'Cointreau',
	slug: 'cointreau',
	costPerOz: 33 / 25
};
const CHERRY_HEERING: Ingredient = {
	title: 'Cherry Heering',
	slug: 'cherry-heering',
	costPerOz: 30 / 25
};
const MARASCHINO_LIQUEUER: Ingredient = {
	title: 'Maraschino Liqueuer',
	slug: 'maraschino-liqueuer',
	costPerOz: 40 / 25
};

// Nut & Spice
const ALLSPICE_DRAM: Ingredient = {
	title: 'Allspice Dram',
	slug: 'allspice-dram',
	costPerOz: 30 / 25
};
const LAZZARONI: Ingredient = {
	title: 'Lazzaroni',
	slug: 'lazzaroni',
	group: 'Amaretto',
	costPerOz: 30 / 25
};
const FALERNUM: Ingredient = {
	title: 'Falernum',
	slug: 'falernum',
	recipe: FALERNUM_RECIPE,
	costPerOz: 12 / 24
};
const FRANGELICO: Ingredient = {
	title: 'Frangelico',
	slug: 'frangelico',
	costPerOz: 26 / 25
};
const GOLDSCHLAGER: Ingredient = {
	title: 'Goldschläger',
	slug: 'goldschlager',
	costPerOz: 26 / 25
};

// Floral, Coffee & Specialty
const CREME_DE_CACAO: Ingredient = {
	title: 'Crème de Cacao',
	slug: 'creme-de-cacao',
	recipe: CREME_DE_CACAO_RECIPE,
	costPerOz: 16 / 25
};
const EGGNOG: Ingredient = {
	title: 'Eggnog',
	slug: 'eggnog'
};
const ELDERFLOWER_LIQUEUR: Ingredient = {
	title: 'Elderflower Liqueur',
	slug: 'elderflower-liqueur',
	costPerOz: 25 / 25
};
const ITALICUS: Ingredient = {
	title: 'Italicus',
	slug: 'italicus',
	costPerOz: 32 / 25
};
const MR_BLACK: Ingredient = {
	title: 'Mr. Black',
	slug: 'mr-black',
	group: 'Coffee Liqueur',
	costPerOz: 30 / 25
};
const PERSIAN_SPICE_LIQUEUR: Ingredient = {
	title: 'Persian Spice Liqueur',
	slug: 'persian-spice-liqueur',
	recipe: PERSIAN_SPICE_LIQUEUR_RECIPE,
	costPerOz: 11 / 25
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
			ingredients: [
				CREME_DE_CACAO,
				EGGNOG,
				ELDERFLOWER_LIQUEUR,
				ITALICUS,
				MR_BLACK,
				PERSIAN_SPICE_LIQUEUR
			]
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
	CREME_DE_CACAO,
	EGGNOG,
	ELDERFLOWER_LIQUEUR,
	ITALICUS,
	MR_BLACK,
	PERSIAN_SPICE_LIQUEUR
};
