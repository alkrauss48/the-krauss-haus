import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const SANGRIA: Cocktail = {
	title: 'Sangria',
	description: 'Spanish red wine, brandy, cointreau, orange, lime, lemon, sugar, club soda.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/sangria.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/sangria.png',
	slug: 'sangria',
	ingredients: [
		'750mL dry Spanish red wine (like Tempranillo from Rioja)',
		'1.5oz Brandy',
		'1.5oz Cointreau',
		'1 orange, sliced',
		'1 lime, sliced',
		'1/2 lemon, sliced',
		'2 tbsp sugar',
		'12oz Club soda'
	],
	notes:
		'Makes 4-5 servings. Combine all but club soda in pitcher. Let rest at least 2 hours in refrigerator. Pour with fruit over ice into wine glasses, and top with club soda.',
	tags: [
		Tags.Origin.FOLK,
		Tags.BaseSpirit.BRANDY,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.FRUITY,
	]
};

export default SANGRIA;
