import type { Cocktail, Category } from '$lib/types/cocktails';
import { sectionColors } from '$lib/types/colors';

export const featuredDrink: Cocktail = {
	title: 'Glühwein',
	description: 'Red wine, brandy, orange, lemon, cinnamon, clove, brown sugar.',
	imagePath: '/images/cocktails/winter/gluhwein.png',
	ingredients: [
		'750ml Cabernet Sauvignon',
		'1/2 orange, zested and juiced',
		'1/2 lemon, zested and juiced',
		'2 Cinnamon sticks',
		'6 Cloves',
		'1/4C Brown sugar',
		'2oz Brandy'
	]
};

export const categories: Category[] = [
	{
		title: "Mommy's Drinks",
		bgColors: sectionColors.mommy,
		cocktails: [
			{
				title: 'Hot Toddy',
				description: 'Bourbon, benedictine, spiced tea, honey, lemon, cinnamon.',
				imagePath: '/images/cocktails/winter/hot-toddy.png',
				ingredients: [
					'1.5oz Bourbon',
					'.5oz Benedictine',
					'5oz Spiced tea',
					'Honey to taste',
					'1/4 Lemon, juiced',
					'Garnish: Cinnamon stick, lemon wheel, and maraschino cherry'
				]
			},
			{
				title: 'Merry Mule',
				description: 'Vodka, cinnamon syrup, lime, ginger beer.',
				imagePath: '/images/cocktails/winter/merry-mule.png',
				ingredients: [
					'2oz vodka',
					'.5 oz Cinnamon syrup',
					'1/2 Lime',
					'4oz Ginger beer',
					'Garnish: Cinnamon stick and apple slices'
				]
			},
			{
				title: 'Caramel Apple Spice',
				description:
					'Applejack, goldschläger, caramel vodka, apple strudel liqueur, calvados, apple cider',
				imagePath: '/images/cocktails/winter/caramel-apple-spice.png',
				ingredients: [
					'.5oz Applejack',
					'.5oz Goldschläger',
					'.5oz Caramel vodka',
					'.5oz Apple strudel liqueur',
					'Splash of Calvados',
					'5oz Apple cider',
					'Garnish: Cinnamon stick and maraschino cherry'
				]
			}
		]
	},
	{
		title: "Daddy's Drinks",
		bgColors: sectionColors.daddy,
		cocktails: [
			{
				title: 'Sazerac',
				description:
					"Rye whiskey, cognac, absinthe, peychaud's bitters, demerara syrup, lemon twist.",
				imagePath: '/images/cocktails/winter/sazerac.png',
				ingredients: [
					'1.5oz Rye whiskey',
					'.5oz Cognac',
					'Absinthe rinse',
					"4 dashes Peychaud's bitters",
					'1 dash Angostura bitters',
					'.25oz Demerara syrup',
					'Garnish: Lemon twist'
				]
			},
			{
				title: 'Martini',
				description: 'Gin, dry vermouth, orange bitters, olives.',
				imagePath: '/images/cocktails/winter/martini.png',
				ingredients: ['2oz Gin', '1oz Dry vermouth', '1 dash Orange bitters', 'Garnish: Olive']
			},
			{
				title: 'Old Fashioned',
				description: 'Bourbon, demerara syrup, black walnut bitters, orange twist.',
				imagePath: '/images/cocktails/winter/old-fashioned.png',
				ingredients: [
					'2oz Bourbon',
					'.25oz Demerara syrup',
					'2 dashes Black walnut bitters',
					'Garnish: Orange twist'
				],
				variations: 'Smoked, Muddled, Rum'
			}
		]
	},
	{
		title: "Cyrus' Drinks",
		bgColors: sectionColors.cyrus,
		cocktails: [
			{
				title: 'Penicillin',
				description: 'Blended scotch, single malt scotch, honey-ginger syrup, lemon',
				imagePath: '/images/cocktails/winter/penicillin.png',
				ingredients: [
					'2oz Blended scotch',
					'.25oz Laphroaig',
					'.75oz Honey-ginger syrup',
					'.75oz Lemon',
					'Garnish: Candied ginger'
				]
			},
			{
				title: 'Tom and Jerry',
				description: 'Bourbon, dark rum, egg, sugar, nutmeg.',
				imagePath: '/images/cocktails/winter/tom-and-jerry.png',
				ingredients: [
					'.75oz Bourbon',
					'.75oz Dark rum',
					'2 tbsp egg/sugar batter',
					'5oz Hot water',
					'Garnish: Nutmeg'
				]
			},
			{
				title: 'Oaxaca Old Fashioned',
				description:
					'Reposado tequila, mezcal, agave nectar, xocolatl bitters, smoked orange twist.',
				imagePath: '/images/cocktails/winter/oaxaca-old-fashioned.png',
				ingredients: [
					'1.5oz Reposado tequila',
					'.5 oz Mezcal',
					'.25 oz Agave nector',
					'2 dashes Xocolatl bitters',
					'Garnish: Smoked orange twist'
				]
			}
		]
	},
	{
		title: "Lucas' Drinks",
		bgColors: sectionColors.lucas,
		cocktails: [
			{
				title: 'Manhattan',
				description: 'Rye whiskey, sweet vermouth, black walnut bitters, maraschino cherry.',
				imagePath: '/images/cocktails/winter/manhattan.png',
				ingredients: [
					'2oz Rye whiskey',
					'1oz Sweet vermouth',
					'2 dashes Black walnut bitters',
					'Garnish: Maraschino cherry'
				],
				variations: 'Black'
			},
			{
				title: 'Amaretto Sour',
				description: 'Amaretto, bourbon, lemon, simple syrup, egg white.',
				imagePath: '/images/cocktails/winter/amaretto-sour.png',
				ingredients: [
					'1.5oz Amaretto',
					'.75oz Bourbon',
					'.75oz Lemon',
					'.25oz Rich simple syrup',
					'1 egg white',
					'Garnish: Maraschino cherry'
				]
			},
			{
				title: 'Espresso Martini',
				description: 'Cognac, coffee liqueur, espresso.',
				imagePath: '/images/cocktails/winter/espresso-martini.png',
				ingredients: [
					'1oz Cognac',
					'2oz Mr. Black Coffee Liqueur',
					'1oz Cold brew concentrate',
					'Garnish: 3 coffee beans'
				],
				variations: 'Peppermint, Hazelnut'
			}
		]
	}
];
