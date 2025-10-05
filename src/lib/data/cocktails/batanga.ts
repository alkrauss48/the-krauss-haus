import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const BATANGA: Cocktail = {
	title: 'Batanga',
	description: 'Tequila, coca cola, lime, salt.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/batanga.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/batanga.png',
	slug: 'batanga',
	method: CocktailMethod.Built,
	ingredients: [
		'2 fingers (or 2oz) Blanco Tequila',
		'(4oz) Coca cola',
		'1/2 Lime (or .5oz), pressed with shell',
		'1 pinch (or 1 dash) salt'
	],
	notes:
		'Typically unmeasured. Add tequila, then ice, then lime (including shell). Top with soda, add salt, and stir with the knife used to cut the lime.',
	tags: [
		Tags.BaseAlcohol.TEQUILA,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.FOLK
	]
};

export default BATANGA;
