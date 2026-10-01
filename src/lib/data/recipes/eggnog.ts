import type { Recipe } from '$lib/types/recipes';

const EGGNOG: Recipe = {
	name: 'Eggnog',
	slug: 'eggnog',
	description: 'A rich, boozy aged eggnog with rum, cognac, and bourbon.',
	ingredients: [
		'12 large egg yolks',
		'1lb granulated sugar',
		'1 teaspoon freshly grated nutmeg',
		'1 pint half-and-half',
		'1 pint whole milk',
		'1 pint heavy cream',
		'1 cup Appleton Estate Signature (rum)',
		'1 cup St. Remy VSOP (cognac)',
		'1 cup Evan Williams BiB (bourbon)',
		'1/4 teaspoon kosher salt'
	],
	instructions:
		'Beat the egg yolks with the sugar and nutmeg in a large mixing bowl until the mixture lightens in color and falls off the whisk in a solid ribbon. Combine everything else in a second bowl or pitcher, then slowly beat it into the egg mixture. Store in jars in the fridge for a minimum of 2 weeks; longer is even better.',
	notes:
		"Serve in mugs or cups topped with a little extra nutmeg grated on top. This is originally Alton Brown's recipe, but with specific liquor bottles called out."
};

export default EGGNOG;
