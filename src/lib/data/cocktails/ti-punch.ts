import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';
import { Tags } from '../all-tags';

const TI_PUNCH: Cocktail = {
	title: 'Ti Punch',
	description: 'Rhum agricole, lime, simple syrup.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/ti-punch.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/ti-punch.png',
	slug: 'ti-punch',
	method: CocktailMethod.Built,
	ingredients: ['2oz Rhum Agricole', '1 Lime coin', '1 tsp Rich simple syrup'],
	notes:
		'Served without ice. Mix rhum and simple syrup in glass. Squeeze lime coin (a disk of lime rind) and drop into glass. Chacun prépare sa proper mort (each prepares his own death)!',
	tags: [Tags.BaseSpirit.RUM, Tags.Style.SPIRIT_FORWARD, Tags.Technique.BUILT, Tags.Origin.FOLK]
};

export default TI_PUNCH;
