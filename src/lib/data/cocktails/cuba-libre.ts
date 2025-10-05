import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const CUBA_LIBRE: Cocktail = {
	title: 'Cuba Libre',
	description: 'Light rum, coca cola, lime.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/cuba-libre.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/cuba-libre.png',
	slug: 'cuba-libre',
	method: CocktailMethod.Built,
	ingredients: [
		'2 fingers (or 2oz) Light rum',
		'(4oz) Coca cola',
		'1/2 Lime (or 1/2 oz), pressed with shell'
	],
	notes: 'Typically unmeasured. Add rum, then ice, then lime (including shell). Top with soda.',
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.CITRUS,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.FOLK
	]
};

export default CUBA_LIBRE;
