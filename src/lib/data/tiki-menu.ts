import type { Cocktail, Category } from '$lib/types/cocktails';
import { sectionColors } from '$lib/types/colors';

export const categories: Category[] = [
	{
		title: 'Bright and Tropical',
		bgColors: {
			primary: '#dcfce7',
			secondary: '#f0fdf4',
			tertiary: '#ecfdf5'
		},
		cocktails: [
			{
				title: 'Painkiller',
				subtitle: 'A creamy, coconut paradise in a glass',
				description: 'Demerara rum, pineapple, cream of coconut, orange, nutmeg.',
				imagePath: '/images/cocktails/tiki/painkiller.png',
				ingredients: [
					'2oz Hamilton 86 (Demerara rum)',
					'4oz Pineapple juice',
					'1oz Orange juice',
					'1oz Cream of coconut',
					'Garnish: Freshly grated nutmeg'
				]
			},
			{
				title: 'Jungle Bird',
				subtitle: 'A perfect balance of bitter and sweet',
				description: 'Dark rum, campari, pineapple, lime, demarara syrup.',
				imagePath: '/images/cocktails/tiki/jungle-bird.png',
				ingredients: [
					'1.5oz Appleton Estate Signature (Jamaican rum)',
					'.75oz Campari',
					'1.5oz Pineapple juice',
					'.5oz Lime',
					'.5oz Demerara syrup',
					'Garnish: Pineapple wedge'
				]
			},
			{
				title: 'Ancient Mariner',
				subtitle: 'A complex blend of spice and citrus',
				description: 'Blended rum, demerara rum, allspice dram, lime, grapefruit, simple syrup.',
				imagePath: '/images/cocktails/tiki/ancient-mariner.png',
				ingredients: [
					'1oz Probitas (Blended light rum)',
					'1oz Hamilton 86 (Demerara rum)',
					'.25oz Allspice dram',
					'.75oz Lime',
					'.5oz Simple syrup',
					'.5oz Grapefruit',
					'Garnish: Mint sprig and lime wedge'
				]
			},
			{
				title: 'Hurricane',
				subtitle: 'A powerful blend of rums with a tropical twist',
				description: 'Jamaican rum, blended rum, fassionola, lemon.',
				imagePath: '/images/cocktails/tiki/hurricane.png',
				ingredients: [
					'1oz Coruba (Jamaican rum)',
					'.5oz Appleton Estate Signature (Jamaican rum)',
					'.5oz Probitas (Blended light rum)',
					'1oz Fassionola',
					'.75oz Lemon',
					'Garnish: Lime wheel'
				]
			}
		]
	},
	{
		title: 'Bold and Boozy',
		bgColors: {
			primary: '#fae8ff',
			secondary: '#fce7f3',
			tertiary: '#fdf2f8'
		},
		cocktails: [
			{
				title: 'Mai Tai',
				subtitle: 'The king of tiki drinks, complex and balanced',
				description:
					'Jamaican rum, blended rum, cachaca, orange curaçao, orgeat, lime, demerara syrup.',
				imagePath: '/images/cocktails/tiki/mai-tai.png',
				ingredients: [
					'1oz Smith and Cross (Overproof Jamaican rum)',
					'.5oz Leblon (Cachaca)',
					'.5oz Planteray OFTD (Overproof blended rum)',
					'.5oz Pierre Ferrand Dry Curaçao',
					'.5oz Orgeat',
					'1oz Lime',
					'.25oz Demerara syrup',
					'Garnish: Mint sprig and lime shell'
				]
			},
			{
				title: 'Three Dots and a Dash',
				subtitle: 'A celebration of rum and spice',
				description:
					'Aged rhum agricole, blended rum,demerara rum, honey, orange, lime, falernum, allspice dram, angostura bitters.',
				imagePath: '/images/cocktails/tiki/three-dots-and-a-dash.png',
				ingredients: [
					'1oz Clement Barrel Select (aged Rhum Agricole)',
					'.5oz Planteray OFTD (Overproof blended rum)',
					'.5oz Hamilton 86 (Demerara rum)',
					'.5oz Honey syrup',
					'.5oz Orange juice',
					'.5oz Lime juice',
					'.25oz Falernum',
					'.25oz Allspice dram',
					'1 dash Angostura bitters',
					'Garnish: Three maraschino cherries and pineapple frond'
				]
			},
			{
				title: 'Jet Pilot',
				subtitle: 'A bold, spicy journey through the tropics',
				description:
					'Jamaican rum, overproof demerara rum, falernum, cinnamon syrup, lime, grapefruit, herbstura.',
				imagePath: '/images/cocktails/tiki/jet-pilot.png',
				ingredients: [
					'.5oz Smith and Cross (Overproof Jamaican rum)',
					'.5oz Coruba (Jamaican rum)',
					'.75oz Appleton Estate Signature (Jamaican rum)',
					'.75oz Hamilton 151 (Overproof Demerara rum)',
					'.5oz Falernum',
					'.5oz Cinnamon syrup',
					'.5oz Lime',
					'.5oz Grapefruit',
					'1 dash Herbstura',
					'Garnish: Maraschino cherry'
				]
			},
			{
				title: "Cobra's Fang",
				subtitle: 'A dangerously smooth blend of rum and spice',
				description: 'Overproof demerara rum, falernum, fassionola, lime, orange, herbstura.',
				imagePath: '/images/cocktails/tiki/cobras-fang.png',
				ingredients: [
					'1.5oz Hamilton 151 (Overproof Demerara rum)',
					'.25oz Falernum',
					'.5oz Fassionola',
					'.5oz Lime',
					'.5oz Orange',
					'1 dash Herbstura',
					'Garnish: Mint sprig and cinnamon stick'
				]
			}
		]
	},
	{
		title: 'Not Just Rum',
		bgColors: {
			primary: '#fff7ed',
			secondary: '#ffedd5',
			tertiary: '#fef3c7'
		},
		cocktails: [
			{
				title: 'Singapore Sling',
				subtitle: 'A sophisticated gin-based tiki classic',
				description:
					'Gin, cherry heering, benedictine, cointreau, grenadine, pineapple, lime, angostura bitters.',
				imagePath: '/images/cocktails/tiki/singapore-sling.png',
				ingredients: [
					'1.5oz Gin',
					'.5oz Cherry Heering',
					'.5oz Benedictine',
					'.5oz Cointreau',
					'.5oz Grenadine',
					'3oz Pineapple juice',
					'.75oz Lime juice',
					'3 dashes Angostura bitters',
					'Garnish: Pineapple wedge and maraschino cherry'
				]
			},
			{
				title: 'Saturn',
				subtitle: 'A gin-based tiki classic, bright and tropical',
				description: 'Gin, passion fruit, lemon, orgeat, falernum.',
				imagePath: '/images/cocktails/tiki/saturn.png',
				ingredients: [
					'1.5oz Gin',
					'.5oz Passion fruit syrup',
					'.5oz Lemon',
					'.25oz Orgeat',
					'.25oz Falernum',
					'Garnish: Lemon peel and maraschino cherry'
				]
			},
			{
				title: 'Port Light',
				subtitle: 'A bourbon-based tropical delight',
				description: 'Bourbon, honey, lemon, passion fruit.',
				imagePath: '/images/cocktails/tiki/port-light.png',
				ingredients: [
					'2oz Bourbon',
					'.5oz Honey syrup',
					'.75oz Lemon',
					'.5oz Passion fruit syrup',
					'(Optional) Egg white',
					'Garnish: Mint spring, pineapple square, and maraschino cherry'
				]
			},
			{
				title: 'Iron Ranger',
				subtitle: 'A bourbon tiki with a spicy kick',
				description: 'Bourbon, falernum, demerara syrup, lemon, pineapple.',
				imagePath: '/images/cocktails/tiki/iron-ranger.png',
				ingredients: [
					'2oz Bourbon',
					'.5oz Falernum',
					'.5oz Demerara syrup',
					'.75oz Lemon',
					'1oz Pineapple juice',
					'Garnish: Mint sprig and freshly grated cinnamon'
				]
			}
		]
	}
];
