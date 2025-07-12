import type { Recipe } from '$lib/types/recipes';

export const syrups: Recipe[] = [
	{
		name: 'Rich Simple Syrup',
		description: 'A 2:1 ratio of sugar to water, creating a more concentrated sweetness',
		ingredients: ['2 parts (by weight) granulated sugar', '1 part (by weight) water'],
		instructions:
			'Combine sugar and water in a saucepan. Heat over medium heat, stirring occasionally, until sugar dissolves completely. Do not boil. Let cool and store in an airtight container in the refrigerator.',
		notes:
			'The 2:1 ratio makes it more concentrated than regular simple syrup, so you can use less in cocktails. This syrup will keep for up to 6 months in the refrigerator. '
	},
	{
		name: 'Demerara Syrup',
		description: 'Made with demerara sugar for a rich, molasses-like sweetness',
		ingredients: ['2 parts (by weight) demerara sugar', '1 part (by weight) water'],
		instructions:
			'Combine demerara sugar and water in a saucepan. Heat over medium heat, stirring occasionally, until sugar dissolves completely. Do not boil. Let cool and store in an airtight container in the refrigerator.',
		notes:
			'Demerara sugar adds a rich, caramel-like flavor that works beautifully alongside aged spirits. Turbinado sugar can be substituted for demerara. This syrup will keep for up to 6 months in the refrigerator. '
	},
	{
		name: 'Grenadine',
		description: 'A pomegranate-based syrup with a deep red color and tart sweetness',
		ingredients: [
			'1 cup pomegranate juice',
			'1 cup granulated sugar',
			'1 oz pomegranate molasses',
			'1/2 tsp orange blossom water'
		],
		instructions:
			'Combine pomegranate juice and sugar in a saucepan. Heat over medium heat, stirring occasionally, until sugar dissolves. Remove from heat, add pomegranate molasses and orange blossom water.',
		notes: 'Used in the Moonwell, Jack Rose, and Singapore Sling. Recipe makes about 1.5 cups.'
	},
	{
		name: 'Cinnamon Syrup',
		description: 'Infused with cinnamon for a warm, spicy sweetness',
		ingredients: ['1.5 cups granulated sugar', '1 cup water', '4 cinnamon sticks'],
		instructions:
			'Combine sugar, water, and cinnamon sticks in a saucepan. Heat over medium heat, stirring occasionally, until sugar dissolves. Simmer for 5 minutes to infuse the cinnamon flavor. Remove from heat, pour everything into a mason jar. Let cool for 12 hours. Remove cinnamon sticks.',
		notes: 'Used in the Jet Pilot and the Merry Mule. Recipe makes about 1.75 cups.'
	},
	{
		name: 'Honey Syrup',
		description: 'A blend of honey and water for a floral sweetness',
		ingredients: ['1 part (by volume) honey', '1 part (by volume) water'],
		instructions:
			'Combine honey and hot water in a jar or container. Stir until honey dissolves completely. Let cool and store in an airtight container in the refrigerator.',
		notes:
			'Use raw honey for the best flavor. Used in the Three Dots & a Dash and the Port Light. Recipe makes 1 cup.'
	},
	{
		name: 'Honey-Ginger Syrup',
		description: 'Honey syrup infused with fresh ginger for a spicy kick',
		ingredients: [
			'1/2 cup honey',
			'1/2 cup hot water',
			'4" x 1" x 1" stick of peeled, sliced ginger'
		],
		instructions:
			'Combine honey, water, and ginger in a saucepan. Heat over medium heat, stirring occasionally, until honey dissolves. Simmer for 5 minutes to infuse the ginger flavor. Remove from heat, pour everything into a mason jar. Let cool for 12 hours. Remove ginger.',
		notes: 'Used in the Penicillin.'
	},
	{
		name: 'Falernum',
		description: 'A spiced syrup with notes of ginger, clove, and lime',
		ingredients: [
			'8 oz overproof rum (like Planteray OFTD)',
			'12 limes zested (not juiced)',
			'24 cloves',
			'30g ginger, chopped',
			'1 tsp grated nutmeg',
			'1 vanilla bean, split and scraped. Include seeds and pot',
			'16 oz semi-rich (1.5:1) simple syrup made with oatmilk',
			'1 oz amaretto'
		],
		instructions:
			'Steep all ingredients in rum for 24 hours, besides simple syrup and amaretto. Strain to remove solids. Add simple syrup and amaretto.',
		notes:
			"Used in the Three Dots & a Dash, the Jet Pilot, the Cobra's Fang, the Saturn, and the Iron Ranger. Because of its alcohol content, this will keep for up to 2 years refrigerated. Recipe makes about 2.75-3 cups."
	},
	{
		name: 'Fassionola',
		description: 'A tropical fruit syrup with a complex blend of flavors',
		ingredients: [
			'1 lb strawberries, cut in small pieces (~415g)',
			'1 pint blueberries, lightly muddled (~318g)',
			'2/3 pineapple, cut in small pieces (~387g)',
			'2 lemons, peel only',
			'~2.5 lb sugar',
			'~10 fl oz passion fruit puree'
		],
		instructions:
			'In large bowl, add strawberries, blueberries, pineapple, and lemon peel. Add equal amount sugar (by weight) compared to the amount of fruit. Stir and cover with plastic wrap. Stir every few hours (it will be very dry at first, but will start to become more liquidy) for 24 hours. Strain (Should get ~40oz). Add 1/4 of the total strained volume of passion fruit puree (i.e. ~10oz).',
		notes: "Used in the Hurricane and Cobra's Fang. Recipe makes about 6 cups."
	},
	{
		name: 'Passionfruit Syrup',
		description: 'Made from passionfruit for a tart, tropical sweetness',
		ingredients: ['1 part (by weight) passionfruit puree', '2 parts (by volume) rich simple syrup'],
		instructions: 'Combine passionfruit puree and rich simple syrup (see recipe).',
		notes: 'Used in the Saturn and the Port Light.'
	},
	{
		name: 'Orgeat',
		description: 'An almond-flavored syrup with notes of rose and orange blossom water',
		ingredients: [
			'2 cups unsweetened oat milk',
			'3 cups granulated sugar',
			'1/2 tsp rose water',
			'1 tsp orange blossom water',
			'1.5 oz amaretto'
		],
		instructions:
			'Combine oatmilk and sugar in a saucepan. Heat over medium heat, stirring occasionally, until sugar dissolves. Remove from heat, and add remaining ingredients.',
		notes: 'Used in the Mai Tai and the Saturn. Recipe makes about 3.5 cups.'
	},
	{
		name: 'Caramel Syrup',
		description: 'A thick, non-fat caramel syrup',
		ingredients: ['1/2 cup granulated sugar', '1/2 cup water', '1/2 tsp vanilla extract'],
		instructions:
			'Combine 1/4 cup water and all of the sugar in a saucepan. Cook over medium heat until sugar is dissolved. Cover, and continue boiling until sugar turns amber (about 10-15 minutes). Remove from heat cool slightly, and CAREFULLY add the remaining sugar. Stir until dissolved. Add vanilla extract.',
		notes:
			'Used to make caramel vodka, which is used in the Caramel Apple Spice. Recipe makes about 1/2 cup.'
	},
	{
		name: 'Tom & Jerry Batter',
		description: 'A batter made with egg and sugar for a rich, creamy flavor',
		ingredients: ['6 eggs', '1lb powdered sugar'],
		instructions:
			'Separate eggs. Beat egg yolks, gradually adding sugar, until thick & creamy. Beat egg whites and until stiff peaks form. Combine yolks and beat until light and creamy.',
		notes:
			"Used in the Tom & Jerry. Created by Jack Krauss, Aaron's grandfather, who passed in 2011. You can freeze the batter and scoop it straight from the freezer."
	}
];
