import { CocktailMethod } from '$lib/enums/methods';
import { ServedIn } from '$lib/enums/served-in';
import type { Cocktail } from '$lib/types/cocktails';
import { Ingredients } from '../all-ingredients';
import { Tags } from '../all-tags';
import { Ice } from '$lib/enums/ice';

const MOONWELL: Cocktail = {
	title: 'Moonwell',
	subtitle: 'A Krauss Family original',
	description: 'Light rum, elderflower liqueur, grenadine, celery bitters, lemon, soda water.',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/full/moonwell.png',
	thumbnailImagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/cocktails/thumbnail/moonwell.png',
	slug: 'moonwell',
	method: CocktailMethod.Built,
	servedIn: ServedIn.HighballGlass,
	ice: Ice.SmallCubes,
	hasStraw: false,
	ingredients: [
		{
			amount: '1oz',
			ingredient: Ingredients.BaseSpirits.PLANTERAY_3_STARS
		},
		{
			amount: '1oz',
			ingredient: Ingredients.Liqueurs.ELDERFLOWER_LIQUEUR
		},
		{
			amount: '.5oz',
			ingredient: Ingredients.Syrups.GRENADINE
		},
		{
			label: '1/4 Lemon, juiced',
			ingredient: Ingredients.Citrus.LEMON
		},
		{
			amount: '1 dash',
			ingredient: Ingredients.Bitters.CELERY
		},
		{
			amount: '4oz',
			ingredient: Ingredients.Mixers.SODA_WATER
		},
		{
			label: 'Garnish: Lemon wheel',
			ingredient: Ingredients.Citrus.LEMON_GARNISH
		}
	],
	variations: [
		{
			name: "Valden's",
			ingredients: ['Sub beer for soda water.'],
			images: ['/images/wow/race_nightelf_male.jpg', '/images/wow/class_hunter.jpg']
		},
		{
			name: "Qweenanne's",
			ingredients: [
				{
					label: 'Sub tonic water for soda water.',
					ingredient: Ingredients.Mixers.TONIC_WATER
				}
			],
			images: ['/images/wow/race_human_female.jpg', '/images/wow/class_warlock.jpg']
		},
		{
			name: "Pounders'",
			ingredients: [
				{
					label: 'Sub gin for rum.',
					ingredient: Ingredients.BaseSpirits.FORDS
				}
			],
			images: ['/images/wow/race_nightelf_male.jpg', '/images/wow/class_hunter.jpg']
		},
		{
			name: "Troker's",
			ingredients: [
				{
					label: 'Sub ginger beer for soda water.',
					ingredient: Ingredients.Mixers.GINGER_BEER
				}
			],
			images: ['/images/wow/race_nightelf_male.jpg', '/images/wow/class_rogue.jpg']
		},
		{
			name: "Tippindeg's",
			ingredients: ['TBD'],
			images: ['/images/wow/race_dwarf_male.jpg', '/images/wow/class_priest.jpg']
		}
	],
	tags: [
		Tags.BaseAlcohol.RUM,
		Tags.FlavorProfile.CITRUS,
		Tags.FlavorProfile.HERBAL,
		Tags.FlavorProfile.BUBBLY,
		Tags.AlcoholLevel.LOW,
		Tags.Technique.BUILT,
		Tags.Style.HIGHBALL,
		Tags.Origin.ORIGINAL,
		Tags.ServedIn.HIGHBALL_GLASS
	]
};

export default MOONWELL;
