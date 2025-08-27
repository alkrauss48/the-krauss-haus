import type { Recipe } from '$lib/types/recipes';

const FASSIONOLA: Recipe = {
	name: 'Fassionola',
	slug: 'fassionola',
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
	notes: 'Recipe makes about 6 cups.'
};

export default FASSIONOLA;
