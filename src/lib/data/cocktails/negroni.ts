import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const NEGRONI: Cocktail = {
	title: 'Negroni',
	description: 'Gin, campari, sweet vermouth, orange twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/negroni.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/negroni.png',
	slug: 'negroni',
	method: CocktailMethod.Stirred,
	ingredients: ['1oz Gin', '1oz Campari', '1oz Sweet vermouth', 'Garnish: Orange twist'],
	variations: [
		{
			name: 'Kingston',
			description: 'Sub Smith & Cross Jamaican Rum for gin.',
			images: []
		},
		{
			name: 'Mezcal',
			description: 'Sub mezcal for gin.',
			images: []
		}
	],
	tags: [
		Tags.BaseSpirit.GIN,
		Tags.FlavorProfile.BITTER,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC
	]
};

export default NEGRONI;
