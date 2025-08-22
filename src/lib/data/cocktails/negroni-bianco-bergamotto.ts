import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const NEGRONI_BIANCO_BERGAMOTTO: Cocktail = {
	title: 'Negroni Bianco Bergamotto',
	description: 'Gin, italicus, dry vermouth, lemon twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/negroni-bianco-bergamotto.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/negroni-bianco-bergamotto.png',
	slug: 'negroni-bianco-bergamotto',
	method: CocktailMethod.Stirred,
	ingredients: ['1oz Gin', '1oz Italicus', '1oz Dry vermouth', 'Garnish: Lemon twist'],
	tags: [
		Tags.BaseSpirit.GIN,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.STIRRED,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.MODERN
	]
};

export default NEGRONI_BIANCO_BERGAMOTTO;
