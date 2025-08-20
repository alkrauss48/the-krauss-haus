import type { Recipe } from '$lib/types/recipes';
import { Tags } from '$lib/data/all-tags';

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
		'Infuse everclear and lemon peels for 2-3 weeks (lower end if more white pithe). Heat water and sugar to make syrup. Strain lemon peels out, add syrup. Let rest for 2 weeks in freezer or fridge.',
	notes: 'Makes ~24oz at 31% ABV. Takes about a month to make. Always serve chilled.',
	tag: Tags.Infusions.LIMONCELLO
};

export default LIMONCELLO;
