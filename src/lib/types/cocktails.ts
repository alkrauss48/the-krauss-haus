import type { SectionColor } from './colors';

export enum CocktailMethod {
	Shaken = 'shaken',
	Stirred = 'stirred',
	Built = 'built'
}

export const methodColors = {
	[CocktailMethod.Shaken]: '#fef3c7',
	[CocktailMethod.Stirred]: '#dbeafe',
	[CocktailMethod.Built]: '#dcfce7'
};

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
	ingredients?: string[];
	method?: CocktailMethod;
	variations?: CocktailVariant[];
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
