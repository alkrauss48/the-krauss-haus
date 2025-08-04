import type { SectionColor } from './colors';
import { CocktailMethod } from '../enums/methods';

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
	slug: string;
	ingredients?: string[];
	method?: CocktailMethod;
	variations?: CocktailVariant[];
	notes?: string;
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
