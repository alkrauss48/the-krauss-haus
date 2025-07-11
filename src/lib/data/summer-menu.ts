import type { Cocktail, Category } from '$lib/types/cocktails';
import { CocktailMethod } from '$lib/types/cocktails';
import { sectionColors } from '$lib/types/colors';

export const featuredDrink: Cocktail = {
	title: "Pimm's Cup",
	description: "Pimm's #1, sparkling lemonade, cucumber, orange, strawberry, mint.",
	imagePath: '/images/cocktails/summer/pimms-cup.png',
	method: CocktailMethod.Built,
	ingredients: [
		"2oz Pimm's #1",
		'4oz sparkling lemonade',
		'Garnish: orange, mint sprig, strawberry, cucumber'
	]
};

export const categories: Category[] = [
	{
		title: "Mommy's Drinks",
		bgColors: sectionColors.mommy,
		cocktails: [
			{
				title: 'Spritz',
				description: 'Prosecco, aperol, soda water, orange wedge.',
				imagePath: '/images/cocktails/summer/spritz.png',
				method: CocktailMethod.Built,
				ingredients: ['3oz Prosecco', '2oz Aperol', '1oz Soda water', 'Garnish: Orange wedge']
			},
			{
				title: 'Margarita',
				description: 'Blanco tequila, cointreau, lime, agave nectar.',
				imagePath: '/images/cocktails/summer/margarita.png',
				method: CocktailMethod.Shaken,
				ingredients: [
					'2oz Blanco tequila',
					'.75oz Cointreau',
					'.75oz Lime',
					'.25oz Agave nectar',
					'Garnish: Lime wedge'
				],
				variations: [
					{
						name: 'Spicy',
						description: 'Swap .5oz of tequila with jalepeño infused tequila.',
						images: []
					}
				]
			},
			{
				title: 'Moonwell',
				subtitle: 'A Krauss Family original',
				description:
					'Light rum, elderflower liqueur, grenadine, celery bitters, lemon, soda water.',
				imagePath: '/images/cocktails/summer/moonwell.png',
				method: CocktailMethod.Built,
				ingredients: [
					'1oz Light rum',
					'1oz Elderflower liqueur',
					'.5oz Grenadine',
					'1/4 lemon, juiced',
					'1 dash celery bitters',
					'4oz Soda water',
					'Garnish: Lemon wheel'
				],
				variations: [
					{
						name: "Valden's",
						description: 'Sub beer for soda water.',
						images: ['/images/wow/race_nightelf_male.jpg', '/images/wow/class_hunter.jpg']
					},
					{
						name: "Qweenanne's",
						description: 'Sub tonic water for soda water.',
						images: ['/images/wow/race_human_female.jpg', '/images/wow/class_warlock.jpg']
					},
					{
						name: "Pounders'",
						description: 'Sub gin for rum.',
						images: ['/images/wow/race_nightelf_male.jpg', '/images/wow/class_hunter.jpg']
					},
					{
						name: "Troker's",
						description: 'Sub ginger beer for soda water.',
						images: ['/images/wow/race_nightelf_male.jpg', '/images/wow/class_rogue.jpg']
					},
					{
						name: "Tippindeg's",
						description: 'TBD',
						images: ['/images/wow/race_dwarf_male.jpg', '/images/wow/class_priest.jpg']
					}
				]
			}
		]
	},
	{
		title: "Daddy's Drinks",
		bgColors: sectionColors.daddy,
		cocktails: [
			{
				title: 'Daiquiri',
				description: 'Light rum, lime, simple syrup.',
				imagePath: '/images/cocktails/summer/daiquiri.png',
				method: CocktailMethod.Shaken,
				ingredients: ['2oz Probitas', '.75oz Lime', '.5oz Rich simple syrup', 'Garnish: Lime wedge']
			},
			{
				title: 'Negroni',
				description: 'Gin, campari, sweet vermouth, orange twist.',
				imagePath: '/images/cocktails/summer/negroni.png',
				method: CocktailMethod.Stirred,
				ingredients: ['1oz Gin', '1oz Campari', '1oz Sweet vermouth', 'Garnish: Orange twist'],
				variations: [
					{
						name: 'Mezcal',
						description: 'Sub mezcal for gin.',
						images: []
					}
				]
			},
			{
				title: 'Mint Julep',
				description: 'Bourbon, simple syrup, mint.',
				imagePath: '/images/cocktails/summer/mint-julep.png',
				method: CocktailMethod.Built,
				ingredients: [
					'2oz Bourbon',
					'.5oz Rich simple syrup',
					'6-10 leaves Mint',
					'Garnish: Mint sprig'
				]
			}
		]
	},
	{
		title: "Cyrus' Drinks",
		bgColors: sectionColors.cyrus,
		cocktails: [
			{
				title: 'Caipirinha',
				description: 'Cachaça, lime, sugar.',
				imagePath: '/images/cocktails/summer/caipirinha.png',
				method: CocktailMethod.Built,
				ingredients: ['2oz Cachaça', '6 Lime wedges', '1 tbsp Sugar']
			},
			{
				title: 'Jack Rose',
				description: 'Calvados, applejack, grenadine, lemon.',
				imagePath: '/images/cocktails/summer/jack-rose.png',
				method: CocktailMethod.Shaken,
				ingredients: [
					'1oz Calvados',
					'1oz Applejack',
					'.75oz Grenadine',
					'.75oz Lemon',
					'Garnish: Lemon twist'
				]
			},
			{
				title: 'Loggy Cab',
				subtitle: 'A Krauss Family original',
				description: 'Gin, lime, simple syrup, soda water.',
				imagePath: '/images/cocktails/summer/loggy-cab.png',
				method: CocktailMethod.Built,
				ingredients: [
					'2oz Gin',
					'.75oz Lime',
					'.5oz Rich simple syrup',
					'4oz Soda water',
					'Garnish: Lime wheel'
				]
			}
		]
	},
	{
		title: "Lucas' Drinks",
		bgColors: sectionColors.lucas,
		cocktails: [
			{
				title: 'Mojito',
				description: 'Light rum, lime, sugar, mint, angostura bitters.',
				imagePath: '/images/cocktails/summer/mojito.png',
				method: CocktailMethod.Built,
				ingredients: [
					'2oz Planteray 3 Star',
					'.75oz Lime',
					'1 tbsp Sugar',
					'6-10 leaves Mint',
					'Garnish: Mint sprig & dash of Angostura bitters'
				]
			},
			{
				title: 'French 75',
				description: 'Prosecco, gin, lemon, simple syrup.',
				imagePath: '/images/cocktails/summer/french-75.png',
				method: CocktailMethod.Shaken,
				ingredients: [
					'1oz Gin',
					'.5oz Lemon',
					'.5oz rich simple syrup',
					'3oz Prosecco',
					'Garnish: Lemon twist'
				]
			},
			{
				title: 'Paper Plane',
				description: 'Bourbon, amaro nonino, aperol, lemon.',
				imagePath: '/images/cocktails/summer/paper-plane.png',
				method: CocktailMethod.Shaken,
				ingredients: ['.75oz Bourbon', '.75oz Amaro Nonino', '.75oz Aperol', '.75oz Lemon']
			}
		]
	}
];
