import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const OLD_FASHIONED: Cocktail = {
	title: 'Old Fashioned',
	description: 'Bourbon, demerara syrup, black walnut bitters, orange twist.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/old-fashioned.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/old-fashioned.png',
	slug: 'old-fashioned',
	method: CocktailMethod.Built,
	ingredients: [
		'2oz Bourbon',
		'.25oz Demerara syrup',
		'2 dashes Black walnut bitters',
		'Garnish: Orange twist'
	],
	variations: [
		{
			name: 'Smoked',
			description: 'Served in a smoked glass.',
			images: []
		},
		{
			name: 'Muddled',
			description: 'Muddle extra orange slice and maraschino cherry.',
			images: []
		},
		{
			name: 'Rum',
			description: 'Sub Aged rhum agricole for bourbon.',
			images: []
		}
	],
	tags: [
		Tags.BaseSpirit.WHISKEY,
		Tags.Technique.BUILT,
		Tags.Syrups.DEMERARA_SYRUP,
		Tags.Style.SPIRIT_FORWARD,
		Tags.Origin.CLASSIC
	]
};

export default OLD_FASHIONED;
