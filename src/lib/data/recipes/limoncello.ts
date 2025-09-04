import type { Recipe } from '$lib/types/recipes';

const LIMONCELLO: Recipe = {
	name: 'Limoncello',
	slug: 'limoncello',
	description: 'A classic Italian liqueur made from lemons',
	ingredients: [
		'Peels from 5 lemons, unwaxed (no white pithe)',
		'1C Everclear (95% ABV grain liquor)',
		'1.5C Water',
		'200g Sugar'
	],
	instructions:
		'Infuse everclear and lemon peels for 2 weeks or more (lower end if more white pithe). Heat water and sugar to make syrup. Strain lemon peels out, add syrup. Let rest for at least 5 days in freezer.',
	notes: 'Makes ~24oz at 31% ABV. Takes a few weeks to make. Always serve chilled.'
};

export default LIMONCELLO;
