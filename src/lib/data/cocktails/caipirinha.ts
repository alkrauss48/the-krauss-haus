import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const CAIPIRINHA: Cocktail = {
	title: 'Caipirinha',
	description: 'Cachaça, lime, sugar.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/caipirinha.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/caipirinha.png',
	slug: 'caipirinha',
	method: CocktailMethod.Built,
	ingredients: ['2oz Cachaça', '6 Lime wedges', '1 tbsp Sugar'],
	tags: [
		Tags.BaseSpirit.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.Style.SOUR,
		Tags.Technique.BUILT,
		Tags.Origin.CLASSIC
	]
};

export default CAIPIRINHA;
