import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const PAPER_PLANE: Cocktail = {
	title: 'Paper Plane',
	slug: 'paper-plane',
	description: 'Bourbon, amaro nonino, aperol, lemon.',
	imagePath: '/images/cocktails/summer/paper-plane.png',
	method: CocktailMethod.Shaken,
	ingredients: ['.75oz Bourbon', '.75oz Amaro Nonino', '.75oz Aperol', '.75oz Lemon']
};

export default PAPER_PLANE;
