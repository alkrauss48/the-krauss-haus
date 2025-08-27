import type { SectionColor } from './colors';
import { CocktailMethod } from '../enums/methods';
import type { Tag } from './tags';
import type { RecipeIngredient } from './recipes';

export interface CocktailVariant {
	name: string;
	description: string;
	images: string[];
}

export interface Cocktail {
	title: string;
	subtitle?: string;
	description: string;
	imagePath: string;
	thumbnailImagePath: string;
	slug: string;
	ingredients?: (string | RecipeIngredient)[];
	method?: CocktailMethod;
	variations?: CocktailVariant[];
	notes?: string;
	tags?: Tag[];
}

export interface Category {
	title: string;
	bgColors: SectionColor;
	cocktails: Cocktail[];
}

export interface SectionColors {
	featured: string[];
	mommy: string[];
	daddy: string[];
	cyrus: string[];
	lucas: string[];
}
