import type { SectionColor } from './colors';
import { CocktailMethod } from '../enums/methods';
import type { Tag } from './tags';
import type { IngredientItem } from './ingredients';
import type { ServedIn } from '$lib/enums/served-in';
import { Ice } from '../enums/ice';

export interface CocktailVariant {
	name: string;
	ingredients?: (string | IngredientItem)[];
	images: string[];
}

export interface Cocktail {
	title: string;
	subtitle?: string;
	description: string;
	imagePath: string;
	thumbnailImagePath: string;
	slug: string;
	ingredients?: (string | IngredientItem)[];
	method?: CocktailMethod;
	servedIn?: ServedIn;
	ice?: Ice;
	hasStraw?: boolean;
	servings?: number;
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
