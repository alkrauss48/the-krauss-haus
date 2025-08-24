import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const GIN_AND_TONIC: Cocktail = {
	title: 'Gin and Tonic',
	description: 'Gin, tonic water, lime wedge.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/gin-and-tonic.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/gin-and-tonic.png',
	slug: 'gin-and-tonic',
	method: CocktailMethod.Built,
	ingredients: ['1.5oz Gin', '4oz Tonic water', 'Garnish: Lime wedge'],
	tags: [
		Tags.BaseSpirit.GIN,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.BITTER,
		Tags.AlcoholLevel.LOW,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.CLASSIC
	]
};

export default GIN_AND_TONIC;
