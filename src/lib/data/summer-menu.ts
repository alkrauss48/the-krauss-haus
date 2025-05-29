import type { Cocktail, Category } from '$lib/types/cocktails';
import { sectionColors } from '$lib/types/colors';

export const featuredDrink: Cocktail = {
	title: "Pimm's Cup",
	description: "Pimm's #1, sparkling lemonade, cucumber, orange, strawberry, mint.",
	imagePath: '/images/cocktails/summer/pimms-cup.png',
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
				ingredients: ['3oz Prosecco', '2oz Aperol', '1oz Soda water', 'Garnish: Orange wedge']
			},
			{
				title: 'Margarita',
				description: 'Blanco tequila, cointreau, lime, agave nectar.',
				imagePath: '/images/cocktails/summer/margarita.png',
				ingredients: [
					'2oz Blanco tequila',
					'.75oz Cointreau',
					'.75oz Lime',
					'.25oz Agave nectar',
					'Garnish: Lime wedge'
				],
				variations: 'Spicy'
			},
			{
				title: 'Moonwell',
				description: 'Light rum, elderflower liqueur, grenadine, sage bitters, lemon, soda water.',
				imagePath: '/images/cocktails/summer/moonwell.png',
				ingredients: [
					'1oz Light rum',
					'1oz Elderflower liqueur',
					'.5oz Grenadine',
					'1/4 lemon, juiced',
					'1 dash Sage bitters',
					'4oz Soda water',
					'Garnish: Lemon wheel'
				],
				variations: "Valden's, Qweenanne's, Pounders', Troker's"
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
				ingredients: ['2oz Probitas', '.75oz Lime', '.5oz Rich simple syrup', 'Garnish: Lime wedge']
			},
			{
				title: 'Negroni',
				description: 'Gin, campari, sweet vermouth, orange twist.',
				imagePath: '/images/cocktails/summer/negroni.png',
				ingredients: ['1oz Gin', '1oz Campari', '1oz Sweet vermouth', 'Garnish: Orange twist'],
				variations: 'Mezcal'
			},
			{
				title: 'Mint Julep',
				description: 'Bourbon, simple syrup, mint.',
				imagePath: '/images/cocktails/summer/mint-julep.png',
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
				ingredients: ['2oz Cachaça', '6 Lime wedges', '1 tbsp Sugar']
			},
			{
				title: 'Jack Rose',
				description: 'Calvados, applejack, grenadine, lemon.',
				imagePath: '/images/cocktails/summer/jack-rose.png',
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
				description: 'Gin, lime, simple syrup, soda water.',
				imagePath: '/images/cocktails/summer/loggy-cab.png',
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
				ingredients: ['.75oz Bourbon', '.75oz Amaro Nonino', '.75oz Aperol', '.75oz Lemon']
			}
		]
	}
];
