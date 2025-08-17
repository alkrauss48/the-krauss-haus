import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const CAIPIRINHA: Cocktail = {
	title: 'Caipirinha',
	description: 'Cachaça, lime, sugar.',
	imagePath: '/images/cocktails/summer/caipirinha.png',
	slug: 'caipirinha',
	method: CocktailMethod.Built,
	ingredients: ['2oz Cachaça', '6 Lime wedges', '1 tbsp Sugar'],
	tags: [
		Tags.BaseSpirit.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.REFRESHING,
		Tags.Style.SOUR,
		Tags.Technique.BUILT,
		Tags.Origin.CLASSIC
	]
};

export default CAIPIRINHA;
