import type { SectionColor } from './colors';

export interface Cocktail {
	title: string;
	subtitle?: string;
	description: string;
	imagePath: string;
	ingredients?: string[];
	variations?: string;
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
