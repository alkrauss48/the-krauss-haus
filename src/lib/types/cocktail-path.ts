import type { Cocktail } from './cocktails';

export interface CocktailPath {
	title: string;
	subtitle: string;
	slug: string;
	imagePath: string;
	description: string;
	cocktails: Cocktail[];
}
