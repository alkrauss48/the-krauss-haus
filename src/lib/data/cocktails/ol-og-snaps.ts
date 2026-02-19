import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const OL_OG_SNAPS: Cocktail = {
	title: 'Øl og Snaps',
	description: 'Aquavit, pilsner lager.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/ol-og-snaps.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/ol-og-snaps.png',
	slug: 'ol-og-snaps',
	method: CocktailMethod.Built,
	servedIn: ServedIn.PintGlass,
	ingredients: [
		{
			amount: '1.5oz',
			ingredient: Ingredients.BaseSpirits.AQUAVIT
		},
		{
			amount: '12oz',
			ingredient: Ingredients.BeerAndWine.WARSTEINER_PILSENER
		}
	],
	notes:
		'A Danish tradition. "Øl og Snaps" means "beer and snaps" in Danish. Traditionally enjoyed with pickled herring or other smørrebrød. Sip the aquavit, then chase with beer.',
	tags: [
		Tags.BaseAlcohol.BEER,
		Tags.FlavorProfile.BUBBLY,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.BUILT,
		Tags.Origin.FOLK,
		Tags.ServedIn.PINT_GLASS,
		Tags.AlcoholLevel.HIGH,
		Tags.PrepTime.SIMPLE_PREP
	]
};

export default OL_OG_SNAPS;
