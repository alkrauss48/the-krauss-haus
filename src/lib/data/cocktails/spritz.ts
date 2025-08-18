import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const SPRITZ: Cocktail = {
	title: 'Spritz',
	description: 'Prosecco, aperol, soda water, orange wedge.',
	imagePath: '/images/cocktails/summer/spritz.png',
	slug: 'spritz',
	method: CocktailMethod.Built,
	ingredients: ['3oz Prosecco', '2oz Aperol', '1oz Soda water', 'Garnish: Orange wedge'],
	tags: [
		Tags.BaseSpirit.AMARO,
		Tags.FlavorProfile.BITTER,
		Tags.FlavorProfile.BUBBLY,
		Tags.AlcoholLevel.LOW,
		Tags.Technique.BUILT,
		Tags.Origin.MODERN
	]
};

export default SPRITZ;
