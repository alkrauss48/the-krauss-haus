import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const GLUHWEIN: Cocktail = {
	title: 'Glühwein',
	subtitle: 'Our own family recipe',
	description: 'Red wine, brandy, orange, lemon, cinnamon, clove, brown sugar.',
	imagePath: 'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/gluhwein.png',
	slug: 'gluhwein',
	ingredients: [
		'750ml Cabernet Sauvignon',
		'1/2 orange, zested and juiced',
		'1/2 lemon, zested and juiced',
		'2 Cinnamon sticks',
		'6 Cloves',
		'1/4C Brown sugar',
		'2oz Brandy'
	],
	tags: [
		Tags.BaseSpirit.BRANDY,
		Tags.FlavorProfile.SPICED,
		Tags.Temperature.HOT,
		Tags.Technique.BUILT,
		Tags.Origin.CLASSIC,
		Tags.AlcoholLevel.LOW
	]
};

export default GLUHWEIN;
