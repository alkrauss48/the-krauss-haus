import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const CAIPIRINHA: Cocktail = {
	title: 'Caipirinha',
	description: 'Cachaça, lime, sugar.',
	imagePath: '/images/cocktails/summer/caipirinha.png',
	slug: 'caipirinha',
	method: CocktailMethod.Built,
	ingredients: ['2oz Cachaça', '6 Lime wedges', '1 tbsp Sugar']
};

export default CAIPIRINHA;
