import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const MOJITO: Cocktail = {
	title: 'Mojito',
	description: 'Light rum, lime, sugar, mint, angostura bitters.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/mojito.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/mojito.png',
	slug: 'mojito',
	method: CocktailMethod.Built,
	servedIn: ServedIn.HighballGlass,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.BaseSpirits.PLANTERAY_3_STARS
		},
		{
			amount: '.75oz',
			ingredient: Ingredients.Citrus.LIME
		},
		{
			amount: '1 tbsp',
			ingredient: Ingredients.Other.SUGAR
		},
		{
			amount: '6-10 leaves',
			ingredient: Ingredients.HerbsAndSpices.MINT
		},
		{
			label: 'Soda water (to top)',
			ingredient: Ingredients.Mixers.SODA_WATER
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		},
		{
			label: 'Garnish: Dash of Angostura bitters',
			ingredient: Ingredients.Bitters.ANGOSTURA
		}
	],
	notes:
		'Muddle lime, sugar, and mint lightly in glass. Add rum, then ice cubes. Stir, top with soda water and garnishes.',
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.HERBAL,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.FOLK,
		Tags.ServedIn.HIGHBALL_GLASS
	]
};

export default MOJITO;
