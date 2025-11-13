import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';

const PIMMS_CUP: Cocktail = {
	title: "Pimm's Cup",
	description: "Pimm's #1, sparkling lemonade, cucumber, orange, strawberry, mint.",
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/pimms-cup.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/pimms-cup.png',
	slug: 'pimms-cup',
	method: CocktailMethod.Built,
	servedIn: ServedIn.HighballGlass,
	ingredients: [
		{
			amount: '2oz',
			ingredient: Ingredients.Liqueurs.PIMMS
		},
		{
			amount: '4oz',
			label: 'Sparkling lemonade',
			ingredient: Ingredients.Mixers.SANPELLEGRINO_LIMONATA
		},

		{
			label: 'Garnish: Orange',
			ingredient: Ingredients.Citrus.ORANGE_GARNISH
		},
		{
			label: 'Garnish: Mint sprig',
			ingredient: Ingredients.HerbsAndSpices.MINT
		},
		'Garnish: Strawberry',
		'Garnish: Cucumber'
	],
	tags: [
		Tags.BaseAlcohol.GIN,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.FRUITY,
		Tags.FlavorProfile.BUBBLY,
		Tags.AlcoholLevel.LOW,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.FOLK,
		Tags.ServedIn.HIGHBALL_GLASS
	]
};

export default PIMMS_CUP;
